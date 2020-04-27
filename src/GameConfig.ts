/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import APP_Loading from "./script/Application/APP_Loading"
import CommonProgress from "./script/CommonProgress"
import APP_Update from "./script/Application/APP_Update"
import CommonRadioGroup from "./script/CommonRadioGroup"
import CommonRadio from "./script/CommonRadio"
import Button from "./script/Button"
import BetButton from "./script/Application/Game/Common/Game/BetButton"
import Chip from "./script/Application/Game/Common/Game/Chip"
import Deal from "./script/Application/Game/Common/Game/Deal"
import Flicker from "./script/Application/Game/Common/Game/Flicker"
import Prop from "./script/Application/Game/Common/Game/Prop"
import TransAni from "./script/Application/Game/Common/Game/TransAni"
import User from "./script/Application/Game/Common/User/User"
import CommonCreatRoom from "./script/Application/GameCommonUI/CommonCreatRoom"
import CommonGameTypeSelection from "./script/Application/GameCommonUI/CommonGameTypeSelection"
import CommonSelectiion from "./script/Application/GameCommonUI/CommonSelectiion"
import FlutterText from "./script/Application/Game/Common/Game/FlutterText"
import Banker from "./script/Application/Game/BenzBmw/Banker"
import CommonSlider from "./script/CommonSlider"
import Player from "./script/Application/Game/BenzBmw/Player"
import Playerlist from "./script/Application/Game/BenzBmw/Playerlist"
import Roomselection from "./script/Application/Game/BenzBmw/Roomselection"
import Rule from "./script/Application/Game/BenzBmw/Rule"
import Setting from "./script/Application/Game/BenzBmw/Setting"
import CommonCheck from "./script/CommonCheck"
import Table from "./script/Application/Game/BenzBmw/Table"
import DiceTable from "./script/Application/Game/Dice/DiceTable"
import FruitTable from "./script/Application/Game/Fruit/FruitTable"
import GoldenFlowerGame from "./script/Application/Game/GoldenFlower/GoldenFlowerGame"
import AgentPromotion from "./script/Application/Hall/AgentPromotion/AgentPromotion"
import CommonTabButtons from "./script/CommonTabButtons"
import Announcement from "./script/Application/Hall/Announcement/Announcement"
import CustomerService from "./script/Application/Hall/CustomerService/CustomerService"
import DissolutionRoom from "./script/Application/Hall/DissolutionRoom/DissolutionRoom"
import Hundredspk from "./script/Application/Hall/Hundredsofpeople/Hundredspk"
import HundredsSelection from "./script/Application/Hall/Hundredsofpeople/HundredsSelection"
import Mail from "./script/Application/Hall/MailBox/Mail"
import Mall from "./script/Application/Hall/Mall/Mall"
import Promotions from "./script/Application/Hall/Promotions/Promotions"
import Recharge from "./script/Application/Hall/Recharge/Recharge"
import Safe from "./script/Application/Hall/Safe/Safe"
import Set from "./script/Application/Hall/Set/Set"
import CreateTeaHouse from "./script/Application/Hall/TeaHouse/CreateTeaHouse"
import UserInfo from "./script/Application/Hall/UserInfo/UserInfo"
import Withdrawal from "./script/Application/Hall/Withdrawal/Withdrawal"
import Hall from "./script/Application/Hall/Hall"
import forgetPass from "./script/Application/Login/forgetPass"
import Login from "./script/Application/Login/Login"
import rigisteraccount from "./script/Application/Login/rigisteraccount"
import wachatLogin from "./script/Application/Login/wachatLogin"
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
    static startScene:any="Games/Landlord/LandlordSelection.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/Application/APP_Loading.ts",APP_Loading);
        reg("script/CommonProgress.ts",CommonProgress);
        reg("script/Application/APP_Update.ts",APP_Update);
        reg("script/CommonRadioGroup.ts",CommonRadioGroup);
        reg("script/CommonRadio.ts",CommonRadio);
        reg("script/Button.ts",Button);
        reg("script/Application/Game/Common/Game/BetButton.ts",BetButton);
        reg("script/Application/Game/Common/Game/Chip.ts",Chip);
        reg("script/Application/Game/Common/Game/Deal.ts",Deal);
        reg("script/Application/Game/Common/Game/Flicker.ts",Flicker);
        reg("script/Application/Game/Common/Game/Prop.ts",Prop);
        reg("script/Application/Game/Common/Game/TransAni.ts",TransAni);
        reg("script/Application/Game/Common/User/User.ts",User);
        reg("script/Application/GameCommonUI/CommonCreatRoom.ts",CommonCreatRoom);
        reg("script/Application/GameCommonUI/CommonGameTypeSelection.ts",CommonGameTypeSelection);
        reg("script/Application/GameCommonUI/CommonSelectiion.ts",CommonSelectiion);
        reg("script/Application/Game/Common/Game/FlutterText.ts",FlutterText);
        reg("script/Application/Game/BenzBmw/Banker.ts",Banker);
        reg("script/CommonSlider.ts",CommonSlider);
        reg("script/Application/Game/BenzBmw/Player.ts",Player);
        reg("script/Application/Game/BenzBmw/Playerlist.ts",Playerlist);
        reg("script/Application/Game/BenzBmw/Roomselection.ts",Roomselection);
        reg("script/Application/Game/BenzBmw/Rule.ts",Rule);
        reg("script/Application/Game/BenzBmw/Setting.ts",Setting);
        reg("script/CommonCheck.ts",CommonCheck);
        reg("script/Application/Game/BenzBmw/Table.ts",Table);
        reg("script/Application/Game/Dice/DiceTable.ts",DiceTable);
        reg("script/Application/Game/Fruit/FruitTable.ts",FruitTable);
        reg("script/Application/Game/GoldenFlower/GoldenFlowerGame.ts",GoldenFlowerGame);
        reg("script/Application/Hall/AgentPromotion/AgentPromotion.ts",AgentPromotion);
        reg("script/CommonTabButtons.ts",CommonTabButtons);
        reg("script/Application/Hall/Announcement/Announcement.ts",Announcement);
        reg("script/Application/Hall/CustomerService/CustomerService.ts",CustomerService);
        reg("script/Application/Hall/DissolutionRoom/DissolutionRoom.ts",DissolutionRoom);
        reg("script/Application/Hall/Hundredsofpeople/Hundredspk.ts",Hundredspk);
        reg("script/Application/Hall/Hundredsofpeople/HundredsSelection.ts",HundredsSelection);
        reg("script/Application/Hall/MailBox/Mail.ts",Mail);
        reg("script/Application/Hall/Mall/Mall.ts",Mall);
        reg("script/Application/Hall/Promotions/Promotions.ts",Promotions);
        reg("script/Application/Hall/Recharge/Recharge.ts",Recharge);
        reg("script/Application/Hall/Safe/Safe.ts",Safe);
        reg("script/Application/Hall/Set/Set.ts",Set);
        reg("script/Application/Hall/TeaHouse/CreateTeaHouse.ts",CreateTeaHouse);
        reg("script/Application/Hall/UserInfo/UserInfo.ts",UserInfo);
        reg("script/Application/Hall/Withdrawal/Withdrawal.ts",Withdrawal);
        reg("script/Application/Hall/Hall.ts",Hall);
        reg("script/Application/Login/forgetPass.ts",forgetPass);
        reg("script/Application/Login/Login.ts",Login);
        reg("script/Application/Login/rigisteraccount.ts",rigisteraccount);
        reg("script/Application/Login/wachatLogin.ts",wachatLogin);
        reg("script/playScene.ts",playScene);
    }
}
GameConfig.init();