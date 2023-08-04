import Image from "next/image";


const Footer = () => {
  return (
    <footer className="flex flex-col flex-center">
      <p className="desc">Powered by</p>
      <Image
        width={50}
        height={50}
        src="/images/nextLogo.png"
        alt="next-logo"
      />
    </footer>
  );
};

export default Footer;
