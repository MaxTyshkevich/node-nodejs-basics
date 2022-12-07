import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);

  const stringResult = args.reduce((result, arg) => {
    if (arg.startsWith('--')) {
      return (result += arg.slice(2) + ' is ');
    } else {
      return (result += arg + ', ');
    }
  }, '');

  console.log(stringResult);
};

parseArgs();
