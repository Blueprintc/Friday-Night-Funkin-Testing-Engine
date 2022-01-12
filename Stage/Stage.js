/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.camx = 3.9522530017713513e-10;
    this.vars.camy = -0.00021852217699430297;
    this.vars.camz = 90.00031217510316;
    this.vars.bfVocals = 0;
    this.vars.state = "idle";
    this.vars.pitch = 0;
    this.vars.touchingButton = 0;
  }
}
