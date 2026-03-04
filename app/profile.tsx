import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import styles from "./AppStyles";

export default function profile() {
  const { userName, email, photoUrl } = useLocalSearchParams<{
    userName: string;
    email: string;
    photoUrl: string;
  }>();

  return (
    <View style={styles.centerContainer}>
      <Avatar.Image
        size={100}
        source={{ uri: photoUrl }}
        style={styles.profileAvatar}
      />
      <Text style={styles.profileName}>{userName}'s Profile</Text>
      <Text style={styles.profileEmail}>{email}</Text>
      <View style={styles.buttonContainer}>
        <Link href="/home" push asChild>
          <Button title="Go to Home Screen" />
        </Link>
      </View>
    </View>
  );
}
