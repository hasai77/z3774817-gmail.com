namespace Application {
    export module Game {
        export class GameModel {
            //游戏名称
            private GameName: string;
            //游戏房间号
            private GameRoomNumber:string;
            //游戏玩法
            private GamePlaying: number;
            //游戏最大人数
            private GameMaxUserCount: number;
            //游戏最小人数
            private GameMinUserCount: number;
            //游戏当前局
            private GameCurrentInning: number;
            //游戏最大局数
            private GameMaxInning: number;
            //用户列表
            private GameUserList: number;
            //最大下注
            private GameMaxBet: number;
            //最小下注
            private GameMinBet: number;
            //底分
            private GameBaseScore: number;

        }
    }
}