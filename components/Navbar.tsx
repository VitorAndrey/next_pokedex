import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.logo_container}>
          <Image
            src="/images/pokeball.png"
            width={25}
            height={25}
            alt="pokeball_logo"
          />
          <h1 className="text_logo">
            Poke<span>Next</span>
          </h1>
        </div>
      </Link>
      <div className={styles.links_container}>
        <Link href="/" className={styles.home_link}>
          Home
        </Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};
export default Navbar;
