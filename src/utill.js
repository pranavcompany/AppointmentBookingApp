
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('SortDetails', jsonValue)
    } catch (e) {
        console.log("storing Data error",e);
    }
}

export const getData = async () => {
    try {
    const jsonValue = await AsyncStorage.getItem('SortDetails')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
    console.log("getting Data error",e)
    }
}