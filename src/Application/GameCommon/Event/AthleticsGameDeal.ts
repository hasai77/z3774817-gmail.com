
import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../widget/UserPropList";
import Deal from "../widget/Deal";
namespace Common {
    module AthleticsGame {
        class AthleticsGameDeal_Common  extends Application.Game.GameEventModel{
            private ui:ui.GameAthleticsBull.BullGameUI;
            view(GameID:string,GameUserList:Array<Application.GameCommonModel.UserInfo>){
              
                let userList:UserPropList[] = [];
                for (let index = 0; index < this.ui.users.numChildren; index++) {
                    userList.push(<UserPropList>this.ui.users.getChildAt(index))
                }
                (<Deal>this.ui.deal_view).startDeal(userList,30)
            }
        }
    }
}
