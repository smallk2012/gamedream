class Global{
    private static _ins: Global;
    public static Ins(): Global {
        if (this._ins == null) {
            this._ins = new Global();
        }
        return this._ins;
    }
    public Global(): void {

    }
    public createBitmapByName(name: string):egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    public root:Main = null;
    public stageW: number = 1136;
    public stageH: number = 640;
    public gameW: number = 1136;
    public gameH: number = 640;
}