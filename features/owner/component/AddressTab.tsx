// AddressTab.tsx
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

interface AddressTabProps {
  form: {
    country: string;
    location: string;
    area: string;
    latitude?: number;
    longitude?: number;
  };
  handleChange: (field: string, value: string) => void;
  onNext: () => void;
}

const AddressTab: React.FC<AddressTabProps> = ({
  form,
  handleChange,
  onNext,
}) => {
  const [region, setRegion] = useState<Region>({
    latitude: form.latitude || 37.78825,
    longitude: form.longitude || -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // Get user's current location on mount
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const loc = await Location.getCurrentPositionAsync({});
      setRegion((prev) => ({
        ...prev,
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      }));
      handleChange("latitude", loc.coords.latitude.toString());
      handleChange("longitude", loc.coords.longitude.toString());
      await updateAddressFromCoords(loc.coords.latitude, loc.coords.longitude);
    })();
  }, []);

  // Update address fields from coordinates
  const updateAddressFromCoords = async (lat: number, lng: number) => {
    try {
      const [address] = await Location.reverseGeocodeAsync({
        latitude: lat,
        longitude: lng,
      });
      handleChange("country", address.country || "");
      handleChange("location", address.city || address.region || "");
      handleChange("area", address.name || "");
    } catch (err) {
      console.log("Reverse geocode error:", err);
    }
  };

  const onMarkerDragEnd = (e: {
    nativeEvent: { coordinate: { latitude: number; longitude: number } };
  }) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setRegion((prev) => ({ ...prev, latitude, longitude }));
    handleChange("latitude", latitude.toString());
    handleChange("longitude", longitude.toString());
    updateAddressFromCoords(latitude, longitude);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 180 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-col gap-4">
          <Text
            className="text-lg mb-2"
            style={{ fontFamily: "poppins-medium" }}
          >
            Address Details
          </Text>

          {/* Input fields */}
          <TextInput
            placeholder="Country"
            value={form.country}
            onChangeText={(v) => handleChange("country", v)}
            className="w-full h-[50px] px-4 rounded-lg bg-gray-100 text-black"
          />
          <TextInput
            placeholder="Location / City"
            value={form.location}
            onChangeText={(v) => handleChange("location", v)}
            className="w-full h-[50px] px-4 rounded-lg bg-gray-100 text-black"
          />
          <TextInput
            placeholder="Area / Street"
            value={form.area}
            onChangeText={(v) => handleChange("area", v)}
            className="w-full h-[50px] px-4 rounded-lg bg-gray-100 text-black"
          />

          {/* Map */}
          <View className="w-full h-[300px] rounded-xl overflow-hidden mt-4">
            <MapView
              style={{ flex: 1 }}
              region={region}
              onRegionChangeComplete={(r) => setRegion(r)}
            >
              <Marker
                draggable
                coordinate={{
                  latitude: region.latitude,
                  longitude: region.longitude,
                }}
                onDragEnd={onMarkerDragEnd}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressTab;
