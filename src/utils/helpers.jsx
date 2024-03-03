export const convertToPathName = (fullName) => {
  // Convert spaces to dashes and make lowercase
  return fullName.toLowerCase().replace(/\s+/g, '-')
}

// export const getImageSize = (file) => {
//   let dimensions = imageSize(file)
//   let w = dimensions.width
//   let h = dimensions.height
//   return [w,h]
// }
export const getImageSize = (url) => {
  const img = new Image()
  img.src = url
  return {
    'width' : img.width,
		'height' : img.height
  }
}
