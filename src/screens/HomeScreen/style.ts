import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },
  locationText: {
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0.12,
    color: "#A2A2A2",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  location: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
    color: "#D8D8D8",
  },
  imageStyle: {
    width: 40,
    height: 40,
    paddingLeft: 5,
    marginHorizontal: 150,
    paddingTop: -10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 25,
  },
  searchContainer: {
    position: "fixed",
    flex: 1,
  },
  searchIcon: {
    position: "absolute",
    fontSize: 20,
    left: 10,
    color: "white",
  },
  searchInput: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    paddingVertical: 12,
    paddingLeft: 40,
    fontSize: 14,
    lineHeight: 16.8,
    color: "#A2A2A2",
    borderWidth: 0,
  },
  filterButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 12,
  },
  filterText: {
    color: "white",
    fontSize: 20,
    padding: 10,
  },
  promoSection: {
    position: "absolute",
    bottom: -75,
    left: 24,
    width: width - 48,
    height: 150,
    borderRadius: 16,
    overflow: "hidden",
    paddingHorizontal: 24,
    paddingVertical: 14,
    resizeMode: "cover",
  },
  promoBadge: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#ED5151",
    borderRadius: 8,
    marginRight: "auto",
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  promoText: {
    marginTop: 5,
    width: "70%",
    fontSize: 32,
    fontWeight: "700",
    color: "white",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 100,
  },
  button: {
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#C67C4E",
  },
  buttonText: {
    color: "#313131",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 21,
  },
  activeText: {
    fontSize: 14,
    fontWeight: "800",
    color: "white",
  },
  itemList: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
  contentContainer: {
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 24,
    gap: 16,
  },
  coffeeCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 12,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
  },
  starContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  stars: {
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
    color: "white",
  },
  starIcon: {
    color: "#FBBE21",
    fontSize: 14,
  },
  coffeeImage: {
    width: "100%",
  },
  coffeeName: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
    color: "#242424",
  },
  coffeeDescription: {
    fontSize: 12,
    lineHeight: 14.4,
    color: "#A2A2A2",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  coffeePrice: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 27,
    color: "#050505",
  },
  addButton: {
    backgroundColor: "#C67C4E",
    borderRadius: 8,
  },
  addButtonText: {
    padding: 8,
    color: "white",
    fontSize: 16,
  },
});

export default styles;
