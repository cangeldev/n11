import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: colors.backGroundlightGrey,
        flex: 1
    },
    headerView: {
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 16,
        marginRight: 65,
        color: colors.black
    },
    icon: {
        position: "absolute",
        right: 15,
    },
    orderView: {
        width: "100%",
        height: 200,

        alignItems: "center"
    },
    orderTextInfo: {
        color: colors.black,
        fontSize: 30,
        marginTop: 25,
        fontFamily: "OpenSans-Regular",
        textAlign: "center"
    },
    orderText: {
        color: colors.grey,
        fontSize: 15,
        marginTop: 25,
        fontFamily: "OpenSans-Regular",
        textAlign: "center"
    },
    productsText: {
        color: colors.black,
        fontSize: 18,
        marginTop: 18,
        marginLeft: 15,
        fontFamily: "OpenSans-Medium"
    },
    productsView: {
        borderTopWidth: 1,
        marginTop: 10,
        borderTopColor: colors.lightGrey,
        backgroundColor: colors.white
    },
    contentView: {
        backgroundColor: colors.white,
        height: 387,
        marginVertical: 10,
        marginHorizontal: 10,
        overflow: "hidden"
    }
})