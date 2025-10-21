import { FC } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface AuthInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
}

const AuthInput: FC<AuthInputProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry = false,
  ...rest
}) => {
  return (
    <View className="w-full">
      <TextInput
        className={`w-full h-[60px] px-4 rounded-lg bg-[#f5f5f5] text-black`}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
      {error ? (
        <Text className="text-red-500 mt-1 text-sm">{error}</Text>
      ) : null}
    </View>
  );
};

export default AuthInput;
