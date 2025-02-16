import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import CoffeeDetailView from "./DetailScreen";

type RootStackParamList = {
  Home: undefined;
  CoffeeDetail: { item: any };
};

type CoffeeDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CoffeeDetail"
>;
type CoffeeDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "CoffeeDetail"
>;

interface CoffeeDetailComponentProps {
  route: CoffeeDetailScreenRouteProp;
  navigation: CoffeeDetailScreenNavigationProp;
}

const CoffeeDetailComponent: React.FC<CoffeeDetailComponentProps> = ({
  route,
  navigation,
}) => {
  const { item } = route.params;

  const handleNavigateToHome = () => {
    navigation.replace("Home");
  };

  return (
    <CoffeeDetailView item={item} handleNavigateBack={handleNavigateToHome} />
  );
};

export default CoffeeDetailComponent;
