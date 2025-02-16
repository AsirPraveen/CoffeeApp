import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import styles from "./style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { create } from "zustand";

interface CoffeeItem {
  name: string;
  description: string;
  longDescription: string;
  stars: number;
  opinions: number;
  price: string;
  image: ImageSourcePropType;
}

interface CoffeeStore {
  favorite: boolean;
  toggleFavorite: () => void;
}

const useCoffeeStore = create<CoffeeStore>((set) => ({
  favorite: false,
  toggleFavorite: () => set((state) => ({ favorite: !state.favorite })),
}));

interface CoffeeDetailViewProps {
  item: CoffeeItem;
  handleNavigateBack: () => void;
}

const CoffeeDetailView: React.FC<CoffeeDetailViewProps> = ({
  item,
  handleNavigateBack,
}) => {
  const { favorite, toggleFavorite } = useCoffeeStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleNavigateBack}>
          <Ionicons name="chevron-back-outline" style={styles.backArrow} />
        </TouchableOpacity>
        <Text style={styles.detailText}>Detail</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Ionicons
            name={favorite ? "heart" : "heart-outline"}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.coffeImage} />
      <Text style={styles.coffeeName}>{item.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.coffeeDescription}>{item.description}</Text>
        <View style={styles.tipeIconsContainer}>
          <Ionicons name="pint" style={styles.icon} />
          <Ionicons name="ribbon" style={styles.icon} />
          <Ionicons name="flame" style={styles.icon} />
        </View>
      </View>
      <View style={styles.starContainer}>
        <Ionicons name="star" style={styles.starIcon} />
        <Text style={styles.stars}>{item.stars}</Text>
        <Text style={styles.opinions}>({item.opinions})</Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        {item.longDescription}
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.readMore}> Read More</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.sizeTitle}>Size</Text>
      <View style={styles.sizeList}>
        <Text style={styles.size}>S</Text>
        <Text style={[styles.size, styles.activeSize]}>M</Text>
        <Text style={styles.size}>L</Text>
      </View>
      <View style={styles.bottomPanel}>
        <View>
          <Text style={styles.pricetitle}>Price</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buyNowButton} activeOpacity={0.8}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeDetailView;
