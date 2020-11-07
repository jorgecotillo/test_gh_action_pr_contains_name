import { executeSynchronous } from './utils';

executeSynchronous(async () => {
    if (!process.argv[2]) {
        return;
    }

    console.log(process.argv[2]);

    let prName = process.argv[2];
    let regExp = /\[(.*?)\]/;
    let matches = prName.match(regExp);
    if (matches != null && matches.length > 0) {
        console.log(matches[1]);
        let match = matches[1];
        let split_match = match.split(" ");
        if (split_match.length == 2) {
            console.log(split_match[1]);
        }
    }

    return true;
});