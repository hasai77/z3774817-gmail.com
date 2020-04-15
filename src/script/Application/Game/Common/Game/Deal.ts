import { ui } from "../../../../../ui/layaMaxUI";
import Prop from "./Prop"
import User from "./User"
import Base from "../../../../../base/base"
import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class Deal extends ui.Common.Game.DealUI{
    constructor(){
        super()
    }

    public startDeal(userList:User[],total):void{
        let leng = userList.length;
        let index = 0;
        Laya.timer.loop(300, this, this.loopFun,[userList,index,leng,total]);
    }
    private loopFun(userList,index,leng,total):void{
        let card = new Prop();
        let user = userList[index%leng]
        card.prop_Number = 0;
        this.addChild(card)
        Base.publicFun.setCenter(card);
        this.dealToUser(card,user);
        (++index>total)&& Laya.timer.clear(this,this.loopFun)
    }
    private dealToUser(card:Prop,user:User,speed:number = 300):void{
        let pos = user.curtDealPos()
        Tween.to(card,{x:pos.x,y:pos.y},speed, null, Handler.create(this,()=>{
            user.recvCard(card.prop_Number)
            card.removeSelf()
        }));
    }
}