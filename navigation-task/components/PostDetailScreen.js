import { SafeAreaView, Text } from "react-native";

export default function PostDetailScreen({ route }) {
  const { id } = route.params;
  return (
    <SafeAreaView>
      <Text>Post Detail Screen</Text>
    </SafeAreaView>
  );
}
