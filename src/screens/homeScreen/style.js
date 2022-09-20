import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerMenu: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#eeeff3",
        width: "100%",
        height: 110,
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    reklam: {
        width: 350,
        height: 120,
        borderRadius: 10,
        marginTop: 18,
        alignSelf: "center",
        resizeMode: "center"
    }
});