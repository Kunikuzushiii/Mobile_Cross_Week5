import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 18,
    elevation: 4,
    overflow: "hidden",
  },
  productImage: {
    height: 180,
  },
  productName: {
    marginTop: 8,
    fontWeight: "bold",
  },
  description: {
    marginTop: 4,
    color: "#666",
  },
  price: {
    marginTop: 8,
    fontWeight: "bold",
    color: "#6200ee",
  },
  button: {
    marginTop: 12,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});