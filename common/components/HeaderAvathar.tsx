import { useLocationHook } from "@/lib/location.hook";
// import { useAuthStore } from "@/stores/useAuthStore";
import { ChevronDown, MapPin } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const HeaderAvathar = () => {
  // const user = useAuthStore((state) => state.user);
  const user = { first_name: "Buyer" };

  const { fullAddress } = useLocationHook();
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const getGreeting = () => {
      const now = new Date();
      const indiaHour = (now.getUTCHours() + 5.5) % 24;

      if (indiaHour >= 5 && indiaHour < 12) return "Good Morning";
      if (indiaHour >= 12 && indiaHour < 17) return "Good Afternoon";
      if (indiaHour >= 17 && indiaHour < 21) return "Good Evening";
      return "Good Night";
    };

    setGreeting(getGreeting());

    const interval = setInterval(() => setGreeting(getGreeting()), 1800000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex flex-row items-center justify-between">
      <View className="w-[40%] flex flex-row">
        <View className="flex flex-col items-start -mb-1 justify-center">
          <Text className="text-[10px] font-poppins-regular text-black-100">
            {greeting}
          </Text>
          <Text
            style={{ fontFamily: "poppins-semi-bold" }}
            className="text-[14px] font-poppins-medium text-black-300 -mt-1"
          >
            {user?.first_name ?? "Have Nice Day"}
          </Text>
        </View>
      </View>
      <Pressable className="w-[55%] flex flex-row gap-1 items-center">
        <MapPin size={18} color={"#666876"} />
        <Text
          className="text-sm w-[80%] text-black-200"
          style={{ fontFamily: "poppins-regular" }}
          numberOfLines={1}
        >
          {fullAddress}
        </Text>
        <ChevronDown size={18} color={"#191D31"} />
      </Pressable>
    </View>
  );
};

export default HeaderAvathar;
