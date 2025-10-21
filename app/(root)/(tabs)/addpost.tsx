import AddPropertyDetails from "@/features/owner/component/AddPropertyDetails";
import AmenitiesAndAdvanceForm from "@/features/owner/component/AmenitiesAndAdvanceForm";
import UploadImagesScreen from "@/features/owner/component/UploadImagesScreen";
import { useAddPostHook } from "@/features/owner/hooks/addpost.hook";
import TabSelector from "@/utils/TabSelector";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const tabs = ["Monthly", "Daily"];

const AddPost = () => {
  const {
    selectedTab,
    setSelectedTab,
    selectedScreen,
    setSelectedScreen,
    handleNextScreen,
    form,
    setForm,
    errors,
    handleChange,
    handleAmenitiesToggle,
  } = useAddPostHook();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              padding: 20,
              paddingBottom: 180,
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <TabSelector
              tabs={tabs}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              containerStyle={{ width: "100%" }}
              isDisplayBackBtn={selectedScreen !== "Property"}
              onBack={() => {
                if (selectedScreen === "Amenities")
                  setSelectedScreen("Property");
                else if (selectedScreen === "Advance Amount")
                  setSelectedScreen("Amenities");
                else if (selectedScreen === "Upload Images")
                  setSelectedScreen("Advance Amount");
                else if (selectedScreen === "Address")
                  setSelectedScreen("Upload Images");
              }}
            />

            {selectedScreen === "Property" && (
              <AddPropertyDetails
                form={form}
                errors={errors}
                handleChange={handleChange}
                onNext={() => handleNextScreen("Amenities")}
              />
            )}

            {selectedScreen === "Amenities" && (
              <AmenitiesAndAdvanceForm
                form={form}
                errors={errors}
                handleChange={handleChange}
                selectedAmenities={form.amenities}
                onToggleAmenity={handleAmenitiesToggle}
                onNext={() => handleNextScreen("Upload Images")}
              />
            )}
            {selectedScreen === "Upload Images" && (
              <UploadImagesScreen
                form={form}
                setForm={setForm}
                onNext={handleNextScreen}
              />
            )}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddPost;
