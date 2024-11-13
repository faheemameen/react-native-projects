import * as SecureStore from "expo-secure-store";

const saveData = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
    return "Successfully saved data";
  } catch (error) {}
};
const removeData = async (key) => {
  try {
    await SecureStore.deleteItemAsync(key);
    return "Successfully Removed data";
  } catch (error) {}
};
const fetchData = async (key) => {
  try {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return null;
    }
  } catch (errro) {}
};

export default { saveData, fetchData, removeData };
