import chroma from 'chroma-js';

const colorRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const generatePallete = (colorPallete) => {
  const newPallete = {
    ...colorPallete,
    colors: {},
  };
  for (let range of colorRange) {
    newPallete.colors[range] = [];
  }

  for (let color of colorPallete.colors) {
    let scales = generateScale(color.color, 10).reverse();
    for (let i in scales) {
      newPallete.colors[colorRange[i]].push({
        name: `${color.name} ${colorRange[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scales[i],
        rgb: chroma(scales[i]).css(),
        rgba: chroma(scales[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPallete;
};

const generateScale = (hexColor, noOfColors) => {
  return chroma
    .scale([chroma(hexColor).darken(1.5).hex(), hexColor, 'white'])
    .mode('lab')
    .colors(noOfColors);
};

export default generatePallete;
