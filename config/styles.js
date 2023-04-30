import { Dimensions } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { getStatusBarHeight } from "react-native-status-bar-height";

export let Screen_Height = Dimensions.get("window").height;
export let Screen_Width = Dimensions.get("window").width;

export let SafeAreaHeight =
  Screen_Height - getStatusBarHeight() - getBottomSpace();

export const MainColor = "rgb(44, 44, 44)";
export const PointColor = "#8C8CED";
