/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import APP_Loading from "./script/Application/APP_Loading"
import CommonProgress from "./script/CommonProgress"
import APP_Update from "./script/Application/APP_Update"
import Button from "./script/Button"
import BetButton from "./script/Application/Game/Common/Game/BetButton"
import Chip from "./script/Application/Game/Common/Game/Chip"
import Deal from "./script/Application/Game/Common/Game/Deal"
import Flicker from "./script/Application/Game/Common/Game/Flicker"
import Prop from "./script/Application/Game/Common/Game/Prop"
import PropList from "./script/Application/Game/Common/Game/PropList"
import TransAni from "./script/Application/Game/Common/Game/TransAni"
import User from "./script/Application/Game/Common/User/User"
import RecordShow from "./script/Application/Game/Common/RecordShow"
import VictoryShow from "./script/Application/Game/Common/VictoryShow"
import Banker from "./script/Application/Game/BenzBmw/Banker"
import CommonSlider from "./script/CommonSlider"
import Player from "./script/Application/Game/BenzBmw/Player"
import Playerlist from "./script/Application/Game/BenzBmw/Playerlist"
import Roomselection from "./script/Application/Game/BenzBmw/Roomselection"
import Rule from "./script/Application/Game/BenzBmw/Rule"
import Setting from "./script/Application/Game/BenzBmw/Setting"
import CommonCheck from "./script/CommonCheck"
import Table from "./script/Application/Game/BenzBmw/Table"
import CowCreateRoom from "./script/Application/Game/Cow/CowCreateRoom"
import CommonTabButtons from "./script/CommonTabButtons"
import CommonRadioGroup from "./script/CommonRadioGroup"
import CommonRadio from "./script/CommonRadio"
import CowLoading from "./script/Application/Game/Cow/CowLoading"
import CowRoomSelection from "./script/Application/Game/Cow/CowRoomSelection"
import DiceTable from "./script/Application/Game/Dice/DiceTable"
import FiftyCreateRoom from "./script/Application/Game/FiftyK/FiftyCreateRoom"
import FiveTenKloading from "./script/Application/Game/FiftyK/FiveTenKloading"
import FiveTenKSelection from "./script/Application/Game/FiftyK/FiveTenKSelection"
import FiveArchingCreateRoom from "./script/Application/Game/FiveArching/FiveArchingCreateRoom"
import FiveArchingselection from "./script/Application/Game/FiveArching/FiveArchingselection"
import FruitLoading from "./script/Application/Game/Fruit/FruitLoading"
import FruitSelection from "./script/Application/Game/Fruit/FruitSelection"
import FruitTable from "./script/Application/Game/Fruit/FruitTable"
import GoldenFlowerCreateRoom from "./script/Application/Game/GoldenFlower/GoldenFlowerCreateRoom"
import LandlordCreateRoom from "./script/Application/Game/Landlord/LandlordCreateRoom"
import ThanchickenCreateroom from "./script/Application/Game/Thanchicken/ThanchickenCreateroom"
import ThirteenBets from "./script/Application/Game/ThirteenBets/ThirteenBets"
import ThirteenBetsCreateroom from "./script/Application/Game/ThirteenBets/ThirteenBetsCreateroom"
import ThirteenBetsLoading from "./script/Application/Game/ThirteenBets/ThirteenBetsLoading"
import ThirteenBetsSelection from "./script/Application/Game/ThirteenBets/ThirteenBetsSelection"
import ThreeDuke from "./script/Application/Game/ThreeDuke/ThreeDuke"
import ThreeDukeCreateroom from "./script/Application/Game/ThreeDuke/ThreeDukeCreateroom"
import ThreeDukeLoading from "./script/Application/Game/ThreeDuke/ThreeDukeLoading"
import ThreeDukeSelection from "./script/Application/Game/ThreeDuke/ThreeDukeSelection"
import Twentyone from "./script/Application/Game/Twentyone/Twentyone"
import TwentyoneCreateroom from "./script/Application/Game/Twentyone/TwentyoneCreateroom"
import TwentyoneLoading from "./script/Application/Game/Twentyone/TwentyoneLoading"
import TwentyoneSelection from "./script/Application/Game/Twentyone/TwentyoneSelection"
import TwoEight from "./script/Application/Game/TwoEight/TwoEight"
import TwoEightCreateroom from "./script/Application/Game/TwoEight/TwoEightCreateroom"
import TwoEightLoading from "./script/Application/Game/TwoEight/TwoEightLoading"
import TwoEightSelection from "./script/Application/Game/TwoEight/TwoEightSelection"
import AgentPromotion from "./script/Application/Hall/AgentPromotion/AgentPromotion"
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
    static startScene:any="Games/Fruit/FruitTable.scene";
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
        reg("script/Button.ts",Button);
        reg("script/Application/Game/Common/Game/BetButton.ts",BetButton);
        reg("script/Application/Game/Common/Game/Chip.ts",Chip);
        reg("script/Application/Game/Common/Game/Deal.ts",Deal);
        reg("script/Application/Game/Common/Game/Flicker.ts",Flicker);
        reg("script/Application/Game/Common/Game/Prop.ts",Prop);
        reg("script/Application/Game/Common/Game/PropList.ts",PropList);
        reg("script/Application/Game/Common/Game/TransAni.ts",TransAni);
        reg("script/Application/Game/Common/User/User.ts",User);
        reg("script/Application/Game/Common/RecordShow.ts",RecordShow);
        reg("script/Application/Game/Common/VictoryShow.ts",VictoryShow);
        reg("script/Application/Game/BenzBmw/Banker.ts",Banker);
        reg("script/CommonSlider.ts",CommonSlider);
        reg("script/Application/Game/BenzBmw/Player.ts",Player);
        reg("script/Application/Game/BenzBmw/Playerlist.ts",Playerlist);
        reg("script/Application/Game/BenzBmw/Roomselection.ts",Roomselection);
        reg("script/Application/Game/BenzBmw/Rule.ts",Rule);
        reg("script/Application/Game/BenzBmw/Setting.ts",Setting);
        reg("script/CommonCheck.ts",CommonCheck);
        reg("script/Application/Game/BenzBmw/Table.ts",Table);
        reg("script/Application/Game/Cow/CowCreateRoom.ts",CowCreateRoom);
        reg("script/CommonTabButtons.ts",CommonTabButtons);
        reg("script/CommonRadioGroup.ts",CommonRadioGroup);
        reg("script/CommonRadio.ts",CommonRadio);
        reg("script/Application/Game/Cow/CowLoading.ts",CowLoading);
        reg("script/Application/Game/Cow/CowRoomSelection.ts",CowRoomSelection);
        reg("script/Application/Game/Dice/DiceTable.ts",DiceTable);
        reg("script/Application/Game/FiftyK/FiftyCreateRoom.ts",FiftyCreateRoom);
        reg("script/Application/Game/FiftyK/FiveTenKloading.ts",FiveTenKloading);
        reg("script/Application/Game/FiftyK/FiveTenKSelection.ts",FiveTenKSelection);
        reg("script/Application/Game/FiveArching/FiveArchingCreateRoom.ts",FiveArchingCreateRoom);
        reg("script/Application/Game/FiveArching/FiveArchingselection.ts",FiveArchingselection);
        reg("script/Application/Game/Fruit/FruitLoading.ts",FruitLoading);
        reg("script/Application/Game/Fruit/FruitSelection.ts",FruitSelection);
        reg("script/Application/Game/Fruit/FruitTable.ts",FruitTable);
        reg("script/Application/Game/GoldenFlower/GoldenFlowerCreateRoom.ts",GoldenFlowerCreateRoom);
        reg("script/Application/Game/Landlord/LandlordCreateRoom.ts",LandlordCreateRoom);
        reg("script/Application/Game/Thanchicken/ThanchickenCreateroom.ts",ThanchickenCreateroom);
        reg("script/Application/Game/ThirteenBets/ThirteenBets.ts",ThirteenBets);
        reg("script/Application/Game/ThirteenBets/ThirteenBetsCreateroom.ts",ThirteenBetsCreateroom);
        reg("script/Application/Game/ThirteenBets/ThirteenBetsLoading.ts",ThirteenBetsLoading);
        reg("script/Application/Game/ThirteenBets/ThirteenBetsSelection.ts",ThirteenBetsSelection);
        reg("script/Application/Game/ThreeDuke/ThreeDuke.ts",ThreeDuke);
        reg("script/Application/Game/ThreeDuke/ThreeDukeCreateroom.ts",ThreeDukeCreateroom);
        reg("script/Application/Game/ThreeDuke/ThreeDukeLoading.ts",ThreeDukeLoading);
        reg("script/Application/Game/ThreeDuke/ThreeDukeSelection.ts",ThreeDukeSelection);
        reg("script/Application/Game/Twentyone/Twentyone.ts",Twentyone);
        reg("script/Application/Game/Twentyone/TwentyoneCreateroom.ts",TwentyoneCreateroom);
        reg("script/Application/Game/Twentyone/TwentyoneLoading.ts",TwentyoneLoading);
        reg("script/Application/Game/Twentyone/TwentyoneSelection.ts",TwentyoneSelection);
        reg("script/Application/Game/TwoEight/TwoEight.ts",TwoEight);
        reg("script/Application/Game/TwoEight/TwoEightCreateroom.ts",TwoEightCreateroom);
        reg("script/Application/Game/TwoEight/TwoEightLoading.ts",TwoEightLoading);
        reg("script/Application/Game/TwoEight/TwoEightSelection.ts",TwoEightSelection);
        reg("script/Application/Hall/AgentPromotion/AgentPromotion.ts",AgentPromotion);
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