"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Main from "./Main";


const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  function handleClick() {
    <Link href="/finance-page" />;
  }

  return (
    <>
      {" "}
      {session?.user ? (
        /*         <div className="flex flex-col items-center">
          <h1 className="head_text text-center sm:flex flex-col flex-center">
            Bem-vindo,
            <span className="blue_gradient h-20">{session?.user.name}</span>
            <br className="max-md:hidden" />
          </h1>
          
          <div className="flex-center">
            <Link href="/finance-page">
              <button className="black_btn" onClick={handleClick}>
                Controle de Finanças
              </button>
            </Link>
          </div>

        
          <p className="desc text-center">
            Utilize a pagina de controle de finanças para começar seu controle
            agora!
          </p>

        </div> */

        <>
          <div className="home">
            <div className="home_div">
              <Main />
            </div>
          </div>
        </>
      ) : (
        <>
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
                MyFinance é uma plataforma online para registro e consulta das
                suas finanças!
              </p>

              <br />
              <br />
            </section>
          </div>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
        </>
      )}
    </>
  );
};

export default Home;
