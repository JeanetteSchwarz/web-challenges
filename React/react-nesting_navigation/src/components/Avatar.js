import Image from "./Image";
import avatar from "/Users/jeanette/Documents/Bootcamp/Week4/web-challenges/web-challenges/React/react-nesting_navigation/src/img/avatar.jpg";

export default function Avatar({ children }) {
  return (
    <>
      {children}
      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <Image src={avatar} alt="avatar" />
      </button>
    </>
  );
}
