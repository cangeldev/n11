import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    headerView: {
        flexDirection: "row",
        marginLeft: 15,
        marginVertical: 15,
        alignItems: "center"
    },
    image: {
        width: 17,
        height: 17
    },
    imageView: {
        borderWidth: 0.6,
        borderColor: colors.lightGrey,
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginRight: 10,
    },
    headerViewText: {
        fontFamily: "OpenSans_SemiCondensed-SemiBold",
        fontSize: 17,
        color: colors.black
    },
    cardContainer: {
        borderTopColor: colors.lightGrey,
        borderTopWidth: 0.6,
        width: 340,
        alignSelf: "center",
    },
    wrapDropDownHeader: {
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    title: {
        fontFamily: "OpenSans-Regular",
        color: colors.black,
        width: 320,
        fontSize: 14
    },
    text: {
        backgroundColor: colors.white,
        width: 315,
        marginTop: -10,
        marginBottom: 15,
        fontFamily: "OpenSans-Light",
        fontSize: 12,
        color: colors.tabBarIconBackground
    },
})