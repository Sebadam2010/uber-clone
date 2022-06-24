import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import NavigateCard from "../components/NavigateCard";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionsCard from "../components/RideOptionsCard";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View
        style={tw`bg-gray-100 absolute top-12 left-4 p-3 rounded-full shadow-lg `}
      >
        <TouchableOpacity
          style={tw`z-50`}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Icon name="menu" />
        </TouchableOpacity>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
