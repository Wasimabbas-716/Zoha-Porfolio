import Name from "./Name";
import Nav from "./Nav";
import Social from "./Social";

const index = () => {
  return (
    <>
      <div className="mainCard">
        <Nav />

        <Name></Name>
        

        <a href="./Images/Profile.pdf" download className="resumednld">
          Download Resume
        </a>
        <Social></Social>
      </div>
    </>
  );
};

export default index;
