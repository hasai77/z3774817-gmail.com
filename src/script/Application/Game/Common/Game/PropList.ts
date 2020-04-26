import { ui } from "../../../../../ui/layaMaxUI";
import Prop from "./Prop"
export default class PropList extends ui.GameCommonUI.Athletics.PropListUI {
    constructor() {
        super()
    }
    private PropList_Mark: string;//牌型类型标识
    private PropList_Name: string;//牌型类型名称
    private propIndex: number = 0;
    private currentDeal:number = 0;
    onAwake(): void {

    }

    public get curDealPos():Laya.Point{
        let curCard:Prop = this[`card_${this.currentDeal}`]
        return curCard.localToGlobal(new Laya.Point(curCard.x,curCard.y));
    }
    public propCard(list) {
        //暂时不知道数据格式
        this.propIndex = 0;
        Laya.timer.loop(300, this, this.animateTimeBased);
    }
    public recvCard(number:number):void{
        this[`card_${this.currentDeal}`].active = true;
        this[`card_${this.currentDeal}`].texture = number;
        this.currentDeal++
    }
    private animateTimeBased(): void {
        this[`card_${this.propIndex}`].prop_leftToRight("pockCard/20.png");
        this.propIndex++;
        if (this.propIndex > 4)
            Laya.timer.clear(this, this.animateTimeBased)
    }
    public set propList_Mark(data) {
        this.PropList_Mark = data
    }
    public set propList_Name(data) {
        this.PropList_Name = data
    }
    public get propList_Mark() {
        return this.PropList_Mark
    }
    public get propList_Name() {
        return this.PropList_Name
    }
}