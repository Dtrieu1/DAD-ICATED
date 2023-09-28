const { Image } = require('image-js');

execute().catch(console.error);

async function execute() {
  let image = await Image.load('./public/pictures/Dad_Kid.jpg');
  let grey = image
    .grey() // converts to greyscale.
  return grey.save('./public/pictures/Dad_Kid.jpg');
};
