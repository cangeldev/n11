import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 15,
        justifyContent: "center"
    },
    cardContainer: {
        paddingHorizontal: 20,
    },
    name: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 20,
        fontFamily: "OpenSans-SemiBold",
    },
    image: {
        borderRadius: 130,
        width: 120,
        height: 120
    },
    line: {
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 0.5,
        width: "100%",
        alignSelf: "center",
        marginTop: 50
    },
    divider: {
        backgroundColor: "#2d2c4c",
        position: "absolute",
        marginTop: 500,
        width: 60,
        height: 60,
        borderRadius: 100,
        textAlign: "center",
        fontSize: 15,
        textAlignVertical: "center",
        fontFamily: "OpenSans-Bold",
        color: colors.white,
        borderWidth: 0.3,
        borderColor: colors.lightGrey
    },
    viewTitle: {
        fontSize: 18,
        fontFamily: "OpenSans-SemiBold",
        paddingHorizontal: 20,
        marginTop: 20,
        color: colors.white,
        marginBottom: 20
    }
})