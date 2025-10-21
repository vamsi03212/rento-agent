import TabIcon from "@/common/components/TabIcon";
import { Tabs } from "expo-router";
import { Armchair, Home, User } from "lucide-react-native";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#FF80000A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="addpost"
        options={{
          title: "Add Post",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={Armchair} title="Post" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} Icon={User} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
