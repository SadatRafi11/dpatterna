export interface GateState {
  stateString: String;
  enter(): void;
  payOk(): void;
  payFailed(): void;
}

export class Gate {
  state: GateState;

  constructor() {
    this.state = new ClosedGateState(this);
  }

  public setState(state: GateState): void {
    this.state = state;
  }

  public changeState(message: String): void {
    switch (message) {
      case "enter": {
        this.enter();
        break;
      }
      case "payOk": {
        this.payOK();
        break;
      }
      case "payFailed": {
        this.payFailed();
        break;
      }
    }
  }

  public enter(): void {
    this.state.enter();
  }
  public payOK(): void {
    this.state.payOk();
  }
  public payFailed(): void {
    this.state.payFailed();
  }
}

export class OpenGateState implements GateState {
  stateString: String = "open";
  gate: Gate;
  constructor(gate: Gate) {
    this.gate = gate;
  }
  public enter(): void {
    this.gate.setState(new ClosedGateState(this.gate));
  }
  public payOk(): void {
    this.gate.setState(new OpenGateState(this.gate));
  }
  public payFailed(): void {
    this.gate.setState(new OpenGateState(this.gate));
  }
}

export class ClosedGateState implements GateState {
  stateString: String = "closed";
  gate: Gate;
  constructor(gate: Gate) {
    this.gate = gate;
  }

  public enter(): void {
    this.gate.setState(new ClosedGateState(this.gate));
  }
  public payOk(): void {
    this.gate.setState(new OpenGateState(this.gate));
  }
  public payFailed(): void {
    this.gate.setState(new ClosedGateState(this.gate));
  }
}
