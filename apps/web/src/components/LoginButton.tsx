import { Icon } from "@repo/ui/src";
import { customAxios } from "../utils/api/customAxios";

export const LoginButton = () => {
  const onAuthClick = async () => {
    try {
      const res = await customAxios.get("/auth");
      window.location.href = res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="flex bg-white rounded-lg justify-center items-center px-[50px] py-[14px] gap-[20px]"
      style={{
        boxShadow: "0px 2px 12px rgba(171, 190, 209, 0.25)",
      }}
      onClick={onAuthClick}
    >
      <Icon.Google />
      <div className="text-center text-p2">Google 계정으로 로그인</div>
    </button>
  );
};
