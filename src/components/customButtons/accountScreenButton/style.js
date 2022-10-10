import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    image: {
        marginRight: 15,
        tintColor: colors.grey,
        width: 21,
        height: 21
    },
    icon: {
        position: "absolute",
        right: 10
    },
    text: {
        fontSize: 15,
        color: colors.black,
        fontFamily: "OpenSans-Regular"
    }
})