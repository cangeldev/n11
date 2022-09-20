import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    text: {
        alignSelf: "center",
        color: colors.black,
        marginTop: -4,
        fontSize: 12
    },
    image: {
        width: 80,
        height: 80,
        margin: 6,
        borderRadius: 10,
    }
})