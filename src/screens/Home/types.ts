import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SvgProps } from "react-native-svg";
import { RootStackParamList } from "../../routes/appRoutes";

export type HomeProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type WrapperProps = {
  marginTop: number;
  marginBottom: number;
  isCenter?: boolean;
}

export type Meal = {
  id: string,
  nameMeal: string,
  caloriesTotal: number,
  foods: any[]
  Icon: React.FC<SvgProps>;
}