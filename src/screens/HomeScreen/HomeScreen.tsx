import React from "react";
import HomeView from "./index";
import { NavigationProp } from "@react-navigation/native";
import useCartStore from "../../store/cartStore";

interface HomeComponentProps {
  navigation: NavigationProp<any>;
}

const HomeComponent: React.FC<HomeComponentProps> = ({ navigation }) => {
  const coffeeItems = [
    {
      id: "1",
      name: "Caffe Mocha",
      description: "Deep Foam",
      price: "$4.53",
      stars: "4.8",
      image: require("../../assets/caffeMocha.png"),
      opinions: "240",
      longDescription: "A cappuccino is a delightful beverage...",
    },
    {
      id: "2",
      name: "Flat White",
      description: "Espresso",
      price: "$3.53",
      stars: "4.1",
      image: require("../../assets/flatWhite.png"),
      opinions: "120",
      longDescription: "A cappuccino is a delightful beverage...",
    },
    {
      id: "3",
      name: "Mocha Fusi",
      description: "Ice/Hot",
      price: "$7.22",
      stars: "4.2",
      image: require("../../assets/mochaFusi.png"),
      opinions: "30",
      longDescription: "A cappuccino is a delightful beverage...",
    },
    {
      id: "4",
      name: "Caffe Panna",
      description: "Ice/Hot",
      price: "$5.51",
      stars: "4.8",
      image: require("../../assets/caffePanna.png"),
      opinions: "420",
      longDescription: "A cappuccino is a delightful beverage...",
    },
  ];

  const addToCart = useCartStore((state) => state.addToCart);

  const handleSearch = (query: string) => {
    console.log("searching:", query);
  };

  const handleAddToCart = (item: (typeof coffeeItems)[0]) => {
    addToCart(item);
    console.log("Added item:", item);
  };

  const handleNavigateToDetail = (item: (typeof coffeeItems)[0]) => {
    navigation.navigate("CoffeeDetail", { item });
  };

  return (
    <HomeView
      onSearch={handleSearch}
      onAddToCart={handleAddToCart}
      onNavigateToDetail={handleNavigateToDetail}
    />
  );
};

export default HomeComponent;
