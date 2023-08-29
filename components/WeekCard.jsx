"use client"

import React from 'react'
import { useContext, useEffect } from "react";
import { MyFinanceContext } from "@/context/finances.context";
import { useSession } from "next-auth/react";

const WeekCard = ({semana}) => {
  
  const { myFinances, setMyFinances, week, setWeek, allFinances, setAllFinances } = useContext(MyFinanceContext);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchFinances = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/finances`);
      const data = await response.json();

      setAllFinances(data);

    };
    if (session?.user.id) fetchFinances();
  }, [session?.user]);

  
  const financeIdsInAWeek = week.map(w => w.finance)

  return (
    <div>
      <h1>Semana {semana}</h1>
        {          
          allFinances.map((item) => (
          financeIdsInAWeek.includes(item._id) ?
          <>
            <h1>{item.desc}</h1>
            <h1>{item.amount}</h1>
            <h1>{item.outcome !== true ? "saída" : "entrada"}</h1>
          </>
          :

          ""
          ))
          }
          
    </div>
  )
}

export default WeekCard