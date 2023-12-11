import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000)
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let's Start the Game\n`);
    await sleep();
    rainbowTitle.stop();
};

export {welcome, sleep};