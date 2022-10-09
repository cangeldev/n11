import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 20,
        backgroundColor: colors.backGroundlightGrey,
        paddingBottom: 10
    },
    marker: {
        fontSize: 25,
        color: colors.black,
        marginRight: 10,
        marginTop: -6
    },
    text: {
        color: colors.tabBarIconBackground,
        width: "95%",
        fontSize: 15,
        fontFamily: "OpenSans-Regular"
    }
})