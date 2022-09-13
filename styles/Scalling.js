import { Dimensions } from "react-native";

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const scale = size => SCREEN_WIDTH / guidelineBaseWidth * size;
export const verticalScale = size => SCREEN_HEIGHT / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
export const SCREEN_PADDING  = 15;

