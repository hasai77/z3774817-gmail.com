import Base from "../base/base"
export default class CommonProgress extends Laya.Sprite{
    constructor(){
        super()
    }
    private m_percent:number = 0;
    private bar:Laya.Image;
    private imgmask:Laya.Sprite;
    private icon:Laya.Sprite;
    public get percent():number{
        return this.m_percent;
    }
    public set percent(perc){
        this.m_percent = perc>100?100:perc;
        this.imgmask.width = this.width / 100 * this.m_percent;
        this.icon.x = this.imgmask.width
    }
    onAwake(){
        this.bar = <Laya.Image>this.getChildByName("bar");
        this.icon = <Laya.Image>this.getChildByName("icon");
        Base.getinstance().publicFun.setCenter(this.icon)
        this.imgmask  = this.bar.mask ;
        
        this.on(Laya.Event.MOUSE_DOWN,this,(e)=>{
            this.imgmask.width = e.target.mouseX;
            this.icon.x = e.target.mouseX;
            this.m_percent = e.target.mouseX / this.width *100;
        })
        this.on(Laya.Event.MOUSE_MOVE,this,(e)=>{
            this.imgmask.width = e.target.mouseX;
            this.icon.x = e.target.mouseX;
            this.m_percent = e.target.mouseX / this.width *100;
        })

        this.percent = 50;
    }
}