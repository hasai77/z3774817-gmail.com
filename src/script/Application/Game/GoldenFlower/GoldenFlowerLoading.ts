import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class GoldenFlowerLoading extends ui.Games.GoldenFlower.GoldenFlowerLoadingUI implements interFaces.Loading {
    constructor(){
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}