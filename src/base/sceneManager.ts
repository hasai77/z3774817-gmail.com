export default class SceneManager
{
    constructor(){

    }
    private sceneList:any[]=[];
    private static  instance:SceneManager;
    public static  getinstance():SceneManager{
        if(this.instance == null)
            this.instance = new SceneManager();
        return this.instance;
    }

    public rigesterScene(name):void{
        
    }
    public changeScene(name):void{
        Laya.Scene.open(name)
    }
}