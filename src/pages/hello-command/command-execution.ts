import {
    LightReciever,
    RedLightReciever,
    Command,
    LightOnCommand,
    LightOffCommand,
    RedLightOnCommand,
    RedLightOffCommand,
    RedLightIncBrightnessCommand,
    RedLightDecBrightnessCommand,
    RemoteControllerInvoker,
} from "../../patterns/command/command-light";

// This uses the invoker.
export function commandReciever(command: Command): string {

    const remoteController = new RemoteControllerInvoker();
    remoteController.setCommand(command);
    return remoteController.executeCommand();
}

let redOn: boolean = false;
// This is the client that uses the light-command design to and executes the functionalities by using the invoker.
export function executor(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? commandReciever(new LightOnCommand(new RedLightReciever())): commandReciever(new LightOnCommand(new LightReciever()));
            break;
        case "off":
            redOn = false;
            result = redOn ? commandReciever(new RedLightOffCommand(new RedLightReciever())): commandReciever(new LightOffCommand(new LightReciever()));
            break;
        case "increase":
            result = redOn ? commandReciever(new RedLightIncBrightnessCommand(new RedLightReciever())): commandReciever(new LightOnCommand(new RedLightReciever()));
            break;
        case "decrease":
            result = redOn ? commandReciever(new RedLightDecBrightnessCommand(new RedLightReciever())): commandReciever(new LightOnCommand(new RedLightReciever()));
            break;
        case "red":
            redOn = true;
            result = redOn ? commandReciever(new RedLightOnCommand(new RedLightReciever())): commandReciever(new LightOnCommand(new RedLightReciever()));
            break;
        default:
    }
    // @ts-ignore
    return result;
}