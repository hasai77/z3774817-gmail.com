import { ui } from "../../../../ui/layaMaxUI";
 import Base from "../../../../base/base"
 import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class TransAni extends ui.GameCommonUI.Athletics.TansAniUI{
    constructor(){
        super()
    }
    onAwake(){

    }
    public doAction(image?){
        image&&this.setImage(image)
        Base.publicFun.setCenter(this.image);
        this.image.x = this.width + this.image.width/2;

        Tween.to(this.image,{x:this.width/2},300, null, Handler.create(this,()=>{
            Tween.to(this.image,{x:-this.image.width/2},300,null,Handler.create(this,()=>{
                this.removeSelf()
            }),1000)
        }));
    }
    public setImage(image):void{
        this.image.loadImage(image)
    }
}