import Card from "@/common/components/Card";
import React from "react";
import { View } from "react-native";

const DashboardPropertySlider = () => {
  const data = [1, 2, 3, 4, 5, 6];
  // const screenWidth = Dimensions.get("window").width;

  return (
    <View className="flex flex-row flex-wrap justify-between gap-4">
      {data?.map((item) => (
        <View key={item} style={{ width: "47%" }}>
          <Card />
        </View>
      ))}
    </View>
  );
};

export default DashboardPropertySlider;
