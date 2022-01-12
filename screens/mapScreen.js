import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Callout } from 'react-native-maps';
import React from "react"
import { useSelector } from "react-redux";
import { selectSearchInput, selectSearchKeyWord, selectTorontData } from "../slices/navSlice";
import Search from "../components/search";
import { useEffect, useState } from "react";


const MapScreen = ({ navigation }) => {

  const artData = useSelector(selectTorontData)
  const searchKeyWord = useSelector(selectSearchKeyWord)
  const searchInput = useSelector(selectSearchInput)
  const [showData, setShowData] = useState([])

  useEffect(() => {
    if (artData) {
      if (searchInput === "") {
        setShowData(artData)
      } else {
        if (searchKeyWord === "Title") {
          setShowData(artData.filter(item => item.Title.includes(searchInput)))
        } else if (searchKeyWord === "Location") {
          setShowData(artData.filter(item => item.Location.includes(searchInput)))
        } else {
          setShowData(artData.filter(item => item.Artist.includes(searchInput)))
        }
      }
    }
  }, [searchInput, searchKeyWord])

  return (
    <View>
      <Search />
      <MapView
        initialRegion={{
          latitude: 43.641168,
          longitude: -79.388033,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={styles.mapStyle}>
        {showData && showData.map((item) => (
          <Marker
            coordinate={{
              latitude: JSON.parse(item.geometry).coordinates[1],
              longitude: JSON.parse(item.geometry).coordinates[0]
            }}
            key={item._id}>
            <Callout>
              <View style={styles.markerCard}>
                <Text>
                  {item.Title}
                </Text>
                <Image source={{ uri: item.ImageURL }} style={styles.markerImage} />
                <Text style={styles.markerArtist}>
                  by {item.Artist}
                </Text>
                <Text style={styles.markerLocation}>
                  {item.Location}
                </Text>
                <TouchableOpacity style={styles.detailButton} onPress={() => navigation.push("Detail", item)}>
                  <Text style={styles.detailButtonText}>
                    Detail→
                  </Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: "100%",
  },
  headerItem: {
    padding: 5
  },
  markerCard: {
    width: 150,
    height: 220,
    alignItems: "center"
  },
  markerTitle: {

  },
  markerImage: {
    width: 100,
    height: 100
  },
  markerArtist: {
    fontSize: 10,
    color: "lightgray"
  },
  markerLocation: {
    fontSize: 10
  },
  detailButton: {
    backgroundColor: "#000B49",
    padding: 5,
    width: 70,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 5
  },
  detailButtonText: {
    color: "white",
    fontSize: 13
  }
})

export default MapScreen;