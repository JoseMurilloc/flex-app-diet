import { TouchableOpacityProps } from "react-native";
import { Container, ButtonText } from "./styles";


interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
}

export function Button({buttonText, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{buttonText}</ButtonText>
    </Container>
  )
}