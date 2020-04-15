(function () {
   'use strict';

   var Event = Laya.Event;
   var Tween = Laya.Tween;
   class ActionButton extends Laya.Button {
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

   class BetButton extends Laya.Script {
       constructor() {
           super();
           this.backRes = "";
           this.btnText = "";
       }
       onAwake() {
           let btnBack = this.owner.getChildByName("btnBack");
           let btnText = this.owner.getChildByName("btnText");
           if (this.backRes)
               btnBack.loadImage(this.backRes);
           if (this.btnText)
               btnText.text = this.btnText;
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
       class playSceneUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("playScene");
           }
       }
       ui.playSceneUI = playSceneUI;
       REG("ui.playSceneUI", playSceneUI);
       class RecordShowUI extends Laya.Scene {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("RecordShow");
           }
       }
       ui.RecordShowUI = RecordShowUI;
       REG("ui.RecordShowUI", RecordShowUI);
       class RoomHallUI extends Laya.View {
           constructor() { super(); }
           createChildren() {
               super.createChildren();
               this.loadScene("RoomHall");
           }
       }
       ui.RoomHallUI = RoomHallUI;
       REG("ui.RoomHallUI", RoomHallUI);
   })(ui || (ui = {}));
   (function (ui) {
       var Common;
       (function (Common) {
           var Game;
           (function (Game) {
               class ChipUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/Chip");
                   }
               }
               Game.ChipUI = ChipUI;
               REG("ui.Common.Game.ChipUI", ChipUI);
               class DealUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/Deal");
                   }
               }
               Game.DealUI = DealUI;
               REG("ui.Common.Game.DealUI", DealUI);
               class FlickerUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/Flicker");
                   }
               }
               Game.FlickerUI = FlickerUI;
               REG("ui.Common.Game.FlickerUI", FlickerUI);
               class PropUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/Prop");
                   }
               }
               Game.PropUI = PropUI;
               REG("ui.Common.Game.PropUI", PropUI);
               class PropListUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/PropList");
                   }
               }
               Game.PropListUI = PropListUI;
               REG("ui.Common.Game.PropListUI", PropListUI);
               class TansAniUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/TansAni");
                   }
               }
               Game.TansAniUI = TansAniUI;
               REG("ui.Common.Game.TansAniUI", TansAniUI);
               class UserLeftUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/Game/UserLeft");
                   }
               }
               Game.UserLeftUI = UserLeftUI;
               REG("ui.Common.Game.UserLeftUI", UserLeftUI);
           })(Game = Common.Game || (Common.Game = {}));
       })(Common = ui.Common || (ui.Common = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Common;
       (function (Common) {
           var Game;
           (function (Game) {
               var PlayProp;
               (function (PlayProp) {
                   class PlayPropUI extends Laya.View {
                       constructor() { super(); }
                       createChildren() {
                           super.createChildren();
                           this.loadScene("Common/Game/PlayProp/PlayProp");
                       }
                   }
                   PlayProp.PlayPropUI = PlayPropUI;
                   REG("ui.Common.Game.PlayProp.PlayPropUI", PlayPropUI);
               })(PlayProp = Game.PlayProp || (Game.PlayProp = {}));
           })(Game = Common.Game || (Common.Game = {}));
       })(Common = ui.Common || (ui.Common = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Common;
       (function (Common) {
           class GameQuickChatUI extends Laya.View {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Common/GameQuickChat");
               }
           }
           Common.GameQuickChatUI = GameQuickChatUI;
           REG("ui.Common.GameQuickChatUI", GameQuickChatUI);
           class HealthGameReminderUI extends Laya.View {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Common/HealthGameReminder");
               }
           }
           Common.HealthGameReminderUI = HealthGameReminderUI;
           REG("ui.Common.HealthGameReminderUI", HealthGameReminderUI);
           class InvitationCodeUI extends Laya.Scene {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Common/InvitationCode");
               }
           }
           Common.InvitationCodeUI = InvitationCodeUI;
           REG("ui.Common.InvitationCodeUI", InvitationCodeUI);
       })(Common = ui.Common || (ui.Common = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Common;
       (function (Common) {
           var User;
           (function (User) {
               class UserUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Common/User/User");
                   }
               }
               User.UserUI = UserUI;
               REG("ui.Common.User.UserUI", UserUI);
           })(User = Common.User || (Common.User = {}));
       })(Common = ui.Common || (ui.Common = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Games;
       (function (Games) {
           var BenzBmw;
           (function (BenzBmw) {
               class BankerUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Banker");
                   }
               }
               BenzBmw.BankerUI = BankerUI;
               REG("ui.Games.BenzBmw.BankerUI", BankerUI);
               class BenzBmwloadingUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/BenzBmwloading");
                   }
               }
               BenzBmw.BenzBmwloadingUI = BenzBmwloadingUI;
               REG("ui.Games.BenzBmw.BenzBmwloadingUI", BenzBmwloadingUI);
               class ListUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/List");
                   }
               }
               BenzBmw.ListUI = ListUI;
               REG("ui.Games.BenzBmw.ListUI", ListUI);
               class loadingUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/loading");
                   }
               }
               BenzBmw.loadingUI = loadingUI;
               REG("ui.Games.BenzBmw.loadingUI", loadingUI);
               class PlayerUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Player");
                   }
               }
               BenzBmw.PlayerUI = PlayerUI;
               REG("ui.Games.BenzBmw.PlayerUI", PlayerUI);
               class PlayerlistUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Playerlist");
                   }
               }
               BenzBmw.PlayerlistUI = PlayerlistUI;
               REG("ui.Games.BenzBmw.PlayerlistUI", PlayerlistUI);
               class RoomselectionUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Roomselection");
                   }
               }
               BenzBmw.RoomselectionUI = RoomselectionUI;
               REG("ui.Games.BenzBmw.RoomselectionUI", RoomselectionUI);
               class RuleUI extends Laya.Dialog {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Rule");
                   }
               }
               BenzBmw.RuleUI = RuleUI;
               REG("ui.Games.BenzBmw.RuleUI", RuleUI);
               class SettingUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Setting");
                   }
               }
               BenzBmw.SettingUI = SettingUI;
               REG("ui.Games.BenzBmw.SettingUI", SettingUI);
               class SpeakUI extends Laya.Scene {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Speak");
                   }
               }
               BenzBmw.SpeakUI = SpeakUI;
               REG("ui.Games.BenzBmw.SpeakUI", SpeakUI);
               class TableUI extends Laya.Scene {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Table");
                   }
               }
               BenzBmw.TableUI = TableUI;
               REG("ui.Games.BenzBmw.TableUI", TableUI);
               class TextfailureUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Textfailure");
                   }
               }
               BenzBmw.TextfailureUI = TextfailureUI;
               REG("ui.Games.BenzBmw.TextfailureUI", TextfailureUI);
               class victoryUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/victory");
                   }
               }
               BenzBmw.victoryUI = victoryUI;
               REG("ui.Games.BenzBmw.victoryUI", victoryUI);
               class WithdrawmoneyUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/BenzBmw/Withdrawmoney");
                   }
               }
               BenzBmw.WithdrawmoneyUI = WithdrawmoneyUI;
               REG("ui.Games.BenzBmw.WithdrawmoneyUI", WithdrawmoneyUI);
           })(BenzBmw = Games.BenzBmw || (Games.BenzBmw = {}));
       })(Games = ui.Games || (ui.Games = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Games;
       (function (Games) {
           var Cow;
           (function (Cow) {
               class CowCreateRoomUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/Cow/CowCreateRoom");
                   }
               }
               Cow.CowCreateRoomUI = CowCreateRoomUI;
               REG("ui.Games.Cow.CowCreateRoomUI", CowCreateRoomUI);
               class CowLoadingUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/Cow/CowLoading");
                   }
               }
               Cow.CowLoadingUI = CowLoadingUI;
               REG("ui.Games.Cow.CowLoadingUI", CowLoadingUI);
               class CowRoomSelectionUI extends Laya.Scene {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Games/Cow/CowRoomSelection");
                   }
               }
               Cow.CowRoomSelectionUI = CowRoomSelectionUI;
               REG("ui.Games.Cow.CowRoomSelectionUI", CowRoomSelectionUI);
           })(Cow = Games.Cow || (Games.Cow = {}));
       })(Games = ui.Games || (ui.Games = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var AgentPromotion;
           (function (AgentPromotion) {
               class AgentPromotionUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/AgentPromotion/AgentPromotion");
                   }
               }
               AgentPromotion.AgentPromotionUI = AgentPromotionUI;
               REG("ui.Hall.AgentPromotion.AgentPromotionUI", AgentPromotionUI);
           })(AgentPromotion = Hall.AgentPromotion || (Hall.AgentPromotion = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var Announcement;
           (function (Announcement) {
               class AnnouncementUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/Announcement/Announcement");
                   }
               }
               Announcement.AnnouncementUI = AnnouncementUI;
               REG("ui.Hall.Announcement.AnnouncementUI", AnnouncementUI);
           })(Announcement = Hall.Announcement || (Hall.Announcement = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var CustomerService;
           (function (CustomerService) {
               class CustomerServiceUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/CustomerService/CustomerService");
                   }
               }
               CustomerService.CustomerServiceUI = CustomerServiceUI;
               REG("ui.Hall.CustomerService.CustomerServiceUI", CustomerServiceUI);
           })(CustomerService = Hall.CustomerService || (Hall.CustomerService = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var Recharge;
           (function (Recharge) {
               class RechargeUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/Recharge/Recharge");
                   }
               }
               Recharge.RechargeUI = RechargeUI;
               REG("ui.Hall.Recharge.RechargeUI", RechargeUI);
           })(Recharge = Hall.Recharge || (Hall.Recharge = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var TeaHouse;
           (function (TeaHouse) {
               class CreateTeaHouseUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/TeaHouse/CreateTeaHouse");
                   }
               }
               TeaHouse.CreateTeaHouseUI = CreateTeaHouseUI;
               REG("ui.Hall.TeaHouse.CreateTeaHouseUI", CreateTeaHouseUI);
               class HouseItemUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/TeaHouse/HouseItem");
                   }
               }
               TeaHouse.HouseItemUI = HouseItemUI;
               REG("ui.Hall.TeaHouse.HouseItemUI", HouseItemUI);
           })(TeaHouse = Hall.TeaHouse || (Hall.TeaHouse = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var UserInfo;
           (function (UserInfo) {
               class UserInfoUI extends Laya.Scene {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/UserInfo/UserInfo");
                   }
               }
               UserInfo.UserInfoUI = UserInfoUI;
               REG("ui.Hall.UserInfo.UserInfoUI", UserInfoUI);
           })(UserInfo = Hall.UserInfo || (Hall.UserInfo = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hall;
       (function (Hall) {
           var Withdrawal;
           (function (Withdrawal) {
               class WithdrawalUI extends Laya.View {
                   constructor() { super(); }
                   createChildren() {
                       super.createChildren();
                       this.loadScene("Hall/Withdrawal/Withdrawal");
                   }
               }
               Withdrawal.WithdrawalUI = WithdrawalUI;
               REG("ui.Hall.Withdrawal.WithdrawalUI", WithdrawalUI);
           })(Withdrawal = Hall.Withdrawal || (Hall.Withdrawal = {}));
       })(Hall = ui.Hall || (ui.Hall = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Hundreds;
       (function (Hundreds) {
           class BankerUserUI extends Laya.View {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Hundreds/BankerUser");
               }
           }
           Hundreds.BankerUserUI = BankerUserUI;
           REG("ui.Hundreds.BankerUserUI", BankerUserUI);
           class BetUI extends Laya.View {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Hundreds/Bet");
               }
           }
           Hundreds.BetUI = BetUI;
           REG("ui.Hundreds.BetUI", BetUI);
       })(Hundreds = ui.Hundreds || (ui.Hundreds = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var HundredsBull;
       (function (HundredsBull) {
           class HundredsBullUI extends Laya.Scene {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("HundredsBull/HundredsBull");
               }
           }
           HundredsBull.HundredsBullUI = HundredsBullUI;
           REG("ui.HundredsBull.HundredsBullUI", HundredsBullUI);
       })(HundredsBull = ui.HundredsBull || (ui.HundredsBull = {}));
   })(ui || (ui = {}));
   (function (ui) {
       var Login;
       (function (Login) {
           class LoginUI extends Laya.Scene {
               constructor() { super(); }
               createChildren() {
                   super.createChildren();
                   this.loadScene("Login/Login");
               }
           }
           Login.LoginUI = LoginUI;
           REG("ui.Login.LoginUI", LoginUI);
       })(Login = ui.Login || (ui.Login = {}));
   })(ui || (ui = {}));

   var Handler = Laya.Handler;
   var Tween$1 = Laya.Tween;
   class Chip extends ui.Common.Game.ChipUI {
       constructor() {
           super();
       }
       toTargerShow(target) {
           Tween$1.to(this.gold, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
               Tween$1.to(this.gold, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler.create(this, () => {
                   Tween$1.to(this.gold, { scaleX: 1, scaleY: 1 }, 300);
               }));
           }));
       }
       toTargerHide(target) {
           Tween$1.to(this.gold, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
               this.removeSelf();
           }));
       }
   }

   var Handler$1 = Laya.Handler;
   var Tween$2 = Laya.Tween;
   class Prop extends ui.Common.Game.PropUI {
       constructor() {
           super();
       }
       prop_leftToRight(image) {
           Tween$2.to(this.card, { scaleX: 0 }, 300, null, Handler$1.create(this, () => {
               this.card.loadImage(image);
               Tween$2.to(this.card, { scaleX: 1 }, 300);
           }));
       }
       prop_topToDown(image) {
           Tween$2.to(this.card, { scaleY: 0 }, 300, null, Handler$1.create(this, () => {
               this.card.loadImage(image);
               Tween$2.to(this.card, { scaleY: 1 }, 300);
           }));
       }
       set colour(data) {
           this.Prop_Colour = data;
       }
       set prop_Wild(data) {
           this.Prop_Wild = data;
       }
       set prop_Number(data) {
           this.Prop_Number = data;
       }
       set sort(data) {
           this.Prop_Sort = data;
       }
       get colour() {
           return this.Prop_Colour;
       }
       get prop_Wild() {
           return this.Prop_Wild;
       }
       get prop_Number() {
           return this.Prop_Number;
       }
       get sort() {
           return this.Prop_Sort;
       }
   }

   class network {
       constructor() {
           this.eList = new Array();
           this.types = {};
           this.byte = new Laya.Byte();
           this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
           this.socket = new Laya.Socket();
           this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
           this.connect();
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
           Laya.timer.frameLoop(1, this, () => {
               if (!this.types || this.eList.length == 0)
                   return;
               while (this.eList.length) {
                   this.types[this.eList[0]];
                   this.eList.shift();
               }
           });
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
           this.viewList = [];
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new PublicFun();
           return this.instance;
       }
       showAlert(node, back) {
           if (!node.getChildByName("back_gray")) {
               let rect = new Laya.Sprite();
               rect.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#333333");
               rect.name = "back_gray";
               rect.zOrder = -9999999;
               rect.alpha = 0.3;
               node.addChild(rect);
           }
           this.viewList.push(node);
           this.startAlert(node);
       }
       startAlert(node) {
           let rect = node.getBounds();
           let x = Laya.stage.width / 2;
           let y = Laya.stage.height / 2;
           node.visible = true;
           node.active = true;
           node.x = x;
           node.y = y;
           node.scaleX = 0;
           node.scaleY = 0;
           node.pivotX = rect.width / 2;
           node.pivotY = rect.height / 2;
           this.timeLine = new TimeLine();
           this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
               .addLabel("turnLeft", 0).to(node, { scaleX: 1, scaleY: 1 }, 100, null, 0);
           this.timeLine.play(0, false);
           this.timeLine.on(Event$1.COMPLETE, this, this.onComplete);
           this.timeLine.on(Event$1.LABEL, this, this.onLabel);
       }
       hideAlert(node, completeFun) {
           this.timeLine = new TimeLine();
           this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
               .addLabel("turnDown", 0).to(node, { scaleX: 0, scaleY: 0 }, 200, null, 0);
           this.timeLine.play(0, false);
           this.timeLine.on(Event$1.COMPLETE, this, () => {
               node.active = false;
               node.visible = false;
               completeFun && completeFun();
               let view = this.viewList.pop();
               view && view.onHide && view.onHide();
           });
       }
       setCenter(node) {
           node.pivotX = node.width / 2;
           node.pivotY = node.height / 2;
           node.x += node.pivotX;
           node.y += node.pivotY;
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
           this.sceneList = [];
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new SceneManager();
           return this.instance;
       }
       rigesterScene(name) {
       }
       changeScene(name) {
           Laya.Scene.open(name);
       }
   }

   class userInfoData {
       constructor() {
           this.id = 888889;
           this.money = 675412;
           this.nickName = "啦啦啦";
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new userInfoData();
           return this.instance;
       }
   }

   class base {
       constructor() {
           this.netWork = network.getinstance();
           this.publicFun = PublicFun.getinstance();
           this.scene = SceneManager.getinstance();
           this.userInfo = userInfoData.getinstance();
       }
       static getinstance() {
           if (this.instance == null)
               this.instance = new base();
           return this.instance;
       }
   }
   var Base = base.getinstance();

   var Handler$2 = Laya.Handler;
   var Tween$3 = Laya.Tween;
   class Deal extends ui.Common.Game.DealUI {
       constructor() {
           super();
       }
       startDeal(userList, total) {
           let leng = userList.length;
           let index = 0;
           Laya.timer.loop(300, this, this.loopFun, [userList, index, leng, total]);
       }
       loopFun(userList, index, leng, total) {
           let card = new Prop();
           let user = userList[index % leng];
           card.prop_Number = 0;
           this.addChild(card);
           Base.publicFun.setCenter(card);
           this.dealToUser(card, user);
           (++index > total) && Laya.timer.clear(this, this.loopFun);
       }
       dealToUser(card, user, speed = 300) {
           let pos = user.curtDealPos();
           Tween$3.to(card, { x: pos.x, y: pos.y }, speed, null, Handler$2.create(this, () => {
               user.recvCard(card.prop_Number);
               card.removeSelf();
           }));
       }
   }

   class PropList extends ui.Common.Game.PropListUI {
       constructor() {
           super();
           this.propIndex = 0;
           this.currentDeal = 0;
       }
       onAwake() {
       }
       get curDealPos() {
           let curCard = this[`card_${this.currentDeal}`];
           return curCard.localToGlobal(new Laya.Point(curCard.x, curCard.y));
       }
       propCard(list) {
           this.propIndex = 0;
           Laya.timer.loop(300, this, this.animateTimeBased);
       }
       recvCard(number) {
           this[`card_${this.currentDeal}`].active = true;
           this[`card_${this.currentDeal}`].texture = number;
           this.currentDeal++;
       }
       animateTimeBased() {
           this[`card_${this.propIndex}`].prop_leftToRight("pockCard/20.png");
           this.propIndex++;
           if (this.propIndex > 4)
               Laya.timer.clear(this, this.animateTimeBased);
       }
       set propList_Mark(data) {
           this.PropList_Mark = data;
       }
       set propList_Name(data) {
           this.PropList_Name = data;
       }
       get propList_Mark() {
           return this.PropList_Mark;
       }
       get propList_Name() {
           return this.PropList_Name;
       }
   }

   var Handler$3 = Laya.Handler;
   var Tween$4 = Laya.Tween;
   class TransAni extends ui.Common.Game.TansAniUI {
       constructor() {
           super();
       }
       onAwake() {
       }
       doAction(image) {
           image && this.setImage(image);
           Base.publicFun.setCenter(this.image);
           this.image.x = this.width + this.image.width / 2;
           Tween$4.to(this.image, { x: this.width / 2 }, 300, null, Handler$3.create(this, () => {
               Tween$4.to(this.image, { x: -this.image.width / 2 }, 300, null, Handler$3.create(this, () => {
                   this.removeSelf();
               }), 1000);
           }));
       }
       setImage(image) {
           this.image.loadImage(image);
       }
   }

   class User extends ui.Common.User.UserUI {
       constructor() {
           super();
       }
       set nickName(data) {
           this.UserName.text = data;
           this.User_Nickname = data;
       }
       set avatarFrame(data) {
           this.UserImage.loadImage(data);
           this.User_AvatarFrame = data;
       }
       set role(data) {
           this.User_Role = data;
       }
       set onLine(data) {
           this.User_OnLine = data;
       }
       set ready(data) {
           this.ShowReady.active = data;
           this.User_Ready = data;
       }
       get nickName() {
           return this.User_Nickname;
       }
       get avatarFrame() {
           return this.User_AvatarFrame;
       }
       get role() {
           return this.User_Role;
       }
       get onLine() {
           return this.User_OnLine;
       }
       get ready() {
           return this.User_Ready;
       }
   }

   var Event$2 = Laya.Event;
   class Banker extends ui.Games.BenzBmw.BankerUI {
       constructor() {
           super();
           this.money = 355444;
       }
       onAwake() {
           this.slider = this.money_slider;
           this.money_text.text = this.money + "";
           this.close_btn.on(Event$2.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.plus_btn.on(Event$2.CLICK, this, () => {
               this.slider.percent = this.slider.percent + 1;
           });
           this.reduce_btn.on(Event$2.CLICK, this, () => {
               this.slider.percent = this.slider.percent - 1;
           });
           this.apply_btn.on(Event$2.CLICK, this, () => {
               console.log(this.curSelectMoney);
           });
           this.slider.changeHandler = (percent) => {
               this.curSelectMoney = Math.floor(percent / 100 * this.money);
               this.money_text.text = this.curSelectMoney + "";
           };
           this.setMoney(100000);
       }
       setMoney(money) {
           this.slider.percent = money / this.money * 100;
       }
   }

   class CommonProgress extends Laya.Sprite {
       constructor() {
           super();
           this.m_percent = 0;
       }
       get percent() {
           return this.m_percent;
       }
       set percent(perc) {
           this.m_percent = perc > 100 ? 100 : perc;
           this.imgmask.width = this.width / 100 * this.m_percent + 1;
           this.icon.x = this.imgmask.width;
           this.changeHandler(this.m_percent);
       }
       changeHandler(percent) {
       }
       onAwake() {
           this.bar = this.getChildByName("bar");
           this.icon = this.getChildByName("icon");
           Base.publicFun.setCenter(this.icon);
           this.imgmask = this.bar.mask;
           this.on(Laya.Event.MOUSE_DOWN, this, (e) => {
               let perc = e.target.mouseX / this.width * 100;
               let func = perc > 99 ? Math.ceil : Math.floor;
               this.percent = func(perc);
           });
           this.on(Laya.Event.MOUSE_MOVE, this, (e) => {
               let perc = e.target.mouseX / this.width * 100;
               let func = perc > 99 ? Math.ceil : Math.floor;
               this.percent = func(perc);
           });
       }
   }

   class CommonProgress$1 extends Laya.Sprite {
       constructor() {
           super();
           this.m_percent = 0;
       }
       get percent() {
           return this.m_percent;
       }
       set percent(perc) {
           this.m_percent = perc > 100 ? 100 : perc;
           this.imgmask.width = this.width / 100 * this.m_percent;
       }
       onAwake() {
           this.bar = this.getChildByName("bar");
           this.imgmask = this.bar.mask;
           Laya.timer.frameLoop(2, this, () => {
               if (this.m_percent >= 100)
                   this.m_percent = 0;
               this.percent = this.m_percent + 1;
           });
       }
   }

   var Event$3 = Laya.Event;
   var Handler$4 = Laya.Handler;
   class Player extends ui.Games.BenzBmw.PlayerUI {
       constructor() {
           super();
       }
       get playerList() {
           return this.playerListData;
       }
       set playerList(data) {
           this.playerListData = data;
           this.player_list.array = data;
       }
       onAwake() {
           this.close_btn.on(Event$3.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.confirm_btn.on(Event$3.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.player_list.vScrollBarSkin = "";
           this.player_list.renderHandler = new Handler$4(this, this.updateItem);
           this.playerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
       }
       updateItem(cell, index) {
           cell.getChildByName("name_text").text = this.player_list.array[index];
           cell.getChildByName("money_text").text = this.player_list.array[index];
           cell.getChildByName("header_image");
       }
   }

   var Event$4 = Laya.Event;
   class Playerlist extends ui.Games.BenzBmw.PlayerlistUI {
       constructor() {
           super();
       }
       get playerList() {
           return this.playerListData;
       }
       set playerList(data) {
           this.playerListData = data;
           for (let i = 0; i < data.length; i++) {
               console.log(i);
               let player = this.player_list.getChildAt(i);
               player.visible = true;
               player.getChildByName("name_text").text = data[i];
               player.getChildByName("money_text").text = data[i];
               player.getChildByName("header_image");
           }
       }
       onAwake() {
           this.close_btn.on(Event$4.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.playerList = [1, 2, 3, 4, 5];
       }
   }

   var Event$5 = Laya.Event;
   class Roomselection extends ui.Games.BenzBmw.RoomselectionUI {
       constructor() {
           super();
       }
       onAwake() {
           this.back_btn.on(Event$5.CLICK, this, () => {
               console.log("back");
           });
           this.about_btn.on(Event$5.CLICK, this, () => {
               Base.publicFun.showAlert(this.rule_view);
           });
           this.primary_btn.on(Event$5.CLICK, this, () => {
               console.log("初级");
           });
           this.intermediate_btn.on(Event$5.CLICK, this, () => {
               console.log("中级");
           });
           this.senior_btn.on(Event$5.CLICK, this, () => {
               console.log("高级");
           });
           this.quick_btn.on(Event$5.CLICK, this, () => {
               console.log("快速开始");
           });
       }
   }

   var Event$6 = Laya.Event;
   class Rule extends ui.Games.BenzBmw.RuleUI {
       constructor() {
           super();
       }
       onAwake() {
           this.close_btn.on(Event$6.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.confirm_btn.on(Event$6.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
       }
   }

   var Event$7 = Laya.Event;
   class Setting extends ui.Games.BenzBmw.SettingUI {
       constructor() {
           super();
       }
       onAwake() {
           this.close_btn.on(Event$7.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.confirm_btn.on(Event$7.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.bgm_check.changeHandle = (check) => {
               console.log("音效", check);
           };
           this.automatic_check.changeHandle = (check) => {
               console.log("自动", check);
           };
           this.music_check.changeHandle = (check) => {
               console.log("音乐", check);
           };
           this.night_check.changeHandle = (check) => {
               console.log("日夜", check);
           };
           this.sound_check.changeHandle = (check) => {
               console.log("声音", check);
           };
       }
   }

   class CommonCheck extends Laya.Sprite {
       constructor() {
           super();
           this.isCheck = false;
       }
       set checked(ischeck) {
           this.isCheck = ischeck;
           this.unSelect.visible = !ischeck;
           this.selected.visible = ischeck;
           this.changeHandle(ischeck);
       }
       get checked() {
           return this.isCheck;
       }
       changeHandle(check) {
       }
       onAwake() {
           this.unSelect = this.getChildByName("unSelect");
           this.selected = this.getChildByName("selected");
           this.checked = false;
           this.on(Laya.Event.CLICK, this, () => {
               this.checked = !this.isCheck;
           });
       }
   }

   var Event$8 = Laya.Event;
   class CowCreateRoom extends ui.Games.Cow.CowCreateRoomUI {
       constructor() {
           super();
       }
       onAwake() {
           this.tabButtons.changeHandle = (index) => {
           };
           this.close_btn.on(Event$8.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.confirm_btn.on(Event$8.CLICK, this, () => {
               for (let index = 0; index < this.radios.numChildren; index++) {
                   let checkIndex = this.radios.getChildAt(index).checkIndex;
                   console.log(checkIndex);
               }
           });
       }
   }

   class CommonTabButton extends Laya.Sprite {
       constructor() {
           super();
       }
       onAwake() {
           this.checkIndex = 0;
           for (let i = 0; i < this.numChildren; i++) {
               this.getChildAt(i).on(Laya.Event.CLICK, this, () => {
                   this.checkIndex = i;
               });
           }
       }
       get checkIndex() {
           return this.checkNum;
       }
       set checkIndex(index) {
           for (let i = 0; i < this.numChildren; i++) {
               let child = this.getChildAt(i);
               let selected = child.getChildByName("selected");
               let unselect = child.getChildByName("unselect");
               let selected_text = child.getChildByName("selected_text");
               let unselect_text = child.getChildByName("unselect_text");
               let isShow = (index == i);
               selected.visible = isShow;
               selected_text.visible = isShow;
               unselect.visible = !isShow;
               unselect_text.visible = !isShow;
           }
           this.changeHandle(index);
       }
       changeHandle(index) {
           console.log(index);
       }
   }

   class CommonRadioGroup extends Laya.Sprite {
       constructor() {
           super();
       }
       onAwake() {
           this.checkIndex = 0;
       }
       get checkIndex() {
           return this.checkNum;
       }
       set checkIndex(index) {
           this.childChecked_index(index);
       }
       childChecked_index(index) {
           let child = this.getChildAt(index);
           this.childChecked(child);
       }
       childChecked(child) {
           for (let i = 0; i < this.numChildren; i++) {
               let forChild = this.getChildAt(i);
               if (forChild != child)
                   forChild.checked = false;
               else {
                   forChild.checked = true;
                   this.checkNum = i;
               }
           }
       }
   }

   class CommonRadio extends Laya.Sprite {
       constructor() {
           super();
           this.isCheck = false;
       }
       set checked(ischeck) {
           this.isCheck = ischeck;
           this.unSelect.visible = !ischeck;
           this.selected.visible = ischeck;
       }
       get checked() {
           return this.isCheck;
       }
       onAwake() {
           this.unSelect = this.getChildByName("unSelect");
           this.selected = this.getChildByName("selected");
           this.checked = false;
           this.on(Laya.Event.CLICK, this, () => {
               if (this.parent) {
                   this.parent.childChecked(this);
               }
           });
       }
   }

   class CowLoading extends ui.Games.Cow.CowLoadingUI {
       constructor() {
           super();
       }
       setPercent(perc) {
           this.progress.percent = perc;
       }
   }

   class CowRoomSelection extends ui.Games.Cow.CowRoomSelectionUI {
       constructor() {
           super();
       }
   }

   class AgentPromotion extends ui.Hall.AgentPromotion.AgentPromotionUI {
       constructor() {
           super();
       }
       onAwake() {
           this.hideAllGroup();
           this.setGroup(0);
           this.tabButtons.changeHandle = (index) => {
               this.setGroup(index);
           };
       }
       setGroup(index) {
           this.hideAllGroup();
           this.groups.getChildAt(index).visible = true;
       }
       hideAllGroup() {
           for (let index = 0; index < this.groups.numChildren; index++) {
               this.groups.getChildAt(index).visible = false;
           }
       }
   }

   class Announcement extends ui.Hall.Announcement.AnnouncementUI {
       constructor() {
           super();
       }
       onAwake() {
           this.hideAllGroup();
           this.setGroup(0);
           this.tabButtons.changeHandle = (index) => {
               this.setGroup(index);
           };
       }
       setGroup(index) {
           this.hideAllGroup();
           this.groups.getChildAt(index).visible = true;
       }
       hideAllGroup() {
           for (let index = 0; index < this.groups.numChildren; index++) {
               this.groups.getChildAt(index).visible = false;
           }
       }
   }

   var Event$9 = Laya.Event;
   var Handler$5 = Laya.Handler;
   class CustomerService extends ui.Hall.CustomerService.CustomerServiceUI {
       constructor() {
           super();
           this.maxWidch = 388;
       }
       onAwake() {
           this.close_btn.on(Event$9.CLICK, this, () => {
               Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
           });
           this.send_btn.on(Event$9.CLICK, this, () => {
               if (this.ask_input.text)
                   this.chat_list.array = [...this.chat_list.array, {
                           type: 0,
                           text: this.ask_input.text
                       }];
               this.ask_input.text = "";
               this.chat_list.scrollTo(this.chat_list.array.length - 1);
           });
           this.chat_list.vScrollBarSkin = "";
           this.chat_list.array = [{
                   type: 1,
                   text: "您好 请问有什么可以帮助您"
               }];
           this.chat_list.renderHandler = new Handler$5(this, this.updateItem);
       }
       updateItem(cell, index) {
           let data = this.chat_list.array[index];
           let right = cell.getChildByName("right");
           let left = cell.getChildByName("left");
           let showWho = (data.type == 0);
           left.visible = !showWho;
           right.visible = showWho;
           let showedNode = showWho ? right : left;
           let header_image = showedNode.getChildByName("header_image");
           let chatBox_image = showedNode.getChildByName("chatBox_image");
           let say_text = chatBox_image.getChildByName("say_text");
           say_text.text = data.text;
           let rect = say_text.getBounds();
           console.log(rect.width);
           if (rect.width >= this.maxWidch) {
               say_text.width = this.maxWidch;
               say_text.wordWrap = true;
               rect = say_text.getBounds();
           }
           else {
               say_text.wordWrap = false;
               say_text.width = 0;
           }
           chatBox_image.width = rect.width + 100;
           chatBox_image.height = rect.height + 40;
           cell.height = chatBox_image.height + 50;
           if (showWho) {
               chatBox_image.x = header_image.x - chatBox_image.width - 15;
           }
           say_text.pivotX = rect.width / 2;
           say_text.pivotY = rect.height / 2;
           say_text.x = chatBox_image.width / 2 - 15;
           say_text.y = chatBox_image.height / 2;
           showedNode.getChildByName("date_text").text = new Date().toDateString();
       }
   }

   var Event$a = Laya.Event;
   var Handler$6 = Laya.Handler;
   class Recharge extends ui.Hall.Recharge.RechargeUI {
       constructor() {
           super();
           this.userid = 655512;
           this.userMoney = 845242;
           this.quickNumbers = [100, 500, 1000, 5000, 10000];
       }
       onAwake() {
           this.userid_text.text = Base.userInfo.id + "";
           this.userMoney_text.text = Base.userInfo.money + "";
           this.buyed_list.vScrollBarSkin = "";
           this.buyed_list.renderHandler = new Handler$6(this, this.updateItem);
           this.buyed_list.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
           this.tabButtons.changeHandle = (index) => {
               let isvip = (index == 0);
               this.vipRecharge_group.visible = isvip;
               this.otherRecharge_group.visible = !isvip;
           };
           this.close_btn.on(Event$a.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.clearInput_btn.on(Event$a.CLICK, this, () => {
               this.money_input.text = "";
           });
           this.confirm_btn.on(Event$a.CLICK, this, () => {
               console.log(this.money_input.text);
           });
           for (let i = 0; i < this.quickPush_btns.numChildren; i++) {
               this.quickPush_btns.getChildAt(i).on(Event$a.CLICK, this, () => {
                   this.money_input.text = this.quickNumbers[i] + "";
               });
           }
       }
       updateItem(cell, index) {
           cell.getChildByName("name").text = this.buyed_list.array[index] + "购买";
           cell.getChildByName("money").text = this.buyed_list.array[index] + "元";
       }
   }

   var Handler$7 = Laya.Handler;
   var HouseItem = ui.Hall.TeaHouse.HouseItemUI;
   var Event$b = Laya.Event;
   class CreateTeaHouse extends ui.Hall.TeaHouse.CreateTeaHouseUI {
       constructor() {
           super();
           this.houseSelect = -1;
           this.military_btn.on(Event$b.CLICK, this, this.clickMilitary);
           this.hall_btn.on(Event$b.CLICK, this, this.clickHall);
           this.creat_btn.on(Event$b.CLICK, this, () => {
               this.creatHouse.visible = true;
               this.joinHouse.visible = false;
           });
           this.creat_close_btn.on(Event$b.CLICK, this, () => {
               this.creatHouse.visible = false;
           });
           this.join_btn.on(Event$b.CLICK, this, () => {
               this.creatHouse.visible = false;
               this.joinHouse.visible = true;
           });
           this.join_close_btn.on(Event$b.CLICK, this, () => {
               this.joinHouse.visible = false;
           });
           for (let i = 0; i < 10; i++) {
               this[`num_${i}`].on(Event$b.CLICK, this, () => {
                   console.log(i);
                   if (this.search_text.text.length < 6)
                       this.search_text.text += i;
               });
           }
           this.backspace.on(Event$b.CLICK, this, () => {
               if (this.search_text.text.length > 0)
                   this.search_text.text = this.search_text.text.slice(0, this.search_text.text.length - 1);
           });
           this.search_btn.on(Event$b.CLICK, this, () => {
               console.log(parseInt(this.search_text.text));
           });
           this.set_btn.on(Event$b.CLICK, this, () => {
               this.houseSet.visible = true;
           });
           this.house_set_close.on(Event$b.CLICK, this, () => {
               this.houseSet.visible = false;
           });
       }
       onAwake() {
           this.houseList.selectEnable = true;
           this.houseList.itemRender = HouseItem;
           this.houseList.vScrollBarSkin = "";
           this.houseList.selectHandler = new Handler$7(this, this.onSelect, null, false);
           this.houseList.renderHandler = new Handler$7(this, this.updateItem);
           this.houseList.repeatX = 1;
           this.houseList.repeatY = 6;
           setTimeout(() => {
               this.houseList.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
           }, 50);
       }
       updateItem(cell, index) {
           cell.selected.visible = false;
           cell.unselect.visible = true;
           if (cell.selected && this.houseSelect == index) {
               cell.selected.visible = true;
               cell.unselect.visible = false;
           }
       }
       onSelect(index) {
           console.log("当前选择的索引：" + index);
           this.houseSelect = index;
       }
       clickMilitary() {
           this.rankList.visible = true;
           this.houseHall.visible = false;
           this.military_btn.loadImage("TeaHouse/TeaHousehall.png");
           this.hall_btn.loadImage("TeaHouse/VictoryRecordFalse.png");
       }
       clickHall() {
           this.rankList.visible = false;
           this.houseHall.visible = true;
           this.military_btn.loadImage("TeaHouse/VictoryRecord.png");
           this.hall_btn.loadImage("TeaHouse/TeaHousehallTrue.png");
       }
   }

   var Event$c = Laya.Event;
   class UserInfo extends ui.Hall.UserInfo.UserInfoUI {
       constructor(index) {
           super();
           this.selectIndex = index;
       }
       onAwake() {
           this.userName_text.text = Base.userInfo.nickName;
           this.userMoney_text.text = Base.userInfo.money + "";
           this.tabButtons.changeHandle = (index) => {
               this.hideAllGroup();
               this.groups.getChildAt(index).visible = true;
           };
           this.setGroupShow(this.selectIndex);
           this.close_btn.on(Event$c.CLICK, this, () => {
               Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
           });
           this.confirmzfb_btn.on(Event$c.CLICK, this, () => {
               console.log("姓名", this.zfbName_input.text);
               console.log("账号", this.zfbAccount_input.text);
           });
           this.confirmPass_btn.on(Event$c.CLICK, this, () => {
               console.log("老密码", this.oldPass_input.text);
               console.log("新密码", this.newPass_input.text);
               console.log("确认密码", this.confirmPass_input.text);
           });
       }
       hideAllGroup() {
           for (let index = 0; index < this.groups.numChildren; index++) {
               this.groups.getChildAt(index).visible = false;
           }
       }
       setGroupShow(index) {
           if (index > -1)
               this.tabButtons.checkIndex = index;
       }
   }

   var Event$d = Laya.Event;
   class Withdrawal extends ui.Hall.Withdrawal.WithdrawalUI {
       constructor() {
           super();
           this.userMoney = 845242;
       }
       onAwake() {
           this.userMoney_text.text = Base.userInfo.money + "";
           this.tabButtons.changeHandle = (index) => {
               if (this.record_group.visible)
                   return;
               let iszfb = (index == 0);
               this.widthDraw_group.visible = true;
               this.yhk_group.visible = !iszfb;
               this.zfb_group.visible = iszfb;
           };
           this.record_btn.on(Event$d.CLICK, this, () => {
               this.widthDraw_group.visible = false;
               this.record_group.visible = true;
           });
           this.recordg_btn.on(Event$d.CLICK, this, () => {
               this.widthDraw_group.visible = true;
               this.record_group.visible = false;
               this.tabButtons.checkIndex = this.tabButtons.checkIndex;
           });
           this.contact_btn.on(Event$d.CLICK, this, () => {
               Base.publicFun.showAlert(this.addChild(new CustomerService()));
           });
           this.bind_btn.on(Event$d.CLICK, this, () => {
               let userView = this.addChild(new UserInfo(2));
               userView.visible = false;
               Base.publicFun.showAlert(userView);
           });
           this.close_btn.on(Event$d.CLICK, this, () => {
               Base.publicFun.hideAlert(this);
           });
           this.clearInput_btn.on(Event$d.CLICK, this, () => {
               this.money_slider.percent = 0;
           });
           this.confirm_btn.on(Event$d.CLICK, this, () => {
               console.log(this.money_input.text);
           });
           this.selectAll_btn.on(Event$d.CLICK, this, () => {
               this.money_slider.percent = 100;
           });
           this.money_input.on(Event$d.INPUT, this, (e) => {
               let number = e.text ? parseInt(e.text) : 0;
               this.money_slider.percent = number / Base.userInfo.money * 100;
           });
           this.money_slider.changeHandler = (percent) => {
               this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent) + "";
           };
           this.money_slider.percent = 0;
       }
       updateItem(cell, index) {
       }
   }

   var Event$e = Laya.Event;
   class Hall extends ui.HallUI {
       constructor() {
           super();
       }
       onAwake() {
           this.card = this.getChildByName("card");
           this.cardList = this.getChildByName("cardList");
           this.market.on(Event$e.CLICK, this, this.onClickButton);
           this.combat.on(Event$e.CLICK, this, this.onClickCombat);
       }
       onClickButton() {
           this.card.prop_topToDown("pockCard/5.png");
       }
       onClickCombat() {
           this.cardList.propCard([]);
       }
   }

   class login extends ui.Login.LoginUI {
       constructor() {
           super();
       }
       onAwake() {
       }
       changeHandler(e) {
       }
   }

   var Handler$8 = Laya.Handler;
   var Tween$5 = Laya.Tween;
   var Event$f = Laya.Event;
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
           this.fapai.clickHandler = new Handler$8(this, this.onClickButton, [this.fapai]);
           this.mopai.clickHandler = new Handler$8(this, this.onClickMopai, [this.mopai]);
           this.dapai.clickHandler = new Handler$8(this, this.onClickDapai, [this.dapai]);
           this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
           this.point = new Laya.Vector2();
           this._outHitResult = new Laya.HitResult();
       }
       onClickDapai(button) {
           let card5 = this.downHand[5];
           card5.active = false;
           let card13 = this.downHand[13];
           Tween$5.to(card13.transform, { localPositionZ: card13.transform.localPositionZ - 0.05, localRotationEulerY: 30 }, 300, null, Handler$8.create(this, () => {
               Tween$5.to(card13.transform, { localPositionX: card5.transform.localPositionX, localRotationEulerY: 0 }, 500, null, Handler$8.create(this, () => {
                   Tween$5.to(card13.transform, { localPositionZ: 0 }, 300);
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
           Laya.stage.on(Event$f.MOUSE_UP, this, this.sceneClick);
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
               Tween$5.to(this.downHand[index].transform, { localPositionZ: clicked ? -0.00 : -0.015 }, 200, null, Handler$8.create(this, () => { }));
               this.downHand.forEach(element => {
                   if (element["index"] != index && element["clicked"]) {
                       Tween$5.to(element.transform, { localPositionZ: 0 }, 200, null, Handler$8.create(this, () => { }));
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
           reg("script/Application/Game/Common/Game/BetButton.ts", BetButton);
           reg("script/Application/Game/Common/Game/Chip.ts", Chip);
           reg("script/Application/Game/Common/Game/Deal.ts", Deal);
           reg("script/Application/Game/Common/Game/Prop.ts", Prop);
           reg("script/Application/Game/Common/Game/PropList.ts", PropList);
           reg("script/Application/Game/Common/Game/TransAni.ts", TransAni);
           reg("script/Application/Game/Common/User/User.ts", User);
           reg("script/Application/Game/BenzBmw/Banker.ts", Banker);
           reg("script/CommonSlider.ts", CommonProgress);
           reg("script/CommonProgress.ts", CommonProgress$1);
           reg("script/Application/Game/BenzBmw/Player.ts", Player);
           reg("script/Application/Game/BenzBmw/Playerlist.ts", Playerlist);
           reg("script/Application/Game/BenzBmw/Roomselection.ts", Roomselection);
           reg("script/Application/Game/BenzBmw/Rule.ts", Rule);
           reg("script/Application/Game/BenzBmw/Setting.ts", Setting);
           reg("script/CommonCheck.ts", CommonCheck);
           reg("script/Application/Game/Cow/CowCreateRoom.ts", CowCreateRoom);
           reg("script/CommonTabButtons.ts", CommonTabButton);
           reg("script/CommonRadioGroup.ts", CommonRadioGroup);
           reg("script/CommonRadio.ts", CommonRadio);
           reg("script/Application/Game/Cow/CowLoading.ts", CowLoading);
           reg("script/Application/Game/Cow/CowRoomSelection.ts", CowRoomSelection);
           reg("script/Application/Hall/AgentPromotion/AgentPromotion.ts", AgentPromotion);
           reg("script/Application/Hall/Announcement/Announcement.ts", Announcement);
           reg("script/Application/Hall/CustomerService/CustomerService.ts", CustomerService);
           reg("script/Application/Hall/Recharge/Recharge.ts", Recharge);
           reg("script/Application/Hall/TeaHouse/CreateTeaHouse.ts", CreateTeaHouse);
           reg("script/Application/Hall/UserInfo/UserInfo.ts", UserInfo);
           reg("script/Application/Hall/Withdrawal/Withdrawal.ts", Withdrawal);
           reg("script/Application/Hall/Hall.ts", Hall);
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
   GameConfig.startScene = "Hall/Withdrawal/Withdrawal.scene";
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
