import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class CowLoading extends ui.Games.Cow.CowLoadingUI {
    constructor(){
        super();
    }

    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}