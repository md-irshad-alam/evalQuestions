function fileSegeration(files) {
  const groupedFiles = files.reduce((acc, file) => {
    const extension = file.split(".").pop(); // Extract the file extension
    if (!acc[extension]) {
      acc[extension] = []; // Initialize array for this extension if not present
    }
    acc[extension].push(file); // Add the file to the corresponding extension group
    return acc;
  }, {});

  console.log(groupedFiles);
}

const files = [
  "document1.pdf",
  "document2.pdf",
  "image1.png",
  "image2.png",
  "text1.txt",
  "text2.txt",
  "photo1.jpg",
  "photo2.jpg",
  "program1.exe",
  "program2.exe",
  "data1.csv",
  "data2.csv",
  "report1.pdf",
  "report2.pdf",
  "image3.png",
  "text3.txt",
  "photo3.jpg",
  "document3.pdf",
];

fileSegeration(files);
