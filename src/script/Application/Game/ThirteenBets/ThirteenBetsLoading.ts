import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class ThirteenBetsLoading extends ui.Games.ThirteenBets.ThirteenBetsloadingUI implements interFaces.Loading {
    constructor(){
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}