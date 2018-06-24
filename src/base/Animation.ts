class Animation extends egret.Sprite {

    public static SKILL: string = "skill";//技能
    public static IDLE: string = "idle";//待机
    public static ATTACK: string = "attack";//攻击
    public static MAGIC: string = "magic";//法术
    public static HIT: string = "hit";//被攻击
    public static DIE: string = "die";//死亡

    private bmp: egret.Bitmap = new egret.Bitmap();
    private aniType: string = "";
    private curFrame: number = 0;
    //动画状态
    public aniState: number = 0;
    public hitCount: number = 0;

    //动画组
    public ani = {
        skill: {
            name: "0235-7367af0f-000",
            frame: 42,
            attFrame: 39
        },
        idle: {
            name: "0241-a9b78cf6-000",
            frame: 7
        },
        attack: {
            name: "0130-57edea8e-000",
            frame: 11,
            attFrame: 5
        },
        magic: {
            name: "0084-3c9b8403-000",
            frame: 13,
            attFrame: 5
        },
        hit: {
            name: "0222-9e9c0cea-000",
            frame: 2
        },
        die: {
            name: "0272-bfd770e7-000",
            frame: 8
        }
    }
    public oX: number = 0;//目标坐标x
    public oY: number = 0;//目标坐标y
    public mX: number = 0;//目标坐标x
    public mY: number = 0;//目标坐标y
    public hX: number = 0;//目标坐标x
    public hY: number = 0;//目标坐标y

    public hp:number = 1000;

    private skill: SkillAni;

    public constructor() {
        super();
        this.init();
    }
    private init(): void {
        this.addChild(this.bmp);
        this.skill = new SkillAni();
        this.addChild(this.skill);
        this.skill.attFrame = this.ani[Animation.SKILL].attFrame;
        this.skill.aniFrame = this.ani[Animation.SKILL].frame;
        this.skill.aniName = this.ani[Animation.SKILL].name;
        this.skill.addEventListener(AniEvent.CHANGE_ANI, this.skillEvt, this);
    }
    private skillEvt(e: egret.Event): void {

        switch (e.data.aniType) {
            case Animation.HIT:
                this.setAni(Animation.HIT);
                break;
            case Animation.IDLE:
                this.setAni(Animation.IDLE);
                this.dispatchEventWith(AniEvent.GAME_END, false, { myself: false });
                break;
        }
    }
    /**
     * 设置动画
     */
    public setAni(fAniType: string): void {
        if (fAniType == Animation.SKILL) {
            this.skill.show();
        }
        else {
            this.x = this.oX;
            this.y = this.oY;
            this.curFrame = 0;
            this.aniType = fAniType;

            if (Animation.HIT == fAniType) {
                let _hp: HP = new HP();
                _hp.y = - this.bmp.height;
                this.addChild(_hp);
                this.hp -= 100;
                this.hp = this.hp < 0 ? 0 :this.hp;
            }
        }
    }
    /**
     * 动画执行器
     */
    public runAni(): void {
        if (this.skill.visible) {
            this.skill.runAni();
        }
        if (this.curFrame >= this.ani[this.aniType].frame) {
            switch (this.aniType) {
                case Animation.IDLE:
                    //待机动画完毕
                    //动画状态1为物理攻击，并移动到目标位置
                    //动画状态2为法术攻击，不需要移动位置
                    this.curFrame = 0;
                    switch (this.aniState) {
                        case 1:
                            this.x = this.mX;
                            this.y = this.mY;
                            this.aniType = Animation.ATTACK;
                            break;
                        case 2:
                            this.aniType = Animation.MAGIC;
                            break;
                        default:
                            this.aniType = Animation.IDLE;
                            break;
                    }
                    this.aniState = 0;
                    break;
                case Animation.ATTACK:
                    this.hitCount--;
                    this.curFrame = 0;
                    this.dispatchEventWith(AniEvent.CHANGE_ANI, false, { aniType: Animation.IDLE });
                    //攻击完毕了，就播放待机动画，并移动到开始位置
                    if (this.hitCount <= 0) {
                        this.hitCount = 0;
                        this.aniType = Animation.IDLE;
                        this.x = this.oX;
                        this.y = this.oY;
                        this.dispatchEventWith(AniEvent.GAME_END, false, { myself: true });
                    }
                    break;
                case Animation.MAGIC:
                    this.curFrame = 0;
                    this.aniType = Animation.IDLE;
                    break;
                case Animation.HIT:
                    //被打动画由来源目标控制
                    break;
                case Animation.DIE:
                    //死亡动画由来源目标控制
                    break;
            }
        }
        if (this.curFrame < this.ani[this.aniType].frame) {
            var _aniName: string = this.ani[this.aniType].name + (this.curFrame < 10 ? ('0' + this.curFrame) : this.curFrame) + "_png";
            var _texture: egret.Texture = RES.getRes(_aniName);
            this.bmp.texture = _texture;
            this.bmp.anchorOffsetX = this.bmp.width / 2;
            this.bmp.anchorOffsetY = this.bmp.height;

            switch (this.aniType) {
                case Animation.ATTACK:
                    if (this.curFrame == this.ani[this.aniType].attFrame) {
                        this.dispatchEventWith(AniEvent.CHANGE_ANI, false, { aniType: Animation.ATTACK });
                    }
                    break;
                case Animation.MAGIC:
                    if (this.curFrame == this.ani[this.aniType].attFrame) {
                        this.dispatchEventWith(AniEvent.CHANGE_ANI, false, { aniType: Animation.MAGIC });
                    }
                    break;
                case Animation.HIT:
                    this.x = this.hX;
                    this.y = this.hY;
                    break;
            }

            this.curFrame++;
        }
    }

}
