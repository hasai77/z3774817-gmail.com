import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class TexasLoading extends ui.Games.Texas.TexasLoadingUI implements interFaces.Loading {
    constructor(){
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}