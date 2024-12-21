import { View, Text } from "react-native";
import { Link } from "expo-router";
import React from "react";

const Tabs = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="font-bold text-4xl text-orange-700 font-rubik">Test</Text>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>Expore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Property</Link>
    </View>
  );
};

export default Tabs;
