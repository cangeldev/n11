import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        marginVertical: 15
    },
    cardContainer: {
        marginTop: 10,
        flexDirection: "row"
    },
    image: {
        width: 70,
        height: 70,
        marginLeft: 5
    },
    title: {
        fontFamily: "OpenSans-Bold",
        fontSize: 15,
        color: colors.black,
        marginTop: 5
    },
    text: {
        fontFamily: "OpenSans-Medium",
        fontSize: 13,
        color: colors.tabBarIconBackground,
        lineHeight: 14,
        marginTop: 5
    }
})