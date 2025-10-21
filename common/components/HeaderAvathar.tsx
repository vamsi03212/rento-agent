import icons from "@/constant/icons";
import { Image, Text, View } from "react-native";

const HeaderAvathar = () => {
  return (
    <View className="flex flex-row items-center justify-between mt-5">
      <View className="flex flex-row">
        <Text className="size-12 rounded-full bg-gray-200"></Text>
        <View className="flex flex-col items-start ml-2 justify-center">
          <Text className="text-xs font-poppins-regular text-black-100">
            Good Morning
          </Text>
          <Text
            style={{ fontFamily: "poppins-semi-bold" }}
            className="text-base font-poppins-medium text-black-300 -mt-1"
          >
            Vamsi
          </Text>
        </View>
      </View>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};

export default HeaderAvathar;
