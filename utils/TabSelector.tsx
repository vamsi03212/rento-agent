import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

interface TabSelectorProps {
  tabs: string[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
  containerStyle?: object;
  isDisplayBackBtn?: boolean;
  onBack?: () => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  selectedTab,
  onTabChange,
  containerStyle,
  isDisplayBackBtn = false,
  onBack,
}) => {
  return (
    <View style={[containerStyle]} className="flex flex-row items-center gap-2">
      {isDisplayBackBtn && (
        <Pressable
          onPress={onBack}
          className="w-14 h-14 bg-primary-200 rounded-full overflow-hidden flex justify-center items-center "
        >
          <ChevronLeft />
        </Pressable>
      )}
      <View
        style={[
          {
            flexDirection: "row",
            backgroundColor: "#E5E5E5",
            borderRadius: 50,
            padding: 2,
            flex: 1,
          },
        ]}
      >
        {tabs.map((tab) => {
          const isActive = selectedTab === tab;
          return (
            <TouchableOpacity
              key={tab}
              onPress={() => onTabChange(tab)}
              style={{
                flex: 1,
                paddingVertical: 10,
                borderRadius: 50,
                backgroundColor: isActive ? "#932537" : "transparent",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: isActive ? "#fff" : "#333",
                  fontFamily: isActive ? "poppins-bold" : "poppins-medium",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabSelector;
