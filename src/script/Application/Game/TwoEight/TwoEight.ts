import { ui } from "../../../../ui/layaMaxUI";
import Base from "../../../../base/base"
import Event = Laya.Event;
export default class TwoEight extends ui.Games.TwoEight.TwoEightUI{
    constructor(){
        super();
    }
    private showIndex:number;
    onAwake(){
        Base.publicFun.selectionAdmission(this.btns_group);
        for (let index = 0; index < this.btns_group.numChildren; index++) {
            (<Laya.Sprite>this.btns_group.getChildAt(index)).on(Event.CLICK,this,()=>{
                console.log(index)
            })
            
        }
    }
    
}