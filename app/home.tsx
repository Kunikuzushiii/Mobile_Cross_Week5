import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import styles from "./AppStyles";

export default function home() {
  return (
    <View style={styles.centerContainer}>
      <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: "bold" }}>
        Navigation List
      </Text>
      <View style={styles.buttonContainer}>
        <Link href="/email" push asChild>
          <Button title="Go to Email Screen" />
        </Link>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/userList" push asChild>
          <Button title="Go to User List Page" />
        </Link>
      </View>
    </View>
  );
}
