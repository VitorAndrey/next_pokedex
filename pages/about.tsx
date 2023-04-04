import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <section className={styles.about_section}>
        <h1>Sobre o Projeto</h1>
        <p>
          Este projeto foi realizado durante o curso de Next.js do canal hora de
          codar. Meu objetivo ao fazer essa Pokedex era utilizar na prática os
          conceitos do Next. Tomei a liberdade de usar Typescript invés do
          Javascript utilizado no projeto original.
        </p>
        <Image
          src="/images/charizard.png"
          width={9999}
          height={9999}
          alt="charizard_image"
          className={styles.charizard}
        />
      </section>
    </>
  );
};
export default About;
