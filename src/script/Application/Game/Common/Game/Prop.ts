import { ui } from "../../../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import Tween = Laya.Tween;
import Button = Laya.Button;
export default  class Prop extends ui.Common.Game.PropUI{
    constructor(){
        super();
    }
    private Prop_Colour	:number;//道具颜色
    private Prop_Wild	:number;//道具万能牌
    private Prop_Number	:number;//道具数字
    private Prop_Sort	:number;//道具排序
    public prop_leftToRight(image){
        Tween.to(this.card,{scaleX:0},300, null, Handler.create(this,()=>{
            this.card.loadImage(image);
            Tween.to(this.card,{scaleX:1},300)
        }));
    }

   
    public prop_topToDown(image){
        Tween.to(this.card,{scaleY:0},300, null, Handler.create(this,()=>{
            this.card.loadImage(image);
            Tween.to(this.card,{scaleY:1},300)
        }));
    }

    public set colour(data){
        this.Prop_Colour= data
      }
      public set prop_Wild(data){
        this.Prop_Wild= data
      }
      public set prop_Number(data){
        this.Prop_Number= data
      }
      public set sort(data){
        this.Prop_Sort= data
      }
      public get colour(){
        return this.Prop_Colour
       }
       public get prop_Wild(){
        return this.Prop_Wild
       }
       public get prop_Number(){
        return this.Prop_Number
       }
       public get sort(){
        return this.Prop_Sort
       }
}