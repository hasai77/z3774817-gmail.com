import { ui } from "../../ui/layaMaxUI";
import CommonProgress from "../CommonProgress"
export default class APP_Update extends ui.APP_UpdateUI implements interFaces.Loading {
    constructor(){
        super();
    }

    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}