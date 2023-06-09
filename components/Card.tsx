import styles from "@/styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface CardProps {
  pokemon: Pokemon;
}

export default function Card({ pokemon }: CardProps) {
  return (
    <div className={styles.pokemon_card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="180"
        height="180"
        alt={pokemon.name}
        priority
      />
      <div className={styles.pokemon_info}>
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <Link href={`/pokemons/${pokemon.id}`}>Detalhes</Link>
      </div>
    </div>
  );
}
