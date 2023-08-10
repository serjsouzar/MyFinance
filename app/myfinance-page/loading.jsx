import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {
  return (
    <>
      <PuffLoader
        color="#618887"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loading;
