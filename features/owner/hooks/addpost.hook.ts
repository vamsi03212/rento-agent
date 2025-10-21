import { useState } from "react";
// import { ScreenType } from "./types";

export type ScreenType =
  | "Property"
  | "Amenities"
  | "Advance Amount"
  | "Upload Images"
  | "Address";

export interface AddPropertyForm {
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  semiFurnished: string;
  floors: string;
  facing: string;
  nearbySchool: string;
  nearbyHospital: string;
  nearbyMall: string;
  amenities: string[]; // ✅ array of strings
  advanceAmount: string;
  noOfMonthsAdvance: string;
  maintenance: string;
  rentAmount: string;
  images: string[];
}

export const useAddPostHook = () => {
  const [selectedTab, setSelectedTab] = useState("Monthly");
  const [selectedScreen, setSelectedScreen] = useState<ScreenType>("Property");

  const [form, setForm] = useState({
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    semiFurnished: "",
    floors: "",
    facing: "",
    nearbySchool: "",
    nearbyHospital: "",
    nearbyMall: "",
    amenities: [] as string[],
    advanceAmount: "",
    noOfMonthsAdvance: "",
    maintenance: "",
    rentAmount: "",
    images: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmenitiesToggle = (amenity: string) => {
    setForm((prev) => {
      const amenities = prev?.amenities?.includes(amenity)
        ? prev?.amenities?.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };

  const handleNextScreen = (screen: ScreenType) => {
    setSelectedScreen(screen);
  };

  return {
    selectedTab,
    setSelectedTab,
    selectedScreen,
    setSelectedScreen,
    form,
    setForm,
    errors,
    handleChange,
    handleAmenitiesToggle,
    handleNextScreen,
  };
};
