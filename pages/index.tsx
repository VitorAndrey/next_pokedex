import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

import Card from "@/components/Card";

interface Pokemon {
  id: number;
  name: string;
  url: string;
}

interface HomeProps {
  pokemons: Pokemon[];
}

export async function getStaticProps() {
  const maxPokemon = 9;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemon}`
  );
  const data = await res.json();

  // add pokemon id
  const pokemonsWithId = data.results.map((pokemon: Pokemon, index: number) => {
    return {
      ...pokemon,
      id: index + 1,
    };
  });

  return {
    props: {
      pokemons: pokemonsWithId,
    },
  };
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <header className={styles.logo_container}>
        <h1 className={styles.logo}>
          Poké<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="pokeball_logo"
        />
      </header>
      <section className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}
