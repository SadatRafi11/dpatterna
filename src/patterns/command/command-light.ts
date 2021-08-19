// @ts-ignore
export interface Command {
    execute(): string;
}

export class Light {
    public on(): string {
        return 'on';
    }

    public off(): string {
        return 'off';
    }
}

let brightness: number = 0;

export class RedLight {
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

export class LightOnCommand implements Command {
    private sampleLight: Light;

    constructor(sampleLight: Light) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.on();
    }
}

export class LightOffCommand implements Command {
    private sampleLight: Light;

    constructor(sampleLight: Light) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.off();
    }
}


export class RedLightOnCommand implements Command {
    sampleLight: RedLight;

    constructor(sampleLight: RedLight) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.on();
    }
}

export class RedLightOffCommand implements Command {
    sampleLight: RedLight;

    constructor(sampleLight: RedLight) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.off()
    }
}

export class RedLightIncBrightnessCommand implements Command {
    sampleLight: RedLight;

    constructor(sampleLight: RedLight) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.incBrightness();
    }

}

export class RedLightDecBrightnessCommand implements Command {
    sampleLight: RedLight;

    constructor(sampleLight: RedLight) {
        this.sampleLight = sampleLight;
    }

    execute(): string {
        return this.sampleLight.decBrightness();
    }
}


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