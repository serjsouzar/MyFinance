import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "./../styles/global.css";
import { FinanceContextProvider } from "@/context/myfinance.context";

export const metadata = {
  title: "MyFinance",
  description: "Controle Suas Finanças",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            <FinanceContextProvider>{children}</FinanceContextProvider>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
