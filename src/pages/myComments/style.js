import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    headerContainer: {
        backgroundColor: colors.white,
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center"
    },
    dropdownView: {
        marginLeft: 15,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        flexDirection: "row",
        alignItems: "center",
        width: 250
    },
    icon: {
        marginLeft: 80
    },
    shortByView: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        marginLeft: 15,
        borderRadius: 5,
        width: 96,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    iconImage:
    {
        width: 20,
        height: 20,
        tintColor: colors.black
    },
    headerText: {
        fontSize: 16,
        fontFamily: "OpenSans-SemiBold",
        color: colors.black
    }
})