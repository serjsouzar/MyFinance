"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Main from "@/components/Main";
import Resume from "@/components/Resume";

const MyFinancePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  /* Form states */
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  /* Resume states */
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);

  /* Finances */
  const [myFinances, setMyFinances] = useState([]);

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

  return (
    <>
      {" "}
      {
      session?.user ? (
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
                myFinances={myFinances}
                setMyFinances={setMyFinances}
              />
            </div>
          </div>
        </>
      ) : session === null ? (
        <>{router.push("/")}</>
      ) : (
        <></>
      )
      }
    </>
  );
};

export default MyFinancePage;
