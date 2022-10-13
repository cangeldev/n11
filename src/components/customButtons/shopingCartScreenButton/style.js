import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.buttonLightGreen,
        width: "92%",
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    text: {
        color: colors.white,
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: "OpenSans-Bold"
    },
})