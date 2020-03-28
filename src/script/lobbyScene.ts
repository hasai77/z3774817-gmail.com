import { ui } from "./../ui/layaMaxUI";
import base from "../base/base"
import Event =  Laya.Event;
export default class LobbyScene extends ui.lobbySceneUI{
    private base:base = base.getinstance();
    constructor(){
        super();
    }
    onAwake(){
        this.startGame.on(Event.CLICK,this,()=>{
            this.base.scene.changeScene("./playScene.scene")
        })
       
    }
}