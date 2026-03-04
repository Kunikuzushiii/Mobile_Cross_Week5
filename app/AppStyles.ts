import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  card: {
    marginVertical: 8,
    backgroundColor: "#2c2c2e",
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emailText: {
    color: "#a1a1aa",
    fontSize: 14,
  },
  profileAvatar: {
    marginBottom: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 24,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "70%",
  },
});

export default styles;
