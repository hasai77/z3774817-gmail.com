import { ui } from "../../../ui/layaMaxUI";
import Handler = Laya.Handler;
import Event = Laya.Event;
export default class CommonCreatRoom extends ui.GameCommonUI.CommonCreatRoomUI {
    constructor() {
        super()
    }
    onAwake() {
        this.tabButtons_list.renderHandler = new Handler(this, this.updateItem);
        this.tabButtons_list.selectHandler = new Handler(this, this.onSelect,null,false);
    }
    private setArray(list): void {
        this.tabButtons_list.array = list;
    }
    private updateItem(cell: Laya.Box, index: number): void {
        let selected = <Laya.Sprite>cell.getChildByName("selected");
        let unselect = <Laya.Sprite>cell.getChildByName("unselect");
        let selected_text = <Laya.Text>cell.getChildByName("selected_text");
        let unselect_text = <Laya.Text>cell.getChildByName("unselect_text");
        selected_text.text =  this.tabButtons_list.array[index].name;
        unselect_text.text =  this.tabButtons_list.array[index].name;
       
    }
    private onSelect(index: number): void {
        console.log("当前选择的索引：" + index);
        // let selected = <Laya.Sprite>cell.getChildByName("selected");
        // let unselect = <Laya.Sprite>cell.getChildByName("unselect");
        // let selected_text = <Laya.Text>cell.getChildByName("selected_text");
        // let unselect_text = <Laya.Text>cell.getChildByName("unselect_text");
        // for (let i = 0; i < this.tabButtons_list.numChildren; i++) {
        //     let isShow = (index == i)
        //     selected.visible = isShow;
        //     selected_text.visible = isShow;
        //     unselect.visible = !isShow;
        //     unselect_text.visible = !isShow;
        // }
    }
}