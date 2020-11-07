import { executeSynchronous } from './utils';

executeSynchronous(async () => {
    if (!process.argv[2]) {
        return;
    }
    
    let prName = process.argv[2];

    if (!prName.startsWith("jcotillo")) {
        throw new Error("Failure!!! Branch name not valid");
    }

    let basePath = prName.replace("jcotillo/", "");
    console.log(`${basePath}/resource-manager`);
});