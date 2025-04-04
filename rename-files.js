const fs = require("fs");
const path = require("path");

// Path to the folder containing the images
const folderPath = path.join(__dirname, "public/assets/gallery");

// Rename logic
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading the folder:", err);
    return;
  }

  files.forEach((file, index) => {
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `image-gallery${index + 1}${path.extname(file)}`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error(`Error renaming file ${file}:`, err);
      } else {
        console.log(`Renamed ${file} to image-${index + 1}${path.extname(file)}`);
      }
    });
  });
});