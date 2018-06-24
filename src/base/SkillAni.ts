class SkillAni extends egret.Sprite {


    private bmp: egret.Bitmap = new egret.Bitmap();
    public aniFrame: number = 0;
    public attFrame:number = 0;
    private curFrame: number = 0;
    public aniName: string = '';

    public constructor() {
        super();
        this.init();
    }
    private init(): void {
        this.visible = false;
        this.addChild(this.bmp);
    }
    /**
     * 设置动画
     */
    public show(): void {
        this.curFrame = 0;
        this.visible = true;
        this.runAni();
    }
    /**
     * 动画执行器
     */
    public runAni(): void {
        if (this.curFrame >= this.aniFrame) {
            this.dispatchEventWith(AniEvent.CHANGE_ANI, false, { aniType: Animation.IDLE });
            this.visible = false;
        }
        if (this.curFrame < this.aniFrame) {
            var _aniName: string = this.aniName + (this.curFrame < 10 ? ('0' + this.curFrame) : this.curFrame) + "_png";
            var _texture: egret.Texture = RES.getRes(_aniName);
            this.bmp.texture = _texture;
            this.bmp.anchorOffsetX = this.bmp.width / 2;
            this.bmp.anchorOffsetY = this.bmp.height;
            console.log(this.attFrame)
            if (this.curFrame == this.attFrame) {
                this.dispatchEventWith(AniEvent.CHANGE_ANI, false, { aniType: Animation.HIT });
            }
            this.curFrame++;
        }
    }

}
