import { View, Text, ScrollView } from "react-native";
import React from "react";
import Storage from "../../components/Storage";
import appstyle from "../../components/appstyle";
import { SafeAreaView } from "react-native-safe-area-context";
import Divider from "../../components/Divider";

const About = () => {
  const clearData = async () => {
    let dataRemove = await Storage.removeData("task");
    alert(dataRemove);
  };
  return (
    <SafeAreaView style={appstyle.container}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={appstyle.card}>
          <Text style={appstyle.h2}>About Task App</Text>
          <Divider />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
