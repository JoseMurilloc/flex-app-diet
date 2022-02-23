import { SvgProps } from "react-native-svg";

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