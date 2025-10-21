import icons from "@/constant/icons";
import images from "@/constant/images";
import { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FeatureCardTypes {
  item?: string;
  onPress?: () => void;
}

const FeaturedCard: FC<FeatureCardTypes> = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={images.feature1} className="size-full rounded-2xl" />

      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image
          source={icons.star}
          style={{ tintColor: "#932537" }}
          className="size-3.5"
        />
        <Text className="text-xs font-poppins-bold text-primary-300 ml-1">
          4.5
        </Text>
      </View>
      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-poppins-extra-bold text-white"
          numberOfLines={1}
          style={{ fontFamily: "poppins-medium" }}
        >
          Merialla Villa
        </Text>
        <Text
          style={{ fontFamily: "poppins-regular" }}
          className="text-sm text-white"
          numberOfLines={2}
        >
          New York, US
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-lg  text-white"
            style={{ fontFamily: "poppins-bold" }}
          >
            $12219
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
