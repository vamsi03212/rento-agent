import AuthButton from "@/common/components/AuthButton";
import AuthInput from "@/common/components/AuthInput";
import ModalUI, { BaseModalProps } from "@/common/components/ModalUi";
import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { apiWrapper } from "@/lib/api-wrapper";
import { API } from "@/lib/url";
import { FC, useState } from "react";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
}

const ChangePasswordModal: FC<BaseModalProps> = ({ open, onClose }) => {
  const { user } = useAuthStore();
  const [form, setForm] = useState<ChangePasswordForm>({
    currentPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: keyof ChangePasswordForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!form.currentPassword.trim()) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!form.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
    } else if (form.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      Toast.show({
        type: "error",
        text1: "Please fix the highlighted errors",
        position: "bottom",
        visibilityTime: 2000,
      });
      return;
    }

    try {
      setIsLoading(true);
      const { status, data } = await apiWrapper(
        () =>
          API.put(`/api/auth/update-password/${user?.id}`, {
            password: form.currentPassword,
            newPassword: form.newPassword,
          }),
        { toastPosition: "top" }
      );

      if (!status || !data) return;

      Toast.show({
        type: "success",
        text1: "Password changed successfully!",
        position: "bottom",
        visibilityTime: 2000,
      });

      setForm({ currentPassword: "", newPassword: "" });
      onClose();
    } catch (err) {
      console.log("Change password error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ModalUI
      open={open}
      onClose={onClose}
      isBottomSheet
      bgColor="#fff"
      padding={25}
    >
      <View className="gap-2">
        <Text
          className="text-xl text-black mb-6"
          style={{ fontFamily: "poppins-semi-bold" }}
        >
          Change Password
        </Text>

        <AuthInput
          label="Current Password"
          placeholder="Enter current password"
          value={form.currentPassword}
          onChangeText={(text) => handleChange("currentPassword", text)}
          error={errors.currentPassword}
          secureTextEntry
        />

        <AuthInput
          label="New Password"
          placeholder="Enter new password"
          value={form.newPassword}
          onChangeText={(text) => handleChange("newPassword", text)}
          error={errors.newPassword}
          secureTextEntry
        />

        <View className="mt-4">
          <AuthButton
            title="Update Password"
            onPress={handleSubmit}
            isLoading={isLoading}
          />
        </View>
      </View>
    </ModalUI>
  );
};

export default ChangePasswordModal;
