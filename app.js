const fs = require("fs");

// Read a file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File read successfully:", data);

  // Write to another file
  fs.writeFile("output.txt", data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File written successfully");
  });
});
