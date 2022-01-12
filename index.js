import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Character1 from "./Character1/Character1.js";
import KeyHandler from "./KeyHandler/KeyHandler.js";
import CameraAndStuff from "./CameraAndStuff/CameraAndStuff.js";
import LeftColider from "./LeftColider/LeftColider.js";
import DownColider from "./DownColider/DownColider.js";
import UpColider from "./UpColider/UpColider.js";
import RightColider from "./RightColider/RightColider.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Character1: new Character1({
    x: -4,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 80,
    visible: true
  }),
  KeyHandler: new KeyHandler({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  CameraAndStuff: new CameraAndStuff({
    x: -11,
    y: -2,
    direction: 90,
    costumeNumber: 4,
    size: 140.00015608755157,
    visible: true
  }),
  LeftColider: new LeftColider({
    x: -122,
    y: -79,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  DownColider: new DownColider({
    x: -41,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  UpColider: new UpColider({
    x: 47,
    y: -75,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  RightColider: new RightColider({
    x: 126,
    y: -77,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
