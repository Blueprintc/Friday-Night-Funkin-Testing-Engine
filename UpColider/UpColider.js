/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UpColider extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("up c0", "./UpColider/costumes/up c0.svg", {
        x: 18.558680867865945,
        y: 18.274910720486844
      }),
      new Costume("up c4", "./UpColider/costumes/up c4.svg", {
        x: 33.485719999999986,
        y: 33.4857200000001
      }),
      new Costume("up c3", "./UpColider/costumes/up c3.svg", {
        x: 35.41307000000003,
        y: 35.413070000000005
      }),
      new Costume("up c2", "./UpColider/costumes/up c2.svg", {
        x: 34.13846000000001,
        y: 34.13846000000001
      }),
      new Costume("up c1", "./UpColider/costumes/up c1.svg", {
        x: 18.554733620232355,
        y: 18.277678770589716
      }),
      new Costume("up c5", "./UpColider/costumes/up c5.svg", {
        x: 16.86958740700709,
        y: 16.627081075812015
      }),
      new Costume("up c6", "./UpColider/costumes/up c6.svg", {
        x: 18.086235402253294,
        y: 17.8262382017532
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "upscroll" },
        this.whenIReceiveUpscroll
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "downscroll" },
        this.whenIReceiveDownscroll
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "up c0";
  }

  *whenKeyUpArrowPressed() {
    this.costume = "up c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("up arrow") || this.keyPressed("w"))) {
      yield;
    }
    this.costume = "up c2";
    yield* this.wait(0);
    this.costume = "up c3";
    yield* this.wait(0);
    this.costume = "up c4";
    yield* this.wait(0);
    this.costume = "up c0";
  }

  *whenKeyWPressed() {
    this.costume = "up c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("up arrow") || this.keyPressed("w"))) {
      yield;
    }
    this.costume = "up c2";
    yield* this.wait(0);
    this.costume = "up c3";
    yield* this.wait(0);
    this.costume = "up c4";
    yield* this.wait(0);
    this.costume = "up c0";
  }

  *whenthisspriteclicked() {
    this.broadcast("up");
    this.costume = "up c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.costume = "up c2";
    yield* this.wait(0);
    this.costume = "up c3";
    yield* this.wait(0);
    this.costume = "up c4";
    yield* this.wait(0);
    this.costume = "up c0";
  }

  *whenIReceiveUpscroll() {
    this.costume = "up c0";
  }

  *whenIReceiveDownscroll() {}
}
