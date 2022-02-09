import { UseAnimationState } from "moti";

export type ToastProps = {
  message: string;
}

export type Status = "success" | "warn" | "error" | "default";

export interface ToastContextData {
  status: Status;
  toastAnimationState: UseAnimationState<any>, 
  message: string;
  showToast: (status: Status, message: string) => void
}