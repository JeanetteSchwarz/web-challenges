import Image from "./Image";
import logo from "/Users/jeanette/Documents/Bootcamp/Week4/web-challenges/web-challenges/React/react-nesting_navigation/src/img/logo.jpg";

export default function Logo({ children }) {
  return (
    <>
      {children}
      <a href="#">
        <Image src={logo} alt="logo" />
      </a>
    </>
  );
}
