import Form from "./Form";

const Main = ({ finance, setFinance, submitting, setSubmitting, session, refresh }) => {
  /* Create Finance */
  const createFinance = async (e) => {
    //e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/finance/new", {
        method: "POST",
        body: JSON.stringify({
          desc: finance.desc,
          amount: finance.amount,
          userId: session?.user.id,
          outcome: finance.outcome,
        }),
      });

      if (response.ok) {
        console.log("Finança cadastrada com sucesso");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (    
          <Form
            finance={finance}
            setFinance={setFinance}
            submitting={submitting}
            handleSubmit={createFinance}
          />
  );
};

export default Main;
