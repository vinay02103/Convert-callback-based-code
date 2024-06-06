const fs = require("fs").promises;

async function readAndWriteFiles() {
  try {
    // Read a file
    const data = await fs.readFile("input.txt", "utf8");
    console.log("File read successfully:", data);

    // Write to another file
    await fs.writeFile("output.txt", data);
    console.log("File written successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

// Execute the function
readAndWriteFiles();
