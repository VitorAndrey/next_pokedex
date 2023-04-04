import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="pokeball_logo"
        />
        <h1 className="text_logo">
          Poke<span>Next</span>
        </h1>
      </div>
      <div className={styles.links_container}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};
export default Navbar;
