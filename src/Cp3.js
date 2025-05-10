import { useContext } from "react";
import { UserContext } from "./App";

const CP3 = () => {
  const name1 = useContext(UserContext);
  return (
    <>
      <h2>I am {name1}</h2>
    </>
  );
};

export default CP3;
