import { Feather } from "@expo/vector-icons";
import { FC, useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";

interface AuthInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
}

const AuthInput: FC<AuthInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry = false,
  multiline = false,
  style,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full mb-1">
      {label && (
        <Text
          className="mb-2 text-base text-black"
          style={{ fontFamily: "poppins-medium" }}
        >
          {label}
        </Text>
      )}

      <View
        className={`w-full px-4 rounded-lg bg-[#f5f5f5] border flex-row items-center ${
          error ? "border-red-400" : "border-transparent"
        }`}
        style={{
          minHeight: multiline ? 70 : 55,
          alignItems: multiline ? "flex-start" : "center",
          paddingVertical: multiline ? 8 : 0,
        }}
      >
        <TextInput
          className="flex-1 text-black"
          placeholder={placeholder}
          placeholderTextColor="#9ca3af"
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          secureTextEntry={secureTextEntry && !showPassword}
          textAlignVertical={multiline ? "top" : "center"} // 👈 important
          style={[{ flex: 1, padding: 0 }, style]}
          {...rest}
        />

        {secureTextEntry && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#6b7280"
            />
          </Pressable>
        )}
      </View>

      {error ? (
        <Text className="text-red-500 mt-1 text-sm">{error}</Text>
      ) : null}
    </View>
  );
};

export default AuthInput;
