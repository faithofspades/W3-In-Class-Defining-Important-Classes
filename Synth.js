class Synth {
    /**
     * 
     * @param {*} model 
     * @param {*} numVoice 
     * @param {*} modular 
     * @param {*} color 
     */
    constructor(model, numVoice, modular, color) {
        this.color = color;
        this.modular = modular; // true or false
        this.model = model;
        this.voices = numVoice;

    }
    play() {
        console.log("beep boop beep boop ");
    }
}

class Color {
  /**
   * This is a class to describe all of the details of a specific color.
   * @param {number} red 
   * @param {number} green 
   * @param {number} blue 
   */  
    constructor (red, green, blue)
    {
        this.r = red;
        this.g = green;
        this.b = blue;
    }
}


export { Synth, Color };

