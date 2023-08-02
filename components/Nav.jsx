"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav
      className="flex-between w-screen p-10 mb-8 pt-5"
      style={{ background: "transparent" }}
    >
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />

        <p className="logo_text">MyFinance</p>
      </Link>
      {isUserLoggedIn ? (
        <div className="flex gap-3 md:gap-5">
          <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
          </button>

          <Image src="/images/logo.svg" width={40} height={40} alt="user-image"/>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
