"use client";

import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

const Home = () => {
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
    <>
      {" "}
      {session?.user ? (
        <>
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
                  text-center
                  h-20"
                >
                  {" "}
                  Fácil e rápido
                </span>
              </h1>

              <p className="desc text-center">
                MyFinance é uma plataforma online para registro e consulta das
                suas finanças pessoais, clique em Sign In e comece agora!
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
                onClick={() => signIn(provider.id, { callbackUrl: '/myfinance-page' })}
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
