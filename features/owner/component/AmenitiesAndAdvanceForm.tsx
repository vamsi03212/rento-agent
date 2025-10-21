import AuthButton from "@/common/components/AuthButton";
import AuthInput from "@/common/components/AuthInput";
import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AddPropertyForm } from "../hooks/addpost.hook";

interface CombinedFormProps {
  form: AddPropertyForm;
  errors: Record<string, string>;
  handleChange: (field: string, value: string) => void;
  selectedAmenities: string[];
  onToggleAmenity: (amenity: string) => void;
  onNext: () => void;
}

const amenitiesOptions = [
  "AC",
  "Parking",
  "Garden",
  "Swimming",
  "WiFi",
  "Club",
];

const AmenitiesAndAdvanceForm: FC<CombinedFormProps> = ({
  form,
  errors,
  handleChange,
  selectedAmenities,
  onToggleAmenity,
  onNext,
}) => {
  return (
    <View className="flex-col gap-2">
      <View className="bg-white p-4 mt-6 rounded-2xl shadow-md">
        <Text className="text-lg mb-2" style={{ fontFamily: "poppins-medium" }}>
          Amenities
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {amenitiesOptions.map((amenity) => (
            <TouchableOpacity
              key={amenity}
              onPress={() => onToggleAmenity(amenity)}
              className={`px-3 py-2 rounded-lg ${
                selectedAmenities.includes(amenity)
                  ? "bg-primary-100"
                  : "bg-gray-200"
              }`}
            >
              <Text
                className={`text-sm ${
                  selectedAmenities.includes(amenity)
                    ? "text-white"
                    : "text-black"
                }`}
                style={{ fontFamily: "poppins-medium" }}
              >
                {amenity}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="bg-white p-4 rounded-2xl shadow-md gap-3">
        <Text className="text-lg mb-2" style={{ fontFamily: "poppins-medium" }}>
          Advance Amount
        </Text>
        <AuthInput
          placeholder="Enter Advance Amount"
          value={form.advanceAmount}
          onChangeText={(v) => handleChange("advanceAmount", v)}
          error={errors.advanceAmount}
          keyboardType="numeric"
        />
        <AuthInput
          placeholder="No of Months Advance"
          value={form.noOfMonthsAdvance}
          onChangeText={(v) => handleChange("noOfMonthsAdvance", v)}
          error={errors.noOfMonthsAdvance}
          keyboardType="numeric"
        />
        <AuthInput
          placeholder="Maintenance"
          value={form.maintenance}
          onChangeText={(v) => handleChange("maintenance", v)}
          error={errors.maintenance}
          keyboardType="numeric"
        />
        <AuthInput
          placeholder="Rent Amount"
          value={form.rentAmount}
          onChangeText={(v) => handleChange("rentAmount", v)}
          error={errors.rentAmount}
          keyboardType="numeric"
        />
      </View>

      <AuthButton title="Next" onPress={onNext} />
    </View>
  );
};

export default AmenitiesAndAdvanceForm;
