import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "./AppStyles";

export default function email() {
  return (
    <View style={styles.centerContainer}>
      <Text>Email List Page</Text>
      <View style={styles.buttonContainer}>
        <Link href="/home" push asChild>
          <Button title="Go to Home Screen" />
        </Link>
      </View>
    </View>
  );
}
