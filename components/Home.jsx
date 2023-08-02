"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react"
import Form from "./Form";

const Home = () => {

const isUserLoggedIn = true

  return ( <> {isUserLoggedIn ? (
    <div className="home">
      <div className="home_div">
        <Form />
      </div>
    </div>
  ) : 
    <div className="flex-col space-y-6 sm:space-y-60">
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center sm:flex flex-col flex-center">
        Aqui seu controle financeiro é
        <br className="max-md:hidden" />
        <span
          className="orange_gradient 
      text-center"
        >
          {" "}
          Fácil e rápido
        </span>
      </h1>

      <p className="desc text-center">
        MyFinance é uma plataforma online para registro e consulta das suas
        finanças. Clique em sign in e comece agora!
      </p>

      <br />
      <br />
      <button type="button" className="outline_btn ">
        Sign In
      </button>
    </section>

    <footer className="flex flex-col flex-center">
      <p className="desc">
        Powered by 
      </p>
      <Image width={50} height={50} src="/images/nextLogo.png"/>
    </footer>
  </div>
}</>)
}

export default Home