import { Link } from "expo-router";
import { Text } from "react-native";

// クライアントコンポーネントを作成
export const PokemonLink = ({ url, name }) => {
  console.log(`/pokemon/${url}`);

  return (
    <Link href={`/pokemon/${url}`} style={{ padding: 8, borderWidth: 1 }}>
      <Text>{name}</Text>
    </Link>
  );
};
