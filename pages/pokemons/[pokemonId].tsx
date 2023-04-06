import styles from "@/styles/PokemonId.module.css";

import { GetStaticPropsContext } from "next";

import Head from "next/head";
import Image from "next/image";

interface Pokemon {
  id: number;
  name: string;
  url: string;
  types: PokemonType[];
  height: number;
  weight: number;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Props {
  pokemon: Pokemon;
}

export const getStaticPaths = async () => {
  const maxPokemon = 9;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemon}`
  );
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon: Pokemon, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext | undefined
) => {
  const id = context?.params?.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const PokemonId = ({ pokemon }: Props) => {
  function capitalizeFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  const capitalizedName = capitalizeFirstLetter(pokemon.name);

  function pad(n: number, length: number) {
    var len = length - ("" + n).length;
    return (len > 0 ? new Array(++len).join("0") : "") + n;
  }

  const pokeNumber = pad(pokemon.id, 3);
  const pokeType = pokemon.types[0].type.name;

  return (
    <>
      <Head>
        <title>{capitalizedName}</title>
      </Head>
      <section
        className={`${styles.pokemon_section} ${styles["section_" + pokeType]}`}
      >
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNumber}.png`}
          width="300"
          height="300"
          alt={pokemon.name}
          priority
          className="img"
        />
        <div className={styles.pokemon_info_container}>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div className={styles.pokemon_info_container}>
          <h3>Tipo:</h3>
          <div className={styles.type_container}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.pokemon_info_container}>
          <h3>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>

        <div className={styles.pokemon_info_container}>
          <h3>Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </section>
    </>
  );
};

export default PokemonId;
