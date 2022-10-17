import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginTop: 15,
        borderRadius: 10,
        marginHorizontal: 13,
        padding: 15,
        paddingVertical: 20
    },
    title: {
        alignSelf: "flex-start",
        fontSize: 16,
        color: colors.tabBarIconBackground,
        fontFamily: "OpenSans-Medium",
        marginBottom: 10
    },
    switchs: {
        position: "absolute",
        top: 17,
        right: 15
    },
    text: {
        fontSize: 13,
        fontFamily: "OpenSans-Medium",
        color: colors.tabBarIconBackground
    }
})