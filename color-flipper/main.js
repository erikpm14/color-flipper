import './style.css'

const COLOR_PALETTE = {
  '#773344': 'Wine',
  '#717744': 'Reseda green',
  '#FFFFFF': 'White',
  '#171D1C': 'Eerie black',
  '#708B75': 'Reseda green'
}

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = COLOR_PALETTE[color];
});

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

addOptionsToColorPicker()

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    

    document.body.style.backgroundColor = newColor;
    
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();

const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";