import AuthButton from "@/common/components/AuthButton";
import AuthInput from "@/common/components/AuthInput";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { AddPropertyForm, ScreenType } from "../hooks/addpost.hook";

interface AddPropertyDetailsProps {
  form: AddPropertyForm;
  errors: Record<string, string>;
  handleChange: (field: string, value: string) => void;
  onNext: (nextScreen: ScreenType) => void;
}

const AddPropertyDetails: FC<AddPropertyDetailsProps> = ({
  form,
  errors,
  handleChange,
  onNext,
}) => {
  return (
    <View className="flex-col gap-2">
      <View className="mt-6 flex-col gap-4 bg-white p-4 rounded-2xl shadow-md">
        <Text className="text-lg mb-2" style={{ fontFamily: "poppins-medium" }}>
          Property Details
        </Text>

        <AuthInput
          placeholder="Property Type"
          value={form.propertyType}
          onChangeText={(v) => handleChange("propertyType", v)}
          error={errors.propertyType}
        />

        <View className="flex-row gap-4">
          <View className="flex-1">
            <AuthInput
              placeholder="Bedrooms"
              value={form.bedrooms}
              onChangeText={(v) => handleChange("bedrooms", v)}
              error={errors.bedrooms}
              keyboardType="numeric"
            />
          </View>
          <View className="flex-1">
            <AuthInput
              placeholder="Bathrooms"
              value={form.bathrooms}
              onChangeText={(v) => handleChange("bathrooms", v)}
              error={errors.bathrooms}
              keyboardType="numeric"
            />
          </View>
        </View>

        <AuthInput
          placeholder="Semi Furnished (Yes/No)"
          value={form.semiFurnished}
          onChangeText={(v) => handleChange("semiFurnished", v)}
        />
        <AuthInput
          placeholder="Floors"
          value={form.floors}
          onChangeText={(v) => handleChange("floors", v)}
          keyboardType="numeric"
        />
        <AuthInput
          placeholder="Facing"
          value={form.facing}
          onChangeText={(v) => handleChange("facing", v)}
        />
      </View>

      {/* Nearby Section */}
      <View className="mt-6 flex-col gap-4 bg-white p-4 rounded-2xl shadow-md">
        <Text className="text-lg mb-2" style={{ fontFamily: "poppins-medium" }}>
          Nearby
        </Text>
        <AuthInput
          placeholder="School Name"
          value={form.nearbySchool}
          onChangeText={(v) => handleChange("nearbySchool", v)}
        />
        <AuthInput
          placeholder="Hospital"
          value={form.nearbyHospital}
          onChangeText={(v) => handleChange("nearbyHospital", v)}
        />
        <AuthInput
          placeholder="Mall / Market"
          value={form.nearbyMall}
          onChangeText={(v) => handleChange("nearbyMall", v)}
        />
      </View>

      <AuthButton onPress={() => onNext("Amenities")} title="Next" />
    </View>
  );
};

export default AddPropertyDetails;
