import { TurboModule, TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  readonly getTheme: () => string;
}

export default TurboModuleRegistry.getEnforcing<Spec>("ExpoSettings");
