import { ui } from "./../ui/layaMaxUI";
import base from "../base/base"

import Event = Laya.Event
export default class login extends ui.loginUI{
    private base:base = base.getinstance()
    constructor(){
        super()
        
    }
    onAwake():void{

        this.loginAlert.visible = false;
        this.login_change.on(Event.CLICK,this,this.changeHandler);
        this.chage_ok.on(Event.CLICK,this,function()
        {
            this.base.publicFun.hideAlert(this.loginAlert);
        })
        this.quikeStart.on(Event.CLICK,this,()=>{
            this.base.scene.changeScene("./lobbyScene.scene")
        })
    }
    private changeHandler(e:Event):void
    {
        this.base.publicFun.showAlert(this.loginAlert);
    }
}