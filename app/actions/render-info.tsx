"use server";

import { Pokemon } from "@/components/pokemon";
import { Text, View } from "react-native";

export default async function renderInfo({ name }) {
  console.log("Hello, World!");

  // Securely fetch data from an API, and read environment variables...
  return (
    <View>
      <Text>Hello, {name}!</Text>
      <Pokemon />
    </View>
  );
}
