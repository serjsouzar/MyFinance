"use client"

import React, {  createContext, useState } from "react";

export const MyFinanceContext = createContext("")

export const FinanceContextProvider = ({
  children,
}) => {
  const [myFinances, setMyFinances] = useState([]);
  const [week, setWeek] = useState([])
  const [allFinances, setAllFinances] = useState([])

  return (
    <MyFinanceContext.Provider value={{myFinances, setMyFinances, week, setWeek, allFinances, setAllFinances}}>
      {children}
    </MyFinanceContext.Provider>
  )
};