import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    image: {
        width: "100%",
        height: 136,
        resizeMode: "cover"
    },
    text: {
        color: colors.black,
        textAlign: "center",
        fontSize: 17,
        fontFamily: "OpenSans-Bold",
        marginVertical: 15
    },
    textInfo: {
        color: colors.black,
        textAlign: "center",
        marginTop: -10,
        fontFamily: "OpenSans-Regular",
        marginBottom: 20
    },
    line: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
    },
    infoView: {
        backgroundColor: colors.backGroundlightGrey,
        alignItems: "center",
        marginTop: 20,
        paddingVertical: 15
    },
    infoViewTitle: {
        fontFamily: "OpenSans-Bold",
        fontSize: 18,
        color: colors.black,
        marginBottom: 5
    },
    infoViewText: {
        color: colors.grey,
        textAlign: "center",
        lineHeight: 20
    },
    card: {
        backgroundColor: colors.backGroundlightGrey,
        paddingHorizontal: 10,
        paddingBottom: 15
    },
    rulesCard: {
        paddingBottom: 25,
        backgroundColor: colors.backGroundlightGrey,
        paddingTop: 5
    }
})