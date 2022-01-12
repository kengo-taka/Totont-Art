import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchKeyWord, selectSearchInput, selectShowData, selectShowState, selectTorontData } from "../slices/navSlice";
const ShowList = ({ navigation }) => {

  const artData = useSelector(selectTorontData)
  const showState = useSelector(selectShowState)
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
    <View style={styles.container}>
      {showData && (showData.length === 0 && (
        <View style={styles.noResult}>
          <Text>
            No result
          </Text>
        </View>
      ))}

      {showState === "list" ? (
        <FlatList
          data={showData}
          renderItem={({ item }) => (
            <View style={styles.eachItem}>
              <Image source={{ uri: item.ImageURL }} style={styles.imageStyle} />
              <View style={styles.itemTextSet}>
                <Text style={styles.title}>{item.Title}</Text>
                <Text style={styles.artistName}>by {item.Artist}</Text>
                <Text style={styles.location}>{item.Location}</Text>
                <TouchableOpacity style={styles.detailButton}
                  onPress={() => navigation.push("Detail", item)}>
                  <Text style={styles.detailButtonText}>
                    Detail→
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id}>
        </FlatList>) : (
        <ScrollView style={styles.scroll}>
          <View style={styles.blockContainer}>
            {showData &&
              showData.map((item) => {
                return (
                  <TouchableOpacity onPress={() => navigation.push("Detail", item)} style={styles.block} key={item._id}>
                    <Image source={{ uri: item.ImageURL }} style={styles.blockImage} />
                    <View style={styles.blockTitle}>
                      <Text >{item.Title}</Text>
                    </View>
                    <View style={styles.blockArtist}>
                      <Text style={styles.blockArtistText}>{item.Artist}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </ScrollView>
      )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 150,
    backgroundColor: "#E8E8E8"
  },
  noResult: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  imageStyle: {
    width: 300,
    height: 150,
  },
  eachItem: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 10,
    paddingVertical: 10,
  },
  itemTextSet: {
    width: 300
  },
  title: {
    fontSize: 16,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  artistName: {
    color: "gray",
    fontSize: 12
  },
  location: {
    fontSize: 12
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
  },
  blockContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  block: {
    width: "50%",
    height: 190,
    alignItems: "center",
    marginTop: 20,
  },
  blockImage: {
    width: "90%",
    height: 100
  },
  scroll: {
    width: "100%",
  },
  blockTitle: {
    width: "90%",
  },
  blockArtist: {
    width: "90%",
  },
  blockArtistText: {
    color: "gray"
  }
})
export default ShowList;