import { ui } from "../ui/layaMaxUI";
import CommonProgress from "../script/CommonProgress"
export default class APP_Loading extends ui.APP_LoadingUI implements interFaces.Loading {
    constructor(){
        super();
    }

    public setPercent(perc):void{
        (<CommonProgress>this.progress).percent = perc;
    }
}