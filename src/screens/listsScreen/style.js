import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey
    },
    image: {
        width: 50,
        height: 50,
        tintColor: colors.red,
        marginTop: -5
    },
    linearGradient: {
        flexDirection: "row",
        margin: 10,
        marginBottom: 5,
        borderRadius: 10,
        paddingTop: 15,
        paddingLeft: 15,
    },
    linearText: {
        color: colors.navyBlue,
        fontFamily: "OpenSans_SemiCondensed-SemiBold"
    },
    linearView: {
        flexDirection: "row",
        alignItems: "center",
    },
    linearViewText: {
        marginTop: 10,
        marginBottom: 15,
        color: colors.blue,
        fontFamily: "OpenSans-Bold",
    },
    linearViewIcon: {
        marginLeft: 8,
        color: colors.blue,
        marginTop: -3
    }
});