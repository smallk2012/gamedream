/**
 *
 * @author cC
 * @email oC_Co@qq.com
 * 
 */
class HP extends egret.Sprite {
    private textField:egret.TextField;
    public constructor() {
        super();
        this.createView();
    }
    private createView(): void {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.text = '100';
        this.textField.textColor = 0xff0000;
        let _self = this;
        egret.Tween.get(this.textField).to({ y: -50 }, 500).wait(200).call(function () {
            _self.parent.removeChild(_self);
        })
    }
    
}
