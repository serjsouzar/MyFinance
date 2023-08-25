"use client"

import React, {  createContext, useState } from "react";

export const MyWeekContext = createContext("")

export const WeekContextProvider = ({
  children,
}) => {
  const [myWeek, setMyWeek] = useState([]);

  return (
    <MyWeekContext.Provider value={{myWeek, setMyWeek}}>
      {children}
    </MyWeekContext.Provider>
  )
};