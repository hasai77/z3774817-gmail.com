
import Event = Laya.Event;
import Tween = Laya.Tween;
export default class ActionButton extends Laya.Sprite {
    constructor() {
        super()


        this.on(Event.MOUSE_DOWN, this, () => {
            Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, 100)
        })
        this.on(Event.MOUSE_UP, this, () => {
            Tween.to(this, { scaleX: 1, scaleY: 1 }, 100)
        })
        this.on(Event.MOUSE_OUT, this, () => {
            Tween.to(this, { scaleX: 1, scaleY: 1 }, 100)
        })
    }
    onAwake() {
        this.pivotX = this.width / 2;
        this.pivotY = this.height / 2;
   
        this.x += this.pivotX;
        this.y += this.pivotY;
    }
}