// import { ScrollView, Text, View, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { setTorontData, selectSearchKeyWord, selectSearchInput, selectShowData, selectTorontData, setShowData } from "../slices/navSlice";


// const Category = ({ navigation }) => {

//   const [showData, setShowData] = useState(null)

//   return (
//     <View style={styles.container}>
//       {showData && (
//         <FlatList
//           horizontal
//           data={showData}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <View style={styles.categoryItemSet}>
//               <TouchableOpacity onPress={() => navigation.push("Detail", item)}>
//                 <Image source={{ uri: item.ImageURL }} style={styles.imageStyle} />
//               </TouchableOpacity>
//             </View>
//           )}
//           keyExtractor={(item) => item.Title}>
//         </FlatList>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // paddingVertical: 5,
//     borderBottomColor: "gray",
//     borderBottomWidth: 1,
//     borderTopColor: "gray",
//     borderTopWidth: 1
//   },
//   imageStyle: {
//     width: 70,
//     height: 70,
//     borderRadius: 35
//   },
//   categoryItemSet: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 5
//   }
// })

// export default Category;