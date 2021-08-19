import { commandReciever } from "../pages/hello-command/command-execution";
import {
    RemoteControllerInvoker,
    Light,
    LightOnCommand,
    LightOffCommand
} from "../patterns/command/command-light";

const remoteController = new RemoteControllerInvoker();

describe("Light Command Pattern", () => {
    test("Light on",()=>{
        let expectation = commandReciever(new LightOnCommand(new Light()));
        remoteController.setCommand(new LightOnCommand(new Light));
        let reality=remoteController.executeCommand();
        expect(expectation).toEqual(reality);
    });
    
    test("Light off",()=>{
        let expectation = commandReciever(new LightOffCommand(new Light()));
        remoteController.setCommand(new LightOffCommand(new Light()));
        let reality=remoteController.executeCommand();
        expect(expectation).toEqual(reality);
    });
});