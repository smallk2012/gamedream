//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.seziState = 0;
        _this.seziAniNum = 0;
        _this.btns = [];
        _this.skills = [];
        _this.speed = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var _bg = Global.Ins().createBitmapByName("bg_game_jpg");
        this.addChild(_bg);
        var _ani1 = {
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
        };
        var _ani2 = {
            skill: {
                name: "0235-7367af0f-000",
                frame: 42,
                attFrame: 39
            },
            idle: {
                name: "0241-a9b78cf6-020",
                frame: 7
            },
            attack: {
                name: "0130-57edea8e-020",
                frame: 11,
                attFrame: 5
            },
            magic: {
                name: "0084-3c9b8403-020",
                frame: 13,
                attFrame: 5
            },
            hit: {
                name: "0222-9e9c0cea-020",
                frame: 2
            },
            die: {
                name: "0272-bfd770e7-020",
                frame: 8
            }
        };
        this.role1 = new Animation();
        this.addChild(this.role1);
        this.role1.x = this.role1.oX = 328;
        this.role1.y = this.role1.oY = 234;
        this.role1.ani = _ani1;
        this.role1.setAni(Animation.IDLE);
        this.role1.runAni();
        this.role1.mX = 778;
        this.role1.mY = 404;
        this.role1.hX = this.role1.oX - 10;
        this.role1.hY = this.role1.oY - 10;
        this.role1.aniState = 0;
        this.role1.hitCount = 0;
        this.role1.addEventListener(AniEvent.CHANGE_ANI, this.attackEvt, this);
        this.role1.addEventListener(AniEvent.GAME_END, this.gameEvt, this);
        this.role2 = new Animation();
        this.addChild(this.role2);
        this.role2.x = this.role2.oX = 838;
        this.role2.y = this.role2.oY = 440;
        this.role2.ani = _ani2;
        this.role2.setAni(Animation.IDLE);
        this.role2.runAni();
        this.role2.mX = 398;
        this.role2.mY = 270;
        this.role2.hX = this.role2.oX + 10;
        this.role2.hY = this.role2.oY + 10;
        this.role2.aniState = 0;
        this.role2.hitCount = 0;
        this.role2.addEventListener(AniEvent.CHANGE_ANI, this.attackEvt, this);
        this.role2.addEventListener(AniEvent.GAME_END, this.gameEvt, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrameEvt, this);
        for (var i = 1; i <= 3; i++) {
            var _btn = new Btn();
            this.addChild(_btn);
            _btn.init(i);
            _btn.tag = i - 1;
            _btn.y = 180 + ((33 + 20) * (i - 1));
            _btn.x = Math.floor((Global.Ins().stageW - 100) / 2);
            _btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.seziEvt, this);
            this.btns.push(_btn);
        }
        this.hp1 = new egret.TextField();
        this.addChild(this.hp1);
        this.hp1.text = '1000';
        this.hp1.textColor = 0xff0000;
        this.hp1.x = 0;
        this.hp2 = new egret.TextField();
        this.addChild(this.hp2);
        this.hp2.text = '1000';
        this.hp2.textColor = 0xff0000;
        this.hp2.x = this.stage.stageWidth - 100;
        this.tip = new egret.TextField();
        this.addChild(this.tip);
        this.tip.text = '';
        this.tip.textColor = 0xff0000;
        this.tip.x = (this.stage.stageWidth / 2) - 100;
        this.tip.y = 300;
        this.tip.visible = false;
        this.tip.touchEnabled = true;
        this.tip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipEvt, this);
    };
    Main.prototype.onFrameEvt = function (e) {
        if (Math.floor(this.speed % 5) == 0) {
            this.role1.runAni();
            this.role2.runAni();
        }
        this.speed = this.speed >= 100000 ? 0 : this.speed + 1;
    };
    Main.prototype.attackEvt = function (e) {
        switch (e.data.aniType) {
            case Animation.ATTACK:
                switch (this.seziState) {
                    case 1:
                        this.role2.setAni(Animation.HIT);
                        break;
                    case 2:
                        this.role1.setAni(Animation.HIT);
                        break;
                }
                break;
            case Animation.MAGIC:
                switch (this.seziState) {
                    case 1:
                        this.role2.setAni(Animation.SKILL);
                        break;
                    case 2:
                        this.role1.setAni(Animation.SKILL);
                        break;
                }
                break;
            case Animation.IDLE:
                switch (this.seziState) {
                    case 1:
                        this.role2.setAni(Animation.IDLE);
                        break;
                    case 2:
                        this.role1.setAni(Animation.IDLE);
                        break;
                }
                break;
        }
    };
    Main.prototype.gameEvt = function (e) {
        this.hp1.text = this.role1.hp.toString();
        this.hp2.text = this.role2.hp.toString();
        if (this.role1.hp <= 0 || this.role2.hp <= 0) {
            this.tip.visible = true;
            this.tip.text = this.role1.hp <= 0 ? "您赢了，点击继续开始" : "您输了，点击继续开始";
        }
        else {
            if (e.data.myself) {
                for (var i = 0; i < this.btns.length; i++) {
                    this.btns[i].visible = true;
                }
            }
            else {
                switch (this.seziState) {
                    case 1:
                        this.role1.hitCount--;
                        if (this.role1.hitCount > 0) {
                            this.role1.setAni(Animation.MAGIC);
                        }
                        else {
                            for (var i = 0; i < this.btns.length; i++) {
                                this.btns[i].visible = true;
                            }
                        }
                        break;
                    case 2:
                        this.role2.hitCount--;
                        if (this.role2.hitCount > 0) {
                            this.role2.setAni(Animation.MAGIC);
                        }
                        else {
                            for (var i = 0; i < this.btns.length; i++) {
                                this.btns[i].visible = true;
                            }
                        }
                        break;
                }
            }
        }
    };
    Main.prototype.onTipEvt = function (e) {
        this.tip.visible = false;
        this.role1.hp = 1000;
        this.role2.hp = 1000;
        this.hp1.text = this.role1.hp.toString();
        this.hp2.text = this.role2.hp.toString();
        for (var i = 0; i < this.btns.length; i++) {
            this.btns[i].visible = true;
        }
    };
    Main.prototype.seziEvt = function (e) {
        for (var i = 0; i < this.btns.length; i++) {
            this.btns[i].visible = false;
        }
        var rd = Math.floor(Math.random() * 3);
        var pk = ["chuitou", "jiandao", "bu"];
        var self = this;
        self.seziAniNum = 2;
        var _npc = Global.Ins().createBitmapByName(pk[rd] + '_png');
        this.addChild(_npc);
        _npc.x = -_npc.width;
        _npc.y = 300;
        var _user = Global.Ins().createBitmapByName(pk[e.target.tag] + '_png');
        this.addChild(_user);
        _user.x = Global.Ins().stageW;
        _user.y = 300;
        _user.skewY = 180;
        if (rd == e.target.tag) {
            this.seziState = 0;
        }
        else {
            switch (e.target.tag) {
                case 0:
                    this.seziState = rd == 1 ? 2 : 1;
                    break;
                case 1:
                    this.seziState = rd == 2 ? 2 : 1;
                    break;
                case 2:
                    this.seziState = rd == 0 ? 2 : 1;
                    break;
            }
        }
        egret.Tween.get(_npc).to({ x: Math.floor(Global.Ins().stageW / 2) - 30 - _npc.width }, 500).wait(1000).to({ alpha: 0, x: -_npc.width }, 500).call(function () {
            self.removeChild(_npc);
            self.seziOver();
        });
        egret.Tween.get(_user).to({ x: Math.floor(Global.Ins().stageW / 2) + 30 + _user.width }, 500).wait(1000).to({ alpha: 0, x: Global.Ins().stageW }, 500).call(function () {
            self.removeChild(_user);
            self.seziOver();
        });
    };
    Main.prototype.seziOver = function () {
        this.seziAniNum--;
        if (this.seziAniNum <= 0) {
            switch (this.seziState) {
                case 0:
                    for (var i = 0; i < this.btns.length; i++) {
                        this.btns[i].visible = true;
                    }
                    break;
                case 1:
                    this.role1.aniState = Math.floor(Math.random() * 2) + 1;
                    this.role1.hitCount = Math.floor(Math.random() * 2) + 1;
                    break;
                case 2:
                    this.role2.aniState = Math.floor(Math.random() * 2) + 1;
                    this.role2.hitCount = Math.floor(Math.random() * 2) + 1;
                    break;
            }
        }
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
