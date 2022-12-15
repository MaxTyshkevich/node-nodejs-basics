import { writeFile, access, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ErrorMessageFileExist = 'FS operation failed';

const create = async () => {
  const fileData = 'I am fresh and young';
  const fileName = 'fresh.txt';
  const pathToFile = join(__dirname, 'files', fileName);

  try {
    await writeFile(pathToFile, fileData, { flag: 'wx' });
  } catch (error) {
    throw new Error(ErrorMessageFileExist);
  }
};

await create();
