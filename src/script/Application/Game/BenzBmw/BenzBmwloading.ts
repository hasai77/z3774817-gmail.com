import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default  class BenzBmwloading extends ui.Games.BenzBmw.BenzBmwloadingUI {
    constructor() {
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}