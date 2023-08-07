"use client";

import { useState } from "react";
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

  return (
    <>
      <div className="home">
        <div className="home_div">
          <Resume />
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
