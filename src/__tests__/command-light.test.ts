import { commandReciever } from "../pages/hello-command/command-execution";
import {
    RemoteControllerInvoker,
    LightReciever,
    LightOnCommand,
    LightOffCommand
} from "../patterns/command/command-light";

const remoteController = new RemoteControllerInvoker();

describe("Light Command Pattern", () => {
    test("Light on",()=>{
        let expectation = commandReciever(new LightOnCommand(new LightReciever()));
        remoteController.setCommand(new LightOnCommand(new LightReciever));
        let reality=remoteController.executeCommand();
        expect(expectation).toEqual(reality);
    });

    test("Light off",()=>{
        let expectation = commandReciever(new LightOffCommand(new LightReciever()));
        remoteController.setCommand(new LightOffCommand(new LightReciever()));
        let reality=remoteController.executeCommand();
        expect(expectation).toEqual(reality);
    });
});