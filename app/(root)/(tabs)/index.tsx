import HeaderAvathar from "@/common/components/HeaderAvathar";
import TextWithSeeAll from "@/common/components/TextWithSeeAll";
import DashboardPropertySlider from "@/features/owner/component/DashboarPropertySlider";
import ServiceProvideCard from "@/features/owner/component/ServiceProvideCard";
import { DashboardCount, dashboardData } from "@/utils/DashboardCount";
import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 24 - 16) / 2 - 9;

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 gap-4">
          <HeaderAvathar />
          <View className="flex-row flex-wrap p-3 justify-between">
            {dashboardData.map((item) => (
              <View key={item.id} style={{ width: cardWidth }}>
                <DashboardCount item={item} />
              </View>
            ))}
          </View>
          <TextWithSeeAll title="Listed Properties" />

          <DashboardPropertySlider />
          <TextWithSeeAll title="Services we provide" />
          <ServiceProvideCard
            services={[
              "AC Repair",
              "Plumber",
              "General Handyman",
              "Appliances Repair",
              "Washing Machine",
              "Paint",
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
