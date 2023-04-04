import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text_logo">
        Poke<span>Next</span>
      </p>
      <p>&copy; 2023</p>
    </footer>
  );
};
export default Footer;
