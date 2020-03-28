import TimeLine = Laya.TimeLine;
import Event = Laya.Event;
export default class PublicFun{
    constructor(){
        
    }
    private timeLine:TimeLine = new TimeLine();
    private static  instance:PublicFun;
    public static  getinstance():PublicFun{
        if(this.instance == null)
            this.instance = new PublicFun();
        return this.instance;
    }

    public showAlert(node:Laya.Sprite):void{
        let x = Laya.stage.width/2;
        let y = Laya.stage.height/2;
        node.visible = true;
        node.active = true;
        node.x = x;
        node.y = y;
        node.scaleX = 0;
        node.scaleY = 0;
        node.pivotX = node.width/2;
        node.pivotY = node.height/2;
        this.timeLine = new TimeLine()
        this.timeLine.addLabel("turnRight",0).to(node,{ scaleX:1.1, scaleY:1.1},200,null,0)
						// .addLabel("turnDown",0).to(node,{ scaleX:0.9, scaleY:0.9},200,null,0)
						.addLabel("turnLeft",0).to(node,{ scaleX:1, scaleY:1},100,null,0)
			this.timeLine.play(0,false);
			this.timeLine.on(Event.COMPLETE,this,this.onComplete);
			this.timeLine.on(Event.LABEL, this, this.onLabel);
    }
    public hideAlert(node:Laya.Sprite):void{
        this.timeLine = new TimeLine()
        this.timeLine.addLabel("turnRight",0).to(node,{ scaleX:1.1, scaleY:1.1},200,null,0)
        .addLabel("turnDown",0).to(node,{ scaleX:0, scaleY:0},200,null,0)
        this.timeLine.play(0,false);
        this.timeLine.on(Event.COMPLETE,this,()=>
        {
            node.active = false;
            node.visible = false;
        });
    }
    private onComplete():void
    {
        console.log("timeLine complete!!!!");
    }
    private onLabel(label:String):void
    {
        console.log("LabelName:" + label);
    }
}