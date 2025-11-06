import { useLocationDataHook } from "@/common/hooks/useLocationDataHook";
import { useAuthStore } from "@/features/auth/store/useAuthStore";
import { useState } from "react";
import { Errors } from "../validations/profileValidation";

export type FormFields = {
  first_name: string;
  last_name: string;
  email: string;
  area: string;
  city: string;
  country: string;
  upload_document: string;
  role: string;
};
export const useProfileScreenHook = () => {
  const { user, updateUser } = useAuthStore();

  const { countries, setCitySuggestions, setShowCitySuggestions } =
    useLocationDataHook();

  const [isEditing, setIsEditing] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [form, setForm] = useState<FormFields>({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    area: user?.area || "",
    city: user?.city || "",
    country: user?.country || "",
    upload_document: user?.upload_document || "",
    role: user?.role || "",
  });
  const originalForm = { ...form };
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = <K extends keyof FormFields>(key: K, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));

    if (key === "country") {
      setForm((prev) => ({ ...prev, city: "" }));
      setCitySuggestions([]);
      setShowCitySuggestions(false);
    }

    if (key === "area") {
      setShowCitySuggestions(false);
      setCitySuggestions([]);
    }
  };
  const handleCancelEdit = () => {
    setForm(originalForm);
    setErrors({});
    setIsEditing(false);
  };
  const handleSubmit = async () => {};

  return {
    form,
    handleChange,
    isEditing,
    loading,
    errors,
    setIsEditing,
    handleSubmit,
    handleCancelEdit,
    setForgotPasswordModal,
    //
    countries,
    forgotPasswordModal,
  };
};
