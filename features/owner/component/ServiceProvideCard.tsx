import React from "react";
import { Dimensions, Text, View } from "react-native";

interface ServiceProvideCardProps {
  services: string[];
}

const ServiceProvideCard: React.FC<ServiceProvideCardProps> = ({
  services,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const containerPadding = 16;
  const gap = 16;
  const cardWidth = (screenWidth - containerPadding * 2 - gap) / 2 - 8;

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      {services.map((service, index) => (
        <View
          key={index}
          style={{
            width: cardWidth,
            height: 165,
            marginBottom: 16,
          }}
          className="flex flex-col justify-center items-center gap-1"
        >
          <View className="w-full h-[120px] bg-gray-100 rounded-md flex justify-center items-center" />
          <Text
            className="text-center text-base"
            style={{ fontFamily: "poppins-semi-bold" }}
          >
            {service}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ServiceProvideCard;
