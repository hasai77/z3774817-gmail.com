import { ui } from "../../../../ui/layaMaxUI";
import Event = Laya.Event;
export default class Announcement extends ui.Hall.Announcement.AnnouncementUI{
    constructor(){
        super();
       
    }
    onAwake(){
       
 
        this.close_btn.on(Event.CLICK,this,()=>{
            console.log("close")
        })
    }
    private hideAllGroup(){
        this.group_0.visible = false;
        this.group_1.visible = false;
        this.group_2.visible = false;
    }
 
}