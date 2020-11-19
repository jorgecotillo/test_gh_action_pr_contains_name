import { executeSynchronous } from './utils';

executeSynchronous(async () => {
    if (!process.argv[2]) {
        return;
    }
    
    const prName = process.argv[2];
    const prPrefix = process.argv[3];
    console.log(`prefix is: ${prPrefix}`);
    if (!prName.startsWith(prPrefix)) {
        console.log("false");
        return;
    }

    let basePath = prName.replace(prPrefix, "");
    console.log(`${basePath}/resource-manager`);
    console.log("true");
});