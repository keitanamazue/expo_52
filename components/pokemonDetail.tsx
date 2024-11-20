import "server-only";

import { Text, View } from "react-native";
import { PokemonLink } from "@/components/Link";

export async function PokemonDetail({ id }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await res.json();

  console.log({ json });

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        {json.name}
      </Text>
      <View
        style={{ padding: 10, backgroundColor: "#f8f8f8", borderRadius: 5 }}
      >
        {json.abilities.map((d, index) => (
          <View key={index} style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 18, color: "#333" }}>
              {d.ability.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>Slot: {d.slot}</Text>
          </View>
        ))}
      </View>

      <View
        style={{
          padding: 10,
          backgroundColor: "#f8f8f8",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Base Experience
        </Text>
        <Text style={{ fontSize: 16, color: "#333" }}>
          {json.base_experience}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#f8f8f8",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Height
        </Text>
        <Text style={{ fontSize: 16, color: "#333" }}>{json.height}</Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#f8f8f8",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Weight
        </Text>
        <Text style={{ fontSize: 16, color: "#333" }}>{json.weight}</Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#f8f8f8",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Types
        </Text>
        {json.types.map((type, index) => (
          <Text key={index} style={{ fontSize: 16, color: "#333" }}>
            {type.type.name}
          </Text>
        ))}
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: "#f8f8f8",
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
          Stats
        </Text>
        {json.stats.map((stat, index) => (
          <View key={index} style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 16, color: "#333" }}>
              {stat.stat.name}: {stat.base_stat}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
