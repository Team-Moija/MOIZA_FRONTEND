import { customAxios } from "../customAxios";

export const authorizeAccess = async (accessToken: String) => {
  try {
    const response = await customAxios.post(
      "/auth",
      {
        token: accessToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { accessToken: newAccessToken, refreshToken } = response.data;

    if (newAccessToken && refreshToken) {
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", refreshToken);
    }

    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      window.location.replace("/community");
    }
    return true;
  } catch (error) {
    alert(
      "dsm.hs.kr, gsm.hs.kr, dgws.hs.kr, bssm.hs.kr 이메일만 로그인 할 수 있습니다. 다시 시도 해주세요."
    );
    console.error("액세스 인증 실패", error);
    window.location.replace("/login");
    return false;
  }
};
