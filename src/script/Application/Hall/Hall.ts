import { ui } from "../../../ui/layaMaxUI";
import Prop from "../Game/Common/Game/Prop"
import PropList from "../Game/Common/Game/PropList"
import ActionButton from "../../Button"
import Event = Laya.Event;
import Handler = Laya.Handler;
export default class Hall extends ui.HallUI{
    public card:Prop;
    public cardList:PropList;
    constructor(){
        super()
    }
    onAwake():void{
        this.card = <Prop>this.getChildByName("card");
       
        (<ActionButton>this.market).on(Event.CLICK,this,this.onClickButton);
        (<ActionButton>this.combat).on(Event.CLICK,this,this.onClickCombat);
        
    }
    private onClickButton():void{
    
    }
    private onClickCombat():void{
       
    }
}