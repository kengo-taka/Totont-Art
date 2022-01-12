import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from "react-native";
import MapScreen from "../screens/mapScreen";
import DetailScreen from '../screens/detail';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from "react";
import PlaceScreen from "../screens/place";

const MapStack = ({navigation, route}) => {

  const Stack = createNativeStackNavigator();

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Place" || routeName === "Detail") {
      navigation.setOptions({ tabBarStyle: {display: 'none'} });
    } else {
      navigation.setOptions({ tabBarStyle: {display: 'flex'} });

    }
    }, [navigation, route]);


  return (
    <Stack.Navigator>
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'TorontArt' }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }}
      />
     {/* <Stack.Screen name="Place" component={PlaceScreen}
      /> */}
    </Stack.Navigator>
  );
}

export default MapStack;