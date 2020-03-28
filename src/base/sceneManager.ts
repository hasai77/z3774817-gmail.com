export default class SceneManager
{
    constructor(){

    }
    private static  instance:SceneManager;
    public static  getinstance():SceneManager{
        if(this.instance == null)
            this.instance = new SceneManager();
        return this.instance;
    }
    public changeScene(name):void{
        Laya.Scene.open(name)
    }
}