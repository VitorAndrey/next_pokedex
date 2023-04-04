import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className="text_logo">
        Poke<span>Next</span>
      </h1>
      <div className={styles.links_container}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
export default Navbar;
