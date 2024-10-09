import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL:process.env.NEXT_PUBLIC_BASE_URL,
});

customAxios.interceptors.request.use((data) => {
  const token = localStorage.getItem("accessToken");
  const config = data;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

customAxios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status !== 401) {
      return Promise.reject(err);
    }
    try {
      localStorage.removeItem("accessToken");
      const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
      const refreshToken = localStorage.getItem("refreshToken");
      const { data } = await axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken,
      });
      localStorage.setItem("accessToken", data.accessToken);
      window.location.reload();
      return undefined;
    } catch (refreshErr) {
      alert("토큰이 만료되거나 존재하지 않습니다. 다시 로그인 해주세요.");
      localStorage.clear();
      window.location.replace("/login");
      return Promise.reject(refreshErr);
    }
  },
);