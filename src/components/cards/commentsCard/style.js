import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
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
    contentView: {
        backgroundColor: colors.white,
        height: 342,
        marginHorizontal: 15,
        marginTop: 18,
        borderRadius: 7,
        elevation: 5
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
    }, line: {
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 15
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
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15
    },
    infoView: {
        flexDirection: "row",
        alignItems: "center",
    },
    info: {
        marginLeft: 10,
    },
    progress: {
        marginTop: 3,
        backgroundColor: colors.backGroundlightGrey
    }, image: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
    },
    infoText: {
        position: "absolute",
        left: 85,
        bottom: -3,
        fontSize: 12,
        fontFamily: "OpenSans-Bold",
        color: colors.black
    },
    marka: {
        fontFamily: "OpenSans-Bold",
        width: 120,
        height: 20,
        color: colors.black
    }
})