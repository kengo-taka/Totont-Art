import { View, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from "../screens/list";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from "react";
import DetailScreen from "../screens/detail";

const ListStack = ({ navigation, route }) => {

  const Stack = createNativeStackNavigator();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Place" || routeName === "Detail") {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });

    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="VanArt" component={ListScreen} options={{
        title: 'TorontArt'
      }}
      />
      <Stack.Screen name="Detail" component={DetailScreen}
      />
    </Stack.Navigator>
  );
}

export default ListStack;