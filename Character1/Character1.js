/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Character1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("MattAnim", "./Character1/costumes/MattAnim.png", {
        x: 135,
        y: 316
      }),
      new Costume("MattAnim2", "./Character1/costumes/MattAnim2.png", {
        x: 135,
        y: 316
      }),
      new Costume("MattAnim4", "./Character1/costumes/MattAnim4.png", {
        x: 134,
        y: 313
      }),
      new Costume("MattAnim3", "./Character1/costumes/MattAnim3.png", {
        x: 134,
        y: 313
      }),
      new Costume("MattAnim5", "./Character1/costumes/MattAnim5.png", {
        x: 134,
        y: 313
      }),
      new Costume("MattAnim6", "./Character1/costumes/MattAnim6.png", {
        x: 134,
        y: 314
      }),
      new Costume("MattAnim7", "./Character1/costumes/MattAnim7.png", {
        x: 134,
        y: 314
      }),
      new Costume("MattAnim8", "./Character1/costumes/MattAnim8.png", {
        x: 135,
        y: 315
      }),
      new Costume("MattAnim9", "./Character1/costumes/MattAnim9.png", {
        x: 135,
        y: 316
      }),
      new Costume("MattAnim11", "./Character1/costumes/MattAnim11.png", {
        x: 135,
        y: 317
      }),
      new Costume("MattAnim12", "./Character1/costumes/MattAnim12.png", {
        x: 137,
        y: 318
      }),
      new Costume("MattAnim10", "./Character1/costumes/MattAnim10.png", {
        x: 137,
        y: 318
      }),
      new Costume("MattAnim13", "./Character1/costumes/MattAnim13.png", {
        x: 137,
        y: 318
      }),
      new Costume("MattAnim14", "./Character1/costumes/MattAnim14.png", {
        x: 137,
        y: 318
      }),
      new Costume("MattUpAnim2", "./Character1/costumes/MattUpAnim2.png", {
        x: 157,
        y: 316
      }),
      new Costume("MattUpAnim", "./Character1/costumes/MattUpAnim.png", {
        x: 158,
        y: 328
      }),
      new Costume("MattUpAnim3", "./Character1/costumes/MattUpAnim3.png", {
        x: 158,
        y: 328
      }),
      new Costume("MattUpAnim4", "./Character1/costumes/MattUpAnim4.png", {
        x: 158,
        y: 328
      }),
      new Costume(
        "MattRightAnim2",
        "./Character1/costumes/MattRightAnim2.png",
        { x: 202, y: 304 }
      ),
      new Costume("MattRightAnim", "./Character1/costumes/MattRightAnim.png", {
        x: 198,
        y: 291
      }),
      new Costume(
        "MattRightAnim4",
        "./Character1/costumes/MattRightAnim4.png",
        { x: 198, y: 291 }
      ),
      new Costume(
        "MattRightAnim3",
        "./Character1/costumes/MattRightAnim3.png",
        { x: 198, y: 291 }
      ),
      new Costume("MattLeftAnim", "./Character1/costumes/MattLeftAnim.png", {
        x: 170,
        y: 322
      }),
      new Costume("MattLeftAnim2", "./Character1/costumes/MattLeftAnim2.png", {
        x: 170,
        y: 322
      }),
      new Costume("MattLeftAnim3", "./Character1/costumes/MattLeftAnim3.png", {
        x: 177,
        y: 321
      }),
      new Costume("MattLeftAnim4", "./Character1/costumes/MattLeftAnim4.png", {
        x: 177,
        y: 321
      }),
      new Costume("MattDownAnim", "./Character1/costumes/MattDownAnim.png", {
        x: 156,
        y: 294
      }),
      new Costume("MattDownAnim3", "./Character1/costumes/MattDownAnim3.png", {
        x: 155,
        y: 291
      }),
      new Costume("MattDownAnim2", "./Character1/costumes/MattDownAnim2.png", {
        x: 155,
        y: 291
      }),
      new Costume("MattDownAnim4", "./Character1/costumes/MattDownAnim4.png", {
        x: 155,
        y: 291
      }),
      new Costume(
        "MattAngryLeftAnim3",
        "./Character1/costumes/MattAngryLeftAnim3.png",
        { x: 170, y: 322 }
      ),
      new Costume(
        "MattAngryLeftAnim4",
        "./Character1/costumes/MattAngryLeftAnim4.png",
        { x: 177, y: 321 }
      ),
      new Costume(
        "MattAngryLeftAnim2",
        "./Character1/costumes/MattAngryLeftAnim2.png",
        { x: 177, y: 321 }
      ),
      new Costume("Sonic_idle_2", "./Character1/costumes/Sonic_idle_2.png", {
        x: 38,
        y: 41
      }),
      new Costume("Sonic_idle_3", "./Character1/costumes/Sonic_idle_3.png", {
        x: 36,
        y: 41
      }),
      new Costume("Sonic_idle_4", "./Character1/costumes/Sonic_idle_4.png", {
        x: 36,
        y: 41
      })
    ];

    this.sounds = [
      new Sound("right", "./Character1/sounds/right.wav"),
      new Sound("down", "./Character1/sounds/down.wav"),
      new Sound("up", "./Character1/sounds/up.wav"),
      new Sound("left", "./Character1/sounds/left.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "idle" }, this.whenIReceiveIdle),
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick),
      new Trigger(Trigger.BROADCAST, { name: "right" }, this.whenIReceiveRight),
      new Trigger(Trigger.BROADCAST, { name: "left" }, this.whenIReceiveLeft),
      new Trigger(Trigger.BROADCAST, { name: "down" }, this.whenIReceiveDown),
      new Trigger(Trigger.BROADCAST, { name: "up" }, this.whenIReceiveUp),
      new Trigger(
        Trigger.BROADCAST,
        { name: "template" },
        this.whenIReceiveTemplate
      ),
      new Trigger(Trigger.BROADCAST, { name: "BF" }, this.whenIReceiveBf),
      new Trigger(Trigger.BROADCAST, { name: "idle" }, this.whenIReceiveIdle2),
      new Trigger(Trigger.BROADCAST, { name: "error" }, this.whenIReceiveError),
      new Trigger(Trigger.BROADCAST, { name: "uh oh" }, this.whenIReceiveUhOh),
      new Trigger(Trigger.BROADCAST, { name: "idle" }, this.whenIReceiveIdle3),
      new Trigger(Trigger.BROADCAST, { name: "idle" }, this.whenIReceiveIdle4)
    ];
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
  }

  *whenIReceiveIdle() {
    this.stage.vars.state = "idle";
    while (true) {
      this.costume = "MattAnim";
      for (let i = 0; i < 13; i++) {
        yield* this.wait(0.05);
        this.costumeNumber += 1;
        yield;
      }
      yield* this.wait(0.4);
      yield;
    }
  }

  *whenIReceiveTick() {
    this.goto(
      this.stage.vars.camx * (this.stage.vars.camz / 100),
      this.stage.vars.camy * (this.stage.vars.camz / 100)
    );
    this.size = 80;
    this.audioEffects.pitch = this.stage.vars.pitch;
  }

  *whenIReceiveRight() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.state = "right";
    yield* this.startSound("right");
    this.costume = "MattRightAnim2";
    yield* this.wait(0.05);
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      yield;
    }
    yield* this.wait(0.7);
    while (!!this.keyPressed("right arrow")) {
      yield;
    }
    this.broadcast("idle");
  }

  *whenIReceiveLeft() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.state = "left";
    yield* this.startSound("left");
    this.costume = "MattAngryLeftAnim3";
    yield* this.wait(0.05);
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    yield* this.wait(0.7);
    while (!!this.keyPressed("left arrow")) {
      yield;
    }
    this.broadcast("idle");
  }

  *whenIReceiveDown() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.state = "down";
    yield* this.startSound("down");
    this.costume = "MattDownAnim";
    yield* this.wait(0.05);
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      yield;
    }
    yield* this.wait(0.7);
    while (!!this.keyPressed("down arrow")) {
      yield;
    }
    this.broadcast("idle");
  }

  *whenIReceiveUp() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.state = "up";
    yield* this.startSound("up");
    this.costume = "MattUpAnim2";
    yield* this.wait(0.05);
    for (let i = 0; i < 3; i++) {
      this.costumeNumber += 1;
      yield;
    }
    yield* this.wait(0.7);
    while (!!this.keyPressed("up arrow")) {
      yield;
    }
    this.broadcast("idle");
  }

  *whenIReceiveTemplate() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveBf() {
    this.audioEffects.volume = 100;
    this.visible = true;
  }

  *whenIReceiveIdle2() {
    this.audioEffects.volume = 100;
    this.visible = true;
    this.broadcast("idle");
  }

  *whenIReceiveError() {
    this.audioEffects.volume = 100;
    this.visible = true;
    this.broadcast("idle");
  }

  *whenIReceiveUhOh() {
    this.audioEffects.volume = 0;
    this.visible = false;
    this.broadcast("idle");
  }

  *whenIReceiveIdle3() {}

  *whenIReceiveIdle4() {}
}
