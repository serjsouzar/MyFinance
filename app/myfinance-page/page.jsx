"use client";

import { useEffect, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MyFinanceContext } from "@/context/finances.context";

import Main from "@/components/Main";
import Resume from "@/components/Resume";
import Loading from "./loading";

const MyFinancePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  /* Context */
  const { myFinances, setMyFinances, week, setWeek } =
    useContext(MyFinanceContext);

  /* Form states */
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  /* Resume states */
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);

  /* fetching users finances */
  useEffect(() => {
    const fetchFinances = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/finances`);
      const data = await response.json();

      setMyFinances(data);
    };
    if (session?.user.id) fetchFinances();
  }, [session?.user]);

  /* Updating resume */
  useEffect(() => {
    const amountOutcome = myFinances
      .filter((item) => item.outcome)
      .map((myfin) => myfin.amount);

    const amountIncome = myFinances
      .filter((item) => !item.outcome)
      .map((myfin) => myfin.amount);

    const outcomeTotal = amountOutcome
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    const incomeTotal = amountIncome
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

    const amountTotal = Math.abs(incomeTotal - outcomeTotal).toFixed(2);

    setIncome(`R$ ${incomeTotal}`);
    setOutcome(`R$ ${outcomeTotal}`);

    setTotal(
      `${
        Number(incomeTotal) < Number(outcomeTotal) ? "-" : ""
      } R$ ${amountTotal}`
    );
  }, [myFinances]);

  /* WEEK */
  const createWeek = () => {
    //setWeek(myFinances)
    alert("Finanças fechadas, consulte na página inicial");
    console.log(myFinances);

    try {
      const response = fetch("/api/week/new", {
        method: "POST",
        body: JSON.stringify({
          finances: myFinances
        }),
      });

      if (response.ok) {
        console.log("ok");
        setMyFinances([]);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      {" "}
      {session?.user ? (
        <>
          <div className="home">
            <div className="home_div">
              <Resume income={income} outcome={outcome} total={total} />
              <Main
                desc={desc}
                setDesc={setDesc}
                amount={amount}
                setAmount={setAmount}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                submitting={submitting}
                setSubmitting={setSubmitting}
                session={session}
              />
              <button
                onClick={() => createWeek()}
                className="outline_btn"
                disabled={submitting}
              >
                FECHAR SEMANA
              </button>
            </div>
          </div>
        </>
      ) : session === null ? (
        <>{router.push("/")}</>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default MyFinancePage;
