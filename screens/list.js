import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import React from "react";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import ShowList from "../components/showList";
import Search from "../components/search";
import { useDispatch, useSelector } from "react-redux";
import { setShowState, selectTorontData } from "../slices/navSlice";
import { useState } from "react"

const ListScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const [iconState, setIconState] = useState("list")
  const artData = useSelector(selectTorontData)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          {iconState === "list" ? (<TouchableOpacity style={styles.headerItem} onPress={() => {
            setIconState("block")
            dispatch(setShowState("block"))
          }}>
            <IconAntDesign name={"appstore1"} size={20} />
          </TouchableOpacity>) : (<TouchableOpacity style={styles.headerItem} onPress={() => {
            dispatch(setShowState("list"))
            setIconState("list")
            console.log(artData,"hi")
          }}>
            <IconAntDesign name={"bars"} size={20} />
          </TouchableOpacity>)}
        </View>)
    });
  }, [navigation, iconState]);

  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Search />
      <ShowList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerItem: {
    padding: 5
  }
})

export default ListScreen;