import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    touchableOpacity: {
        backgroundColor: colors.lightGreen,
        width: "92%",
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center"
    },
    touchText: {
        color: colors.white,
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: "OpenSans-Bold"
    },
})