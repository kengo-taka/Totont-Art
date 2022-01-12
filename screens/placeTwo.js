// import { View, Text, StyleSheet } from "react-native";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
// import { GOOGLE_MAPS_APIKEY } from "@env"
// import { useState } from "react"
// import MapViewDirections from "react-native-maps-directions";

// const PlaceTwoScreen = ({ route, navigation }) => {

//   const item = route.params;
//   // const [origin, setOrigin] = useState(null)
  
//   // console.log(origin)

//   //   const origin = {latitude: 37.3318456, longitude: -122.0296002};
// //  console.log(JSON.parse(item.geometry).coordinates[1].toFixed(4),JSON.parse(item.geometry).coordinates[0].toFixed(4))

//   return (
//     <View>
//       <Text>
//         It is place screen.
//       </Text>
//       <MapView
//         initialRegion={{
//           latitude: JSON.parse(item.item.geometry).coordinates[1],
//           longitude: JSON.parse(item.item.geometry).coordinates[0],
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         style={styles.mapStyle}>
//         <Marker
//           coordinate={{
//             latitude: JSON.parse(item.item.geometry).coordinates[1],
//             longitude: JSON.parse(item.item.geometry).coordinates[0]
//           }}>
//         </Marker>

       
//             <Marker
//             coordinate={{latitude: item.origin.latitude, longitude: item.origin.longitude}}>
//           </Marker>
        

        
//           <MapViewDirections
//             origin={{latitude: item.origin.latitude,longitude: item.origin.longitude}}
            
//             destination={{ latitude: JSON.parse(item.item.geometry).coordinates[0], longitude: JSON.parse(item.item.geometry).coordinates[1] }}
//             strokeWidth={3}
//             strokeColor="black"
//             apikey={GOOGLE_MAPS_APIKEY}
//           />
    
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mapStyle: {
//     width: "100%",
//     height: 200,
//     marginTop: 20
//   },
// })

// export default PlaceTwoScreen;