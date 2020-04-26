import { ui } from "../../../../ui/layaMaxUI";
import Chip from "../Common/Game/Chip"
import Base from "../../../../base/base"
import FlutterText from "../../Game/Common/Game/FlutterText"
import Event = Laya.Event;
export default class GoldenFlowerGame extends ui.Games.GoldenFlower.GoldenFlowerGameUI {
    constructor() {
        super()
    }
    onAwake() {
        this.putChip_btn.on(Event.CLICK, this, () => {
            let user = this[`user_${Math.floor(Math.random() * 6)}`]
            this.userChip(user)
        })
        this.changeCoin_btn.on(Event.CLICK, this, () => {
            let user1 = this[`user_${Math.floor(Math.random() * 6)}`]
            let user2 = this[`user_${Math.floor(Math.random() * 6)}`]
            let rand = Math.floor(Math.random()*100)
            for(let i = 0;i<rand;i++){
                this.userChip(user1)
                
            }
            this.showText(user1, "-"+rand )
            setTimeout(() => {
                this.chipUser(user2)
                this.showText(user2,"+"+this.recv_panel.numChildren )
            }, 1000);
        })
        
    }
    public showText(user:Laya.Sprite,num:string):void{
        let text = new FlutterText(num);
        user.addChild(text);
        text.x = user.pivotX;
        text.y = user.pivotY;
        text.startAni()
    }
    public userChip(user:Laya.Sprite):void{
        let chip = new Chip();
        chip.x = user.x -this.recv_panel.x;
        chip.y = user.y-this.recv_panel.y;
        this.recv_panel.addChild(chip)
        chip.toTargerShow(Base.publicFun.getRecvPos(this.recv_panel), null) 
    }
    public chipUser(user:Laya.Sprite):void{
        let target = {x:user.x -this.recv_panel.x,y:user.y-this.recv_panel.y}
        for(let i = 0;i<this.recv_panel.numChildren;i++){
            (<Chip>this.recv_panel.getChildAt(i)).toTargerHide(target)
        }
    }
}