import { ui } from "../../../ui/layaMaxUI";
import base from "../../../base/base";
import ActionButton from "../../Button"
var resList = {
    Thanchicken: [
        "Thanchicken/GameType/AlternateBankerThanChicken.png",
        "Thanchicken/GameType/RobThanThanChicken.png",
        "Thanchicken/GameType/ThanThanChicken (2).png",
    ],
    ThirteenBets: [
        "ThirteenBets/GameType/ThanThirteenBets (2).png",
        "ThirteenBets/GameType/RobThanThirteenBets.png",
        "ThirteenBets/GameType/AlternateBankerThirteenBets (2).png",
    ],
    ThreeDuke: [
        "ThreeDuke/GameType/ThanThreeDuke (2).png",
        "ThreeDuke/GameType/ScoreBankThreeDuke (2).png",
        "ThreeDuke/GameType/RobThanThreeDuke (2).png",
        "ThreeDuke/GameType/NoScoreBankerThreeDuke (2).png",
        "ThreeDuke/GameType/AlternateBankerThreeDuke (2).png"
    ],
    TwentyOne: [
        "Twentyone/GameType/ThanTwentyOne (2).png",
        "Twentyone/GameType/ScoreBankTwentyOne (2).png",
        "Twentyone/GameType/RobThanTwentyOne (2).png",
        "Twentyone/GameType/NoScoreBankerTwentyOne (2).png",
        "Twentyone/GameType/AlternateBankerTwentyOne (2).png",
    ],
    TwoEight: [
        "TwoEight/GameType/AlternateBankerTwoEight.png",
        "TwoEight/GameType/NoScoreBankerTwoEight.png",
        "TwoEight/GameType/RobThanTwoEight.png",
        "TwoEight/GameType/ScoreBankTwoEight.png",
        "TwoEight/GameType/ThanTwoEight.png",
    ]
}
export default class CommonGameTypeSelection extends ui.GameCommonUI.CommonGameTypeSelectionUI {
    constructor() {
        super()
    }
    private clickHandle: any;
    private list: any;
    onAwake() {
        // this.setImages(resList.TwoEight,(e) => {
        //     console.log(e)
        // })
        base.publicFun.selectionAdmission(this);
    }
    public setImages(list: any, clickHandle: any) {
        let width = this.width / list.length;

        for (let i = 0; i < list.length; i++) {
            let sprite = new Laya.Sprite();
            this.addChild(sprite);
            sprite.height = this.height;
            sprite.width = width;

            sprite.y = 0;
            sprite.x = width * i;

            let button = new ActionButton(list[i]);
            button.visible = false;
            sprite.addChild(button);
            Laya.timer.once(200, this, () => {
                base.publicFun.setCenter(button)
                button.x = sprite.width / 2;
                button.y = sprite.height / 2;
                button.visible = true;
            })

            button.on(Laya.Event.CLICK, this, () => {
                clickHandle(i)
            })
           
        }
    }
}