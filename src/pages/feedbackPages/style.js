import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.backGroundlightGrey,
        flex: 1
    },
    touchable: {
        flexDirection: "row",
        backgroundColor: colors.white,
        paddingLeft: 15,
        height: 55,
        alignItems: "center"
    },
    title: {
        paddingLeft: 15,
        marginVertical: 15,
        fontFamily: "OpenSans-Medium"
    },
    text: {
        marginLeft: 20,
        fontFamily: "OpenSans-Medium",
        color: colors.tabBarIconBackground,
        fontSize: 15
    },
    icon: {
        width: 20,
        height: 20
    }
})