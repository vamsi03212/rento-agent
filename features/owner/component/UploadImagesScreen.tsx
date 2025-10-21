import AuthButton from "@/common/components/AuthButton";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { ScreenType } from "../hooks/addpost.hook";
import ImagePickerGrid from "./ImagePickerGrid";

interface UploadImagesScreenProps {
  form: {
    images: string[];
    [key: string]: any;
  };
  setForm: React.Dispatch<React.SetStateAction<any>>;
  onNext: (nextScreen: ScreenType) => void;
}

const UploadImagesScreen: FC<UploadImagesScreenProps> = ({
  form,
  setForm,
  onNext,
}) => {
  return (
    <View className="flex-col gap-4 bg-white p-4 rounded-2xl shadow-md mt-6">
      <Text className="text-lg mb-2" style={{ fontFamily: "poppins-medium" }}>
        Upload Images
      </Text>

      <ImagePickerGrid
        images={form.images}
        onChange={(imgs) => setForm((prev: any) => ({ ...prev, images: imgs }))}
        maxImages={6}
      />

      <AuthButton title="Next" onPress={() => onNext("Address")} />
    </View>
  );
};

export default UploadImagesScreen;
