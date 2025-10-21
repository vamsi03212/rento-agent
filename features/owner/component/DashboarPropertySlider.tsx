import Card from "@/common/components/Card";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";

const DashboardPropertySlider = () => {
  const data = [1, 2, 3];
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.7;
  const cardMargin = 12;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: "flex-start",
      }}
    >
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            width: cardWidth,
            marginRight: cardMargin,
          }}
        >
          <Card />
        </View>
      ))}
    </ScrollView>
  );
};

export default DashboardPropertySlider;
