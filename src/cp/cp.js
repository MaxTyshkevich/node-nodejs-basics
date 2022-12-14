import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';
import { fork } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathFile = join(__dirname, './files/script.js');
  const child_process = fork(pathFile, args, { silent: true });

  process.stdin.pipe(child_process.stdin);

  child_process.stdout.pipe(process.stdout);
};

spawnChildProcess();
