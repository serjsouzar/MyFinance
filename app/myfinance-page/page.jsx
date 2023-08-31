"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Main from "@/components/Main";
import Resume from "@/components/Resume";
import Loading from "./loading";

import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const MyFinancePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [date, setDate] = useState(new Date());

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
    
      const selectedDate = date.toISOString().slice(0, 10)
    
      //code to fix here !

   /*    data.filter(finance => {
        finance.createdAt.slice(0,10) === selectedDate ? setMyFinances(finance) : console.log("falhou")
        console.log(finance)
      }) */
    
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

  /* DATES */
  const onChange = (date) => {
    setDate(date)
    //select date working
    alert("A data selecionada foi: "+ date.toISOString().slice(0, 10))
  }

  //console.log(myFinances[2].createdAt.slice(0,10))

  return (
    <>
      {" "}
      {session?.user ? (
        <>
          <div className="home">
            <div className="home_div">
              <Resume income={income} outcome={outcome} total={total} />

              <DatePicker
                onChange={onChange}
                value={date}
                locale={"pt-BR"}
                format={"dd/MM/y"}
              />

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
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default MyFinancePage;
