const fs = require("fs").promises;

// Read a file
fs.readFile("input.txt", "utf8")
  .then((data) => {
    console.log("File read successfully:", data);

    // Write to another file
    return fs.writeFile("output.txt", data);
  })
  .then(() => {
    console.log("File written successfully");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
