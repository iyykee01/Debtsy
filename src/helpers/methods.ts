import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (keyName: string, value: string) => {
  try {
    await AsyncStorage.setItem(keyName, value);
  } catch (e) {
    throw `Could not save data with keyName:  ${keyName}  and value:  ${value}`;
  }
};

//Get token from storage
export const getData = async (keyName: string) => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    if (value !== null) return value;
  } catch (e) {
    // error reading value
    throw `Could not get data with keyName:  ${keyName}`;
  }
};

export const deleteData = async (keyName: string) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch {
    // error reading value
    throw `${keyName}:  could not be cleared..`;
  }
};
