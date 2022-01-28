import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/appRoutes";

export type HomeProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type WrapperProps = {
  marginTop: number;
  marginBottom: number;
  isCenter?: boolean;
}