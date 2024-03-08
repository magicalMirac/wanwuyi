// 复制文件
function copyFile(sourcePath, destinationPath) {
  fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
          console.error('Error copying file:', err);
          return;
      }
      console.log('File copied successfully.');
  });
}

// 移动文件
function moveFile(sourcePath, destinationPath) {
  fs.rename(sourcePath, destinationPath, (err) => {
      if (err) {
          console.error('Error moving file:', err);
          return;
      }
      console.log('File moved successfully.');
  });
}