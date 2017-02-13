const defaultColors = [
  "#F7ABAB",
  "#F7ABD4",
  "#F0ABF7",
  "#CAABF7",
  "#ABDBF7",
  "#F7ABAB",
  "#F7CDAB",
  "#EAF7AB",
  "#ABF7C6",
]

let unusedColors = defaultColors;

export default function getColor() {
  if (unusedColors.length > 0) {
    let color = unusedColors[Math.floor(Math.random() * unusedColors.length)];
    unusedColors = unusedColors.filter(val => val !== color); //Remove the color
    return color;
  } else {
    //Out of colors, start repeating
    unusedColors = defaultColors;
    return getColor();
  }
}
