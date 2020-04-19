import { ui } from "../../../../ui/layaMaxUI";
import CommonProgress from "../../../CommonProgress"
export default class ThreeDukeLoading extends ui.Games.ThreeDuke.ThreeDukeloadingUI implements interFaces.Loading {
    constructor(){
        super();
    }
    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}