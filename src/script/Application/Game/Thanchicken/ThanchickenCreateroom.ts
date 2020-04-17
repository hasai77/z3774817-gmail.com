import CommonTabButtons from "../../../CommonTabButtons"
import { ui } from "../../../../ui/layaMaxUI";
import Base from "../../../../base/base"
import CommonRadioGroup from ".././../../CommonRadioGroup"
import Event = Laya.Event;

export default class ThanchickenCreateroom extends ui.Games.Thanchicken.ThanchickenCreateroomUI {
    constructor() {
        super();
    }
    onAwake() {
        (<CommonTabButtons>this.tabButtons).changeHandle = (index) => {
          
        }
        this.check_1.changeHandle = (check)=>{
            console.log(check)
        }
        this.check_2.changeHandle = (check)=>{
            console.log(check)
        }
        this.close_btn.on(Event.CLICK,this,()=>{
            Base.publicFun.hideAlert(this,()=>{this.removeSelf()})
        })
        this.confirm_btn.on(Event.CLICK,this,()=>{
            for (let index = 0; index < this.radios.numChildren; index++) {
                let checkIndex = (<CommonRadioGroup>this.radios.getChildAt(index)).checkIndex;
                console.log(checkIndex)
            }
            console.log(this.check_1.checked)
            console.log(this.check_2.checked)
        })
    }
  
   
}