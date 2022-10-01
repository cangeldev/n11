import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey
    },

    accountView: {
        flexDirection: "row",
        backgroundColor: colors.white,
        marginVertical: 17,
        marginHorizontal: 12,
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10
    },
    text: {
        color: colors.black,
        fontSize: 16,
        lineHeight: 23,

    },
    listView: {
        backgroundColor: colors.white,
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 15,
        borderRadius: 10
    },
    title: {
        marginHorizontal: 12,
        marginVertical: 14,
        fontSize: 20,
        fontFamily: "OpenSans-Bold",
        color: colors.black
    }
});