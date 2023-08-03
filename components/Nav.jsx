"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  const router = useRouter();
  const pathName = usePathname()

  function handleLogOut() {
    try {
      if(pathName === "/user-page")
      router.push("/")
       signOut()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav
      className="flex-between w-screen p-10 mb-8 pt-5"
      style={{ background: "transparent" }}
    >
      <div className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />

        <p className="logo_text">MyFinance</p>
      </div>

      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/">
            {router.push("/")}
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="outline_btn"
            >
              Sign Out
            </button>
          </Link>

          <Image
            src={session?.user.image}
            width={40}
            height={40}
            alt="user-image"
            className="rounded-full"
          />
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
