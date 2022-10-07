import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
    },
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
    },
    contentView: {
        backgroundColor: colors.white,
        height: 350,
        marginHorizontal: 15,
        marginTop: 18,
        borderRadius: 7
    },
    image: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
    },
    productView: {
        width: "100%",
        height: 100,
        flexDirection: "row"
    },
    productTitle: {
        color: colors.black,
        height: 46,
        marginTop: 10,
        marginLeft: 7,
        fontFamily: "OpenSans-Medium",
        fontSize: 16,
        width: 258
    },
    productDate: {
        height: 20,
        marginLeft: 7,
        marginTop: 10,
        fontFamily: "OpenSans-Medium",
        fontSize: 15,
        width: 258,
        color: colors.grey
    },
    evaluation: {
        backgroundColor: colors.backGroundlightGrey,
        marginTop: 6,
        marginHorizontal: 10,
        padding: 15,
        fontFamily: "OpenSans-Medium",
        fontSize: 15,
        borderRadius: 5,
    },
    commentView: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 10
    },
    commentViewText: {
        color: colors.blue,
        fontFamily: "OpenSans-SemiBold"
    },
    line: {
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 15
    },
    contentIcon: {
        width: 18,
        height: 18,
        tintColor: colors.grey
    },
    favoriContainer: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: colors.backGroundlightGrey,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginLeft: 15

    },
    infoView: {
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: "center"
    }
})