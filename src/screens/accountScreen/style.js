import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundGrey
    },
    header: {
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: 60,
        elevation: 5
    },
    headerTitle: {
        color: colors.black,
        marginLeft: 5,
        fontWeight: "bold",
        fontSize: 20
    },
    accountView: {
        flexDirection: "row",
        backgroundColor: colors.white,
        marginVertical: 17,
        marginHorizontal: 12,
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10
    },
    text: {
        color: colors.black,
        fontSize: 17,
        lineHeight: 23
    },
    listView: {
        backgroundColor: colors.white,
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 15,
        borderRadius: 10
    },
    title: {
        marginHorizontal: 12,
        marginVertical: 14,
        fontSize:22,
        fontWeight:"bold",
        color:colors.black
    }
});