import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import appstyle from "../../components/appstyle";
import Card from "../../components/Card";
import { router, useFocusEffect } from "expo-router";
import Storage from "../../components/Storage";

const index = () => {
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const getTask = async () => {
        let allTask = await Storage.fetchData("task");
        setTasks(allTask);
      };
      getTask();
    }, [])
  );

  const refreshTask = async () => {
    let allTask = await Storage.fetchData("task");
    setTasks(allTask);
  };

  return (
    <SafeAreaView style={appstyle.container}>
      <ScrollView style={appstyle.scrollview}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={appstyle.h1}>All task</Text>
            <Text style={appstyle.h2}>Thursday,17th Oct</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Pressable
              onPress={() => router.navigate("/task")}
              style={appstyle.btn}
              android_ripple={{ color: "#ddd", radius: 100 }}
            >
              <Text style={appstyle.h2}>+ New Task</Text>
            </Pressable>
          </View>
        </View>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((x, i) => {
            return <Card key={i} data={x} onRefresh={() => refreshTask()} />;
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
