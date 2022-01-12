/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DownColider extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("down c0", "./DownColider/costumes/down c0.svg", {
        x: 18.55866288225252,
        y: 18.274901239016486
      }),
      new Costume("down c4", "./DownColider/costumes/down c4.svg", {
        x: 33.485719999999986,
        y: 33.485719999999986
      }),
      new Costume("down c3", "./DownColider/costumes/down c3.svg", {
        x: 35.413070000000005,
        y: 35.413070000000005
      }),
      new Costume("down c2", "./DownColider/costumes/down c2.svg", {
        x: 34.13846000000001,
        y: 34.13846000000001
      }),
      new Costume("down c1", "./DownColider/costumes/down c1.svg", {
        x: 18.541720306536575,
        y: 18.275973100691488
      }),
      new Costume("down c5", "./DownColider/costumes/down c5.svg", {
        x: 16.87234548040965,
        y: 16.63146419345742
      }),
      new Costume("down c6", "./DownColider/costumes/down c6.svg", {
        x: 18.08623574001757,
        y: 17.82623745959677
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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

  *whenKeyDownArrowPressed() {
    this.costume = "down c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("down arrow") || this.keyPressed("s"))) {
      yield;
    }
    this.costume = "down c2";
    yield* this.wait(0);
    this.costume = "down c3";
    yield* this.wait(0);
    this.costume = "down c4";
    yield* this.wait(0);
    this.costume = "down c0";
  }

  *whenKeySPressed() {
    this.costume = "down c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!(this.keyPressed("down arrow") || this.keyPressed("s"))) {
      yield;
    }
    this.costume = "down c2";
    yield* this.wait(0);
    this.costume = "down c3";
    yield* this.wait(0);
    this.costume = "down c4";
    yield* this.wait(0);
    this.costume = "down c0";
  }

  *whenthisspriteclicked() {
    this.broadcast("down");
    this.costume = "down c4";
    for (let i = 0; i < 2; i++) {
      this.costumeNumber += 1;
      yield;
    }
    while (!!this.mouse.down) {
      yield;
    }
    this.costume = "down c2";
    yield* this.wait(0);
    this.costume = "down c3";
    yield* this.wait(0);
    this.costume = "down c4";
    yield* this.wait(0);
    this.costume = "down c0";
  }

  *whenGreenFlagClicked() {
    this.costume = "down c0";
    this.visible = true;
  }

  *whenIReceiveUpscroll() {
    this.costume = "down c0";
    this.visible = true;
  }

  *whenIReceiveDownscroll() {}
}
