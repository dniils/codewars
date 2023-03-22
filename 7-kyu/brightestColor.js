// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

// Example:
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one.

function brightest(colors) {
  // Initialize maxBrightness to -1 to ensure that it will always be updated with the first valid color that we encounter, regardless of its brightness value (can be 0 in case of #000000)
  let maxBrightness = -1;
  let brightestColor = "";

  for (let i = 0; i < colors.length; i++) {
    // get r, g, b values from hex
    // convert base-16 numbers (hexadecimal) to base-10 numbers
    const red = parseInt(colors[i].substring(1, 3), 16);
    const green = parseInt(colors[i].substring(3, 5), 16);
    const blue = parseInt(colors[i].substring(5, 7), 16);

    // find the brightest (largest) value
    const brightness = Math.max(red, green, blue);

    if (brightness > maxBrightness) {
      maxBrightness = brightness;
      brightestColor = colors[i];
    }
  }

  return brightestColor;
}

console.log(brightest(["#c9c9c9", "#43464d"]));
console.log(brightest(["#c9c9c9", "#ffffff"]));
