import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8,
    },
    image: {
        marginRight: 15,
        tintColor: "grey",
        width:22,
        height:22
    },
    icon: {
        position: "absolute", right: 10
    },
    title: {
        fontSize: 16
    }
})