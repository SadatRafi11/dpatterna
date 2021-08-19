import {
    Light,
    RedLight,
    Command,
    LightOnCommand,
    LightOffCommand,
    RedLightOnCommand,
    RedLightOffCommand,
    RedLightIncBrightnessCommand,
    RedLightDecBrightnessCommand,
    RemoteControllerInvoker,
} from "../../patterns/command/command-light";

export function commandReciever(command: Command): string {

    const remoteController = new RemoteControllerInvoker();
    remoteController.setCommand(command);
    return remoteController.executeCommand();
}

let redOn: boolean = false;

export function executor(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? commandReciever(new LightOnCommand(new RedLight())): commandReciever(new LightOnCommand(new Light()));
            break;
        case "off":
            redOn = false;
            result = redOn ? commandReciever(new RedLightOffCommand(new RedLight())): commandReciever(new LightOffCommand(new Light()));
            break;
        case "increase":
            result = redOn ? commandReciever(new RedLightIncBrightnessCommand(new RedLight())): commandReciever(new LightOnCommand(new RedLight()));
            break;
        case "decrease":
            console.log("decrease");
            result = redOn ? commandReciever(new RedLightDecBrightnessCommand(new RedLight())): commandReciever(new LightOnCommand(new RedLight()));
            break;
        case "red":
            redOn = true;
            result = redOn ? commandReciever(new RedLightOnCommand(new RedLight())): commandReciever(new LightOnCommand(new RedLight()));
            break;
        default:
    }
    // @ts-ignore
    return result;
}