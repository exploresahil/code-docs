import Link from "next/link";
import "./style.scss";

const Header = () => {
  return (
    <header id="Header">
      <section className="header">
        <Link href="/">
          the circl studio <span>Docs</span>
        </Link>
      </section>
    </header>
  );
};

export default Header;
