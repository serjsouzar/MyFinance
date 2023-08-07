"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Main from "@/components/Main";
import Resume from "@/components/Resume";

const MyFinancePage = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);

  const [finance, setFinance] = useState({
    desc: "",
    amount: 0,
    outcome: false,
  });

  const [myFinances, setMyFinances] = useState([]);
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
    }, [session]);

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
      <div className="home">
        <div className="home_div">
          <Resume income={income} outcome={outcome} total={total} />
          <Main
            finance={finance}
            setFinance={setFinance}
            submitting={submitting}
            setSubmitting={setSubmitting}
            session={session}
          />
        </div>
      </div>
    </>
  );
};

export default MyFinancePage;
