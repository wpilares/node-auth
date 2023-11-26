import {Server} from "./presentation/server";
import {envs} from "./config";

(() => {
    main();
})()


async function main (){
    //todo: await database

    //todo: server initialize
    new Server({port: envs.PORT}).start()
}