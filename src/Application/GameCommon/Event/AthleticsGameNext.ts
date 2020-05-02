import { ui } from "../../../ui/layaMaxUI";
import UserPropList from "../widget/UserPropList";
namespace Common {
    module AthleticsGame {
        class AthleticsGameNext_Common  extends Application.Game.GameEventModel{
            private ui: ui.GameAthleticsBull.BullGameUI;
            view(GameID: string, GameUserList: Array<Application.GameCommonModel.UserInfo>, Current) {
                for (let i = 0; i < this.ui.users.numChildren; i++) {
                    let user = <UserPropList>this.ui.users.getChildAt(i);
                    user.Init();
                }
              
            }

        }
    }
}
