import { executeSynchronous } from './utils';
import fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

executeSynchronous(async () => {
    if (!process.argv[2]) {
        return;
    }

    let prName = process.argv[2];
    let regExp = /\[(.*?)\]/;
    let matches = prName.match(regExp);
    if (matches != null && matches.length > 0) {
        let match = matches[1];
        let split_match = match.split(" ");
        if (split_match.length == 2) {
            await writeFile("result.txt", split_match[1], { encoding: 'utf8' });
        }
    }
});