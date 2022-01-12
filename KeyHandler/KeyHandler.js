/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KeyHandler extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./KeyHandler/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom keyblinds" },
        this.whenIReceiveCustomKeyblinds
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.touchingButton == 0) {
        if (!(this.stage.vars.state == "death")) {
          if (this.keyPressed("left arrow") || this.keyPressed("a")) {
            this.broadcast("left");
            while (!!(this.keyPressed("left arrow") || this.keyPressed("a"))) {
              yield;
            }
          }
          if (this.keyPressed("right arrow") || this.keyPressed("d")) {
            this.broadcast("right");
            while (!!(this.keyPressed("right arrow") || this.keyPressed("d"))) {
              yield;
            }
          }
          if (this.keyPressed("down arrow") || this.keyPressed("s")) {
            this.broadcast("down");
            while (!!(this.keyPressed("down arrow") || this.keyPressed("s"))) {
              yield;
            }
          }
          if (this.keyPressed("up arrow") || this.keyPressed("w")) {
            this.broadcast("up");
            while (!!(this.keyPressed("up arrow") || this.keyPressed("w"))) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCustomKeyblinds() {
    while (true) {
      if (this.stage.vars.touchingButton == 0) {
        if (!(this.stage.vars.state == "death")) {
          if (this.keyPressed("left arrow") || this.keyPressed("a")) {
            this.broadcast("left");
            while (!!(this.keyPressed("left arrow") || this.keyPressed("a"))) {
              yield;
            }
          }
          if (this.keyPressed("right arrow") || this.keyPressed("d")) {
            this.broadcast("right");
            while (!!(this.keyPressed("right arrow") || this.keyPressed("d"))) {
              yield;
            }
          }
          if (this.keyPressed("down arrow") || this.keyPressed("s")) {
            this.broadcast("down");
            while (!!(this.keyPressed("down arrow") || this.keyPressed("s"))) {
              yield;
            }
          }
          if (this.keyPressed("up arrow") || this.keyPressed("w")) {
            this.broadcast("up");
            while (!!(this.keyPressed("up arrow") || this.keyPressed("w"))) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }
}
