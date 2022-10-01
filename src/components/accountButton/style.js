import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    image: {
        marginRight: 15,
        tintColor: "red",
        width: 21,
        height: 21
    },
    icon: {
        position: "absolute", right: 10
    },
    title: {
        fontSize: 15,
        color: colors.black,
        fontFamily: "OpenSans-Regular"
    }
})