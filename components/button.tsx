"use client";
import { Text } from "react-native";

export default function Button({ title, onPress }) {
  return <Text onPress={() => onPress()}>{title}</Text>;
}
