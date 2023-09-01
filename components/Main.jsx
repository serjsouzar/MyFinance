"use client";

import Form from "./Form";
import { useContext } from "react";
import { MyFinanceContext } from "@/context/myfinance.context";

const Main = ({
  desc,
  setDesc,
  amount,
  setAmount,
  isChecked,
  setIsChecked,
  submitting,
  setSubmitting,
  session
}) => {

  const { myFinances, setMyFinances, date, setDate } =
  useContext(MyFinanceContext);

  let filteredFinances = [];

  const fetchFinances = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/finances`);
    const data = await response.json();

    const selectedDate = date.toISOString().slice(0, 10);

    data.filter((finance) => {
      if (finance.createdAt.includes(selectedDate)) {
        filteredFinances.push(finance) && setMyFinances(filteredFinances);
      } else if (!finance.createdAt?.includes(selectedDate)) {
        setMyFinances(filteredFinances);
      }
    });
  };

  /* Create Finance */
  const createFinance = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/finance/new", {
        method: "POST",
        body: JSON.stringify({
          desc: desc,
          amount: amount,
          userId: session?.user.id,
          outcome: isChecked,
        }),
      });

      if (response.ok) {
        fetchFinances();
        setDesc("");
        setAmount("");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <Form
      desc={desc}
      setDesc={setDesc}
      amount={amount}
      setAmount={setAmount}
      isChecked={isChecked}
      setIsChecked={setIsChecked}
      submitting={submitting}
      handleSubmit={createFinance}
      setMyFinances={setMyFinances}
      myFinances={myFinances}
    />
  );
};

export default Main;
