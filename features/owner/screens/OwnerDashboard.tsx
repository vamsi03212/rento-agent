import {
  DashboardCount,
  dashboardData,
} from "@/common/components/DashboardCount";
import ServiceTextCard from "@/common/components/ServiceCard";
import TextWithSeeAll from "@/common/components/TextWithSeeAll";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardPropertySlider from "../component/DashboarPropertySlider";
import { dummyServices } from "../data/dummy-services";
const OwnerDashboard = () => {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 24 - 16) / 2 - 9;

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["left", "right", "bottom"]}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 gap-4">
          <View className="flex-row flex-wrap  justify-between">
            {dashboardData.map((item) => (
              <View key={item.id} style={{ width: cardWidth }}>
                <DashboardCount item={item} />
              </View>
            ))}
          </View>
          <TextWithSeeAll title="Listed Properties" />

          <DashboardPropertySlider />
          <View />
          <TextWithSeeAll title="Services we provide" />
          <ServiceTextCard service={dummyServices} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OwnerDashboard;
