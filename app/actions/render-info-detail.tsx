"use server";

import { Pokemon } from "@/components/pokemon";
import { PokemonDetail } from "@/components/pokemonDetail";
import { Text, View } from "react-native";

export default async function renderInfoDetail({ id }) {
  console.log({ id });

  // Securely fetch data from an API, and read environment variables...
  return (
    <View>
      <Text>Hello, {id}!</Text>
      <PokemonDetail id={id} />
    </View>
  );
}
