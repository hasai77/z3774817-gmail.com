import { ui } from "../../../../../ui/layaMaxUI";

export default class BetButton extends Laya.Script{

     /** @prop {name: backRes, tips:"按钮背景图",type:string,accept:res} */
     backRes:string ="";
     /** @prop {name: btnText, tips:"按钮文字",type:string} */
     btnText:string ="";
    constructor(){
        super();
       
    }
    onAwake(){
        let btnBack = <Laya.Sprite>this.owner.getChildByName("btnBack");
        let btnText= <Laya.Text>this.owner.getChildByName("btnText");
        if(this.backRes)
        btnBack.loadImage(this.backRes)
        if(this.btnText)
        btnText.text = this.btnText;
    }
}