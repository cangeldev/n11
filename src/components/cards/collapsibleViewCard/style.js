import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.backGroundlightGrey,
    },
    wrapDropDownHeader: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: "OpenSans-Bold",
        color: colors.black,
        width: 320,

    }, line: {
        borderBottomColor: colors.backGroundlightGrey,
        borderBottomWidth: 0.5,
        width: 370,
        alignSelf: "center"
    },
    text: {
        backgroundColor: colors.white,
        width: 340,
        paddingLeft: 14,
        marginTop: -16,
        marginBottom: 15,
        fontFamily: "OpenSans-Regular",
        fontSize: 14
    }
})