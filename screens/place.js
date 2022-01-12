// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
// import { GOOGLE_MAPS_APIKEY } from "@env"
// import { useState } from "react"
// import MapViewDirections from "react-native-maps-directions";

// const PlaceScreen = ({ route, navigation }) => {

//   const item = route.params;
//   const [origin, setOrigin] = useState(null)

//   console.log(origin)

//   //   const origin = {latitude: 37.3318456, longitude: -122.0296002};
//  console.log(JSON.parse(item.geometry).coordinates[1].toFixed(4),JSON.parse(item.geometry).coordinates[0].toFixed(4))

//   return (
//     <View>
//       <Text>
//         It is place screen.
//       </Text>
//       <TouchableOpacity onPress={()=> navigation.push("PlaceTwo",{item: item, origin: origin})}>
//         <Text>
//           Hola
//         </Text>

//       </TouchableOpacity>
//       <MapView
//         initialRegion={{
//           latitude: JSON.parse(item.geometry).coordinates[1],
//           longitude: JSON.parse(item.geometry).coordinates[0],
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         style={styles.mapStyle}>
//         <Marker
//           coordinate={{
//             latitude: JSON.parse(item.geometry).coordinates[1].toFixed(7),
//             longitude: JSON.parse(item.geometry).coordinates[0].toFixed(7)
//           }}>
//         </Marker>

//         {origin && (
//             <Marker
//             coordinate={{latitude: origin.latitude, longitude: origin.longitude}}>
//           </Marker>
        
//         )}

//         {origin && (
//           <MapViewDirections
//             origin={{latitude: origin.latitude,longitude: origin.longitude}}
            
//             destination={{ latitude: JSON.parse(item.geometry).coordinates[0], longitude: JSON.parse(item.geometry).coordinates[1] }}
//             strokeWidth={3}
//             strokeColor="black"
//             apikey={GOOGLE_MAPS_APIKEY}
//           />
//         )}
//       </MapView>

//       <GooglePlacesAutocomplete
//         placeholder="Where ara you?"
//         nearbyPlacesAPI="GooglePlacesSearch"
//         debounce={400}
//         minLength={2}
//         fetchDetails={true}
//         enablePoweredByContainer={false}
//         query={{
//           key: GOOGLE_MAPS_APIKEY,
//           language: "en,"
//         }}
//         onPress={(data, details = null) => {
//           console.log(details.geometry.location.lat,"hola")
//           setOrigin({ latitude: details.geometry.location.lat, longitude: details.geometry.location.lng })
//         }}

//         styles={{
//           container: {
//             flex: 0,
//           },
//           textInput: {
//             fontSize: 17,
//           }
//         }}
//       />

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

// export default PlaceScreen;