import Link from "next/link";
import "./style.scss";

const Header = () => {
  return (
    <header id="Header">
      <section className="header">
        <Link href="/">
          thecirclstudio<span>/docs</span>
        </Link>
      </section>
    </header>
  );
};

export default Header;
