"use client";

import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

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
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>

        <p className="logo_text">MyFinance</p>
      </div>

      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/">
            <button
              type="button"
              onClick={() => {
                signOut({redirect:false});
              }}
              className="outline_btn"
            >
              Sair
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
