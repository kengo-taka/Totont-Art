// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import ListStack from './stacks/listStack';
import MapStack from './stacks/mapStack';
import { Provider, useSelector, useDispatch } from "react-redux"
import { store } from './store';


export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'List') {
                iconName = focused
                  ? 'database'
                  : 'database';
                return <IconAntDesign name={iconName} size={size} color={color} />;
              } else if (route.name === 'Map') {
                iconName = focused ? 'map-marker-radius' : 'map-marker-radius';
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              }

            },
            tabBarActiveTintColor: '#000B49',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >

          <Tab.Screen name="List" component={ListStack}
          />
          <Tab.Screen name="Map" component={MapStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
