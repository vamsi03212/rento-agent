import { FC } from "react";
import { Text, View } from "react-native";

type TabIconTypes = {
  focused: boolean;
  Icon: FC<{ color?: string; size?: number }>;
  title: string;
};

const TabIcon: FC<TabIconTypes> = ({ focused, Icon, title }) => {
  return (
    <View className="flex-1  mt-3 flex flex-col items-center">
      <Icon color={focused ? "#932537" : "#666876"} size={24} />
      <Text
        className={`${
          focused
            ? "text-primary-100 font-poppins-extra-bold"
            : "text-black-200 font-poppins-regular"
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;
