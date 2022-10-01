import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    adressContainer: {
        backgroundColor: colors.white,
        width: "100%",
        height: 36,
        flexDirection: "row",
        alignItems: "center",
    },
    adressTxt: {
        fontSize: 14,
        color: colors.grey,
        marginLeft: 6,
        fontFamily:"OpenSans_SemiCondensed-Regular"
    },
    iconE: {
        position: "absolute",
        right: 10
    }
});