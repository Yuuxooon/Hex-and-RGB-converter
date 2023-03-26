// declare the toys
let inputField = document.querySelector('#colorInput')
let resultField = document.querySelector('#result')
// input text field goes here
let inputText = ''

function convertToNum (val) {
  switch (val) {
    case 'a':
      return 10
    case 'b':
      return 11
    case 'c':
      return 12
    case 'd':
      return 13
    case 'e':
      return 14
    case 'f':
      return 15

    default:
      return 0
  }
}
// two functions to convert from RGB to Hex and vice versa
function rgbToHex (text) {
  let result = ''
}
function hexToRGB (text) {
  let result = ''
  let r,
    g,
    b = 0
  // converting Hex to RGB
  for (let i = 0; i < text.length; i++) {
    switch (i) {
      case 1:
        if (isNaN(text[i])) r = Math.floor(convertToNum(text[i])) * 16
        else r = Math.floor(text[i]) * 16
        break
      case 2:
        if (isNaN(text[i])) r = r + Math.floor(convertToNum(text[i]))
        else r = r + Math.floor(text[i])
        break
      case 3:
        if (isNaN(text[i])) g = Math.floor(convertToNum(text[i])) * 16
        else g = Math.floor(text[i]) * 16
        break
      case 4:
        if (isNaN(text[i])) g = g + Math.floor(convertToNum(text[i]))
        else g = g + Math.floor(text[i])
        break
      case 5:
        if (isNaN(text[i])) b = Math.floor(convertToNum(text[i])) * 16
        else b = Math.floor(text[i]) * 16
        break
      case 6:
        if (isNaN(text[i])) b = b + Math.floor(convertToNum(text[i]))
        else b = b + Math.floor(text[i])
        break

      default:
        break
    }
  }
  //   end of convertion, assemble and commit
  result = r + ', ' + g + ', ' + b
  console.log('Hex to RGB: ' + text + ' => ' + result)
  inputText = 'RGB: ' + r + ', ' + g + ', ' + b
  resultField.innerHTML = inputText
}
// check for color code format and convert it to either RGB or Hex
function convertFormat (text) {
  //  clean it up (trim white spaces)
  inputText = inputText.trimEnd().trimStart()
  //   if text is Hex
  if (inputText[0] === '#' && inputText.length <= 7) {
    hexToRGB(inputText)
    console.log('it is Hex: ' + inputText)
  }
  console.log(inputText)
}

inputField.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    inputText = inputField.value
    convertFormat(inputText)
    // resultField.innerHTML = inputText
  }
})
