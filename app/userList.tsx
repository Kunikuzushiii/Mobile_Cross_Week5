import { Link } from "expo-router";
import { ScrollView, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import styles from "./AppStyles";
import userData from "./data.json";

export default function userList() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {userData.map((users, index) => (
        <Link
          key={index}
          href={{
            pathname: "/profile",
            params: {
              userName: users.name,
              email: users.email,
              photoUrl: users.photo_url,
            },
          }}
          push
          asChild
        >
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Image size={60} source={{ uri: users.photo_url }} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{users.name}</Text>
                <Text style={styles.emailText}>{users.email}</Text>
              </View>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </ScrollView>
  );
}
