import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import { useState } from "react";
import appstyle from "../components/appstyle";
import Divider from "../components/Divider";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import Btn from "../components/Btn";
import Storage from "../components/Storage";

const Task = () => {
  const blankTask = {
    name: "",
    desc: "",
    date: null,
    status: "pending",
  };
  const [date, setDate] = useState(dayjs());
  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState(blankTask);

  const saveDate = () => {
    setTask({ ...task, date: date });
    setDate();
    setModalVisible(!modalVisible);
  };

  const submitTask = async () => {
    let allTask = await Storage.fetchData("task");
    if (!allTask) {
      allTask = [];
    }
    allTask.push(task);
    setTask(blankTask);
    const saveData = await Storage.saveData("task", allTask);
    alert(saveData);
  };

  const checkTask = async () => {
    let checkData = await Storage.fetchData("task");
    alert(JSON.stringify(checkData));
  };
  return (
    <SafeAreaView style={appstyle.container}>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View>
          <View>
            <Text style={appstyle.h1}>Create new Task</Text>
          </View>
          <Divider />
          <View>
            <Text style={appstyle.h2}>Task Name</Text>
            <TextInput
              onChangeText={(e) => setTask({ ...task, name: e })}
              style={appstyle.input}
              placeholder="Task name"
            />
            <Text style={appstyle.h2}>Task Description</Text>
            <TextInput
              onChangeText={(e) => setTask({ ...task, desc: e })}
              style={appstyle.input}
              placeholder="Task Description"
            />

            <View style={styles.centeredView}>
              <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      mode="single"
                      date={date}
                      timePicker="true"
                      onChange={(params) => setDate(params.date)}
                    />
                    <View
                      style={{ display: "flex", flexDirection: "row", gap: 5 }}
                    >
                      <Btn
                        text="Submit"
                        press={() => saveDate()}
                        bgColor="#0860fb"
                      />
                      <Btn
                        text="Cancel"
                        press={() => setModalVisible(false)}
                        bgColor="#888"
                      />
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <Text style={appstyle.h2}>Date and Time</Text>
            <Pressable
              onPress={() => setModalVisible(true)}
              style={[
                appstyle.input,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              {task?.date ? (
                <Text style={{ fontSize: 20 }}>{task.date}</Text>
              ) : (
                <Text style={{ color: "#069" }}>Set Date and Time</Text>
              )}
            </Pressable>
          </View>
          <Divider />
          <Btn text="save" press={() => submitTask()} bgColor="#0860fb" />
          <Btn text="check" press={() => checkTask()} bgColor="#0860fb" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Task;
