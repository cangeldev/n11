import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:
    {
        alignItems: "center",
        width: "25%",
        marginVertical: 10,
    },
    image: {
        width: 65,
        height: 65,
    },
    text: {
        fontSize: 11,
        marginTop: 3,
        color: colors.black,
        fontFamily: "OpenSans-Medium"
    },
    menu:
    {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        backgroundColor: "#eeeff3",
        height: 230,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});