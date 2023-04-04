import Head from "next/head";
import styles from "@/styles/Home.module.css";

interface Item {
  id: number;
  name: string;
  url: string;
}

interface HomeProps {
  pokemons: any;
}

export async function getSataticProps() {
  const maxPokemons = 80;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // Add Pokemon Index
  data.results.forEach((item: Item, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home: React.FC<HomeProps> = ({ pokemons }) => {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <section>
        <h1>Home</h1>
        <ul>
          {pokemons.map((pokemon: any) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
