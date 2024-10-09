import Link from "next/link";
import { Icon } from "@repo/ui/src";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { customAxios } from "../utils/api/customAxios";

type User = {
  profile?: string;
};

const navItems = [
  { name: "커뮤니티", link: "#" },
  { name: "팀원모집", link: "#" },
  { name: "학교탐방", link: "#" },
];

const Header = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userProfile = async () => {
      try {
        if (localStorage.getItem("accessToken")) {
          const { data } = await customAxios.get("/user");
          setUser(data);
        }
      } catch (error) {
        console.log("사용자 정보 불러오기 실패", error);
      }
    };

    userProfile();
  }, []);
  return (
    <header className="w-[100vw] fixed justify-center bg-white h-[80px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02)]">
      <div className="mx-[252px] h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Icon.Logo />
        </div>
        <nav className="space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-secondary-400 hover:text-primary-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <SearchBar />
          <Icon.BellOn />
          {user ? (
            <img
              src={user?.profile}
              className="rounded-full w-[42px] h-[42px] flex-shrink-0"
            />
          ) : (
            <div className="rounded-full w-[42px] h-[42px] flex-shrink-0"></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
