import network from "./network"
import PublicFun from "./public"
import SceneManager from "./sceneManager"
export default class base{
    
    private static  instance:base;
    public static  getinstance():base{
        if(this.instance == null)
            this.instance = new base();
        return this.instance;
    }
    public netWork:network;
    public publicFun:PublicFun;
    public scene:SceneManager;
    constructor(){
        this.netWork = network.getinstance();
        this.publicFun = PublicFun.getinstance();
        this.scene = SceneManager.getinstance();
    }

}