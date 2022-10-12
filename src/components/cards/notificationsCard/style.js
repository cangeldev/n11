import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.notificationsBackground,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingRight: 34
    },
    text: {
        color: colors.black,
        fontFamily: "OpenSans-Medium"
    },
    date: {
        marginTop: 15,
        fontSize: 12,
        fontFamily: "OpenSans-Medium"
    },
    closeIcon: {
        width: 10,
        height: 10,
        position: "absolute",
        right: 12,
        top: 15,
        tintColor: colors.lightGrey,
    }
})