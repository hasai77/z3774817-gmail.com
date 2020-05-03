import { ui } from "../../../ui/layaMaxUI";
import Event = Laya.Event;
import Skeleton = Laya.Skeleton;
import Handler = Laya.Handler
import Deal from "../../GameCommon/widget/Deal";
import UserPropList from "../../GameCommon/widget/UserPropList";
import TransAni from "../../GameCommon/widget/TransAni";
import base from "../../../base/base";
export default class BullGame extends ui.GameAthleticsBull.BullGameUI{
    constructor(){
        super();
    }
    onAwake(){
        let userList:UserPropList[] = [];
        for (let index = 0; index < this.users.numChildren; index++) {
            userList.push(<UserPropList>this.users.getChildAt(index))
        }
       
        this.deal_btn.on(Event.CLICK,this,()=>{
            (<Deal>this.deal_view).startDeal(userList,30)
        })
        this.ani_btn.on(Event.CLICK,this,()=>{
            (<TransAni>this.gameStatus_view).startBet();
        })
        this.back_btn.on(Event.CLICK,this,()=>{
            
            base.sceneManager.changeScene("Hall",new ui.APP_LoadingUI())
        })
        this.than_btn.on(Event.CLICK,this,()=>{
            for (let i = 0; i < userList.length; i++) {
                userList[i].showProp([])
                userList[i].showText("6666")
            }
        })
        
    }
    private parseComplete() {
        
    }
    private onError(){

    }
}