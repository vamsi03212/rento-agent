import icons from "@/constant/icons";
import images from "@/constant/images";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProfileCard = () => {
  return (
    <View className="flex flex-row justify-center">
      <View className="flex flex-col items-center relative mt-5">
        <Image
          source={images.avatar}
          className="size-32 relative rounded-full"
        />
        <TouchableOpacity className="absolute bottom-9 -right-1">
          <Image
            source={icons.edit}
            style={{ tintColor: "#932537" }}
            className="size-7"
          />
        </TouchableOpacity>

        <Text style={{ fontFamily: "poppins-bold" }} className="text-xl mt-2">
          Vamsi
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
