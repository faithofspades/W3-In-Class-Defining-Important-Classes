import { Synth, Color } from "./Synth.js";

const green = new Color(0, 255, 0);
const red = new Color(255, 0, 0);

const mySynth = new Synth("Minimoog", 16, false, green);
console.log(mySynth);
