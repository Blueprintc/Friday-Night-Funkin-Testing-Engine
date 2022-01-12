/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RightColider extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("right c0", "./RightColider/costumes/right c0.svg", {
        x: 18.277029562818,
        y: 18.54236804216714
      }),
      new Costume("right c1", "./RightColider/costumes/right c1.svg", {
        x: 18.277029562818,
        y: 18.54236804216714
      }),
      new Costume("right c2", "./RightColider/costumes/right c2.svg", {
        x: 34.13846000000001,
        y: 34.13846000000001
      }),
      new Costume("right c3", "./RightColider/costumes/right c3.svg", {
        x: 33.05951000000002,
        y: 33.05950999999999
      }),
      new Costume("right c4", "./RightColider/costumes/right c4.svg", {
        x: 31.784899999999993,
        y: 31.784899999999993
      }),
      new Costume("right c5", "./RightColider/costumes/right c5.svg", {
        x: 16.486568260276556,
        y: 16.725914276540493
      }),
      new Costume("right c6", "./RightColider/costumes/right c6.svg", {
        x: 17.14333610706305,
        y: 17.392222916837397
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
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
    this.costume = "right c0";
    this.visible = true;
  }

  *whenKeyDPressed() {
    this.costume = "right c1";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("right arrow") || this.keyPressed("d"))) {
      yield;
    }
    this.costume = "right c3";
    yield* this.wait(0);
    this.costume = "right c2";
    yield* this.wait(0);
    this.costume = "right c1";
    yield* this.wait(0);
    this.costume = "right c0";
  }

  *whenKeyRightArrowPressed() {
    this.costume = "right c1";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("right arrow") || this.keyPressed("d"))) {
      yield;
    }
    this.costume = "right c3";
    yield* this.wait(0);
    this.costume = "right c2";
    yield* this.wait(0);
    this.costume = "right c1";
    yield* this.wait(0);
    this.costume = "right c0";
  }

  *whenthisspriteclicked() {
    this.broadcast("right");
    this.costume = "right c1";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.costume = "right c3";
    yield* this.wait(0);
    this.costume = "right c2";
    yield* this.wait(0);
    this.costume = "right c1";
    yield* this.wait(0);
    this.costume = "right c0";
  }

  *whenIReceiveUpscroll() {
    this.costume = "right c0";
    this.visible = true;
  }

  *whenIReceiveDownscroll() {}
}
