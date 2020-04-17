
import { ui } from "../../../../ui/layaMaxUI";
import Base from "../../../../base/base"
import CommonRadioGroup from ".././../../CommonRadioGroup"
import Event = Laya.Event;

export default class TexasCreateRoom  extends ui.Games.Texas.TexasCreateRoomUI {
    constructor() {
        super();
    }
    onAwake() {
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            for (let index = 0; index < this.radios.numChildren; index++) {
                let checkIndex = (<CommonRadioGroup>this.radios.getChildAt(index)).checkIndex;
                console.log(checkIndex)
            }
        })
    }
  
   
}