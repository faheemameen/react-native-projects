import { View, Text, ScrollView } from "react-native";
import React from "react";
import Storage from "../../components/Storage";
import appstyle from "../../components/appstyle";
import { SafeAreaView } from "react-native-safe-area-context";
import Btn from "../../components/Btn";
import Divider from "../../components/Divider";

const Settings = () => {
  const clearData = async () => {
    let dataRemove = await Storage.removeData("task");
    alert(dataRemove);
  };
  return (
    <SafeAreaView style={appstyle.container}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={appstyle.card}>
          <Text style={appstyle.h2}>Setting</Text>
          <Divider />
          <Btn text="clear storage" bgColor="#555" press={() => clearData()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
