import styles from "@/styles/Home.module.css";

import Head from "next/head";

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
  const maxPokemon = 251;
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

      <header>
        <h1>Pokémon</h1>
      </header>
      <section className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}
