import { Gate } from "../../patterns/state/gate-state";

export function getState(message: String): String {
  let myGate = new Gate();
  myGate.changeState(message);
  console.log("state-provider " + myGate.state.stateString);
  return myGate.state.stateString;
}
