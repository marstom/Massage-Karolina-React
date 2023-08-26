import Color from "color";

const primaryColors = {
  primary: "#F9ECE6",
  secondary: "#e0bebd",
  lightBlue: "#00ADB5",
  textColor: "#0e0e0e",
  textColorLight: "#F9ECE6",
  menuTextColor: "#ffffff",
};

export const otherColors = {
  green: "#36A18B",
  rose: "#AA6F6D",
  darkerGreen: "#2F8A83",
  lightBg: "#dadada",
  primaryOpaque: "rgba(34,40,49,0.5)",
  secondaryOpaque: "rgba(0,0,0,0.5)",
  black: "rgb(26,26,26)",
};

primaryColors.primary = Color(primaryColors.primary)
  .lighten(0.0)
  .saturate(0.0)
  .rotate(0)
  .hex();
primaryColors.secondary = Color(primaryColors.secondary).lighten(0.0).string();
primaryColors.lightBlue = Color(primaryColors.lightBlue).lighten(0.0).string();
primaryColors.textColor = Color(primaryColors.textColor).darken(0.0).string();

otherColors.green = Color(otherColors.green).lighten(0.0).string();
otherColors.darkerGreen = Color(otherColors.darkerGreen).lighten(0.0).string();
otherColors.lightBg = Color(otherColors.lightBg).lighten(0.0).string();
otherColors.primaryOpaque = Color(otherColors.primaryOpaque)
  .lighten(0.0)
  .string();
otherColors.secondaryOpaque = Color(otherColors.secondaryOpaque)
  .lighten(0.0)
  .string();
otherColors.black = Color(otherColors.black).darken(0.0).string();

export const colors = { ...primaryColors, ...otherColors };
