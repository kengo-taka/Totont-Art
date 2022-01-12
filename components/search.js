import { Text, View, StyleSheet, Picker,TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useEffect, useState } from "react"
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchKeyWord, selectSearchKeyWord, setSearchInput, selectSearchInput, setShowData, selectTorontData, setTorontData } from "../slices/navSlice";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Search = () => {

  const [searchWord, setSearchWord] = useState("")
  const [searchKey, setSearchKey] = useState("Title")
  const dispatch = useDispatch()
  const searchInput = useSelector(selectSearchInput)
  const searchKeyWord = useSelector(selectSearchKeyWord)
  const artData = useSelector(selectTorontData)

  useEffect(() => {
    Promise.all([fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=978ac0af-4bbb-4485-98b8-451b8e5e5229")
      .then(res => res.json())
      //   ,
      // fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=978ac0af-4bbb-4485-98b8-451b8e5e5229&offset=100")
      //   .then(res => res.json()),
      // fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=978ac0af-4bbb-4485-98b8-451b8e5e5229&offset=200")
      //   .then(res => res.json()),
      // fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=978ac0af-4bbb-4485-98b8-451b8e5e5229&offset=300")
      //   .then(res => res.json()),
      // fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=978ac0af-4bbb-4485-98b8-451b8e5e5229&offset=400")
      //   .then(res => res.json())
    ])
      .then((data) => {
        let temp = []
        data.forEach((item) => {
          item.result.records.forEach((eachItem) => {
            temp.push(eachItem)
          })
        })
        dispatch(setTorontData(temp))
        dispatch(setShowData(temp))
        console.log("hola",temp)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.searchKeySet}>
        <TouchableOpacity style={searchKey === "Title" ? styles.eachKey : styles.searchKeyOff} onPress={() => {
          dispatch(setSearchKeyWord("Title"))
          setSearchKey("Title")
        }}>
          <Text style={searchKey === "Title" ? styles.searchKeyButton : styles.searchKeyTextPOff}>
            Title
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={searchKey === "Location" ? styles.eachKey : styles.searchKeyOff} onPress={() => {
          dispatch(setSearchKeyWord("Location"))
          setSearchKey("Location")
        }}>
          <Text style={searchKey === "Location" ? styles.searchKeyButton : styles.searchKeyTextPOff}>
            Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={searchKey === "Artist" ? styles.eachKey : styles.searchKeyOff} onPress={() => {
          dispatch(setSearchKeyWord("Artist"))
          setSearchKey("Artist")
        }}>
          <Text style={searchKey === "Artist" ? styles.searchKeyButton : styles.searchKeyTextPOff}>
            Artist
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchInputSet}>
        <TextInput style={styles.textInput} placeholder={"Search by " + searchKey} onChangeText={(text) => setSearchWord(text)}
          defaultValue={searchInput}></TextInput>
        <TouchableOpacity onPress={() => { dispatch(setSearchInput(searchWord)) 
        // setShowAction()
        }}>

          <IconAntDesign name={"search1"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10,
    backgroundColor: "white",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1
  },
  searchKeySet: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  searchKeyButton: {
    color: "white",
    fontSize: 13
  },
  eachKey: {
    backgroundColor: "#000B49",
    padding: 3,
    borderRadius: 20,
    width: 90,
    alignItems: "center"
  },
  searchKeyOff: {
    backgroundColor: "white",
    padding: 3,
    borderRadius: 20,
    width: 90,
    alignItems: "center"
  },
  searchKeyTextPOff: {
    color: "#000B49",
    fontSize: 13
  },
  textInput: {
    width: "80%",
    height: 40,
    backgroundColor: "#E8E8E8",
    marginRight: 10,
    marginLeft: 15,

  },
  searchInputSet: {
    flexDirection: "row",
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    margin: 10
  },

})


export default Search;