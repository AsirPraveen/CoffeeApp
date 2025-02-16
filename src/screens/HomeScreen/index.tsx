import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";

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

interface HomeViewProps {
  onSearch: (text: string) => void;
  onAddToCart: (item: CoffeeItem) => void;
  onNavigateToDetail: (item: CoffeeItem) => void;
  coffeeItems: CoffeeItem[];
}
const coffeeData: Record<string, CoffeeItem[]> = {
    Cappuccino: [
        { id: '1', name: 'Caffe Mocha', description: 'Deep Foam', price: '$4.53', stars: '4.8', image: require('../../assets/caffeMocha.png'), opinions: '240', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' },
      { id: '2', name: 'Mocha Fusi', description: 'Ice/Hot', price: '$7.22', stars: '4.2', image: require('../../assets/mochaFusi.png'), opinions: '30', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' },
      { id: '3', name: 'Flat White', description: 'Strong Flavor', price: '$3.75', stars: '4.4', image: require('../../assets/flatWhite.png'), opinions: '340', longDescription: 'Macchiato is a strong espresso drink...' },
      { id: '4', name: 'Caffe Panna', description: 'Ice/Hot', price: '$5.51', stars: '4.8', image: require('../../assets/caffePanna.png'), opinions: '420', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' }
    ],
    Latte: [
      { id: '5', name: 'Caffe Panna', description: 'Smooth Foam', price: '$5.99', stars: '4.7', image: require('../../assets/caffePanna.png'), opinions: '310', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' },
      { id: '6', name: 'Flat White', description: 'Milk-Based', price: '$3.99', stars: '4.3', image: require('../../assets/flatWhite.png'), opinions: '210', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' },
      { id: '7', name: 'Mocha Fusi', description: 'Chocolate Blend', price: '$6.49', stars: '4.5', image: require('../../assets/mochaFusi.png'), opinions: '100', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' },
      { id: '8', name: 'Caffe Mocha', description: 'Creamy & Rich', price: '$5.25', stars: '4.6', image: require('../../assets/caffeMocha.png'), opinions: '500', longDescription: 'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk. The remaining volume consists of foam, which can vary in thickness depending on the barista and personal preference. Cappuccinos are typically served hot and can be enjoyed on their own or with a variety of flavorings, such as chocolate, cinnamon, or vanilla.' }
    ],
    Macchiato: [
      { id: '9', name: 'Flat White', description: 'Strong Flavor', price: '$3.75', stars: '4.4', image: require('../../assets/flatWhite.png'), opinions: '340', longDescription: 'Macchiato is a strong espresso drink...' },
      { id: '10', name: 'Caffe Panna', description: 'Bold Taste', price: '$4.99', stars: '4.5', image: require('../../assets/caffePanna.png'), opinions: '210', longDescription: 'Macchiato is a strong espresso drink...' },
      { id: '11', name: 'Mocha Fusi', description: 'Sweet Touch', price: '$6.25', stars: '4.2', image: require('../../assets/mochaFusi.png'), opinions: '80', longDescription: 'Macchiato is a strong espresso drink...' },
      { id: '12', name: 'Caffe Mocha', description: 'Light Roast', price: '$4.99', stars: '4.7', image: require('../../assets/caffeMocha.png'), opinions: '200', longDescription: 'Macchiato is a strong espresso drink...' }
    ],
    Espresso: [
      { id: '13', name: 'Mocha Fusi', description: 'Pure Shot', price: '$6.75', stars: '4.6', image: require('../../assets/mochaFusi.png'), opinions: '230', longDescription: 'Espresso is a pure and rich coffee shot...' },
      { id: '14', name: 'Flat White', description: 'Balanced Taste', price: '$3.99', stars: '4.4', image: require('../../assets/flatWhite.png'), opinions: '310', longDescription: 'Espresso is a pure and rich coffee shot...' },
      { id: '15', name: 'Caffe Panna', description: 'Strong Aroma', price: '$5.49', stars: '4.8', image: require('../../assets/caffePanna.png'), opinions: '410', longDescription: 'Espresso is a pure and rich coffee shot...' },
      { id: '16', name: 'Caffe Mocha', description: 'Intense Flavor', price: '$4.99', stars: '4.9', image: require('../../assets/caffeMocha.png'), opinions: '250', longDescription: 'Espresso is a pure and rich coffee shot...' }
    ]
  };
const coffeeCategories = ["Cappuccino", "Latte", "Macchiato", "Espresso"];

const HomeView: React.FC<HomeViewProps> = ({ onSearch, onAddToCart, onNavigateToDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Cappuccino");

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#313131", "#111111"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={styles.header}>
        <Text style={styles.locationText}>Location</Text>
        <View style={styles.locationContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.location}>New York, United States</Text>
            <Ionicons name="chevron-down-outline" size={14} color="#D8D8D8" />
            <TouchableOpacity onPress={() => console.log("Profile Clicked")}></TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../../assets/profile.png")} style={styles.imageStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="search" style={{ left: 45, zIndex: 10 }} size={20} color="white" />
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search coffee" placeholderTextColor="#999" onChangeText={onSearch} />
          </View>
          <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
            <Ionicons name="options-outline" style={styles.filterText} />
          </TouchableOpacity>
        </View>
        <ImageBackground style={styles.promoSection} source={require("../../assets/coffee-banner.png")}>
          <Text style={styles.promoBadge}>Promo</Text>
          <Text style={styles.promoText}>Buy one get one FREE</Text>
        </ImageBackground>
      </LinearGradient>

      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
          {coffeeCategories.map((category) => (
            <TouchableOpacity key={category} style={[styles.button, selectedCategory === category && styles.active]} activeOpacity={0.8} onPress={() => setSelectedCategory(category)}>
              <Text style={[styles.buttonText, selectedCategory === category && styles.activeText]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Coffee Items for Selected Category */}
      <FlatList
        style={styles.itemList}
        data={coffeeData[selectedCategory]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.coffeeCard} onPress={() => onNavigateToDetail(item)} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
              <View style={styles.starContainer}>
                <Ionicons name="star" style={styles.starIcon} />
                <Text style={styles.stars}>{item.stars}</Text>
              </View>
              <Image source={item.image} style={styles.coffeeImage} />
            </View>
            <Text style={styles.coffeeName}>{item.name}</Text>
            <Text style={styles.coffeeDescription}>{item.description}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.coffeePrice}>{item.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(item)}>
                <Ionicons name="add" style={styles.addButtonText} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeView;
