import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts, Sora_600SemiBold } from "@expo-google-fonts/sora";
import styles from "./style";

export default function OnboardingView({ onGetStarted }) {
  let [fontsLoaded] = useFonts({
    Sora_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/background.png")} />
      <View style={styles.container_inner}>
        <Text style={[styles.text, styles.header]}>
          Coffee so good, your taste buds will love it.
        </Text>
        <Text style={styles.description}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onGetStarted}
        activeOpacity={0.8}
      >
        <Image source={require("../../assets/google-logo.png")} />
        <Text style={styles.button_text}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}
