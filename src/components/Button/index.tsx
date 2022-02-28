import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
  active?: boolean;
}

export function Button({buttonText, active = true, ...rest}: ButtonProps) {
  return (
    <Container 
      disabled={!active}
      isActive={active} 
      {...rest}
    >
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  )
}