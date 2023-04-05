import styles from "@/styles/Card.module.css";

import Image from "next/image";

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
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}
