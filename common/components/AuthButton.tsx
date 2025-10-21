import { FC, ReactNode } from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface AuthButtonProps extends PressableProps {
  title: string;
  children?: ReactNode;
  disabled?: boolean;
  onPress: () => void;
  bgColor?: string; // default to primary-100
  textColor?: string; // default white
}

const AuthButton: FC<AuthButtonProps> = ({
  title,
  onPress,
  disabled = false,
  bgColor = "#932537",
  textColor = "#fff",
  children,
  ...rest
}) => {
  return (
    <Pressable
      className={`w-full h-16 rounded-lg justify-center items-center`}
      style={{ backgroundColor: disabled ? "#d1d5db" : bgColor }}
      onPress={onPress}
      disabled={disabled}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Text className="text-lg font-medium" style={{ color: textColor }}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default AuthButton;
