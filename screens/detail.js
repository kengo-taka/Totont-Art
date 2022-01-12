import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { selectTorontData } from "../slices/navSlice";
import { useSelector } from "react-redux";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


const DetailScreen = ({ route, navigation }) => {

  const item = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back"
    });
  }, [navigation]);

  return (
    <View >
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: item.ImageURL }} style={styles.imageStyle} resizeMode="contain"/>
          <Text style={styles.titleLabel}>
            Name
          </Text>
          <Text style={styles.itemLabel}>
            {item.Title}
          </Text>
          <Text style={styles.titleLabel}>
            Location
          </Text>
          <Text style={styles.itemLabel}>
            {item.Location}
          </Text>
          <Text style={styles.titleLabel}>
            Artist
          </Text>
          <Text style={styles.itemLabel}>
            {item.Artist}
          </Text>
          <Text style={styles.titleLabel}>
            Year
          </Text>
          <Text style={styles.itemLabel}>
            {item.YEAR_INSTALLED}
          </Text>
          <Text style={styles.titleLabel}>
            longitude
          </Text>
          <Text style={styles.itemLabel}>
            {JSON.parse(item.geometry).coordinates[0]}
          </Text>
          <Text style={styles.titleLabel}>
            latitude
          </Text>
          <Text style={styles.itemLabel}>
            {JSON.parse(item.geometry).coordinates[1]}
          </Text>
          <Text style={styles.titleLabel}>
            Medium
          </Text>
          <Text style={styles.itemLabel}>
            {item.Medium}
          </Text>
          <MapView
            initialRegion={{
              latitude: JSON.parse(item.geometry).coordinates[1],
              longitude: JSON.parse(item.geometry).coordinates[0],
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            style={styles.mapStyle}>
            <Marker
              coordinate={{
                latitude: JSON.parse(item.geometry).coordinates[1],
                longitude: JSON.parse(item.geometry).coordinates[0]
              }}>
            </Marker>
          </MapView>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
    backgroundColor: "white"
  },
  imageView: {
    alignItems: "center"
  },
  imageStyle: {
    width: "100%",
    height: 300,
    alignContent: "center"
  },
  titleLabel: {
    fontSize: 13,
    color: "gray",
    marginTop: 10
  },
  itemLabel: {
    fontSize: 17,
  },
  mapStyle: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
})

export default DetailScreen;