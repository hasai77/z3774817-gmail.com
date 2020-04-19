import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class FiveArchingloading extends ui.Games.FiveArching.FiveArchingloadingUI implements interFaces.Loading {
    constructor(){
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}