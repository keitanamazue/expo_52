import renderInfoDetail from "@/app/actions/render-info-detail";
import { PokemonDetail } from "@/components/pokemonDetail";
import { useLocalSearchParams } from "expo-router";
import React, { Suspense } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details of user {id} </Text>
      <React.Suspense
        fallback={
          // The view that will render while the Server Function is awaiting data.
          <ActivityIndicator />
        }
      >
        {renderInfoDetail({ id })}
      </React.Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
