"use client";
// 声明是客户端组件

import Link from "next/link"; //引入Link组件
import { Button } from "antd"; //引入antd中的Button组件
// import Router from "next/router"; // 新引入进来的
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const goToB = () => {
    router.push("/test/b");
  };
  // const goToB = () => {
  //   Router.push("/test/b");
  // };

  return (
    <>
      <Link href="/a">
        <Button>跳转到A</Button>
      </Link>
      <Button onClick={goToB}>跳转到B</Button>
    </>
  );
};

export default Nav;
