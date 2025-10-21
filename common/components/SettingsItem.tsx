import { ChevronRight } from "lucide-react-native";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SettingsItemProp {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3"
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text
          style={{ fontFamily: "poppins-medium" }}
          className={`text-base text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <ChevronRight size={18} />}
    </TouchableOpacity>
  );
};

export default SettingsItem;
