(function () {
   'use strict';

   var Event = Laya.Event;
   var Tween = Laya.Tween;
   class ActionButton extends Laya.Sprite {
       constructor() {
           super();
           this.on(Event.MOUSE_DOWN, this, () => {
               Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, 100);
           });
           this.on(Event.MOUSE_UP, this, () => {
               Tween.to(this, { scaleX: 1, scaleY: 1 }, 100);
           });
           this.on(Event.MOUSE_OUT, this, () => {
               Tween.to(this, { scaleX: 1, scaleY: 1 }, 100);
           });
       }
       onAwake() {
           this.pivotX = this.width / 2;
           this.pivotY = this.height / 2;
           this.x += this.pivotX;
           this.y += this.pivotY;
       }
   }

   var REG = Laya.ClassUtils.regClass;
   var ui;
   (function (ui) {
       class APP_LoadingUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("APP_Loading");
           }
       }
       ui.APP_LoadingUI = APP_LoadingUI;
       REG("ui.APP_LoadingUI", APP_LoadingUI);
       class HallUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("Hall");
           }
       }
       ui.HallUI = HallUI;
       REG("ui.HallUI", HallUI);
       class loginUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("login");
           }
       }
       ui.loginUI = loginUI;
       REG("ui.loginUI", loginUI);
       class playSceneUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("playScene");
           }
       }
       ui.playSceneUI = playSceneUI;
       REG("ui.playSceneUI", playSceneUI);
   })(ui || (ui = {}));

   class network {
       constructor() {
           this.eList = new Array();
           this.types = {};
           this.byte = new Laya.Byte();
           this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
           this.socket = new Laya.Socket();
           this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
           this.connect();
           Laya.timer.frameLoop(1, this, () => {
               if (!this.types || this.eList.length == 0)
                   return;
               while (this.eList.length) {
                   this.types[this.eList[0]];
                   this.eList.shift();
               }
           });
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new network();
           return this.instance;
       }
       addNetEvent(type, handler) {
           this.types[type] = handler;
       }
       removeEvent(type) {
           if (this.types[type])
               delete this.types[type];
       }
       register(type, ui, caller) {
           this.addNetEvent(type + "init", caller.GameEventLoadInitialization);
           this.addNetEvent(type + "enter", caller.GameEventEnter);
           this.addNetEvent(type + "leave", caller.GameEventLeave);
       }
       unregister(type) {
           this.removeEvent(type + "init");
           this.removeEvent(type + "enter");
           this.removeEvent(type + "leave");
       }
       connect() {
           this.socket.connectByUrl("ws://localhost:8989");
           this.socket.on(Laya.Event.OPEN, this, this.openHandler);
           this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
           this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
           this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
       }
       openHandler(event = null) {
       }
       receiveHandler(msg = null) {
           console.log(msg);
           this.eList.push(msg);
       }
       closeHandler(e = null) {
       }
       errorHandler(e = null) {
       }
       sendMsg(type, data) {
       }
   }

   var TimeLine = Laya.TimeLine;
   var Event$1 = Laya.Event;
   class PublicFun {
       constructor() {
           this.timeLine = new TimeLine();
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new PublicFun();
           return this.instance;
       }
       showAlert(node) {
           let x = Laya.stage.width / 2;
           let y = Laya.stage.height / 2;
           node.visible = true;
           node.active = true;
           node.x = x;
           node.y = y;
           node.scaleX = 0;
           node.scaleY = 0;
           node.pivotX = node.width / 2;
           node.pivotY = node.height / 2;
           this.timeLine = new TimeLine();
           this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
               .addLabel("turnLeft", 0).to(node, { scaleX: 1, scaleY: 1 }, 100, null, 0);
           this.timeLine.play(0, false);
           this.timeLine.on(Event$1.COMPLETE, this, this.onComplete);
           this.timeLine.on(Event$1.LABEL, this, this.onLabel);
       }
       hideAlert(node) {
           this.timeLine = new TimeLine();
           this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
               .addLabel("turnDown", 0).to(node, { scaleX: 0, scaleY: 0 }, 200, null, 0);
           this.timeLine.play(0, false);
           this.timeLine.on(Event$1.COMPLETE, this, () => {
               node.active = false;
               node.visible = false;
           });
       }
       onComplete() {
           console.log("timeLine complete!!!!");
       }
       onLabel(label) {
           console.log("LabelName:" + label);
       }
   }

   class SceneManager {
       constructor() {
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new SceneManager();
           return this.instance;
       }
       changeScene(name) {
           Laya.Scene.open(name);
       }
   }

   class base {
       constructor() {
           this.netWork = network.getinstance();
           this.publicFun = PublicFun.getinstance();
           this.scene = SceneManager.getinstance();
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new base();
           return this.instance;
       }
   }

   var Event$2 = Laya.Event;
   class login extends ui.loginUI {
       constructor() {
           super();
           this.base = base.getinstance();
       }
       onAwake() {
           this.loginAlert.visible = false;
           this.login_change.on(Event$2.CLICK, this, this.changeHandler);
           this.chage_ok.on(Event$2.CLICK, this, function () {
               this.base.publicFun.hideAlert(this.loginAlert);
           });
           this.quikeStart.on(Event$2.CLICK, this, () => {
               this.base.scene.changeScene("./lobbyScene.scene");
           });
       }
       changeHandler(e) {
           this.base.publicFun.showAlert(this.loginAlert);
       }
   }

   var Handler = Laya.Handler;
   var Tween$1 = Laya.Tween;
   var Event$3 = Laya.Event;
   class playScene extends ui.playSceneUI {
       constructor() {
           super();
           this.cardUnknow = new Array();
           this.leftHand = new Array();
           this.rightHand = new Array();
           this.upHand = new Array();
           this.downHand = new Array();
           this.pengDown = new Array();
           this.pengLeft = new Array();
           this.pengRight = new Array();
           this.pengUp = new Array();
           this.leftShowed = new Array();
           this.rightShowed = new Array();
           this.downShowed = new Array();
           this.upShowed = new Array();
           this.dealTimes = 0;
           this.point = new Laya.Vector2();
       }
       onAwake() {
           this.cardMeshName = ["res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif.lmat"];
           for (let i = 1; i < 42; i++) {
               this.cardMeshName.push(`res/LayaScene_playScene/Conventional/Assets/majiang/Materials/mj_dif ${i}.lmat`);
           }
           Laya.loader.create(["res/LayaScene_playScene/Conventional/playScene.ls", ...this.cardMeshName], Laya.Handler.create(this, this.onCreated), Laya.Handler.create(this, (e) => {
           }));
           this.fapai.clickHandler = new Handler(this, this.onClickButton, [this.fapai]);
           this.mopai.clickHandler = new Handler(this, this.onClickMopai, [this.mopai]);
           this.dapai.clickHandler = new Handler(this, this.onClickDapai, [this.dapai]);
           this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
           this.point = new Laya.Vector2();
           this._outHitResult = new Laya.HitResult();
       }
       onClickDapai(button) {
           let card5 = this.downHand[5];
           card5.active = false;
           let card13 = this.downHand[13];
           Tween$1.to(card13.transform, { localPositionZ: card13.transform.localPositionZ - 0.05, localRotationEulerY: 30 }, 300, null, Handler.create(this, () => {
               Tween$1.to(card13.transform, { localPositionX: card5.transform.localPositionX, localRotationEulerY: 0 }, 500, null, Handler.create(this, () => {
                   Tween$1.to(card13.transform, { localPositionZ: 0 }, 300);
               }));
           }));
       }
       onClickMopai(button) {
           console.log("摸牌哦");
           let targetCard = this.downHand[13];
           if (!targetCard.active) {
               let card = this.cardUnknow.shift();
               card.active = false;
               targetCard.active = true;
           }
       }
       onClickButton(button) {
           console.log("发牌哦");
           this.handArr = [this.downHand, this.leftHand, this.upHand, this.rightHand];
           Laya.timer.loop(100, this, this.dealCards);
       }
       dealCards() {
           let curHand = this.handArr[this.dealTimes % 4];
           let integer = Math.floor(this.dealTimes / 4);
           if (integer <= 2) {
               for (let i = integer * 4; i < (integer + 1) * 4; i++) {
                   curHand[i].active = true;
               }
               for (let i = 0; i < 4; i++) {
                   let card = this.cardUnknow.shift();
                   card.active = false;
               }
           }
           else {
               curHand[integer * 4].active = true;
               let card = this.cardUnknow.shift();
               card.active = false;
           }
           if (++this.dealTimes >= 16) {
               Laya.timer.clear(this, this.dealCards);
           }
       }
       init(scene) {
           this._camera = scene.getChildByName("Main Camera");
           this._scene = scene;
           scene.getChildByName("骰子").active = false;
           let pengDown = scene.getChildByName("pengDown");
           let pengLeft = scene.getChildByName("pengLeft");
           let pengRight = scene.getChildByName("pengRight");
           let pengUp = scene.getChildByName("pengUp");
           for (let i = 0; i < pengDown.numChildren; i++) {
               pengDown.getChildAt(i).active = false;
               this.pengDown.push(pengDown.getChildAt(i));
           }
           for (let i = 0; i < pengLeft.numChildren; i++) {
               pengLeft.getChildAt(i).active = false;
               this.pengLeft.push(pengLeft.getChildAt(i));
           }
           for (let i = 0; i < pengUp.numChildren; i++) {
               pengUp.getChildAt(i).active = false;
               this.pengUp.push(pengUp.getChildAt(i));
           }
           for (let i = 0; i < pengRight.numChildren; i++) {
               pengRight.getChildAt(i).active = false;
               this.pengRight.push(pengRight.getChildAt(i));
           }
           let leftShowed = scene.getChildByName("leftShowed");
           let rightShowed = scene.getChildByName("rightShowed");
           let downShowed = scene.getChildByName("downShowed");
           let upShowed = scene.getChildByName("upShowed");
           for (let i = 0; i < leftShowed.numChildren; i++) {
               leftShowed.getChildAt(i).active = false;
               this.leftShowed.push(leftShowed.getChildAt(i));
           }
           for (let i = 0; i < rightShowed.numChildren; i++) {
               rightShowed.getChildAt(i).active = false;
               this.rightShowed.push(rightShowed.getChildAt(i));
           }
           for (let i = 0; i < downShowed.numChildren; i++) {
               downShowed.getChildAt(i).active = false;
               this.downShowed.push(downShowed.getChildAt(i));
           }
           for (let i = 0; i < upShowed.numChildren; i++) {
               upShowed.getChildAt(i).active = false;
               this.upShowed.push(upShowed.getChildAt(i));
           }
           let leftHand = scene.getChildByName("leftHand");
           let rightHand = scene.getChildByName("rightHand");
           let downHand = scene.getChildByName("downHand");
           let upHand = scene.getChildByName("upHand");
           for (let i = 0; i < leftHand.numChildren; i++) {
               leftHand.getChildAt(i).active = false;
               this.leftHand.push(leftHand.getChildAt(i));
           }
           for (let i = 0; i < rightHand.numChildren; i++) {
               rightHand.getChildAt(i).active = false;
               this.rightHand.push(rightHand.getChildAt(i));
           }
           let leng = downHand.numChildren;
           for (let i = 0; i < leng; i++) {
               downHand.getChildAt(i).active = false;
               this.downHand.push((scene.getChildByName("麻将高001").getChildByName("default183").clone()));
               this.downHand[i].active = false;
               this.downHand[i]["clicked"] = false;
               this.downHand[i]["index"] = i;
               downHand.addChild(this.downHand[i]);
               this.downHand[i].transform.localPositionX = downHand.getChildAt(i).transform.localPositionX;
               this.downHand[i].transform.localPositionY = downHand.getChildAt(i).transform.localPositionY;
               this.downHand[i].transform.localPositionZ = downHand.getChildAt(i).transform.localPositionZ;
           }
           for (let i = 0; i < upHand.numChildren; i++) {
               upHand.getChildAt(i).active = false;
               this.upHand.push(upHand.getChildAt(i));
           }
           let up = scene.getChildByName("up");
           let left = scene.getChildByName("left");
           let down = scene.getChildByName("down");
           let right = scene.getChildByName("right");
           for (let i = 0; i < down.numChildren / 2; i++) {
               this.cardUnknow.push(down.getChildAt(i));
               this.cardUnknow.push(down.getChildAt(i + down.numChildren / 2));
           }
           for (let i = 0; i < left.numChildren / 2; i++) {
               this.cardUnknow.push(left.getChildAt(i));
               this.cardUnknow.push(left.getChildAt(i + left.numChildren / 2));
           }
           for (let i = 0; i < up.numChildren / 2; i++) {
               this.cardUnknow.push(up.getChildAt(i));
               this.cardUnknow.push(up.getChildAt(i + up.numChildren / 2));
           }
           for (let i = 0; i < right.numChildren / 2; i++) {
               this.cardUnknow.push(right.getChildAt(i));
               this.cardUnknow.push(right.getChildAt(i + right.numChildren / 2));
           }
       }
       onCreated() {
           let scene = Laya.stage.addChild(Laya.Loader.getRes("res/LayaScene_playScene/Conventional/playScene.ls"));
           scene.zOrder = -1;
           Laya.stage.on(Event$3.MOUSE_UP, this, this.sceneClick);
           this.init(scene);
       }
       sceneClick(e) {
           this.point.x = Laya.MouseManager.instance.mouseX;
           this.point.y = Laya.MouseManager.instance.mouseY;
           console.log(this.point);
           this._camera.viewportPointToRay(this.point, this._ray);
           console.log(this._ray);
           this._scene.physicsSimulation.rayCast(this._ray, this._outHitResult);
           if (this._outHitResult.succeeded) {
               let index = this._outHitResult.collider.owner["index"];
               let clicked = this._outHitResult.collider.owner["clicked"];
               Tween$1.to(this.downHand[index].transform, { localPositionZ: clicked ? -0.00 : -0.015 }, 200, null, Handler.create(this, () => { }));
               this.downHand.forEach(element => {
                   if (element["index"] != index && element["clicked"]) {
                       Tween$1.to(element.transform, { localPositionZ: 0 }, 200, null, Handler.create(this, () => { }));
                       element["clicked"] = false;
                   }
               });
               this._outHitResult.collider.owner["clicked"] = !clicked;
           }
       }
   }

   class GameConfig {
       constructor() {
       }
       static init() {
           var reg = Laya.ClassUtils.regClass;
           reg("script/Button.ts", ActionButton);
           reg("script/login.ts", login);
           reg("script/playScene.ts", playScene);
       }
   }
   GameConfig.width = 1920;
   GameConfig.height = 1080;
   GameConfig.scaleMode = "fixedwidth";
   GameConfig.screenMode = "none";
   GameConfig.alignV = "top";
   GameConfig.alignH = "left";
   GameConfig.startScene = "Hall.scene";
   GameConfig.sceneRoot = "";
   GameConfig.debug = false;
   GameConfig.stat = false;
   GameConfig.physicsDebug = false;
   GameConfig.exportSceneToJson = true;
   GameConfig.init();

   class Main {
       constructor() {
           if (window["Laya3D"])
               Laya3D.init(GameConfig.width, GameConfig.height);
           else
               Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
           Laya["Physics"] && Laya["Physics"].enable();
           Laya["DebugPanel"] && Laya["DebugPanel"].enable();
           Laya.stage.scaleMode = GameConfig.scaleMode;
           Laya.stage.screenMode = GameConfig.screenMode;
           Laya.stage.alignV = GameConfig.alignV;
           Laya.stage.alignH = GameConfig.alignH;
           Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
           if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
               Laya.enableDebugPanel();
           if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
               Laya["PhysicsDebugDraw"].enable();
           if (GameConfig.stat)
               Laya.Stat.show();
           Laya.alertGlobalError = true;
           Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
       }
       onVersionLoaded() {
           Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
       }
       onConfigLoaded() {
           GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
       }
   }
   new Main();

}());
