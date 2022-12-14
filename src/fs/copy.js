import { readdir, copyFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const copy = async () => {
  const folderPath = join(__dirname, 'files');
  const destinationPath = join(__dirname, 'files_copy');

  try {
    const filesForCopy = await readdir(folderPath, { flag: 'r' });
    await mkdir(destinationPath, { flag: 'wx' });

    for (let file of filesForCopy) {
      const filePath = join(folderPath, file);
      const destinationFilePath = join(destinationPath, file);

      await copyFile(filePath, destinationFilePath);
    }
  } catch (error) {
    throw new Error(ErrorMessageFileExist);
  }
};

copy();
