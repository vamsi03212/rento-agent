import icons from "@/constant/icons";
import images from "@/constant/images";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CardTypes {
  item?: string;
  onPress?: () => void;
}

const Card: FC<CardTypes> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-1 px-3 py-4 bg-white shadow-lg relative rounded-md overflow-hidden"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image
          style={{ tintColor: "#932537" }}
          source={icons.star}
          className="size-2.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.3
        </Text>
      </View>
      <Image source={images.feature1} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text
          style={{ fontFamily: "poppins-medium" }}
          className="text-base text-black-300"
        >
          first properties
        </Text>
        <Text
          style={{ fontFamily: "poppins-regular" }}
          className="text-xs text-black-100"
        >
          address
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text
            style={{ fontFamily: "poppins-bold" }}
            className="text-base text-primary-100"
          >
            $3000
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
