import { FlatList, View } from "react-native";
import { Appbar, Button, Card, FAB, Text } from "react-native-paper";
import { styles } from "../AppStyles";
import data from "../data.json";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header elevated>
      <Appbar.Action icon="shopping" />
      <Appbar.Content
        title="Shop"
        titleStyle={{ fontWeight: "bold", fontSize: 20 }}
      />
</Appbar.Header>

      {/* Product List */}
      <View style={styles.content}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Cover
                source={{ uri: item.image }}
                style={styles.productImage}
              />
              <Card.Content>
                <Text variant="titleMedium" style={styles.productName}>
                  {item.name}
                </Text>
                <Text variant="bodyMedium" style={styles.description}>
                  {item.description}
                </Text>
                <Text variant="titleLarge" style={styles.price}>
                  {item.price}
                </Text>
                <Button
                  mode="contained"
                  icon="cart"
                  style={styles.button}
                >
                  Add to Cart
                </Button>
              </Card.Content>
            </Card>
          )}
        />
      </View>

      {/* Cart Button */}
      <FAB
        icon="cart"
        style={styles.fab}
        onPress={() => console.log("Go to cart")}
      />
    </View>
  );
}