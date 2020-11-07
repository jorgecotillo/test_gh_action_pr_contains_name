import { executeSynchronous } from './utils';

executeSynchronous(async () => {
    if (!process.argv[2]) {
        return;
    }
    
    let prName = process.argv[2];
    let basePath = prName.replace("jcotillo/", "");
    console.log(`${basePath}/resource-manager`);
});