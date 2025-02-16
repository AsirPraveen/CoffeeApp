import React from "react";
import OnboardingView from "./InitialScreen";

export default function OnboardingComponent({ navigation }) {
  const handleGetStarted = () => {
    navigation.replace("Home");
  };

  return <OnboardingView onGetStarted={handleGetStarted} />;
}
