import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:
    {
        alignItems: "center",
    },
    image: {
        width: 65,
        height: 65,
    },
    text: {
        fontSize: 12,
        marginTop: 3,
        color: colors.black,
        fontFamily: "OpenSans-Regular"
    }
});