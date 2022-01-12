/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CameraAndStuff extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("menuBG", "./CameraAndStuff/costumes/menuBG.png", {
        x: 480,
        y: 272
      }),
      new Costume("menuBGBlue", "./CameraAndStuff/costumes/menuBGBlue.png", {
        x: 480,
        y: 272
      }),
      new Costume(
        "menuBGMagenta",
        "./CameraAndStuff/costumes/menuBGMagenta.png",
        { x: 480, y: 272 }
      ),
      new Costume("menuDesat", "./CameraAndStuff/costumes/menuDesat.png", {
        x: 480,
        y: 272
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "death" }, this.whenIReceiveDeath),
      new Trigger(
        Trigger.BROADCAST,
        { name: "mic drop" },
        this.whenIReceiveMicDrop
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bob phase 3" },
        this.whenIReceiveBobPhase3
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.clone = 0;
    this.vars.shakex = 0;
    this.vars.shakey = 0;
    this.vars.i = 0;
  }

  *whenIReceiveTick() {
    if (this.vars.clone == 0) {
      yield* this.cam(this.stage.vars.state);
    }
    this.goto(
      this.stage.vars.camx * (this.stage.vars.camz / 150),
      this.stage.vars.camy * (this.stage.vars.camz / 150)
    );
    this.size = this.stage.vars.camz / 2 + 95;
    this.visible = true;
    if (this.stage.vars.state == "death") {
      this.visible = false;
    }
  }

  *cam(state2) {
    if (state2 == "idle") {
      this.stage.vars.camx += (0 - this.stage.vars.camx) / 4;
      this.stage.vars.camy += (0 - this.stage.vars.camy) / 4;
      this.stage.vars.camz += (90 - this.stage.vars.camz) / 4;
    } else {
      if (state2 == "right") {
        this.stage.vars.camx += (-7 - this.stage.vars.camx) / 4;
        this.stage.vars.camy += (0 - this.stage.vars.camy) / 4;
        this.stage.vars.camz += (100 - this.stage.vars.camz) / 4;
      } else {
        if (state2 == "left") {
          this.stage.vars.camx += (7 - this.stage.vars.camx) / 4;
          this.stage.vars.camy += (0 - this.stage.vars.camy) / 4;
          this.stage.vars.camz += (100 - this.stage.vars.camz) / 4;
        } else {
          if (state2 == "down") {
            this.stage.vars.camx += (0 - this.stage.vars.camx) / 4;
            this.stage.vars.camy += (7 - this.stage.vars.camy) / 4;
            this.stage.vars.camz += (100 - this.stage.vars.camz) / 4;
          } else {
            if (state2 == "up") {
              this.stage.vars.camx += (0 - this.stage.vars.camx) / 4;
              this.stage.vars.camy += (-7 - this.stage.vars.camy) / 4;
              this.stage.vars.camz += (100 - this.stage.vars.camz) / 4;
            } else {
              if (state2 == "Æ") {
                this.stage.vars.camz += (105 - this.stage.vars.camz) / 4;
              } else {
                if (state2 == "death") {
                  this.stage.vars.camx +=
                    (this.vars.shakex - this.stage.vars.camx) / 1.5;
                  this.stage.vars.camy +=
                    (this.vars.shakey - this.stage.vars.camy) / 1.5;
                  this.stage.vars.camz += (125 - this.stage.vars.camz) / 4;
                  this.broadcast("tick");
                } else {
                  null;
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone() {
    this.vars.clone = 1;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "menuDesat";
      yield* this.wait(6);
      this.costumeNumber += 1;
      yield* this.wait(6);
      this.costumeNumber += 1;
      yield* this.wait(6);
      this.costumeNumber += 1;
      yield* this.wait(6);
      yield;
    }
  }

  *whenIReceiveDeath() {
    if (this.vars.clone == 0) {
      yield* this.shake(10);
    }
  }

  *shake(ammount) {
    this.vars.i = ammount;
    for (let i = 0; i < this.vars.i; i++) {
      this.vars.shakex = this.random(-1, 1) * this.vars.i;
      this.vars.shakey = this.random(-1, 1) * this.vars.i;
      this.broadcast("tick");
      this.vars.i += -1;
      yield;
    }
    this.vars.shakex = 0;
    this.vars.shakey = 0;
  }

  *whenIReceiveMicDrop() {
    if (this.vars.clone == 0) {
      yield* this.shake(6);
    }
  }

  *whenIReceiveBobPhase3() {
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.x += this.random(-10, 10);
        this.y += this.random(-10, 10);
        yield* this.wait(0.0001);
        this.goto(1, 0);
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }
}
