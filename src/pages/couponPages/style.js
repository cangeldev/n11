import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    header: {
        marginTop: 15,
        flexDirection: "row",
    },
    txtInput: {
        borderWidth: 0.5,
        borderColor: colors.lightGrey,
        width: "70%",
        marginLeft: 15,
        paddingLeft: 10,
        fontSize: 16,
        height: 45,
        borderRadius: 6,
        fontFamily: "OpenSans_SemiCondensed-Medium",
        color: colors.black
    },
    headerButton: {
        backgroundColor: colors.black,
        width: 77,
        marginLeft: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    headerText: {
        color: colors.white,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 15
    },
    contentView: {
        flexDirection: "row",
        backgroundColor: colors.backGroundlightGrey,
        marginTop: 10,
        paddingVertical: 10
    }
})