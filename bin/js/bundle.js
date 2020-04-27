(function () {
    'use strict';

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
        class APP_UpdateUI extends Laya.Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("APP_Update");
            }
        }
        ui.APP_UpdateUI = APP_UpdateUI;
        REG("ui.APP_UpdateUI", APP_UpdateUI);
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
        var Bull;
        (function (Bull) {
            class BullGameUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Bull/BullGame");
                }
            }
            Bull.BullGameUI = BullGameUI;
            REG("ui.Bull.BullGameUI", BullGameUI);
            class BullLoadingUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Bull/BullLoading");
                }
            }
            Bull.BullLoadingUI = BullLoadingUI;
            REG("ui.Bull.BullLoadingUI", BullLoadingUI);
        })(Bull = ui.Bull || (ui.Bull = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Bull;
        (function (Bull) {
            var Ruels;
            (function (Ruels) {
                class RoomRuleUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Bull/Ruels/RoomRule");
                    }
                }
                Ruels.RoomRuleUI = RoomRuleUI;
                REG("ui.Bull.Ruels.RoomRuleUI", RoomRuleUI);
            })(Ruels = Bull.Ruels || (Bull.Ruels = {}));
        })(Bull = ui.Bull || (ui.Bull = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Common;
        (function (Common) {
            class PopUpUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Common/PopUp");
                }
            }
            Common.PopUpUI = PopUpUI;
            REG("ui.Common.PopUpUI", PopUpUI);
        })(Common = ui.Common || (ui.Common = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameCommonUI;
        (function (GameCommonUI) {
            var Athletics;
            (function (Athletics) {
                class BetUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Bet");
                    }
                }
                Athletics.BetUI = BetUI;
                REG("ui.GameCommonUI.Athletics.BetUI", BetUI);
                class BetButtonUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/BetButton");
                    }
                }
                Athletics.BetButtonUI = BetButtonUI;
                REG("ui.GameCommonUI.Athletics.BetButtonUI", BetButtonUI);
                class ChipUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Chip");
                    }
                }
                Athletics.ChipUI = ChipUI;
                REG("ui.GameCommonUI.Athletics.ChipUI", ChipUI);
                class DealUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Deal");
                    }
                }
                Athletics.DealUI = DealUI;
                REG("ui.GameCommonUI.Athletics.DealUI", DealUI);
                class FlickerUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Flicker");
                    }
                }
                Athletics.FlickerUI = FlickerUI;
                REG("ui.GameCommonUI.Athletics.FlickerUI", FlickerUI);
                class PlayPropUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/PlayProp");
                    }
                }
                Athletics.PlayPropUI = PlayPropUI;
                REG("ui.GameCommonUI.Athletics.PlayPropUI", PlayPropUI);
                class PropUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Prop");
                    }
                }
                Athletics.PropUI = PropUI;
                REG("ui.GameCommonUI.Athletics.PropUI", PropUI);
                class RobUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/Rob");
                    }
                }
                Athletics.RobUI = RobUI;
                REG("ui.GameCommonUI.Athletics.RobUI", RobUI);
                class TansAniUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/TansAni");
                    }
                }
                Athletics.TansAniUI = TansAniUI;
                REG("ui.GameCommonUI.Athletics.TansAniUI", TansAniUI);
                class UserUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/User");
                    }
                }
                Athletics.UserUI = UserUI;
                REG("ui.GameCommonUI.Athletics.UserUI", UserUI);
                class UserLeftUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/UserLeft");
                    }
                }
                Athletics.UserLeftUI = UserLeftUI;
                REG("ui.GameCommonUI.Athletics.UserLeftUI", UserLeftUI);
                class UserRightUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("GameCommonUI/Athletics/UserRight");
                    }
                }
                Athletics.UserRightUI = UserRightUI;
                REG("ui.GameCommonUI.Athletics.UserRightUI", UserRightUI);
            })(Athletics = GameCommonUI.Athletics || (GameCommonUI.Athletics = {}));
        })(GameCommonUI = ui.GameCommonUI || (ui.GameCommonUI = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameCommonUI;
        (function (GameCommonUI) {
            class CommonCreatRoomUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/CommonCreatRoom");
                }
            }
            GameCommonUI.CommonCreatRoomUI = CommonCreatRoomUI;
            REG("ui.GameCommonUI.CommonCreatRoomUI", CommonCreatRoomUI);
            class CommonGameTypeSelectionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/CommonGameTypeSelection");
                }
            }
            GameCommonUI.CommonGameTypeSelectionUI = CommonGameTypeSelectionUI;
            REG("ui.GameCommonUI.CommonGameTypeSelectionUI", CommonGameTypeSelectionUI);
            class CommonSelectiionUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/CommonSelectiion");
                }
            }
            GameCommonUI.CommonSelectiionUI = CommonSelectiionUI;
            REG("ui.GameCommonUI.CommonSelectiionUI", CommonSelectiionUI);
            class FlutterTextUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("GameCommonUI/FlutterText");
                }
            }
            GameCommonUI.FlutterTextUI = FlutterTextUI;
            REG("ui.GameCommonUI.FlutterTextUI", FlutterTextUI);
        })(GameCommonUI = ui.GameCommonUI || (ui.GameCommonUI = {}));
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
                class ListMenuUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/BenzBmw/ListMenu");
                    }
                }
                BenzBmw.ListMenuUI = ListMenuUI;
                REG("ui.Games.BenzBmw.ListMenuUI", ListMenuUI);
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
            var Dice;
            (function (Dice) {
                class DiceUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Dice/Dice");
                    }
                }
                Dice.DiceUI = DiceUI;
                REG("ui.Games.Dice.DiceUI", DiceUI);
            })(Dice = Games.Dice || (Games.Dice = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var FiftyK;
            (function (FiftyK) {
                class FiveTenKloadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/FiftyK/FiveTenKloading");
                    }
                }
                FiftyK.FiveTenKloadingUI = FiveTenKloadingUI;
                REG("ui.Games.FiftyK.FiveTenKloadingUI", FiveTenKloadingUI);
                class FiveTenKSelectionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/FiftyK/FiveTenKSelection");
                    }
                }
                FiftyK.FiveTenKSelectionUI = FiveTenKSelectionUI;
                REG("ui.Games.FiftyK.FiveTenKSelectionUI", FiveTenKSelectionUI);
            })(FiftyK = Games.FiftyK || (Games.FiftyK = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var FiftyK;
            (function (FiftyK) {
                var Ruels;
                (function (Ruels) {
                    class FiftyRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/FiftyK/Ruels/FiftyRoomRule");
                        }
                    }
                    Ruels.FiftyRoomRuleUI = FiftyRoomRuleUI;
                    REG("ui.Games.FiftyK.Ruels.FiftyRoomRuleUI", FiftyRoomRuleUI);
                })(Ruels = FiftyK.Ruels || (FiftyK.Ruels = {}));
            })(FiftyK = Games.FiftyK || (Games.FiftyK = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var FiveArching;
            (function (FiveArching) {
                class FiveArchingloadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/FiveArching/FiveArchingloading");
                    }
                }
                FiveArching.FiveArchingloadingUI = FiveArchingloadingUI;
                REG("ui.Games.FiveArching.FiveArchingloadingUI", FiveArchingloadingUI);
            })(FiveArching = Games.FiveArching || (Games.FiveArching = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var FiveArching;
            (function (FiveArching) {
                var Ruels;
                (function (Ruels) {
                    class FiveArchingRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/FiveArching/Ruels/FiveArchingRoomRule");
                        }
                    }
                    Ruels.FiveArchingRoomRuleUI = FiveArchingRoomRuleUI;
                    REG("ui.Games.FiveArching.Ruels.FiveArchingRoomRuleUI", FiveArchingRoomRuleUI);
                })(Ruels = FiveArching.Ruels || (FiveArching.Ruels = {}));
            })(FiveArching = Games.FiveArching || (Games.FiveArching = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Fruit;
            (function (Fruit) {
                class FruitLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Fruit/FruitLoading");
                    }
                }
                Fruit.FruitLoadingUI = FruitLoadingUI;
                REG("ui.Games.Fruit.FruitLoadingUI", FruitLoadingUI);
                class FruitSelectionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Fruit/FruitSelection");
                    }
                }
                Fruit.FruitSelectionUI = FruitSelectionUI;
                REG("ui.Games.Fruit.FruitSelectionUI", FruitSelectionUI);
                class FruitTableUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Fruit/FruitTable");
                    }
                }
                Fruit.FruitTableUI = FruitTableUI;
                REG("ui.Games.Fruit.FruitTableUI", FruitTableUI);
            })(Fruit = Games.Fruit || (Games.Fruit = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var GoldenFlower;
            (function (GoldenFlower) {
                class GoldenFlowerGameUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/GoldenFlower/GoldenFlowerGame");
                    }
                }
                GoldenFlower.GoldenFlowerGameUI = GoldenFlowerGameUI;
                REG("ui.Games.GoldenFlower.GoldenFlowerGameUI", GoldenFlowerGameUI);
                class GoldenFlowerLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/GoldenFlower/GoldenFlowerLoading");
                    }
                }
                GoldenFlower.GoldenFlowerLoadingUI = GoldenFlowerLoadingUI;
                REG("ui.Games.GoldenFlower.GoldenFlowerLoadingUI", GoldenFlowerLoadingUI);
            })(GoldenFlower = Games.GoldenFlower || (Games.GoldenFlower = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var GoldenFlower;
            (function (GoldenFlower) {
                var Rules;
                (function (Rules) {
                    class GoldenFlowerRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/GoldenFlower/Rules/GoldenFlowerRoomRule");
                        }
                    }
                    Rules.GoldenFlowerRoomRuleUI = GoldenFlowerRoomRuleUI;
                    REG("ui.Games.GoldenFlower.Rules.GoldenFlowerRoomRuleUI", GoldenFlowerRoomRuleUI);
                })(Rules = GoldenFlower.Rules || (GoldenFlower.Rules = {}));
            })(GoldenFlower = Games.GoldenFlower || (Games.GoldenFlower = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Landlord;
            (function (Landlord) {
                class LandlordLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Landlord/LandlordLoading");
                    }
                }
                Landlord.LandlordLoadingUI = LandlordLoadingUI;
                REG("ui.Games.Landlord.LandlordLoadingUI", LandlordLoadingUI);
                class LandlordSelectionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Landlord/LandlordSelection");
                    }
                }
                Landlord.LandlordSelectionUI = LandlordSelectionUI;
                REG("ui.Games.Landlord.LandlordSelectionUI", LandlordSelectionUI);
            })(Landlord = Games.Landlord || (Games.Landlord = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Landlord;
            (function (Landlord) {
                var Rules;
                (function (Rules) {
                    class LandlordRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/Landlord/Rules/LandlordRoomRule");
                        }
                    }
                    Rules.LandlordRoomRuleUI = LandlordRoomRuleUI;
                    REG("ui.Games.Landlord.Rules.LandlordRoomRuleUI", LandlordRoomRuleUI);
                })(Rules = Landlord.Rules || (Landlord.Rules = {}));
            })(Landlord = Games.Landlord || (Games.Landlord = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var RunsFast;
            (function (RunsFast) {
                var Rules;
                (function (Rules) {
                    class RunFastRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/RunsFast/Rules/RunFastRoomRule");
                        }
                    }
                    Rules.RunFastRoomRuleUI = RunFastRoomRuleUI;
                    REG("ui.Games.RunsFast.Rules.RunFastRoomRuleUI", RunFastRoomRuleUI);
                })(Rules = RunsFast.Rules || (RunsFast.Rules = {}));
            })(RunsFast = Games.RunsFast || (Games.RunsFast = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var RunsFast;
            (function (RunsFast) {
                class RunsFastLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/RunsFast/RunsFastLoading");
                    }
                }
                RunsFast.RunsFastLoadingUI = RunsFastLoadingUI;
                REG("ui.Games.RunsFast.RunsFastLoadingUI", RunsFastLoadingUI);
            })(RunsFast = Games.RunsFast || (Games.RunsFast = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Stud;
            (function (Stud) {
                class StudLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Stud/StudLoading");
                    }
                }
                Stud.StudLoadingUI = StudLoadingUI;
                REG("ui.Games.Stud.StudLoadingUI", StudLoadingUI);
            })(Stud = Games.Stud || (Games.Stud = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var TenHalf;
            (function (TenHalf) {
                class TenHalfLoadingUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/TenHalf/TenHalfLoading");
                    }
                }
                TenHalf.TenHalfLoadingUI = TenHalfLoadingUI;
                REG("ui.Games.TenHalf.TenHalfLoadingUI", TenHalfLoadingUI);
            })(TenHalf = Games.TenHalf || (Games.TenHalf = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Texas;
            (function (Texas) {
                var Rules;
                (function (Rules) {
                    class TexasRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/Texas/Rules/TexasRoomRule");
                        }
                    }
                    Rules.TexasRoomRuleUI = TexasRoomRuleUI;
                    REG("ui.Games.Texas.Rules.TexasRoomRuleUI", TexasRoomRuleUI);
                })(Rules = Texas.Rules || (Texas.Rules = {}));
            })(Texas = Games.Texas || (Games.Texas = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Texas;
            (function (Texas) {
                class TexasLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Texas/TexasLoading");
                    }
                }
                Texas.TexasLoadingUI = TexasLoadingUI;
                REG("ui.Games.Texas.TexasLoadingUI", TexasLoadingUI);
            })(Texas = Games.Texas || (Games.Texas = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Thanchicken;
            (function (Thanchicken) {
                var Rules;
                (function (Rules) {
                    class ThanchickenCreateroomUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/Thanchicken/Rules/ThanchickenCreateroom");
                        }
                    }
                    Rules.ThanchickenCreateroomUI = ThanchickenCreateroomUI;
                    REG("ui.Games.Thanchicken.Rules.ThanchickenCreateroomUI", ThanchickenCreateroomUI);
                })(Rules = Thanchicken.Rules || (Thanchicken.Rules = {}));
            })(Thanchicken = Games.Thanchicken || (Games.Thanchicken = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Thanchicken;
            (function (Thanchicken) {
                class ThanChickenLoadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Thanchicken/ThanChickenLoading");
                    }
                }
                Thanchicken.ThanChickenLoadingUI = ThanChickenLoadingUI;
                REG("ui.Games.Thanchicken.ThanChickenLoadingUI", ThanChickenLoadingUI);
            })(Thanchicken = Games.Thanchicken || (Games.Thanchicken = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var ThirteenBets;
            (function (ThirteenBets) {
                var Rules;
                (function (Rules) {
                    class ThirteenBetsRoomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/ThirteenBets/Rules/ThirteenBetsRoomRule");
                        }
                    }
                    Rules.ThirteenBetsRoomRuleUI = ThirteenBetsRoomRuleUI;
                    REG("ui.Games.ThirteenBets.Rules.ThirteenBetsRoomRuleUI", ThirteenBetsRoomRuleUI);
                })(Rules = ThirteenBets.Rules || (ThirteenBets.Rules = {}));
            })(ThirteenBets = Games.ThirteenBets || (Games.ThirteenBets = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var ThirteenBets;
            (function (ThirteenBets) {
                class ThirteenBetsloadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/ThirteenBets/ThirteenBetsloading");
                    }
                }
                ThirteenBets.ThirteenBetsloadingUI = ThirteenBetsloadingUI;
                REG("ui.Games.ThirteenBets.ThirteenBetsloadingUI", ThirteenBetsloadingUI);
            })(ThirteenBets = Games.ThirteenBets || (Games.ThirteenBets = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var ThreeDuke;
            (function (ThreeDuke) {
                var Rules;
                (function (Rules) {
                    class ThreeDukeRoomRuleUI extends Laya.Scene {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/ThreeDuke/Rules/ThreeDukeRoomRule");
                        }
                    }
                    Rules.ThreeDukeRoomRuleUI = ThreeDukeRoomRuleUI;
                    REG("ui.Games.ThreeDuke.Rules.ThreeDukeRoomRuleUI", ThreeDukeRoomRuleUI);
                })(Rules = ThreeDuke.Rules || (ThreeDuke.Rules = {}));
            })(ThreeDuke = Games.ThreeDuke || (Games.ThreeDuke = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var ThreeDuke;
            (function (ThreeDuke) {
                class ThreeDukeloadingUI extends Laya.Scene {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/ThreeDuke/ThreeDukeloading");
                    }
                }
                ThreeDuke.ThreeDukeloadingUI = ThreeDukeloadingUI;
                REG("ui.Games.ThreeDuke.ThreeDukeloadingUI", ThreeDukeloadingUI);
            })(ThreeDuke = Games.ThreeDuke || (Games.ThreeDuke = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Twentyone;
            (function (Twentyone) {
                var Rules;
                (function (Rules) {
                    class TwentyoneroomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/Twentyone/Rules/TwentyoneroomRule");
                        }
                    }
                    Rules.TwentyoneroomRuleUI = TwentyoneroomRuleUI;
                    REG("ui.Games.Twentyone.Rules.TwentyoneroomRuleUI", TwentyoneroomRuleUI);
                })(Rules = Twentyone.Rules || (Twentyone.Rules = {}));
            })(Twentyone = Games.Twentyone || (Games.Twentyone = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var Twentyone;
            (function (Twentyone) {
                class TwentyOneloadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/Twentyone/TwentyOneloading");
                    }
                }
                Twentyone.TwentyOneloadingUI = TwentyOneloadingUI;
                REG("ui.Games.Twentyone.TwentyOneloadingUI", TwentyOneloadingUI);
            })(Twentyone = Games.Twentyone || (Games.Twentyone = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var TwoEight;
            (function (TwoEight) {
                var Rules;
                (function (Rules) {
                    class TwoEightroomRuleUI extends Laya.View {
                        constructor() { super(); }
                        createChildren() {
                            super.createChildren();
                            this.loadScene("Games/TwoEight/Rules/TwoEightroomRule");
                        }
                    }
                    Rules.TwoEightroomRuleUI = TwoEightroomRuleUI;
                    REG("ui.Games.TwoEight.Rules.TwoEightroomRuleUI", TwoEightroomRuleUI);
                })(Rules = TwoEight.Rules || (TwoEight.Rules = {}));
            })(TwoEight = Games.TwoEight || (Games.TwoEight = {}));
        })(Games = ui.Games || (ui.Games = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Games;
        (function (Games) {
            var TwoEight;
            (function (TwoEight) {
                class TwoEightloadingUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Games/TwoEight/TwoEightloading");
                    }
                }
                TwoEight.TwoEightloadingUI = TwoEightloadingUI;
                REG("ui.Games.TwoEight.TwoEightloadingUI", TwoEightloadingUI);
            })(TwoEight = Games.TwoEight || (Games.TwoEight = {}));
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
            var DissolutionRoom;
            (function (DissolutionRoom) {
                class DissolutionRoomUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/DissolutionRoom/DissolutionRoom");
                    }
                }
                DissolutionRoom.DissolutionRoomUI = DissolutionRoomUI;
                REG("ui.Hall.DissolutionRoom.DissolutionRoomUI", DissolutionRoomUI);
                class DissolutionRoomConfirmUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/DissolutionRoom/DissolutionRoomConfirm");
                    }
                }
                DissolutionRoom.DissolutionRoomConfirmUI = DissolutionRoomConfirmUI;
                REG("ui.Hall.DissolutionRoom.DissolutionRoomConfirmUI", DissolutionRoomConfirmUI);
            })(DissolutionRoom = Hall.DissolutionRoom || (Hall.DissolutionRoom = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Hundredsofpeople;
            (function (Hundredsofpeople) {
                class HundredspkUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Hundredsofpeople/Hundredspk");
                    }
                }
                Hundredsofpeople.HundredspkUI = HundredspkUI;
                REG("ui.Hall.Hundredsofpeople.HundredspkUI", HundredspkUI);
                class HundredsSelectionUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Hundredsofpeople/HundredsSelection");
                    }
                }
                Hundredsofpeople.HundredsSelectionUI = HundredsSelectionUI;
                REG("ui.Hall.Hundredsofpeople.HundredsSelectionUI", HundredsSelectionUI);
            })(Hundredsofpeople = Hall.Hundredsofpeople || (Hall.Hundredsofpeople = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            class InvitationCodeUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Hall/InvitationCode");
                }
            }
            Hall.InvitationCodeUI = InvitationCodeUI;
            REG("ui.Hall.InvitationCodeUI", InvitationCodeUI);
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var MailBox;
            (function (MailBox) {
                class MailUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/MailBox/Mail");
                    }
                }
                MailBox.MailUI = MailUI;
                REG("ui.Hall.MailBox.MailUI", MailUI);
            })(MailBox = Hall.MailBox || (Hall.MailBox = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Mall;
            (function (Mall) {
                class MallUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Mall/Mall");
                    }
                }
                Mall.MallUI = MallUI;
                REG("ui.Hall.Mall.MallUI", MallUI);
            })(Mall = Hall.Mall || (Hall.Mall = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Promotions;
            (function (Promotions) {
                class PromotionsUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Promotions/Promotions");
                    }
                }
                Promotions.PromotionsUI = PromotionsUI;
                REG("ui.Hall.Promotions.PromotionsUI", PromotionsUI);
            })(Promotions = Hall.Promotions || (Hall.Promotions = {}));
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
            var Safe;
            (function (Safe) {
                class SafeUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Safe/Safe");
                    }
                }
                Safe.SafeUI = SafeUI;
                REG("ui.Hall.Safe.SafeUI", SafeUI);
            })(Safe = Hall.Safe || (Hall.Safe = {}));
        })(Hall = ui.Hall || (ui.Hall = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Hall;
        (function (Hall) {
            var Set;
            (function (Set) {
                class SetUI extends Laya.View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Hall/Set/Set");
                    }
                }
                Set.SetUI = SetUI;
                REG("ui.Hall.Set.SetUI", SetUI);
            })(Set = Hall.Set || (Hall.Set = {}));
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
            class accountLoginUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/accountLogin");
                }
            }
            Login.accountLoginUI = accountLoginUI;
            REG("ui.Login.accountLoginUI", accountLoginUI);
            class forgetPassUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/forgetPass");
                }
            }
            Login.forgetPassUI = forgetPassUI;
            REG("ui.Login.forgetPassUI", forgetPassUI);
            class LoginUI extends Laya.Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/Login");
                }
            }
            Login.LoginUI = LoginUI;
            REG("ui.Login.LoginUI", LoginUI);
            class rigisteraccountUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/rigisteraccount");
                }
            }
            Login.rigisteraccountUI = rigisteraccountUI;
            REG("ui.Login.rigisteraccountUI", rigisteraccountUI);
            class wachatLoginUI extends Laya.View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Login/wachatLogin");
                }
            }
            Login.wachatLoginUI = wachatLoginUI;
            REG("ui.Login.wachatLoginUI", wachatLoginUI);
        })(Login = ui.Login || (ui.Login = {}));
    })(ui || (ui = {}));

    class APP_Loading extends ui.APP_LoadingUI {
        constructor() {
            super();
        }
        setPercent(perc) {
            this.progress.percent = perc;
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
            this.imgmask.width = this.width / 100 * this.m_percent;
        }
        onAwake() {
            this.bar = this.getChildByName("bar");
            this.imgmask = this.bar.mask;
        }
    }

    class APP_Update extends ui.APP_UpdateUI {
        constructor() {
            super();
        }
        setPercent(perc) {
            this.progress.percent = perc;
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
    var Event = Laya.Event;
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
            this.setCenter(node);
            let x = Laya.stage.width / 2;
            let y = Laya.stage.height / 2;
            node.visible = true;
            node.active = true;
            node.x = x;
            node.y = y;
            node.scaleX = 0;
            node.scaleY = 0;
            this.timeLine = new TimeLine();
            this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
                .addLabel("turnLeft", 0).to(node, { scaleX: 1, scaleY: 1 }, 100, null, 0);
            this.timeLine.play(0, false);
            this.timeLine.on(Event.COMPLETE, this, this.onComplete);
            this.timeLine.on(Event.LABEL, this, this.onLabel);
        }
        hideAlert(node, completeFun) {
            this.timeLine = new TimeLine();
            this.timeLine.addLabel("turnRight", 0).to(node, { scaleX: 1.1, scaleY: 1.1 }, 200, null, 0)
                .addLabel("turnDown", 0).to(node, { scaleX: 0, scaleY: 0 }, 200, null, 0);
            this.timeLine.play(0, false);
            this.timeLine.on(Event.COMPLETE, this, () => {
                node.active = false;
                node.visible = false;
                completeFun && completeFun();
                let view = this.viewList.pop();
                view && view.onHide && view.onHide();
            });
        }
        setCenter(node) {
            let rect = node.getBounds();
            node.pivotX = (rect.width || node.width) / 2;
            node.pivotY = (rect.height || node.height) / 2;
            node.x += node.pivotX;
            node.y += node.pivotY;
        }
        onComplete() {
        }
        onLabel(label) {
        }
        selectionAdmission(node) {
            this.setCenter(node);
            node.x = Laya.stage.width + node.width / 2;
            Laya.Tween.to(node, { x: Laya.stage.width / 2 }, 300);
        }
        getRecvPos(target) {
            let x = Math.random() * (target.width - 20) + 10;
            let y = Math.random() * (target.height - 20) + 10;
            return { x, y };
        }
    }

    var Handler = Laya.Handler;
    class SceneManager {
        constructor() {
            this.sceneList = {};
            this.init();
        }
        ;
        static getinstance() {
            if (this.instance == null)
                this.instance = new SceneManager();
            return this.instance;
        }
        rigesterScene(name, param) {
            this.sceneList[name] = param;
        }
        init() {
            this.rigesterScene("Login", { url: "./Login/Login.scene" });
        }
        changeScene(name, loadPage, removeCur = true) {
            loadPage.onAwake = () => {
                Laya.Scene.open;
                Laya.Scene.load(this.sceneList[name].url, Handler.create(this, (scene) => {
                    if (this.curScene) {
                        this.curScene.destroy();
                    }
                    Laya.timer.once(500, this, () => {
                        Laya.Scene.root.addChild(scene);
                        this.curScene = scene;
                        loadPage.removeSelf();
                    });
                }), Handler.create(this, (e) => {
                    loadPage.progress.percent = (e * 100);
                }, null, false));
            };
            Laya.stage.addChild(loadPage);
        }
    }

    class userInfoData {
        constructor() {
            this.id = 888889;
            this.money = 675412;
            this.nickName = "啦啦啦";
            this.diamond = 45623;
            this.safeMoney = 6541;
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
            this.sceneManager = SceneManager.getinstance();
            this.userInfo = userInfoData.getinstance();
        }
        static getinstance() {
            if (this.instance == null)
                this.instance = new base();
            return this.instance;
        }
    }
    var Base = base.getinstance();

    var Event$1 = Laya.Event;
    var Tween = Laya.Tween;
    class ActionButton extends Laya.Button {
        constructor(res) {
            super(res);
            this.on(Event$1.MOUSE_DOWN, this, () => {
                Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, 100);
            });
            this.on(Event$1.MOUSE_UP, this, () => {
                Tween.to(this, { scaleX: 1, scaleY: 1 }, 100);
            });
            this.on(Event$1.MOUSE_OUT, this, () => {
                Tween.to(this, { scaleX: 1, scaleY: 1 }, 100);
            });
        }
        onAwake() {
            this.stateNum = 1;
            Base.publicFun.setCenter(this);
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

    var Handler$1 = Laya.Handler;
    var Tween$1 = Laya.Tween;
    class Chip extends ui.GameCommonUI.Athletics.ChipUI {
        constructor() {
            super();
        }
        toTargerShow(target, compFunc) {
            Tween$1.to(this, { x: target.x, y: target.y }, 300, null, Handler$1.create(this, () => {
                Tween$1.to(this, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler$1.create(this, () => {
                    Tween$1.to(this, { scaleX: 1, scaleY: 1 }, 300, null, Handler$1.create(this, () => {
                        compFunc && compFunc();
                    }));
                }));
            }));
        }
        toTargerHide(target) {
            Tween$1.to(this, { x: target.x, y: target.y }, 300, null, Handler$1.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    var Handler$2 = Laya.Handler;
    var Tween$2 = Laya.Tween;
    class Prop extends ui.GameCommonUI.Athletics.PropUI {
        constructor() {
            super();
        }
        prop_leftToRight(image) {
            Tween$2.to(this.card, { scaleX: 0 }, 300, null, Handler$2.create(this, () => {
                this.card.loadImage(image);
                Tween$2.to(this.card, { scaleX: 1 }, 300);
            }));
        }
        prop_topToDown(image) {
            Tween$2.to(this.card, { scaleY: 0 }, 300, null, Handler$2.create(this, () => {
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

    var Handler$3 = Laya.Handler;
    var Tween$3 = Laya.Tween;
    class Deal extends ui.GameCommonUI.Athletics.DealUI {
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
            Tween$3.to(card, { x: pos.x, y: pos.y }, speed, null, Handler$3.create(this, () => {
                user.recvCard(card.prop_Number);
                card.removeSelf();
            }));
        }
    }

    class Flicker extends ui.GameCommonUI.Athletics.FlickerUI {
        constructor() {
            super();
        }
        startFlicker() {
            Laya.timer.loop(300, this, this.loopFun);
        }
        endFlicker() {
            Laya.timer.clear(this, this.loopFun);
        }
        loopFun() {
            this.image_0.active = !this.image_0.active;
            this.image_1.active = !this.image_1.active;
        }
    }

    var Handler$4 = Laya.Handler;
    var Tween$4 = Laya.Tween;
    class TransAni extends ui.GameCommonUI.Athletics.TansAniUI {
        constructor() {
            super();
        }
        onAwake() {
        }
        doAction(image) {
            image && this.setImage(image);
            Base.publicFun.setCenter(this.image);
            this.image.x = this.width + this.image.width / 2;
            Tween$4.to(this.image, { x: this.width / 2 }, 300, null, Handler$4.create(this, () => {
                Tween$4.to(this.image, { x: -this.image.width / 2 }, 300, null, Handler$4.create(this, () => {
                    this.removeSelf();
                }), 1000);
            }));
        }
        setImage(image) {
            this.image.loadImage(image);
        }
    }

    class User extends ui.GameCommonUI.Athletics.UserUI {
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

    var Handler$5 = Laya.Handler;
    var Event$2 = Laya.Event;
    var BullRule = ui.Bull.Ruels.RoomRuleUI;
    var LandlordRoomRule = ui.Games.Landlord.Rules.LandlordRoomRuleUI;
    var ThreeDukeRoomRule = ui.Games.ThreeDuke.Rules.ThreeDukeRoomRuleUI;
    var TwentyoneroomRule = ui.Games.Twentyone.Rules.TwentyoneroomRuleUI;
    var TwoEightroomRule = ui.Games.TwoEight.Rules.TwoEightroomRuleUI;
    class CommonCreatRoom extends ui.GameCommonUI.CommonCreatRoomUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$2.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.clear_btn.on(Event$2.CLICK, this, () => {
                for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                    this.curRuleView.radios.getChildAt(index).checkIndex = 0;
                }
                if (this.curRuleView.checks) {
                    for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                        this.curRuleView.checks.getChildAt(index).checked = false;
                    }
                }
            });
            this.confirm_btn.on(Event$2.CLICK, this, () => {
                let data = {
                    radios: [],
                    checks: []
                };
                for (let index = 0; index < this.curRuleView.radios.numChildren; index++) {
                    let checkIndex = this.curRuleView.radios.getChildAt(index).checkIndex;
                    data.radios.push(checkIndex);
                }
                if (this.curRuleView.checks) {
                    for (let index = 0; index < this.curRuleView.checks.numChildren; index++) {
                        let checked = this.curRuleView.checks.getChildAt(index).checked;
                        data.checks.push(checked);
                    }
                }
                console.log(data);
            });
            this.tabButtons_list.selectEnable = true;
            this.tabButtons_list.renderHandler = new Handler$5(this, this.updateItem);
            this.tabButtons_list.selectHandler = new Handler$5(this, this.onSelect, null, false);
            this.tabButtons_list.vScrollBarSkin = "";
            this.tabButtons_list.elasticEnabled = true;
            this.setArray([{
                    name: "牛牛",
                    ruleView: BullRule,
                }, {
                    name: "斗地主",
                    ruleView: LandlordRoomRule,
                }, {
                    name: "三公",
                    ruleView: ThreeDukeRoomRule,
                }, {
                    name: "二八",
                    ruleView: TwoEightroomRule,
                }, {
                    name: "21点",
                    ruleView: TwentyoneroomRule,
                }, {
                    name: "牛牛",
                    ruleView: BullRule,
                }, {
                    name: "斗地主",
                    ruleView: LandlordRoomRule,
                }, {
                    name: "三公",
                    ruleView: ThreeDukeRoomRule,
                }, {
                    name: "二八",
                    ruleView: TwoEightroomRule,
                }, {
                    name: "21点",
                    ruleView: TwentyoneroomRule,
                },]);
            this.tabButtons_list.selectedIndex = 0;
        }
        setArray(list) {
            this.tabButtons_list.array = list;
        }
        updateItem(cell, index) {
            let selected = cell.getChildByName("selected");
            let unselect = cell.getChildByName("unselect");
            let selected_text = cell.getChildByName("selected_text");
            let unselect_text = cell.getChildByName("unselect_text");
            selected_text.text = this.tabButtons_list.array[index].name;
            unselect_text.text = this.tabButtons_list.array[index].name;
            selected.visible = this.tabButtons_list.array[index].show;
            selected_text.visible = this.tabButtons_list.array[index].show;
            unselect.visible = !this.tabButtons_list.array[index].show;
            unselect_text.visible = !this.tabButtons_list.array[index].show;
        }
        onSelect(index) {
            console.log("当前选择的索引：" + index);
            for (let i = 0; i < this.tabButtons_list.array.length; i++) {
                this.tabButtons_list.array[i].show = false;
            }
            this.tabButtons_list.array[index].show = true;
            if (this.curRuleView)
                this.curRuleView.removeSelf();
            this.curRuleView = new (this.tabButtons_list.array[index].ruleView)();
            this.rule_group.addChild(this.curRuleView);
        }
    }

    var resList = {
        Thanchicken: [
            "Thanchicken/GameType/AlternateBankerThanChicken.png",
            "Thanchicken/GameType/RobThanThanChicken.png",
            "Thanchicken/GameType/ThanThanChicken (2).png",
        ],
        ThirteenBets: [
            "ThirteenBets/GameType/ThanThirteenBets (2).png",
            "ThirteenBets/GameType/RobThanThirteenBets.png",
            "ThirteenBets/GameType/AlternateBankerThirteenBets (2).png",
        ],
        ThreeDuke: [
            "ThreeDuke/GameType/ThanThreeDuke (2).png",
            "ThreeDuke/GameType/ScoreBankThreeDuke (2).png",
            "ThreeDuke/GameType/RobThanThreeDuke (2).png",
            "ThreeDuke/GameType/NoScoreBankerThreeDuke (2).png",
            "ThreeDuke/GameType/AlternateBankerThreeDuke (2).png"
        ],
        TwentyOne: [
            "Twentyone/GameType/ThanTwentyOne (2).png",
            "Twentyone/GameType/ScoreBankTwentyOne (2).png",
            "Twentyone/GameType/RobThanTwentyOne (2).png",
            "Twentyone/GameType/NoScoreBankerTwentyOne (2).png",
            "Twentyone/GameType/AlternateBankerTwentyOne (2).png",
        ],
        TwoEight: [
            "TwoEight/GameType/AlternateBankerTwoEight.png",
            "TwoEight/GameType/NoScoreBankerTwoEight.png",
            "TwoEight/GameType/RobThanTwoEight.png",
            "TwoEight/GameType/ScoreBankTwoEight.png",
            "TwoEight/GameType/ThanTwoEight.png",
        ]
    };
    class CommonGameTypeSelection extends ui.GameCommonUI.CommonGameTypeSelectionUI {
        constructor() {
            super();
        }
        onAwake() {
            Base.publicFun.selectionAdmission(this);
        }
        setImages(list, clickHandle) {
            let width = this.width / list.length;
            for (let i = 0; i < list.length; i++) {
                let sprite = new Laya.Sprite();
                this.addChild(sprite);
                sprite.height = this.height;
                sprite.width = width;
                sprite.y = 0;
                sprite.x = width * i;
                let button = new ActionButton(list[i]);
                button.visible = false;
                sprite.addChild(button);
                Laya.timer.once(50, this, () => {
                    Base.publicFun.setCenter(button);
                    button.x = sprite.width / 2;
                    button.y = sprite.height / 2;
                    button.visible = true;
                });
                button.on(Laya.Event.CLICK, this, () => {
                    clickHandle(i);
                });
            }
        }
    }

    var images = {
        BenzBmw: [
            "BenzBmw/Roomselection/Primaryfield.png",
            "BenzBmw/Roomselection/Intermediatefield.png",
            "BenzBmw/Roomselection/Advancedfield.png",
        ],
        Bull: [
            [
                "Cow/Selection/LowlevelField.png",
                "Cow/Selection/IntermediateField.png",
                "Cow/Selection/SeniorField.png",
            ],
            [
                "Cow/Selection/LowlevelField2.png",
                "Cow/Selection/IntermediateField2.png",
                "Cow/Selection/SeniorField2.png",
            ],
            [
                "Cow/Selection/LowlevelField3.png",
                "Cow/Selection/IntermediateField3.png",
                "Cow/Selection/SeniorField3.png",
            ],
            [
                "Cow/Selection/LowlevelField4.png",
                "Cow/Selection/IntermediateField4.png",
                "Cow/Selection/SeniorField4.png",
            ],
            [
                "Cow/Selection/LowlevelField5.png",
                "Cow/Selection/IntermediateField5.png",
                "Cow/Selection/SeniorField5.png",
            ],
        ],
        FiftyK: [
            "FiftyK/Selection/Primaryfield.png",
            "FiftyK/Selection/Intermediatefield.png",
            "FiftyK/Selection/Advancedfield.png",
        ],
        FiveArching: [
            [
                "FiveArching/Selection/Primaryfield.png",
                "FiveArching/Selection/Intermediatefield.png",
                "FiveArching/Selection/Advancedfield.png",
            ],
            [
                "FiveArching/Selection/Primaryfield(2).png",
                "FiveArching/Selection/Intermediatefield(2).png",
                "FiveArching/Selection/Advancedfield(2).png",
            ],
        ],
        Fruit: [
            "Fruit/Selection/Blueseven.png",
            "Fruit/Selection/Redseven.png",
            "Fruit/Selection/Seven.png",
        ],
        GoldenFlower: [
            "GoldenFlower/Selection/Primaryfield.png",
            "GoldenFlower/Selection/Intermediatefield.png",
            "GoldenFlower/Selection/Advancedfield.png",
        ],
        Landlord: [
            "Landlord/Selection/Primaryfield.png",
            "Landlord/Selection/Intermediatefield.png",
            "Landlord/Selection/Advancedfield.png",
        ],
        Selection: [
            "Selection/Selection/Primaryfield.png",
            "Selection/Selection/Intermediatefield.png",
            "Selection/Selection/Advancedfield.png",
        ],
        Texas: [
            "Texas/Selection/Primaryfield.png",
            "Texas/Selection/Intermediatefield.png",
            "Texas/Selection/Advancedfield.png",
        ],
        Thanchicken: [
            [
                "Thanchicken/Selection/Primaryfield.png",
                "Thanchicken/Selection/Intermediatefield.png",
                "Thanchicken/Selection/Advancedfield.png",
            ],
            [
                "Thanchicken/Selection/Primaryfield(2).png",
                "Thanchicken/Selection/Intermediatefield(2).png",
                "Thanchicken/Selection/Advancedfield(2).png",
            ],
            [
                "Thanchicken/Selection/Primaryfield(3).png",
                "Thanchicken/Selection/Intermediatefield(3).png",
                "Thanchicken/Selection/Advancedfield(3).png",
            ],
        ],
        ThirteenBets: [
            [
                "ThirteenBets/Selection/Primaryfield.png",
                "ThirteenBets/Selection/Intermediatefield.png",
                "ThirteenBets/Selection/Advancedfield.png",
            ],
            [
                "ThirteenBets/Selection/Primaryfield(2).png",
                "ThirteenBets/Selection/Intermediatefield(2).png",
                "ThirteenBets/Selection/Advancedfield(2).png",
            ],
            [
                "ThirteenBets/Selection/Primaryfield(3).png",
                "ThirteenBets/Selection/Intermediatefield(3).png",
                "ThirteenBets/Selection/Advancedfield(3).png",
            ],
        ],
        ThreeDuke: [
            [
                "ThreeDuke/Selection/Primaryfield.png",
                "ThreeDuke/Selection/Intermediatefield.png",
                "ThreeDuke/Selection/Advancedfield.png",
            ],
            [
                "ThreeDuke/Selection/Primaryfield(2).png",
                "ThreeDuke/Selection/Intermediatefield(2).png",
                "ThreeDuke/Selection/Advancedfield(2).png",
            ],
            [
                "ThreeDuke/Selection/Primaryfield(3).png",
                "ThreeDuke/Selection/Intermediatefield(3).png",
                "ThreeDuke/Selection/Advancedfield(3).png",
            ],
            [
                "ThreeDuke/Selection/Primaryfield(4).png",
                "ThreeDuke/Selection/Intermediatefield(4).png",
                "ThreeDuke/Selection/Advancedfield(4).png",
            ],
            [
                "ThreeDuke/Selection/Primaryfield(5).png",
                "ThreeDuke/Selection/Intermediatefield(5).png",
                "ThreeDuke/Selection/Advancedfield(5).png",
            ],
        ],
        Twentyone: [
            [
                "Twentyone/Selection/Primaryfield.png",
                "Twentyone/Selection/Intermediatefield.png",
                "Twentyone/Selection/Advancedfield.png",
            ],
            [
                "Twentyone/Selection/Primaryfield(2).png",
                "Twentyone/Selection/Intermediatefield(2).png",
                "Twentyone/Selection/Advancedfield(2).png",
            ],
            [
                "Twentyone/Selection/Primaryfield(3).png",
                "Twentyone/Selection/Intermediatefield(3).png",
                "Twentyone/Selection/Advancedfield(3).png",
            ],
            [
                "Twentyone/Selection/Primaryfield(4).png",
                "Twentyone/Selection/Intermediatefield(4).png",
                "Twentyone/Selection/Advancedfield(4).png",
            ],
            [
                "Twentyone/Selection/Primaryfield(5).png",
                "Twentyone/Selection/Intermediatefield(5).png",
                "Twentyone/Selection/Advancedfield(5).png",
            ],
        ],
        TwoEight: [
            [
                "TwoEight/Selection/Primaryfield.png",
                "TwoEight/Selection/Intermediatefield.png",
                "TwoEight/Selection/Advancedfield.png",
            ],
            [
                "TwoEight/Selection/Primaryfield(2).png",
                "TwoEight/Selection/Intermediatefield(2).png",
                "TwoEight/Selection/Advancedfield(2).png",
            ],
            [
                "TwoEight/Selection/Primaryfield(3).png",
                "TwoEight/Selection/Intermediatefield(3).png",
                "TwoEight/Selection/Advancedfield(3).png",
            ],
            [
                "TwoEight/Selection/Primaryfield(4).png",
                "TwoEight/Selection/Intermediatefield(4).png",
                "TwoEight/Selection/Advancedfield(4).png",
            ],
            [
                "TwoEight/Selection/Primaryfield(5).png",
                "TwoEight/Selection/Intermediatefield(5).png",
                "TwoEight/Selection/Advancedfield(5).png",
            ],
        ]
    };
    class CommonSelectiion extends ui.GameCommonUI.CommonSelectiionUI {
        constructor() {
            super();
        }
        onAwake() {
            this.items_view.setImages(images.GoldenFlower, (e) => {
                console.log(e);
            });
        }
    }

    class FlutterText extends ui.GameCommonUI.FlutterTextUI {
        constructor(text) {
            super();
            this.text = text;
        }
        onAwake() {
            this.number_text.text = this.text;
        }
        startAni() {
            Laya.Tween.to(this, { y: this.y - 150, alpha: 0 }, 1500, null, Laya.Handler.create(this, () => {
                this.removeSelf();
            }));
        }
    }

    var Event$3 = Laya.Event;
    class Banker extends ui.Games.BenzBmw.BankerUI {
        constructor() {
            super();
            this.money = 355444;
        }
        onAwake() {
            this.slider = this.money_slider;
            this.money_text.text = this.money + "";
            this.close_btn.on(Event$3.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.plus_btn.on(Event$3.CLICK, this, () => {
                this.slider.percent = this.slider.percent + 1;
            });
            this.reduce_btn.on(Event$3.CLICK, this, () => {
                this.slider.percent = this.slider.percent - 1;
            });
            this.apply_btn.on(Event$3.CLICK, this, () => {
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

    var Event$4 = Laya.Event;
    var Handler$6 = Laya.Handler;
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
            this.close_btn.on(Event$4.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.confirm_btn.on(Event$4.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.player_list.vScrollBarSkin = "";
            this.player_list.renderHandler = new Handler$6(this, this.updateItem);
            this.playerList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
        updateItem(cell, index) {
            cell.getChildByName("name_text").text = this.player_list.array[index];
            cell.getChildByName("money_text").text = this.player_list.array[index];
            cell.getChildByName("header_image");
        }
    }

    var Event$5 = Laya.Event;
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
            this.close_btn.on(Event$5.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.playerList = [1, 2, 3, 4, 5];
        }
    }

    var Event$6 = Laya.Event;
    class Roomselection extends ui.Games.BenzBmw.RoomselectionUI {
        constructor() {
            super();
        }
        onAwake() {
            this.back_btn.on(Event$6.CLICK, this, () => {
                console.log("back");
            });
            this.about_btn.on(Event$6.CLICK, this, () => {
                Base.publicFun.showAlert(this.rule_view);
            });
            this.primary_btn.on(Event$6.CLICK, this, () => {
                console.log("初级");
            });
            this.intermediate_btn.on(Event$6.CLICK, this, () => {
                console.log("中级");
            });
            this.senior_btn.on(Event$6.CLICK, this, () => {
                console.log("高级");
            });
            this.quick_btn.on(Event$6.CLICK, this, () => {
                console.log("快速开始");
            });
        }
    }

    var Event$7 = Laya.Event;
    class Rule extends ui.Games.BenzBmw.RuleUI {
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
        }
    }

    var Event$8 = Laya.Event;
    class Setting extends ui.Games.BenzBmw.SettingUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$8.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.confirm_btn.on(Event$8.CLICK, this, () => {
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

    var Event$9 = Laya.Event;
    class Table extends ui.Games.BenzBmw.TableUI {
        constructor() {
            super();
            this.diraction = new Laya.Vector2();
            this.curMoveIndex = 0;
            this.changeDirList = [
                { x: 1712, y: 709, r: 58 },
                { x: 1478, y: 858, r: 90 },
                { x: 437.5, y: 858, r: 121 },
                { x: 202.5, y: 682, r: 180 },
                { x: 211, y: 254, r: 236 },
                { x: 455, y: 110, r: 270 },
                { x: 1478, y: 116, r: 301 },
                { x: 1707, y: 242, r: 360 },
            ];
            this.winPriceList = [
                { x: 1607.5, y: 790, beforIndex: 1 },
                { x: 1118.5, y: 867, beforIndex: 2 },
                { x: 794, y: 864, beforIndex: 2 },
                { x: 318, y: 790, beforIndex: 3 },
                { x: 310.5, y: 187, beforIndex: 5 },
                { x: 803, y: 107, beforIndex: 6 },
                { x: 1111, y: 107, beforIndex: 6 },
                { x: 1593.5, y: 172, beforIndex: 7 },
            ];
        }
        onAwake() {
            this.dazhong.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[0];
            });
            this.baoma.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[1];
            });
            this.benchi.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[2];
            });
            this.baoshijie.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[3];
            });
            this.dabaoshijie.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[4];
            });
            this.dabenchi.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[5];
            });
            this.dabaoma.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[6];
            });
            this.dadazhong.on(Event$9.CLICK, this, () => {
                this.winPrice = this.winPriceList[7];
            });
            this.go_btn.on(Event$9.CLICK, this, () => {
                this.stratMove();
            });
        }
        stratMove() {
            let target = this.changeDirList[this.curMoveIndex];
            this.winPrice = null;
            this.speed = 15;
            this.moveTo(target);
        }
        moveTo(target) {
            Laya.Vector2.normalize(new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y), this.diraction);
            Laya.timer.frameLoop(1, this, () => {
                this.car_image.x += this.diraction.x * this.speed;
                this.car_image.y += this.diraction.y * this.speed;
                let tempVec = new Laya.Vector2(target.x - this.car_image.x, target.y - this.car_image.y);
                let length = Laya.Vector2.scalarLength(tempVec);
                if (length < 8) {
                    this.car_image.x = target.x;
                    this.car_image.y = target.y;
                    target.r && (this.car_image.rotation = target.r);
                    Laya.timer.clearAll(this);
                    if (target != this.winPrice) {
                        this.curMoveIndex = ++this.curMoveIndex % this.changeDirList.length;
                        let pos = this.changeDirList[this.curMoveIndex];
                        if (this.winPrice && this.winPrice.beforIndex == this.curMoveIndex && this.speed < 7) {
                            pos = this.winPrice;
                        }
                        this.moveTo(pos);
                    }
                    else {
                        console.log("到站了");
                    }
                }
                if (this.winPrice) {
                    if (this.speed > 10)
                        this.speed -= 0.03;
                    else if (this.speed > 8)
                        this.speed -= 0.02;
                    else if (this.speed > 5)
                        this.speed -= 0.015;
                    else if (this.speed > 3)
                        this.speed -= 0.005;
                }
            });
        }
    }

    var Event$a = Laya.Event;
    class Dicetable extends ui.Games.Dice.DiceUI {
        constructor() {
            super();
            this.tweenStop = false;
        }
        onAwake() {
            this.play_btn.on(Event$a.CLICK, this, () => {
                Base.sceneManager.changeScene("Login", new ui.Games.Twentyone.TwentyOneloadingUI());
            });
        }
        toLeft() {
            this.tweenObj = Laya.Tween.to(this.diceCup_group, { x: this.diceCup_group.x - 50 }, this.tweenSpeed, null, Laya.Handler.create(this, () => {
                if (this.tweenSpeed > 50)
                    this.tweenSpeed -= 20;
                this.tweenStop ? this.dice_ani.play(0, false) : this.toRight();
            }));
        }
        toRight() {
            this.tweenObj = Laya.Tween.to(this.diceCup_group, { x: this.diceCup_group.x + 50 }, this.tweenSpeed, null, Laya.Handler.create(this, () => {
                this.tweenStop ? this.dice_ani.play(0, false) : this.toLeft();
            }));
        }
    }

    var Event$b = Laya.Event;
    class FruitTable extends ui.Games.Fruit.FruitTableUI {
        constructor() {
            super();
            this.fruitList = [];
            this.curIndex = 0;
        }
        onAwake() {
            for (let i = 0; i < this.items_group.numChildren; i++) {
                this.fruitList.push(this.items_group.getChildAt(i));
                Base.publicFun.setCenter(this.fruitList[i]);
            }
            this.start_btn.on(Event$b.CLICK, this, () => {
                this.startAni();
            });
            this.clear_btn.on(Event$b.CLICK, this, () => {
                this.stopIndex = Math.floor((Math.random() * this.fruitList.length + 1));
                console.log(this.stopIndex);
            });
        }
        startAni() {
            this.delay = 10;
            this.stopIndex = -1;
            this.changeOnce();
        }
        changeOnce() {
            Laya.timer.frameOnce(this.delay, this, () => {
                Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1, scaleY: 1 }, 200);
                this.curIndex = ++this.curIndex % this.fruitList.length;
                Laya.Tween.to(this.fruitList[this.curIndex], { scaleX: 1.5, scaleY: 1.5 }, 200);
                if (this.stopIndex > -1) {
                    if (this.delay < 10) {
                        this.delay += 2;
                    }
                    else if (this.delay < 20) {
                        this.delay += 0.8;
                    }
                    else if (this.delay < 30) {
                        this.delay += 0.5;
                    }
                }
                else {
                    if (this.delay > 8) {
                        this.delay -= 0.8;
                    }
                    else if (this.delay > 5) {
                        this.delay -= 0.5;
                    }
                    else if (this.delay > 2) {
                        this.delay -= 0.2;
                    }
                }
                if (this.stopIndex != this.curIndex || this.delay < 10) {
                    this.changeOnce();
                }
            });
        }
    }

    var Event$c = Laya.Event;
    class GoldenFlowerGame extends ui.Games.GoldenFlower.GoldenFlowerGameUI {
        constructor() {
            super();
        }
        onAwake() {
            this.putChip_btn.on(Event$c.CLICK, this, () => {
                let user = this[`user_${Math.floor(Math.random() * 6)}`];
                this.userChip(user);
            });
            this.changeCoin_btn.on(Event$c.CLICK, this, () => {
                let user1 = this[`user_${Math.floor(Math.random() * 6)}`];
                let user2 = this[`user_${Math.floor(Math.random() * 6)}`];
                let rand = Math.floor(Math.random() * 100);
                for (let i = 0; i < rand; i++) {
                    this.userChip(user1);
                }
                this.showText(user1, "-" + rand);
                setTimeout(() => {
                    this.chipUser(user2);
                    this.showText(user2, "+" + this.recv_panel.numChildren);
                }, 1000);
            });
        }
        showText(user, num) {
            let text = new FlutterText(num);
            user.addChild(text);
            text.x = user.pivotX;
            text.y = user.pivotY;
            text.startAni();
        }
        userChip(user) {
            let chip = new Chip();
            chip.x = user.x - this.recv_panel.x;
            chip.y = user.y - this.recv_panel.y;
            this.recv_panel.addChild(chip);
            chip.toTargerShow(Base.publicFun.getRecvPos(this.recv_panel), null);
        }
        chipUser(user) {
            let target = { x: user.x - this.recv_panel.x, y: user.y - this.recv_panel.y };
            for (let i = 0; i < this.recv_panel.numChildren; i++) {
                this.recv_panel.getChildAt(i).toTargerHide(target);
            }
        }
    }

    var Event$d = Laya.Event;
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
            this.close_btn.on(Event$d.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
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

    var Event$e = Laya.Event;
    var Handler$7 = Laya.Handler;
    class CustomerService extends ui.Hall.CustomerService.CustomerServiceUI {
        constructor() {
            super();
            this.maxWidch = 388;
        }
        onAwake() {
            this.close_btn.on(Event$e.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.send_btn.on(Event$e.CLICK, this, () => {
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
            this.chat_list.renderHandler = new Handler$7(this, this.updateItem);
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

    var Event$f = Laya.Event;
    class DissolutionRoom extends ui.Hall.DissolutionRoom.DissolutionRoomUI {
        constructor() {
            super();
            this.userList = [2, 6];
        }
        onAwake() {
            this.close_btn.on(Event$f.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.cancel_btn.on(Event$f.CLICK, this, () => {
            });
            this.confirm_btn.on(Event$f.CLICK, this, () => {
            });
            for (let i = 0; i < this.users_group.numChildren; i++) {
                let user = this.users_group.getChildAt(i);
                if (this.userList[i]) {
                    user.visible = true;
                    let nameText = user.getChildByName("name_text");
                    let headerImage = user.getChildByName("header_image");
                    nameText.text = this.userList[i];
                }
                else {
                    user.visible = false;
                }
            }
        }
    }

    var Event$g = Laya.Event;
    class Hundredspk extends ui.Hall.Hundredsofpeople.HundredspkUI {
        constructor() {
            super();
        }
        onAwake() {
            for (let index = 0; index < 5; index++) {
                this[`btn_${index}`].on(Event$g.CLICK, this, () => {
                    console.log(index);
                });
            }
        }
    }

    var Event$h = Laya.Event;
    class HundredsSelection extends ui.Hall.Hundredsofpeople.HundredsSelectionUI {
        constructor(index) {
            super();
            this.showIndex = index || 0;
        }
        onAwake() {
            this.hideAllGroup();
            let showView = this.select_group.getChildAt(this.showIndex);
            showView.visible = true;
            for (let index = 0; index < showView.numChildren; index++) {
                showView.getChildAt(index).on(Event$h.CLICK, this, () => {
                    console.log(index);
                });
            }
            Base.publicFun.selectionAdmission(showView);
        }
        hideAllGroup() {
            for (let index = 0; index < this.select_group.numChildren; index++) {
                this.select_group.getChildAt(index).visible = false;
            }
        }
    }

    var Handler$8 = Laya.Handler;
    var Event$i = Laya.Event;
    class Mail extends ui.Hall.MailBox.MailUI {
        constructor() {
            super();
            this.privateMsg = [1, 5, 2];
            this.systemMsg = [7, 7, 7];
            this.dataArr = [this.privateMsg, this.systemMsg];
        }
        onAwake() {
            this.tabButtons.changeHandle = (index) => {
                this.msg_list.array = this.dataArr[index];
            };
            this.confirm_btn.on(Event$i.CLICK, this, () => {
                Base.publicFun.hideAlert(this.msgBox);
            });
            this.cancel_btn.on(Event$i.CLICK, this, () => {
                Base.publicFun.hideAlert(this.msgBox);
            });
            this.msg_list.vScrollBarSkin = "";
            this.msg_list.renderHandler = new Handler$8(this, this.updateItem);
            this.tabButtons.checkIndex = 0;
        }
        updateItem(cell, index) {
            let notreadImage = cell.getChildByName("notread_image");
            let readedImage = cell.getChildByName("readed_image");
            let msgNameText = cell.getChildByName("msgName_text");
            let dateText = cell.getChildByName("date_text");
            let lookupBtn = cell.getChildByName("lookup_btn");
            msgNameText.text = this.msg_list.array[index];
            lookupBtn.clickHandler = new Handler$8(this, (e) => {
                Base.publicFun.showAlert(this.msgBox);
                this.alMsgName_text.text = this.msg_list.array[index];
                this.msgContent_text.text = this.msg_list.array[index];
            });
        }
    }

    var Event$j = Laya.Event;
    var Handler$9 = Laya.Handler;
    class Mall extends ui.Hall.Mall.MallUI {
        constructor() {
            super();
        }
        onAwake() {
            this.money_text.text = Base.userInfo.money + "";
            this.diamond_text.text = Base.userInfo.diamond + "";
            this.tabButtons.changeHandle = (index) => {
            };
            this.close_btn.on(Event$j.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.buyitem_lsit.vScrollBarSkin = "";
            this.buyitem_lsit.renderHandler = new Handler$9(this, this.updateItem);
            this.buyitem_lsit.array = [6, 8888, 122, 122, 666, 47];
            this.tabButtons.checkIndex = 0;
        }
        updateItem(cell, index) {
            let butBtn = cell.getChildByName("buy_btn");
            let priceText = butBtn.getChildByName("price_text");
            priceText.text = this.buyitem_lsit.array[index];
            this.showItemImage(cell, (index % 3));
            butBtn.on(Event$j.CLICK, this, () => {
                console.log(this.buyitem_lsit.array[index]);
            });
        }
        showItemImage(node, target) {
            for (let index = 0; index < 3; index++) {
                let image = node.getChildByName(`level_${index}_image`);
                image.visible = (target == index);
            }
        }
    }

    var Event$k = Laya.Event;
    class Promotion extends ui.Hall.Promotions.PromotionsUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
            this.close_btn.on(Event$k.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.tabButtons.checkIndex = 0;
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

    var Event$l = Laya.Event;
    var Handler$a = Laya.Handler;
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
            this.buyed_list.renderHandler = new Handler$a(this, this.updateItem);
            this.buyed_list.array = [3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3,];
            this.tabButtons.changeHandle = (index) => {
                let isvip = (index == 0);
                this.vipRecharge_group.visible = isvip;
                this.otherRecharge_group.visible = !isvip;
            };
            this.close_btn.on(Event$l.CLICK, this, () => {
                Base.publicFun.hideAlert(this);
            });
            this.clearInput_btn.on(Event$l.CLICK, this, () => {
                this.money_input.text = "";
            });
            this.confirm_btn.on(Event$l.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            for (let i = 0; i < this.quickPush_btns.numChildren; i++) {
                this.quickPush_btns.getChildAt(i).on(Event$l.CLICK, this, () => {
                    this.money_input.text = this.quickNumbers[i] + "";
                });
            }
        }
        updateItem(cell, index) {
            cell.getChildByName("name").text = this.buyed_list.array[index] + "购买";
            cell.getChildByName("money").text = this.buyed_list.array[index] + "元";
        }
    }

    var Event$m = Laya.Event;
    var Handler$b = Laya.Handler;
    class Safe extends ui.Hall.Safe.SafeUI {
        constructor() {
            super();
        }
        onAwake() {
            this.safe_text.text = Base.userInfo.safeMoney + "";
            this.money_text.text = Base.userInfo.money + "";
            this.tabButtons.changeHandle = (index) => {
                this.curIndex = index;
                this.hideAllGroup();
                switch (index) {
                    case 0: {
                        this.access_group.visible = true;
                        this.moneys_group.visible = true;
                        this.money_input.text = "";
                        this.money_input.prompt = "请输入存入金额";
                        break;
                    }
                    case 1: {
                        this.access_group.visible = true;
                        this.moneys_group.visible = true;
                        this.money_input.text = "";
                        this.money_input.prompt = "请输入取出金额";
                        break;
                    }
                    case 2: {
                        this.access_list.visible = true;
                        break;
                    }
                    case 3: {
                        this.give_group.visible = true;
                        break;
                    }
                    case 4: {
                        this.giveDetail_group.visible = true;
                        break;
                    }
                }
            };
            this.tabButtons.checkIndex = 0;
            this.close_btn.on(Event$m.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.plus_btn.on(Event$m.CLICK, this, () => {
                this.money_slider.percent = this.money_slider.percent + 1;
            });
            this.reduce_btn.on(Event$m.CLICK, this, () => {
                this.money_slider.percent = this.money_slider.percent - 1;
            });
            this.clearInput_btn.on(Event$m.CLICK, this, () => {
                this.money_slider.percent = 0;
            });
            this.accessConfirm_btn.on(Event$m.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            this.money_input.on(Event$m.INPUT, this, (e) => {
                let number = e.text ? parseInt(e.text) : 0;
                this.money_slider.percent = number / Base.userInfo.money * 100;
            });
            this.money_slider.changeHandler = (percent) => {
                this.money_input.text = Math.floor(Base.userInfo.money / 100 * percent) + "";
            };
            this.money_slider.percent = 0;
            this.access_list.vScrollBarSkin = "";
            this.access_list.renderHandler = new Handler$b(this, this.updateItem);
            this.access_list.array = [6, 8888, 122, 122, 666, 47];
            this.giveDetail_list.vScrollBarSkin = "";
            this.giveDetail_list.renderHandler = new Handler$b(this, this.giveDetialUpdateItem);
            this.giveDetail_list.array = [6, 3, 44, 22, 666, 476, 8888, 122, 122, 666, 476, 3, 44, 22, 666, 476, 8888, 122, 122, 666, 4];
            this.recordUser_btn.on(Event$m.CLICK, this, () => {
                console.log(this.userid_input.text);
            });
            this.giveRecords_btn.on(Event$m.CLICK, this, () => {
                this.tabButtons.checkIndex = 4;
            });
            this.giveCancel_btn.on(Event$m.CLICK, this, () => {
                this.give_input.text = "";
                this.userid_input.text = "";
            });
            this.giveConfirm_btn.on(Event$m.CLICK, this, () => {
                console.log(this.give_input.text);
                console.log(this.userid_input.text);
            });
        }
        updateItem(cell, index) {
            let accessType_text = cell.getChildByName("accessType_text");
            let date_text = cell.getChildByName("date_text");
            let amount_text = cell.getChildByName("amount_text");
            let access_status = cell.getChildByName("access_status");
            accessType_text.text = index % 2 ? "存款" : "取款";
            access_status.text = index % 2 ? "成功" : "失败";
            date_text.text = this.access_list.array[index];
            amount_text.text = this.access_list.array[index];
        }
        giveDetialUpdateItem(cell, index) {
            let giverid_text = cell.getChildByName("giverid_text");
            let giveMoney_text = cell.getChildByName("giveMoney_text");
            let receiverid_text = cell.getChildByName("receiverid_text");
            let giveDate_text = cell.getChildByName("giveDate_text");
            giverid_text.text = this.giveDetail_list.array[index];
            giveMoney_text.text = this.giveDetail_list.array[index];
            receiverid_text.text = this.giveDetail_list.array[index];
            giveDate_text.text = this.giveDetail_list.array[index];
        }
        hideAllGroup() {
            for (let index = 0; index < this.groups.numChildren; index++) {
                this.groups.getChildAt(index).visible = false;
            }
        }
    }

    var Event$n = Laya.Event;
    class Set extends ui.Hall.Set.SetUI {
        constructor() {
            super();
        }
        onAwake() {
            this.hideAllGroup();
            this.setGroup(0);
            this.tabButtons.changeHandle = (index) => {
                this.setGroup(index);
            };
            this.close_btn.on(Event$n.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
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

    var Handler$c = Laya.Handler;
    var HouseItem = ui.Hall.TeaHouse.HouseItemUI;
    var Event$o = Laya.Event;
    class CreateTeaHouse extends ui.Hall.TeaHouse.CreateTeaHouseUI {
        constructor() {
            super();
            this.houseSelect = -1;
            this.military_btn.on(Event$o.CLICK, this, this.clickMilitary);
            this.hall_btn.on(Event$o.CLICK, this, this.clickHall);
            this.creat_btn.on(Event$o.CLICK, this, () => {
                this.creatHouse.visible = true;
                this.joinHouse.visible = false;
            });
            this.creat_close_btn.on(Event$o.CLICK, this, () => {
                this.creatHouse.visible = false;
            });
            this.join_btn.on(Event$o.CLICK, this, () => {
                this.creatHouse.visible = false;
                this.joinHouse.visible = true;
            });
            this.join_close_btn.on(Event$o.CLICK, this, () => {
                this.joinHouse.visible = false;
            });
            for (let i = 0; i < 10; i++) {
                this[`num_${i}`].on(Event$o.CLICK, this, () => {
                    console.log(i);
                    if (this.search_text.text.length < 6)
                        this.search_text.text += i;
                });
            }
            this.backspace.on(Event$o.CLICK, this, () => {
                if (this.search_text.text.length > 0)
                    this.search_text.text = this.search_text.text.slice(0, this.search_text.text.length - 1);
            });
            this.search_btn.on(Event$o.CLICK, this, () => {
                console.log(parseInt(this.search_text.text));
            });
            this.set_btn.on(Event$o.CLICK, this, () => {
                this.houseSet.visible = true;
            });
            this.house_set_close.on(Event$o.CLICK, this, () => {
                this.houseSet.visible = false;
            });
        }
        onAwake() {
            this.houseList.selectEnable = true;
            this.houseList.itemRender = HouseItem;
            this.houseList.vScrollBarSkin = "";
            this.houseList.selectHandler = new Handler$c(this, this.onSelect, null, false);
            this.houseList.renderHandler = new Handler$c(this, this.updateItem);
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

    var Event$p = Laya.Event;
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
            this.close_btn.on(Event$p.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.confirmzfb_btn.on(Event$p.CLICK, this, () => {
                console.log("姓名", this.zfbName_input.text);
                console.log("账号", this.zfbAccount_input.text);
            });
            this.confirmPass_btn.on(Event$p.CLICK, this, () => {
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

    var Event$q = Laya.Event;
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
            this.record_btn.on(Event$q.CLICK, this, () => {
                this.widthDraw_group.visible = false;
                this.record_group.visible = true;
            });
            this.recordg_btn.on(Event$q.CLICK, this, () => {
                this.widthDraw_group.visible = true;
                this.record_group.visible = false;
                this.tabButtons.checkIndex = this.tabButtons.checkIndex;
            });
            this.contact_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new CustomerService()));
            });
            this.bind_btn.on(Event$q.CLICK, this, () => {
                let userView = this.addChild(new UserInfo(2));
                userView.visible = false;
                Base.publicFun.showAlert(userView);
            });
            this.close_btn.on(Event$q.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.clearInput_btn.on(Event$q.CLICK, this, () => {
                this.money_slider.percent = 0;
            });
            this.confirm_btn.on(Event$q.CLICK, this, () => {
                console.log(this.money_input.text);
            });
            this.selectAll_btn.on(Event$q.CLICK, this, () => {
                this.money_slider.percent = 100;
            });
            this.money_input.on(Event$q.INPUT, this, (e) => {
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

    var Event$r = Laya.Event;
    class Hall extends ui.HallUI {
        constructor() {
            super();
        }
        onAwake() {
            this.card = this.getChildByName("card");
            this.market.on(Event$r.CLICK, this, this.onClickButton);
            this.combat.on(Event$r.CLICK, this, this.onClickCombat);
        }
        onClickButton() {
        }
        onClickCombat() {
        }
    }

    var Event$s = Laya.Event;
    class forgetPass extends ui.Login.forgetPassUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$s.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.getCaptcha_btn.on(Event$s.CLICK, this, () => {
                console.log("颜真吗");
            });
            this.confirm_btn.on(Event$s.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
                console.log(this.confirmpass_input.text);
                console.log(this.captcha_input.text);
            });
        }
    }

    var Event$t = Laya.Event;
    class accountLogin extends ui.Login.accountLoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$t.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.confirm_btn.on(Event$t.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
            });
        }
    }

    var Event$u = Laya.Event;
    class wachatLogin extends ui.Login.wachatLoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$u.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
        }
    }

    var Event$v = Laya.Event;
    class Login extends ui.Login.LoginUI {
        constructor() {
            super();
        }
        onAwake() {
            this.accountLogin_btn.on(Event$v.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new accountLogin()));
            });
            this.QQLogin_btn.on(Event$v.CLICK, this, () => {
            });
            this.chatLogin_btn.on(Event$v.CLICK, this, () => {
                Base.publicFun.showAlert(this.addChild(new wachatLogin()));
            });
            this.quickLogin_btn.on(Event$v.CLICK, this, () => {
            });
        }
    }

    var Event$w = Laya.Event;
    class rigisteraccount extends ui.Login.rigisteraccountUI {
        constructor() {
            super();
        }
        onAwake() {
            this.close_btn.on(Event$w.CLICK, this, () => {
                Base.publicFun.hideAlert(this, () => { this.removeSelf(); });
            });
            this.getCaptcha_btn.on(Event$w.CLICK, this, () => {
                console.log("颜真吗");
            });
            this.confirm_btn.on(Event$w.CLICK, this, () => {
                console.log(this.account_input.text);
                console.log(this.password_input.text);
                console.log(this.confirmpass_input.text);
                console.log(this.captcha_input.text);
            });
        }
    }

    var Handler$d = Laya.Handler;
    var Tween$5 = Laya.Tween;
    var Event$x = Laya.Event;
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
            this.fapai.clickHandler = new Handler$d(this, this.onClickButton, [this.fapai]);
            this.mopai.clickHandler = new Handler$d(this, this.onClickMopai, [this.mopai]);
            this.dapai.clickHandler = new Handler$d(this, this.onClickDapai, [this.dapai]);
            this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            this.point = new Laya.Vector2();
            this._outHitResult = new Laya.HitResult();
        }
        onClickDapai(button) {
            let card5 = this.downHand[5];
            card5.active = false;
            let card13 = this.downHand[13];
            Tween$5.to(card13.transform, { localPositionZ: card13.transform.localPositionZ - 0.05, localRotationEulerY: 30 }, 300, null, Handler$d.create(this, () => {
                Tween$5.to(card13.transform, { localPositionX: card5.transform.localPositionX, localRotationEulerY: 0 }, 500, null, Handler$d.create(this, () => {
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
            Laya.stage.on(Event$x.MOUSE_UP, this, this.sceneClick);
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
                Tween$5.to(this.downHand[index].transform, { localPositionZ: clicked ? -0.00 : -0.015 }, 200, null, Handler$d.create(this, () => { }));
                this.downHand.forEach(element => {
                    if (element["index"] != index && element["clicked"]) {
                        Tween$5.to(element.transform, { localPositionZ: 0 }, 200, null, Handler$d.create(this, () => { }));
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
            reg("script/Application/APP_Loading.ts", APP_Loading);
            reg("script/CommonProgress.ts", CommonProgress);
            reg("script/Application/APP_Update.ts", APP_Update);
            reg("script/CommonRadioGroup.ts", CommonRadioGroup);
            reg("script/CommonRadio.ts", CommonRadio);
            reg("script/Button.ts", ActionButton);
            reg("script/Application/Game/Common/Game/BetButton.ts", BetButton);
            reg("script/Application/Game/Common/Game/Chip.ts", Chip);
            reg("script/Application/Game/Common/Game/Deal.ts", Deal);
            reg("script/Application/Game/Common/Game/Flicker.ts", Flicker);
            reg("script/Application/Game/Common/Game/Prop.ts", Prop);
            reg("script/Application/Game/Common/Game/TransAni.ts", TransAni);
            reg("script/Application/Game/Common/User/User.ts", User);
            reg("script/Application/GameCommonUI/CommonCreatRoom.ts", CommonCreatRoom);
            reg("script/Application/GameCommonUI/CommonGameTypeSelection.ts", CommonGameTypeSelection);
            reg("script/Application/GameCommonUI/CommonSelectiion.ts", CommonSelectiion);
            reg("script/Application/Game/Common/Game/FlutterText.ts", FlutterText);
            reg("script/Application/Game/BenzBmw/Banker.ts", Banker);
            reg("script/CommonSlider.ts", CommonProgress$1);
            reg("script/Application/Game/BenzBmw/Player.ts", Player);
            reg("script/Application/Game/BenzBmw/Playerlist.ts", Playerlist);
            reg("script/Application/Game/BenzBmw/Roomselection.ts", Roomselection);
            reg("script/Application/Game/BenzBmw/Rule.ts", Rule);
            reg("script/Application/Game/BenzBmw/Setting.ts", Setting);
            reg("script/CommonCheck.ts", CommonCheck);
            reg("script/Application/Game/BenzBmw/Table.ts", Table);
            reg("script/Application/Game/Dice/DiceTable.ts", Dicetable);
            reg("script/Application/Game/Fruit/FruitTable.ts", FruitTable);
            reg("script/Application/Game/GoldenFlower/GoldenFlowerGame.ts", GoldenFlowerGame);
            reg("script/Application/Hall/AgentPromotion/AgentPromotion.ts", AgentPromotion);
            reg("script/CommonTabButtons.ts", CommonTabButton);
            reg("script/Application/Hall/Announcement/Announcement.ts", Announcement);
            reg("script/Application/Hall/CustomerService/CustomerService.ts", CustomerService);
            reg("script/Application/Hall/DissolutionRoom/DissolutionRoom.ts", DissolutionRoom);
            reg("script/Application/Hall/Hundredsofpeople/Hundredspk.ts", Hundredspk);
            reg("script/Application/Hall/Hundredsofpeople/HundredsSelection.ts", HundredsSelection);
            reg("script/Application/Hall/MailBox/Mail.ts", Mail);
            reg("script/Application/Hall/Mall/Mall.ts", Mall);
            reg("script/Application/Hall/Promotions/Promotions.ts", Promotion);
            reg("script/Application/Hall/Recharge/Recharge.ts", Recharge);
            reg("script/Application/Hall/Safe/Safe.ts", Safe);
            reg("script/Application/Hall/Set/Set.ts", Set);
            reg("script/Application/Hall/TeaHouse/CreateTeaHouse.ts", CreateTeaHouse);
            reg("script/Application/Hall/UserInfo/UserInfo.ts", UserInfo);
            reg("script/Application/Hall/Withdrawal/Withdrawal.ts", Withdrawal);
            reg("script/Application/Hall/Hall.ts", Hall);
            reg("script/Application/Login/forgetPass.ts", forgetPass);
            reg("script/Application/Login/Login.ts", Login);
            reg("script/Application/Login/rigisteraccount.ts", rigisteraccount);
            reg("script/Application/Login/wachatLogin.ts", wachatLogin);
            reg("script/playScene.ts", playScene);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1080;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Games/Landlord/LandlordSelection.scene";
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
