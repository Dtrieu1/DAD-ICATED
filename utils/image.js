const { Image } = require("image-js");
execute().catch(console.error);

// async function execute() {
//   let image = await Image.load("./public/pictures/Dad_Kid.jpg");
//   let grey = image.grey(); // converts to greyscale.
//   return grey.save("./public/pictures/Dad_Kid.jpg");
// }

const imgStyle = async function execute() {
  // get images
  const img1 = await Image.load("./public/pictures/Dad_Kid.jpg");
  const grey = img1.grey();
  return grey.save("./public/pictures/Dad_Kid.jpg");

  // const img2 = ("./public/pictures/Dad_Child_Photo.jpg");

  // const images = [img1, img2]

  // images.forEach((img) => {
  //   let newImg = Image.load(img);
  //   let grey = newImg.grey();
  //   return grey.save(img[i]);
  // });
};

module.exports = imgStyle;
