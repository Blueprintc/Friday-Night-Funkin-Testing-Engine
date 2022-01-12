/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeftColider extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("left c0", "./LeftColider/costumes/left c0.svg", {
        x: 18.27702576839087,
        y: 18.542368733133088
      }),
      new Costume("left c4", "./LeftColider/costumes/left c4.svg", {
        x: 31.784899999999993,
        y: 31.784899999999993
      }),
      new Costume("left c3", "./LeftColider/costumes/left c3.svg", {
        x: 33.05951000000002,
        y: 33.05950999999999
      }),
      new Costume("left c2", "./LeftColider/costumes/left c2.svg", {
        x: 34.13846000000004,
        y: 34.13846000000001
      }),
      new Costume("left c1", "./LeftColider/costumes/left c1.svg", {
        x: 18.277029562818058,
        y: 18.54236804216717
      }),
      new Costume("left c5", "./LeftColider/costumes/left c5.svg", {
        x: 16.486568217853574,
        y: 16.72591292587981
      }),
      new Costume("left c6", "./LeftColider/costumes/left c6.svg", {
        x: 17.14334169789396,
        y: 17.392222885480237
      }),
      new Costume("left c7", "./LeftColider/costumes/left c7.svg", {
        x: 18.27702576839087,
        y: 18.542368733133088
      }),
      new Costume("left c8", "./LeftColider/costumes/left c8.svg", {
        x: 18.277029562818058,
        y: 18.54236804216717
      }),
      new Costume("left c9", "./LeftColider/costumes/left c9.svg", {
        x: 34.13846000000004,
        y: 34.13846000000001
      }),
      new Costume("left c10", "./LeftColider/costumes/left c10.svg", {
        x: 33.05951000000002,
        y: 33.05950999999999
      }),
      new Costume("left c11", "./LeftColider/costumes/left c11.svg", {
        x: 31.784899999999993,
        y: 31.784899999999993
      }),
      new Costume("left c12", "./LeftColider/costumes/left c12.svg", {
        x: 16.486568217853574,
        y: 16.72591292587981
      }),
      new Costume("left c13", "./LeftColider/costumes/left c13.svg", {
        x: 17.14334169789396,
        y: 17.392222885480237
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
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
    this.costume = "left c0";
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("left");
    this.costume = "left c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.costume = "left c2";
    yield* this.wait(0);
    this.costume = "left c3";
    yield* this.wait(0);
    this.costume = "left c4";
    yield* this.wait(0);
    this.costume = "left c0";
  }

  *whenKeyLeftArrowPressed() {
    this.costume = "left c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("left arrow") || this.keyPressed("a"))) {
      yield;
    }
    this.costume = "left c2";
    yield* this.wait(0);
    this.costume = "left c3";
    yield* this.wait(0);
    this.costume = "left c4";
    yield* this.wait(0);
    this.costume = "left c0";
  }

  *whenKeyAPressed() {
    this.costume = "left c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("left arrow") || this.keyPressed("a"))) {
      yield;
    }
    this.costume = "left c2";
    yield* this.wait(0);
    this.costume = "left c3";
    yield* this.wait(0);
    this.costume = "left c4";
    yield* this.wait(0);
    this.costume = "left c0";
  }

  *whenIReceiveUpscroll() {
    this.costume = "left c0";
    this.visible = true;
  }

  *whenIReceiveDownscroll() {}
}
