import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    backGroundImageView: {
        width: "100%",
        height: 190
    },
    backGroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    contentView: {
        backgroundColor: "#2d2c4c",
        width: "94%",
        alignSelf: "center",
        marginTop: -40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    contentViewTitle: {
        fontSize: 18,
        fontFamily: "OpenSans-SemiBold",
        paddingHorizontal: 20,
        textAlign: "center",
        marginTop: 20,
        color: colors.white
    },
    giftIdeasView: {
        backgroundColor: colors.white,
        marginTop: 10,
    },
    giftIdeasContent: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "center"
    },
    advertisement: {
        width: "100%",
        height: 80,
        marginTop: 20
    },
    footerView: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    title: {
        marginBottom: 10,
        fontSize: 15,
        fontFamily: "OpenSans-Bold",
        color: colors.black
    },
    text: {
        fontFamily: "OpenSans-Medium",
        fontSize: 12,
        marginBottom: 15,
    }
})