import { ui } from "../../../../ui/layaMaxUI";
import Event = Laya.Event;
export default class FruitSelection extends ui.Games.Fruit.FruitSelectionUI{
    constructor(){
        super();
    }
    private showIndex:number;
    onAwake(){
        for (let index = 0; index < this.btns_group.numChildren; index++) {
            (<Laya.Sprite>this.btns_group.getChildAt(index)).on(Event.CLICK,this,()=>{
                console.log(index)
            })
            
        }
    }
    
}