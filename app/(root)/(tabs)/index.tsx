import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="font-bold text-4xl text-orange-700 font-rubik">
        Welcome to ReState
      </Text>
    </View>
  );
};

export default Home;
