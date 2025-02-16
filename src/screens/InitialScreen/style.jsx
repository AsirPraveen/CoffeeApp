import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
  },
  container_inner: {
    width: "80%",
    marginHorizontal: "auto",
  },
  header: {
    textAlign: "center",
    fontSize: 34,
    lineHeight: 50,
    letterSpacing: 0.5,
    fontFamily: "Sora_600SemiBold",
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: colors.gray,
    marginTop: 8,
    fontFamily: "Sora_400Regular",
    paddingHorizontal: 25,
  },
  button: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingVertical: 16,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    borderRadius: 16,
    marginTop: 32,
  },
  button_text: {
    color: "rgba(0,0,0.54)",
    fontSize: 20,
  },
});

export default styles;
