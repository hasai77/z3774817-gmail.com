namespace Common {
    module AthleticsGame {
        import GameModel = Application.Game.GameModel;
        class AthleticsGameAddDeal_Common extends Application.Game.GameEventModel {
            public AthleticsGameAddDeal_Common(GameEventName: string, Game: GameModel) {
                this.GameEventEnter.AddEventListener((data) => {
                    console.log(data)
                })
            }
        }
    }
}
