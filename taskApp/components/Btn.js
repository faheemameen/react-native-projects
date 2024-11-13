import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Btn = (params) => {
  return (
    <View
      style={{
        borderColor: "#ccc",
        borderWidth: 0.5,
        flex: 1,
        marginVertical: 5,
      }}
    >
      <Pressable
        onPress={() => params.press()}
        style={[styles.btn, { backgroundColor: params.bgColor }]}
      >
        <Text style={styles.text}>{params.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: { borderRadius: 5, paddingVertical: 15, elevation: 2 },
});

export default Btn;
