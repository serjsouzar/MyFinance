"use client";

import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyFinanceContext } from "@/context/finances.context";
import { signIn, useSession, getProviders } from "next-auth/react";

import { useRouter } from "next/navigation";
import Loading from "@/app/myfinance-page/loading";
import Grid from "./Grid";
import WeekCard from "./WeekCard";

const Home = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  const { myFinances, setMyFinances, week, setWeek, allFinances, setAllFinances } = useContext(MyFinanceContext);
  

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  useEffect(() => {
    const fetchWeek = async () => {
      const response = await fetch("/api/week");
      const data = await response.json();
      console.log(data)
      setWeek(data[0].week);
    };
    if (session?.user.id) fetchWeek();
  }, [session?.user]);
  
  //console.log(allFinances[0]._id === financeIdsInAWeek[0] ? allFinances[0].desc : false)

  return (
    <>
      {" "}
      {session?.user ? (
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
                <div className="slide_in">
                  <p className="desc text-center">
                    Olá,{" "}
                    <span className="blue_gradient">{session?.user.name}</span>!
                  </p>
                  <p className="desc text-center">
                    Deseja registrar ou consultar finanças?
                  </p>
                </div>
              </h1>
              <br />
              <br />
              <button
                type="button"
                onClick={() => router.push("/myfinance-page")}
                className="black_btn"
              >
                Comece agora!
              </button>
            </section>
          </div>
           {
           week.map((i) => (                
                <WeekCard semana={week.indexOf(i)+1} />
            ))
           } 
        </>
      ) : !session?.user && providers ? (
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
                suas finanças pessoais, clique em Entrar e comece agora!
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
                onClick={() =>
                  signIn(provider.id /* , { callbackUrl: "/myfinance-page" } */)
                }
                className="black_btn"
              >
                Entrar
              </button>
            ))}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
