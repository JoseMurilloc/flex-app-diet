import { Platform, NativeModules } from 'react-native';

export function getHeightStatusBar() {
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

  return {STATUSBAR_HEIGHT}
}