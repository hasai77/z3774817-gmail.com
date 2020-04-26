import { ui } from "../../../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import Tween = Laya.Tween;
export default class Chip extends ui.GameCommonUI.Athletics.ChipUI {
    constructor() {
        super()
    }
    public toTargerShow(target) {
        Tween.to(this.gold, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
            Tween.to(this.gold, { scaleX: 1.1, scaleY: 1.1 }, 300, null, Handler.create(this, () => {
                Tween.to(this.gold, { scaleX: 1, scaleY: 1 }, 300)
            }));
        }));
    }
    public toTargerHide(target) {
        Tween.to(this.gold, { x: target.x, y: target.y }, 300, null, Handler.create(this, () => {
           this.removeSelf()
        }));
    }
   
}