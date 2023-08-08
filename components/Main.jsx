"use client";

import Form from "./Form";

const Main = ({
  desc,
  setDesc,
  amount,
  setAmount,
  isChecked,
  setIsChecked,
  submitting,
  setSubmitting,
  session,
  setMyFinances
}) => {

  const fetchFinances = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/finances`);
    const data = await response.json();

    setMyFinances(data);
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
    />
  );
};

export default Main;
