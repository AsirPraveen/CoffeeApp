import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useCartStore, { CoffeeSize } from "../../store/cartStore";

interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: string;
  stars: string;
  image: any;
  opinions: string;
  longDescription: string;
}

interface CoffeeDetailScreenRouteProps {
  item: CoffeeItem;
}

interface CoffeeDetailScreenProps {
  route: { params: CoffeeDetailScreenRouteProps };
}

const CoffeeDetailScreen: React.FC<CoffeeDetailScreenProps> = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  const [selectedSize, setSelectedSize] = useState<CoffeeSize>("S");
  const addToCart = useCartStore((state) => state.addToCart);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, selectedSize);
    navigation.goBack();
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const getDescriptionText = () => {
    if (showFullDescription) {
      return item.longDescription;
    } else {
      const shortDescription = item.longDescription.substring(0, 150);
      return shortDescription + "...";
    }
  };

  const changePriceBasedOnSize = (size: CoffeeSize) => {
    setSelectedSize(size);
  };

  const calculatePrice = () => {
    const basePrice = parseFloat(item.price.replace("$", ""));
    let multiplier = 1;
    if (selectedSize === "S") {
      multiplier = 0.9;
    } else if (selectedSize === "L") {
      multiplier = 1.1;
    }
    const newPrice = basePrice * multiplier;
    return `$${newPrice.toFixed(2)}`;
  };

  const currentPrice = calculatePrice();

  const COLORS = {
    primary: "#c67c4e",
    secondary: "#edd6c8",
    dark: "#313131",
    gray: "#e3e3e3",
    creme: "#f9f2ed",
    white: "#fff",
    black: "#000",
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <View style={[styles.container]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color={COLORS.dark} />
          </TouchableOpacity>
          <Text style={[styles.detailText, { color: COLORS.dark }]}>
            Detail
          </Text>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>

        <Image source={item.image} style={styles.coffeeImage} />

        <ScrollView style={styles.content}>
          <Text style={[styles.coffeeName, { color: COLORS.dark }]}>
            {item.name}
          </Text>
          <Text style={[styles.coffeeSubtitle, { color: COLORS.dark }]}>
            with Chocolate
          </Text>

          <View style={styles.ratingAndIconsContainer}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={[styles.ratingText, { color: COLORS.dark }]}>
                {item.stars} ({item.opinions})
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <View
                style={[styles.icon, { backgroundColor: COLORS.secondary }]}
              >
                <Ionicons
                  name="cafe-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
              <View
                style={[styles.icon, { backgroundColor: COLORS.secondary }]}
              >
                <Ionicons
                  name="leaf-outline"
                  size={24}
                  color={COLORS.primary}
                />
              </View>
            </View>
          </View>

          <Text style={[styles.descriptionTitle, { color: COLORS.dark }]}>
            Description
          </Text>
          <Text style={styles.descriptionText}>
            {getDescriptionText()}
            <TouchableOpacity onPress={toggleDescription}>
              <Text style={[styles.readMore, { color: COLORS.primary }]}>
                {showFullDescription ? "Read Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          </Text>

          <Text style={[styles.sizeTitle, { color: COLORS.dark }]}>Size</Text>
          <View style={styles.sizeButtons}>
            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === "S" && styles.selectedSizeButton,
              ]}
              onPress={() => changePriceBasedOnSize("S")}
            >
              <Text
                style={[
                  styles.sizeButtonText,
                  selectedSize === "S" && styles.selectedSizeText,
                ]}
              >
                S
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === "M" && styles.selectedSizeButton,
              ]}
              onPress={() => changePriceBasedOnSize("M")}
            >
              <Text
                style={[
                  styles.sizeButtonText,
                  selectedSize === "M" && styles.selectedSizeText,
                ]}
              >
                M
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sizeButton,
                selectedSize === "L" && styles.selectedSizeButton,
              ]}
              onPress={() => changePriceBasedOnSize("L")}
            >
              <Text
                style={[
                  styles.sizeButtonText,
                  selectedSize === "L" && styles.selectedSizeText,
                ]}
              >
                L
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.bottomBar}>
          <View style={styles.priceContainer}>
            <Text style={[styles.priceLabel, { color: COLORS.dark }]}>
              Price
            </Text>
            <Text style={[styles.priceValue, { color: COLORS.dark }]}>
              {currentPrice}
            </Text>
          </View>
          <TouchableOpacity style={styles.buyButton} onPress={handleAddToCart}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");
const imageHeight = width * 0.5;

const styles = StyleSheet.create({
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

export default CoffeeDetailScreen;
