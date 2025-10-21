import icons from "@/constant/icons";
import { FC } from "react";
import { Image, Text, View } from "react-native";

interface HeaderTypes {
  title: string;
}

const Header: FC<HeaderTypes> = ({ title }) => {
  return (
    <View className="w-full flex flex-row justify-between items-center mt-5">
      <Text className="text-base" style={{ fontFamily: "poppins-medium" }}>
        {title}
      </Text>
      <Image source={icons.bell} className="size-6" />
    </View>
  );
};

export default Header;
