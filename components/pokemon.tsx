import "server-only";

import { View } from "react-native";
import { PokemonLink } from "@/components/Link";

export async function Pokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const json = await res.json();
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      {json.results.map((d) => {
        const r = d.url;
        const id = r.split("/").filter(Boolean).pop();
        const url = Number(id);
        console.log({ url });

        return <PokemonLink url={url} name={d.name} />;
      })}
    </View>
  );
}
