"use client"

import React, {  createContext, useState } from "react";

export const MyFinanceContext = createContext("")

export const FinanceContextProvider = ({
  children,
}) => {
  const [myFinances, setMyFinances] = useState([]);
  const [date, setDate] = useState(new Date());

  return (
    <MyFinanceContext.Provider value={{myFinances, setMyFinances, date, setDate}}>
      {children}
    </MyFinanceContext.Provider>
  )
};