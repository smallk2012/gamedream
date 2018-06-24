/**
 *
 * @author cC
 * @email oC_Co@qq.com
 * 
 */
class Btn extends egret.Sprite {
    public tag:Number = -1;
    public constructor() {
        super();
        this.createView();
    }
    private createView(): void {
        this.touchEnabled = true;
    }
    public init(i) {
        var _btn: egret.Bitmap = Global.Ins().createBitmapByName('pk' + i + '_png');
        this.addChild(_btn);
        this.width = _btn.width;
        this.height = _btn.height;
    }
}
