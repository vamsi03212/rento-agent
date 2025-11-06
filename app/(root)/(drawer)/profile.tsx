import Header from "@/common/components/Header";
import ProfileCard from "@/common/components/ProfileCard";
import SettingsItem from "@/common/components/SettingsItem";
import { settings } from "@/constant/data";
import icons from "@/constant/icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const handleLogout = () => router.push("/property/2");
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <Header title="Profile" />
        <ProfileCard />
        <View className="flex flex-col ">
          {settings?.map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col  mt-5 pt-5">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
