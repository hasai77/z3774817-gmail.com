/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Button from "./script/Button"
import BetButton from "./script/Application/Game/Common/Game/BetButton"
import Chip from "./script/Application/Game/Common/Game/Chip"
import Deal from "./script/Application/Game/Common/Game/Deal"
import Prop from "./script/Application/Game/Common/Game/Prop"
import PropList from "./script/Application/Game/Common/Game/PropList"
import TransAni from "./script/Application/Game/Common/Game/TransAni"
import User from "./script/Application/Game/Common/User/User"
import Banker from "./script/Application/Game/BenzBmw/Banker"
import CommonSlider from "./script/CommonSlider"
import CommonProgress from "./script/CommonProgress"
import Player from "./script/Application/Game/BenzBmw/Player"
import Playerlist from "./script/Application/Game/BenzBmw/Playerlist"
import Roomselection from "./script/Application/Game/BenzBmw/Roomselection"
import Rule from "./script/Application/Game/BenzBmw/Rule"
import Setting from "./script/Application/Game/BenzBmw/Setting"
import CommonCheck from "./script/CommonCheck"
import CowCreateRoom from "./script/Application/Game/Cow/CowCreateRoom"
import CommonTabButtons from "./script/CommonTabButtons"
import CommonRadioGroup from "./script/CommonRadioGroup"
import CommonRadio from "./script/CommonRadio"
import CowLoading from "./script/Application/Game/Cow/CowLoading"
import CowRoomSelection from "./script/Application/Game/Cow/CowRoomSelection"
import AgentPromotion from "./script/Application/Hall/AgentPromotion/AgentPromotion"
import Announcement from "./script/Application/Hall/Announcement/Announcement"
import CustomerService from "./script/Application/Hall/CustomerService/CustomerService"
import Recharge from "./script/Application/Hall/Recharge/Recharge"
import CreateTeaHouse from "./script/Application/Hall/TeaHouse/CreateTeaHouse"
import UserInfo from "./script/Application/Hall/UserInfo/UserInfo"
import Withdrawal from "./script/Application/Hall/Withdrawal/Withdrawal"
import Hall from "./script/Application/Hall/Hall"
import login from "./script/login"
import playScene from "./script/playScene"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1920;
    static height:number=1080;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="Hall/Withdrawal/Withdrawal.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/Button.ts",Button);
        reg("script/Application/Game/Common/Game/BetButton.ts",BetButton);
        reg("script/Application/Game/Common/Game/Chip.ts",Chip);
        reg("script/Application/Game/Common/Game/Deal.ts",Deal);
        reg("script/Application/Game/Common/Game/Prop.ts",Prop);
        reg("script/Application/Game/Common/Game/PropList.ts",PropList);
        reg("script/Application/Game/Common/Game/TransAni.ts",TransAni);
        reg("script/Application/Game/Common/User/User.ts",User);
        reg("script/Application/Game/BenzBmw/Banker.ts",Banker);
        reg("script/CommonSlider.ts",CommonSlider);
        reg("script/CommonProgress.ts",CommonProgress);
        reg("script/Application/Game/BenzBmw/Player.ts",Player);
        reg("script/Application/Game/BenzBmw/Playerlist.ts",Playerlist);
        reg("script/Application/Game/BenzBmw/Roomselection.ts",Roomselection);
        reg("script/Application/Game/BenzBmw/Rule.ts",Rule);
        reg("script/Application/Game/BenzBmw/Setting.ts",Setting);
        reg("script/CommonCheck.ts",CommonCheck);
        reg("script/Application/Game/Cow/CowCreateRoom.ts",CowCreateRoom);
        reg("script/CommonTabButtons.ts",CommonTabButtons);
        reg("script/CommonRadioGroup.ts",CommonRadioGroup);
        reg("script/CommonRadio.ts",CommonRadio);
        reg("script/Application/Game/Cow/CowLoading.ts",CowLoading);
        reg("script/Application/Game/Cow/CowRoomSelection.ts",CowRoomSelection);
        reg("script/Application/Hall/AgentPromotion/AgentPromotion.ts",AgentPromotion);
        reg("script/Application/Hall/Announcement/Announcement.ts",Announcement);
        reg("script/Application/Hall/CustomerService/CustomerService.ts",CustomerService);
        reg("script/Application/Hall/Recharge/Recharge.ts",Recharge);
        reg("script/Application/Hall/TeaHouse/CreateTeaHouse.ts",CreateTeaHouse);
        reg("script/Application/Hall/UserInfo/UserInfo.ts",UserInfo);
        reg("script/Application/Hall/Withdrawal/Withdrawal.ts",Withdrawal);
        reg("script/Application/Hall/Hall.ts",Hall);
        reg("script/login.ts",login);
        reg("script/playScene.ts",playScene);
    }
}
GameConfig.init();