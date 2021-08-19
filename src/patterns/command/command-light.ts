// @ts-ignore
// This is the basic command interface that must be implemented by the concrete commands
// in order to use its executive functionality in a way so that the invoker can 
// use it and it can take a reciever in order to pass the instructions to the reciever.
export interface Command {
    execute(): string;
}

// Bellow are the two recievers.
export class LightReciever {
    public on(): string {
        return 'on';
    }

    public off(): string {
        return 'off';
    }
}

let brightness: number = 0;

export class RedLightReciever {
    public on(): string {
        return `red${brightness}`;
    }

    public off(): string {
        return "off";
    }

    public incBrightness(): string {
        brightness += 1;
        return `red${brightness}`;
    }

    public decBrightness(): string {
        brightness -= 1;
        return `red${brightness}`;

    }
}

// Bellow are the concrete command class type.
export class LightOnCommand implements Command {
    private sampleLight: LightReciever;

    constructor(sampleLight: LightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.on();
    }
}

export class LightOffCommand implements Command {
    private sampleLight: LightReciever;

    constructor(sampleLight: LightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.off();
    }
}


export class RedLightOnCommand implements Command {
    sampleLight: RedLightReciever;

    constructor(sampleLight: RedLightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.on();
    }
}

export class RedLightOffCommand implements Command {
    sampleLight: RedLightReciever;

    constructor(sampleLight: RedLightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.off()
    }
}

export class RedLightIncBrightnessCommand implements Command {
    sampleLight: RedLightReciever;

    constructor(sampleLight: RedLightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.incBrightness();
    }

}

export class RedLightDecBrightnessCommand implements Command {
    sampleLight: RedLightReciever;

    constructor(sampleLight: RedLightReciever) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.decBrightness();
    }
}

// This the invoker that is used by the client to pass commands through it to the reciever where the real executions happen.
export class RemoteControllerInvoker {
    sampleCommand!: Command;

    constructor() {
    }

    setCommand(sampleCommand: Command) {
        this.sampleCommand = sampleCommand;
    }

    executeCommand() {
        return this.sampleCommand.execute();
    }
}