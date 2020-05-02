/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui {
    export class APP_LoadingUI extends Laya.Scene {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("APP_Loading");
        }
    }
    REG("ui.APP_LoadingUI",APP_LoadingUI);
    export class APP_UpdateUI extends Laya.Scene {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("APP_Update");
        }
    }
    REG("ui.APP_UpdateUI",APP_UpdateUI);
    export class HallUI extends Laya.Scene {
		public combat:any;
		public market:any;
		public card:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall");
        }
    }
    REG("ui.HallUI",HallUI);
    export class playSceneUI extends Laya.Scene {
		public dapai:Laya.Button;
		public mopai:Laya.Button;
		public fapai:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("playScene");
        }
    }
    REG("ui.playSceneUI",playSceneUI);
    export class RoomHallUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("RoomHall");
        }
    }
    REG("ui.RoomHallUI",RoomHallUI);
}
export module ui.Common {
    export class PopUpUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Common/PopUp");
        }
    }
    REG("ui.Common.PopUpUI",PopUpUI);
}
export module ui.GameAthleticsBull {
    export class BullGameUI extends Laya.Scene {
		public users:Laya.Sprite;
		public deal_view:any;
		public bet_view:any;
		public rob_view:any;
		public gameStatus_view:any;
		public deal_btn:Laya.Sprite;
		public ani_btn:Laya.Sprite;
		public than_btn:Laya.Sprite;
		public back_btn:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsBull/BullGame");
        }
    }
    REG("ui.GameAthleticsBull.BullGameUI",BullGameUI);
    export class BullLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsBull/BullLoading");
        }
    }
    REG("ui.GameAthleticsBull.BullLoadingUI",BullLoadingUI);
}
export module ui.GameAthleticsBull.Ruels {
    export class RoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsBull/Ruels/RoomRule");
        }
    }
    REG("ui.GameAthleticsBull.Ruels.RoomRuleUI",RoomRuleUI);
}
export module ui.GameAthleticsFiftyK {
    export class FiveTenKloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsFiftyK/FiveTenKloading");
        }
    }
    REG("ui.GameAthleticsFiftyK.FiveTenKloadingUI",FiveTenKloadingUI);
    export class FiveTenKSelectionUI extends Laya.View {
		public btns_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsFiftyK/FiveTenKSelection");
        }
    }
    REG("ui.GameAthleticsFiftyK.FiveTenKSelectionUI",FiveTenKSelectionUI);
}
export module ui.GameAthleticsFiftyK.Ruels {
    export class FiftyRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsFiftyK/Ruels/FiftyRoomRule");
        }
    }
    REG("ui.GameAthleticsFiftyK.Ruels.FiftyRoomRuleUI",FiftyRoomRuleUI);
}
export module ui.GameAthleticsFiveArching {
    export class FiveArchingloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsFiveArching/FiveArchingloading");
        }
    }
    REG("ui.GameAthleticsFiveArching.FiveArchingloadingUI",FiveArchingloadingUI);
}
export module ui.GameAthleticsFiveArching.Ruels {
    export class FiveArchingRoomRuleUI extends Laya.View {
		public checks:Laya.Sprite;
		public check_1:any;
		public check_2:any;
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsFiveArching/Ruels/FiveArchingRoomRule");
        }
    }
    REG("ui.GameAthleticsFiveArching.Ruels.FiveArchingRoomRuleUI",FiveArchingRoomRuleUI);
}
export module ui.GameAthleticsGoldenFlower {
    export class GoldenFlowerGameUI extends Laya.Scene {
		public user_0:Laya.Sprite;
		public curType_image:Laya.Sprite;
		public user_1:Laya.Sprite;
		public user_2:Laya.Sprite;
		public user_3:Laya.Sprite;
		public user_4:Laya.Sprite;
		public user_5:Laya.Sprite;
		public recv_panel:Laya.Sprite;
		public btns_group:Laya.Sprite;
		public putChip_btn:any;
		public changeCoin_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsGoldenFlower/GoldenFlowerGame");
        }
    }
    REG("ui.GameAthleticsGoldenFlower.GoldenFlowerGameUI",GoldenFlowerGameUI);
    export class GoldenFlowerLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsGoldenFlower/GoldenFlowerLoading");
        }
    }
    REG("ui.GameAthleticsGoldenFlower.GoldenFlowerLoadingUI",GoldenFlowerLoadingUI);
}
export module ui.GameAthleticsGoldenFlower.Rules {
    export class GoldenFlowerRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsGoldenFlower/Rules/GoldenFlowerRoomRule");
        }
    }
    REG("ui.GameAthleticsGoldenFlower.Rules.GoldenFlowerRoomRuleUI",GoldenFlowerRoomRuleUI);
}
export module ui.GameAthleticsLandlord {
    export class LandlordLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsLandlord/LandlordLoading");
        }
    }
    REG("ui.GameAthleticsLandlord.LandlordLoadingUI",LandlordLoadingUI);
    export class LandlordSelectionUI extends Laya.View {
		public btns_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsLandlord/LandlordSelection");
        }
    }
    REG("ui.GameAthleticsLandlord.LandlordSelectionUI",LandlordSelectionUI);
}
export module ui.GameAthleticsLandlord.Rules {
    export class LandlordRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsLandlord/Rules/LandlordRoomRule");
        }
    }
    REG("ui.GameAthleticsLandlord.Rules.LandlordRoomRuleUI",LandlordRoomRuleUI);
}
export module ui.GameAthleticsRunsFast.Rules {
    export class RunFastRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsRunsFast/Rules/RunFastRoomRule");
        }
    }
    REG("ui.GameAthleticsRunsFast.Rules.RunFastRoomRuleUI",RunFastRoomRuleUI);
}
export module ui.GameAthleticsRunsFast {
    export class RunsFastLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsRunsFast/RunsFastLoading");
        }
    }
    REG("ui.GameAthleticsRunsFast.RunsFastLoadingUI",RunsFastLoadingUI);
}
export module ui.GameAthleticsTexas.Rules {
    export class TexasRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTexas/Rules/TexasRoomRule");
        }
    }
    REG("ui.GameAthleticsTexas.Rules.TexasRoomRuleUI",TexasRoomRuleUI);
}
export module ui.GameAthleticsTexas {
    export class TexasLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTexas/TexasLoading");
        }
    }
    REG("ui.GameAthleticsTexas.TexasLoadingUI",TexasLoadingUI);
}
export module ui.GameAthleticsThanchicken.Rules {
    export class ThanchickenCreateroomUI extends Laya.View {
		public checks:Laya.Sprite;
		public check_1:any;
		public check_2:any;
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThanchicken/Rules/ThanchickenCreateroom");
        }
    }
    REG("ui.GameAthleticsThanchicken.Rules.ThanchickenCreateroomUI",ThanchickenCreateroomUI);
}
export module ui.GameAthleticsThanchicken {
    export class ThanChickenLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThanchicken/ThanChickenLoading");
        }
    }
    REG("ui.GameAthleticsThanchicken.ThanChickenLoadingUI",ThanChickenLoadingUI);
}
export module ui.GameAthleticsThirteenBets.Rules {
    export class ThirteenBetsRoomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThirteenBets/Rules/ThirteenBetsRoomRule");
        }
    }
    REG("ui.GameAthleticsThirteenBets.Rules.ThirteenBetsRoomRuleUI",ThirteenBetsRoomRuleUI);
}
export module ui.GameAthleticsThirteenBets {
    export class ThirteenBetsloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThirteenBets/ThirteenBetsloading");
        }
    }
    REG("ui.GameAthleticsThirteenBets.ThirteenBetsloadingUI",ThirteenBetsloadingUI);
}
export module ui.GameAthleticsThreeDuke.Rules {
    export class ThreeDukeRoomRuleUI extends Laya.Scene {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThreeDuke/Rules/ThreeDukeRoomRule");
        }
    }
    REG("ui.GameAthleticsThreeDuke.Rules.ThreeDukeRoomRuleUI",ThreeDukeRoomRuleUI);
}
export module ui.GameAthleticsThreeDuke {
    export class ThreeDukeloadingUI extends Laya.Scene {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsThreeDuke/ThreeDukeloading");
        }
    }
    REG("ui.GameAthleticsThreeDuke.ThreeDukeloadingUI",ThreeDukeloadingUI);
}
export module ui.GameAthleticsTwentyone.Rules {
    export class TwentyoneroomRuleUI extends Laya.View {
		public checks:Laya.Sprite;
		public check_1:any;
		public check_2:any;
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTwentyone/Rules/TwentyoneroomRule");
        }
    }
    REG("ui.GameAthleticsTwentyone.Rules.TwentyoneroomRuleUI",TwentyoneroomRuleUI);
}
export module ui.GameAthleticsTwentyone {
    export class TwentyOneloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTwentyone/TwentyOneloading");
        }
    }
    REG("ui.GameAthleticsTwentyone.TwentyOneloadingUI",TwentyOneloadingUI);
}
export module ui.GameAthleticsTwoEight.Rules {
    export class TwoEightroomRuleUI extends Laya.View {
		public radios:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTwoEight/Rules/TwoEightroomRule");
        }
    }
    REG("ui.GameAthleticsTwoEight.Rules.TwoEightroomRuleUI",TwoEightroomRuleUI);
}
export module ui.GameAthleticsTwoEight {
    export class TwoEightloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameAthleticsTwoEight/TwoEightloading");
        }
    }
    REG("ui.GameAthleticsTwoEight.TwoEightloadingUI",TwoEightloadingUI);
}
export module ui.GameCommonUI.Athletics {
    export class BetUI extends Laya.View {
		public betBtn_list:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Bet");
        }
    }
    REG("ui.GameCommonUI.Athletics.BetUI",BetUI);
    export class ChipUI extends Laya.View {
		public gold:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Chip");
        }
    }
    REG("ui.GameCommonUI.Athletics.ChipUI",ChipUI);
    export class DealUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Deal");
        }
    }
    REG("ui.GameCommonUI.Athletics.DealUI",DealUI);
    export class FlickerUI extends Laya.View {
		public image_0:Laya.Sprite;
		public image_1:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Flicker");
        }
    }
    REG("ui.GameCommonUI.Athletics.FlickerUI",FlickerUI);
    export class PlayPropUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/PlayProp");
        }
    }
    REG("ui.GameCommonUI.Athletics.PlayPropUI",PlayPropUI);
    export class PropUI extends Laya.View {
		public card:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Prop");
        }
    }
    REG("ui.GameCommonUI.Athletics.PropUI",PropUI);
    export class PropListUI extends Laya.View {
		public CardList_list:Laya.List;
		public propType_text:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/PropList");
        }
    }
    REG("ui.GameCommonUI.Athletics.PropListUI",PropListUI);
    export class RobUI extends Laya.Scene {
		public robBtn_list:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/Rob");
        }
    }
    REG("ui.GameCommonUI.Athletics.RobUI",RobUI);
    export class TansAniUI extends Laya.View {
		public image:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/Athletics/TansAni");
        }
    }
    REG("ui.GameCommonUI.Athletics.TansAniUI",TansAniUI);
}
export module ui.GameCommonUI {
    export class CommonCreatRoomUI extends Laya.View {
		public tabButtons_list:Laya.List;
		public close_btn:any;
		public confirm_btn:any;
		public clear_btn:any;
		public rule_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/CommonCreatRoom");
        }
    }
    REG("ui.GameCommonUI.CommonCreatRoomUI",CommonCreatRoomUI);
    export class CommonGameTypeSelectionUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/CommonGameTypeSelection");
        }
    }
    REG("ui.GameCommonUI.CommonGameTypeSelectionUI",CommonGameTypeSelectionUI);
    export class CommonSelectiionUI extends Laya.View {
		public items_view:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/CommonSelectiion");
        }
    }
    REG("ui.GameCommonUI.CommonSelectiionUI",CommonSelectiionUI);
    export class FlutterTextUI extends Laya.View {
		public number_text:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameCommonUI/FlutterText");
        }
    }
    REG("ui.GameCommonUI.FlutterTextUI",FlutterTextUI);
}
export module ui.GameHundredsBenzBmw {
    export class BankerUI extends Laya.View {
		public plus_btn:any;
		public reduce_btn:any;
		public money_slider:any;
		public apply_btn:any;
		public close_btn:any;
		public money_text:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Banker");
        }
    }
    REG("ui.GameHundredsBenzBmw.BankerUI",BankerUI);
    export class BenzBmwloadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/BenzBmwloading");
        }
    }
    REG("ui.GameHundredsBenzBmw.BenzBmwloadingUI",BenzBmwloadingUI);
    export class ListMenuUI extends Laya.View {
		public recharge_btn:any;
		public rule_btn:any;
		public setting_btn:any;
		public back_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/ListMenu");
        }
    }
    REG("ui.GameHundredsBenzBmw.ListMenuUI",ListMenuUI);
    export class loadingUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/loading");
        }
    }
    REG("ui.GameHundredsBenzBmw.loadingUI",loadingUI);
    export class PlayerUI extends Laya.View {
		public close_btn:any;
		public confirm_btn:any;
		public player_list:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Player");
        }
    }
    REG("ui.GameHundredsBenzBmw.PlayerUI",PlayerUI);
    export class PlayerlistUI extends Laya.View {
		public player_list:Laya.Sprite;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Playerlist");
        }
    }
    REG("ui.GameHundredsBenzBmw.PlayerlistUI",PlayerlistUI);
    export class RoomselectionUI extends Laya.View {
		public back_btn:any;
		public about_btn:any;
		public senior_btn:any;
		public intermediate_btn:any;
		public primary_btn:any;
		public header_image:Laya.Sprite;
		public name_text:laya.display.Text;
		public money_text:laya.display.Text;
		public quick_btn:any;
		public rule_view:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Roomselection");
        }
    }
    REG("ui.GameHundredsBenzBmw.RoomselectionUI",RoomselectionUI);
    export class RuleUI extends Laya.Dialog {
		public confirm_btn:any;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Rule");
        }
    }
    REG("ui.GameHundredsBenzBmw.RuleUI",RuleUI);
    export class SettingUI extends Laya.View {
		public confirm_btn:any;
		public close_btn:any;
		public music_check:any;
		public bgm_check:any;
		public sound_check:any;
		public automatic_check:any;
		public night_check:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Setting");
        }
    }
    REG("ui.GameHundredsBenzBmw.SettingUI",SettingUI);
    export class SpeakUI extends Laya.Scene {
		public message_list:Laya.List;
		public send_btn:any;
		public word_input:Laya.TextInput;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Speak");
        }
    }
    REG("ui.GameHundredsBenzBmw.SpeakUI",SpeakUI);
    export class TableUI extends Laya.Scene {
		public go_btn:any;
		public car_image:Laya.Sprite;
		public dabaoshijie:Laya.Button;
		public dabenchi:Laya.Button;
		public dabaoma:Laya.Button;
		public dadazhong:Laya.Button;
		public baoshijie:Laya.Button;
		public benchi:Laya.Button;
		public baoma:Laya.Button;
		public dazhong:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Table");
        }
    }
    REG("ui.GameHundredsBenzBmw.TableUI",TableUI);
    export class TextfailureUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Textfailure");
        }
    }
    REG("ui.GameHundredsBenzBmw.TextfailureUI",TextfailureUI);
    export class WithdrawmoneyUI extends Laya.View {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBenzBmw/Withdrawmoney");
        }
    }
    REG("ui.GameHundredsBenzBmw.WithdrawmoneyUI",WithdrawmoneyUI);
}
export module ui.GameHundredsBull {
    export class HundredsBullUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsBull/HundredsBull");
        }
    }
    REG("ui.GameHundredsBull.HundredsBullUI",HundredsBullUI);
}
export module ui.GameHundredsDice {
    export class DiceUI extends Laya.Scene {
		public diceCup_group:Laya.Sprite;
		public dice_0:Laya.Sprite;
		public dice_1:Laya.Sprite;
		public dice_2:Laya.Sprite;
		public dice_ani:Laya.Animation;
		public play_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsDice/Dice");
        }
    }
    REG("ui.GameHundredsDice.DiceUI",DiceUI);
}
export module ui.GameHundredsFruit {
    export class FruitLoadingUI extends Laya.View {
		public progress:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsFruit/FruitLoading");
        }
    }
    REG("ui.GameHundredsFruit.FruitLoadingUI",FruitLoadingUI);
    export class FruitSelectionUI extends Laya.View {
		public btns_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsFruit/FruitSelection");
        }
    }
    REG("ui.GameHundredsFruit.FruitSelectionUI",FruitSelectionUI);
    export class FruitTableUI extends Laya.Scene {
		public clear_btn:any;
		public start_btn:any;
		public items_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("GameHundredsFruit/FruitTable");
        }
    }
    REG("ui.GameHundredsFruit.FruitTableUI",FruitTableUI);
}
export module ui.Hall.AgentPromotion {
    export class AgentPromotionUI extends Laya.View {
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public btn_3:Laya.Sprite;
		public btn_4:Laya.Sprite;
		public btn_5:Laya.Sprite;
		public btn_6:Laya.Sprite;
		public groups:Laya.Sprite;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/AgentPromotion/AgentPromotion");
        }
    }
    REG("ui.Hall.AgentPromotion.AgentPromotionUI",AgentPromotionUI);
}
export module ui.Hall.Announcement {
    export class AnnouncementUI extends Laya.View {
		public close_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public groups:Laya.Sprite;
		public group_0:Laya.Sprite;
		public group_1:Laya.Sprite;
		public group_2:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Announcement/Announcement");
        }
    }
    REG("ui.Hall.Announcement.AnnouncementUI",AnnouncementUI);
}
export module ui.Hall.CustomerService {
    export class CustomerServiceUI extends Laya.View {
		public close_btn:any;
		public ask_input:Laya.TextInput;
		public send_btn:any;
		public chat_list:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/CustomerService/CustomerService");
        }
    }
    REG("ui.Hall.CustomerService.CustomerServiceUI",CustomerServiceUI);
}
export module ui.Hall.DissolutionRoom {
    export class DissolutionRoomUI extends Laya.View {
		public cancel_btn:any;
		public confirm_btn:any;
		public close_btn:any;
		public users_group:Laya.Sprite;
		public header_image:Laya.Sprite;
		public name_text:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/DissolutionRoom/DissolutionRoom");
        }
    }
    REG("ui.Hall.DissolutionRoom.DissolutionRoomUI",DissolutionRoomUI);
    export class DissolutionRoomConfirmUI extends Laya.View {
		public close_btn:any;
		public confirm_btn:any;
		public cancel_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/DissolutionRoom/DissolutionRoomConfirm");
        }
    }
    REG("ui.Hall.DissolutionRoom.DissolutionRoomConfirmUI",DissolutionRoomConfirmUI);
}
export module ui.Hall.Hundredsofpeople {
    export class HundredspkUI extends Laya.View {
		public btn_0:any;
		public btn_1:any;
		public btn_2:any;
		public btn_3:any;
		public btn_4:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Hundredsofpeople/Hundredspk");
        }
    }
    REG("ui.Hall.Hundredsofpeople.HundredspkUI",HundredspkUI);
    export class HundredsSelectionUI extends Laya.View {
		public select_group:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Hundredsofpeople/HundredsSelection");
        }
    }
    REG("ui.Hall.Hundredsofpeople.HundredsSelectionUI",HundredsSelectionUI);
}
export module ui.Hall {
    export class InvitationCodeUI extends Laya.Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/InvitationCode");
        }
    }
    REG("ui.Hall.InvitationCodeUI",InvitationCodeUI);
}
export module ui.Hall.MailBox {
    export class MailUI extends Laya.View {
		public msgBox:Laya.Sprite;
		public alMsgName_text:laya.display.Text;
		public msgContent_text:laya.display.Text;
		public cancel_btn:any;
		public confirm_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public msg_list:Laya.List;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/MailBox/Mail");
        }
    }
    REG("ui.Hall.MailBox.MailUI",MailUI);
}
export module ui.Hall.Mall {
    export class MallUI extends Laya.View {
		public money_text:laya.display.Text;
		public diamond_text:laya.display.Text;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public close_btn:any;
		public buyitem_lsit:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Mall/Mall");
        }
    }
    REG("ui.Hall.Mall.MallUI",MallUI);
}
export module ui.Hall.Promotions {
    export class PromotionsUI extends Laya.View {
		public close_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public groups:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Promotions/Promotions");
        }
    }
    REG("ui.Hall.Promotions.PromotionsUI",PromotionsUI);
}
export module ui.Hall.Recharge {
    export class RechargeUI extends Laya.View {
		public userMoney_text:laya.display.Text;
		public oneLevelMoney_text:laya.display.Text;
		public buyed_list:Laya.List;
		public userid_text:laya.display.Text;
		public vipRecharge_group:Laya.Sprite;
		public otherRecharge_group:Laya.Sprite;
		public money_input:Laya.TextInput;
		public clearInput_btn:any;
		public confirm_btn:any;
		public quickPush_btns:Laya.Sprite;
		public close_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public btn_3:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Recharge/Recharge");
        }
    }
    REG("ui.Hall.Recharge.RechargeUI",RechargeUI);
}
export module ui.Hall.Safe {
    export class SafeUI extends Laya.View {
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public btn_3:Laya.Sprite;
		public btn_4:Laya.Sprite;
		public close_btn:any;
		public groups:Laya.Sprite;
		public access_group:Laya.Sprite;
		public money_input:Laya.TextInput;
		public reduce_btn:any;
		public plus_btn:any;
		public accessConfirm_btn:any;
		public clearInput_btn:any;
		public money_slider:any;
		public give_group:Laya.Sprite;
		public giveConfirm_btn:any;
		public giveCancel_btn:any;
		public giveRecords_btn:any;
		public recordUser_btn:any;
		public give_input:Laya.TextInput;
		public userid_input:Laya.TextInput;
		public moneys_group:Laya.Sprite;
		public money_text:laya.display.Text;
		public safe_text:laya.display.Text;
		public giveDetail_group:Laya.Sprite;
		public giveDetail_list:Laya.List;
		public access_list:Laya.List;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Safe/Safe");
        }
    }
    REG("ui.Hall.Safe.SafeUI",SafeUI);
}
export module ui.Hall.Set {
    export class SetUI extends Laya.View {
		public close_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public groups:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Set/Set");
        }
    }
    REG("ui.Hall.Set.SetUI",SetUI);
}
export module ui.Hall.TeaHouse {
    export class CreateTeaHouseUI extends Laya.View {
		public military_btn:Laya.Sprite;
		public hall_btn:Laya.Sprite;
		public return_btn:any;
		public set_btn:Laya.Sprite;
		public houseList:Laya.List;
		public creat_btn:any;
		public join_btn:any;
		public houseHall:Laya.Sprite;
		public rankList:Laya.Sprite;
		public joinHouse:Laya.Sprite;
		public join_close_btn:any;
		public num_1:any;
		public num_2:any;
		public num_3:any;
		public num_4:any;
		public num_5:any;
		public num_6:any;
		public num_7:any;
		public num_8:any;
		public num_9:any;
		public search_btn:any;
		public num_0:any;
		public backspace:any;
		public search_text:Laya.TextInput;
		public join_houseName:laya.display.Text;
		public join_houseId:laya.display.Text;
		public creatHouse:Laya.Sprite;
		public creat_close_btn:any;
		public creat_sure_btn:any;
		public houseSet:Laya.Sprite;
		public house_set_close:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/TeaHouse/CreateTeaHouse");
        }
    }
    REG("ui.Hall.TeaHouse.CreateTeaHouseUI",CreateTeaHouseUI);
    export class HouseItemUI extends Laya.View {
		public group:Laya.Box;
		public unselect:Laya.Sprite;
		public selected:Laya.Sprite;
		public houseHead:Laya.Sprite;
		public houseName:laya.display.Text;
		public houseId:laya.display.Text;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/TeaHouse/HouseItem");
        }
    }
    REG("ui.Hall.TeaHouse.HouseItemUI",HouseItemUI);
}
export module ui.Hall.UserInfo {
    export class UserInfoUI extends Laya.Scene {
		public close_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public btn_2:Laya.Sprite;
		public groups:Laya.Sprite;
		public userName_text:laya.display.Text;
		public userMoney_text:laya.display.Text;
		public confirmPass_btn:any;
		public oldPass_input:Laya.TextInput;
		public newPass_input:Laya.TextInput;
		public confirmPass_input:Laya.TextInput;
		public zfbName_input:Laya.TextInput;
		public zfbAccount_input:Laya.TextInput;
		public confirmzfb_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/UserInfo/UserInfo");
        }
    }
    REG("ui.Hall.UserInfo.UserInfoUI",UserInfoUI);
}
export module ui.Hall.Withdrawal {
    export class WithdrawalUI extends Laya.View {
		public widthDraw_group:Laya.Sprite;
		public money_input:Laya.TextInput;
		public userMoney_text:laya.display.Text;
		public record_btn:any;
		public bind_btn:any;
		public confirm_btn:any;
		public selectAll_btn:any;
		public clearInput_btn:any;
		public yhk_group:Laya.Sprite;
		public zfb_group:Laya.Sprite;
		public money_slider:any;
		public record_group:Laya.Sprite;
		public contact_btn:any;
		public recordg_btn:any;
		public tabButtons:any;
		public btn_0:Laya.Sprite;
		public btn_1:Laya.Sprite;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Hall/Withdrawal/Withdrawal");
        }
    }
    REG("ui.Hall.Withdrawal.WithdrawalUI",WithdrawalUI);
}
export module ui.Login {
    export class accountLoginUI extends Laya.View {
		public close_btn:any;
		public account_input:Laya.TextInput;
		public password_input:Laya.TextInput;
		public confirm_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Login/accountLogin");
        }
    }
    REG("ui.Login.accountLoginUI",accountLoginUI);
    export class forgetPassUI extends Laya.View {
		public close_btn:any;
		public getCaptcha_btn:any;
		public confirm_btn:any;
		public account_input:Laya.TextInput;
		public captcha_input:Laya.TextInput;
		public confirmpass_input:Laya.TextInput;
		public password_input:Laya.TextInput;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Login/forgetPass");
        }
    }
    REG("ui.Login.forgetPassUI",forgetPassUI);
    export class LoginUI extends Laya.Scene {
		public chatLogin_btn:any;
		public QQLogin_btn:any;
		public quickLogin_btn:any;
		public accountLogin_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Login/Login");
        }
    }
    REG("ui.Login.LoginUI",LoginUI);
    export class rigisteraccountUI extends Laya.View {
		public close_btn:any;
		public account_input:Laya.TextInput;
		public captcha_input:Laya.TextInput;
		public confirmpass_input:Laya.TextInput;
		public password_input:Laya.TextInput;
		public getCaptcha_btn:any;
		public confirm_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Login/rigisteraccount");
        }
    }
    REG("ui.Login.rigisteraccountUI",rigisteraccountUI);
    export class wachatLoginUI extends Laya.View {
		public chat_image:Laya.Sprite;
		public close_btn:any;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Login/wachatLogin");
        }
    }
    REG("ui.Login.wachatLoginUI",wachatLoginUI);
}