import {StyleSheet,Dimensions} from "react-native";

const { width } = Dimensions.get("window");
const imageHeight = width * 0.5;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  detailText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },
  coffeeImage: {
    width: "94%",
    height: imageHeight,
    resizeMode: "cover",
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  coffeeName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  coffeeSubtitle: {
    fontSize: 16,
    color: "#777",
    marginBottom: 8,
  },
  ratingAndIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 15,
    marginLeft: 4,
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F2EAE2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  descriptionText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },
  readMore: {
    color: "#A66F52",
    fontWeight: "bold",
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },
  sizeButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  sizeButton: {
    width: 80,
    height: 65,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#A66F52",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  selectedSizeButton: {
    backgroundColor: "#A66F52",
  },
  sizeButtonText: {
    fontSize: 17,
    color: "#A66F52",
  },
  selectedSizeText: {
    color: "#fff",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  priceContainer: {
    flexDirection: "column",
    paddingLeft: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: "#888",
  },
  priceValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  buyButton: {
    backgroundColor: "#A66F52",
    paddingHorizontal: 80,
    paddingVertical: 20,
    borderRadius: 20,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});