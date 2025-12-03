(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x50_atlas_1", frames: [[720,132,43,42],[0,0,668,105],[670,132,48,45],[670,0,104,88],[864,95,39,42],[776,0,87,93],[462,433,379,71],[794,95,68,48],[0,107,668,105],[0,321,549,110],[0,433,460,66],[0,214,668,105],[670,95,122,35],[551,321,436,58]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.f1alert = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1bg = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1faceicon = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1profile = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1scan = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f1wallet = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.f3button = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1alert();
	this.instance.setTransform(11,11,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(11,11,20.7,20.2), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,668,105), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f3button();
	this.instance.setTransform(4,1,0.4387,0.4387);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(4,1,53.5,15.399999999999999), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f3logo();
	this.instance.setTransform(18,2,0.4777,0.4777);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(18,2,208.3,27.7), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f3bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,668,105), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f2text();
	this.instance.setTransform(0,0,0.4774,0.4774);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,219.6,31.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f2frame();
	this.instance.setTransform(4,6,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(4,6,263.5,52.8), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f2bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,668,105), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1faceicon();
	this.instance.setTransform(0,0,0.4816,0.4816);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,23.1,21.7), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1hand();
	this.instance.setTransform(0,0,0.4832,0.4832);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,50.3,42.5), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1wallet();
	this.instance.setTransform(-59,20,0.4772,0.4772);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-59,20,32.5,22.9), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1profile();
	this.instance.setTransform(-50,-8,0.4778,0.4778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-50,-8,18.7,20.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1scan();
	this.instance.setTransform(0,0,0.4863,0.4863);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,45.3);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.f1text();
	this.instance.setTransform(0,0,0.4833,0.4833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,183.2,34.3), null);


// stage content:
(lib._320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_13
	this.instance = new lib.Symbol14();
	this.instance.setTransform(305,33.25,1,1,0,0,0,58,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regX:30.8,regY:8.7,x:277.8,y:24.95,alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(93));

	// Layer_4
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(208,32.9,1,1,0,0,0,211,26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).wait(1).to({regX:122.1,regY:15.9,x:119.1,y:22.8,alpha:0.0712},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.2125},0).wait(1).to({alpha:0.2825},0).wait(1).to({alpha:0.3521},0).wait(1).to({alpha:0.4213},0).wait(1).to({alpha:0.4902},0).wait(1).to({alpha:0.5586},0).wait(1).to({alpha:0.6266},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.7615},0).wait(1).to({alpha:0.8283},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9608},0).wait(1).to({y:22.75,alpha:1},0).wait(4).to({y:22.7},0).wait(4).to({y:22.65},0).wait(4).to({y:22.7},0).wait(1).to({y:22.75},0).wait(1).to({y:22.8},0).wait(91));

	// Layer_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(173.3,20.45,0.48,0.48,0,0,0,361.2,43.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).wait(1).to({regX:334,regY:52.5,x:160.25,y:24.95},0).wait(119));

	// Layer_11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(248,39,1,1,0,0,0,204,29.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).wait(1).to({regX:109.8,regY:15.8,x:153.8,y:25.3,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(45).to({_off:true},1).wait(120));

	// Layer_10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(272,133,1,1,0,0,0,253,47);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(1).to({regX:135.8,regY:32.4,x:154.8,y:108.45,alpha:0.1754},0).wait(1).to({y:98.65,alpha:0.3447},0).wait(1).to({y:88.95,alpha:0.5081},0).wait(1).to({y:79.3,alpha:0.6658},0).wait(1).to({y:69.8,alpha:0.8179},0).wait(1).to({y:60.35,alpha:0.9645},0).wait(1).to({y:51,alpha:1},0).wait(1).to({y:41.8},0).wait(1).to({y:32.65},0).wait(1).to({y:25.4},0).wait(58).to({_off:true},1).wait(120));

	// hand
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(376.85,60.05,1,1,14.9983,0,0,49.5,36.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:25.1,regY:21.3,rotation:13.6354,x:351.85,y:35.55},0).wait(1).to({rotation:12.2718,x:346.7,y:32.5},0).wait(1).to({rotation:10.9083,x:341.75,y:29.55},0).wait(1).to({rotation:9.5448,x:337,y:27},0).wait(1).to({rotation:8.1812,x:332.3,y:24.95},0).wait(1).to({rotation:6.8177,x:327.5,y:23.65},0).wait(1).to({rotation:5.4541,x:322.65,y:23.15},0).wait(1).to({rotation:4.0906,x:317.5,y:23.65},0).wait(1).to({rotation:2.7271,x:311.95,y:25.45},0).wait(1).to({rotation:1.3635,x:306.1,y:28.6},0).wait(1).to({rotation:0,x:299.65,y:33.3},0).wait(29).to({_off:true},1).wait(189));

	// faceicon
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(284.65,28.05,0.599,0.599,0,0,0,20.8,19.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(1).to({regX:11.6,regY:10.8,scaleX:0.7481,scaleY:0.7481,x:277.75,y:21.65,alpha:0.25},0).wait(1).to({scaleX:0.8938,scaleY:0.8938,x:276.4,y:20.35,alpha:0.5},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,x:275.55,y:19.5,alpha:0.75},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,x:275.95,y:19.9,alpha:1},0).wait(1).to({scaleX:0.9016,scaleY:0.9016,x:276.35,y:20.3},0).wait(1).to({scaleX:0.8591,scaleY:0.8591,x:276.7,y:20.65},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,x:277.15,y:21},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,x:277.2,y:21.05},0).wait(22).to({_off:true},1).wait(189));

	// Layer_1
	this.instance_7 = new lib.Symbol18();
	this.instance_7.setTransform(219.2,32.7,1,1,0,0,0,21.5,21);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(23).to({_off:false},0).wait(1).to({regX:21.3,regY:21.1,x:219,y:32.8,alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// wallet
	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(278.1,36.25,1,1,0,0,0,41,29.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).wait(1).to({regX:-42.8,regY:31.5,x:194.3,y:38.2,alpha:0.1147},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.3399},0).wait(1).to({alpha:0.4505},0).wait(1).to({alpha:0.5597},0).wait(1).to({alpha:0.6675},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.8791},0).wait(1).to({alpha:0.9828},0).wait(1).to({y:38.25,alpha:1},0).wait(34).to({alpha:0.9107},0).wait(1).to({alpha:0.8226},0).wait(1).to({alpha:0.7366},0).wait(1).to({alpha:0.653},0).wait(1).to({alpha:0.5715},0).wait(1).to({alpha:0.4923},0).wait(1).to({alpha:0.4153},0).wait(1).to({alpha:0.3405},0).wait(1).to({alpha:0.2679},0).wait(1).to({alpha:0.1976},0).wait(1).to({alpha:0.1295},0).wait(1).to({alpha:0.0636},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// profile
	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(273.85,38,1,1,0,0,0,23,24);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(1).to({regX:-40.7,regY:2,x:210.15,y:16,alpha:0.1355},0).wait(1).to({alpha:0.2696},0).wait(1).to({alpha:0.4022},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6628},0).wait(1).to({alpha:0.7909},0).wait(1).to({alpha:0.9174},0).wait(1).to({alpha:1},0).wait(39).to({alpha:0.9886},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8136},0).wait(1).to({alpha:0.7293},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.5667},0).wait(1).to({alpha:0.4886},0).wait(1).to({alpha:0.4125},0).wait(1).to({alpha:0.3386},0).wait(1).to({alpha:0.2668},0).wait(1).to({alpha:0.1969},0).wait(1).to({alpha:0.1293},0).wait(1).to({alpha:0.0636},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// face
	this.instance_10 = new lib.Symbol4("synched",0);
	this.instance_10.setTransform(298.4,53.25,1,1,0,0,0,41.5,44);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:21.2,regY:22.6,x:275.85,y:30.75},0).wait(1).to({x:273.6,y:29.7},0).wait(1).to({x:271.35,y:28.65},0).wait(1).to({x:269.1,y:27.55},0).wait(1).to({x:266.85,y:26.5},0).wait(1).to({x:264.6,y:25.45},0).wait(1).to({x:262.35,y:24.35,alpha:0.25},0).wait(1).to({x:260.15,y:23.3,alpha:0.5},0).wait(1).to({x:257.9,y:22.25,alpha:0.75},0).wait(1).to({x:255.65,y:21.2,alpha:1},0).wait(1).to({x:253.4,y:20.15},0).wait(1).to({x:251.15,y:19.05},0).wait(1).to({x:248.9,y:18},0).wait(1).to({x:246.65,y:16.95},0).wait(1).to({x:244.4,y:15.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9615},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8846},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8077},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.7308},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6538},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5769},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.4231},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3462},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2692},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1154},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.0385},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_2
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(64,47.5,1,1,0,0,0,199,37.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:91.6,regY:17.2,x:-19,y:27.2,alpha:0.1659},0).wait(1).to({x:5.15,alpha:0.3302},0).wait(1).to({x:29.15,alpha:0.4932},0).wait(1).to({x:52.85,alpha:0.6546},0).wait(1).to({x:76.35,alpha:0.8146},0).wait(1).to({x:99.6,alpha:0.9729},0).wait(1).to({x:103.6,alpha:1},0).wait(55).to({x:102.95,alpha:0.9961},0).wait(1).to({x:88,alpha:0.9026},0).wait(1).to({x:73.3,alpha:0.8109},0).wait(1).to({x:58.9,alpha:0.7211},0).wait(1).to({x:44.8,alpha:0.6333},0).wait(1).to({x:31,alpha:0.5474},0).wait(1).to({x:17.55,alpha:0.4634},0).wait(1).to({x:4.35,alpha:0.3813},0).wait(1).to({x:-8.5,alpha:0.3013},0).wait(1).to({x:-21.05,alpha:0.223},0).wait(1).to({x:-33.25,alpha:0.1469},0).wait(1).to({x:-45.2,alpha:0.0724},0).wait(1).to({x:-56.85,alpha:0},0).to({_off:true},1).wait(189));

	// Layer_14
	this.instance_12 = new lib.Symbol15();
	this.instance_12.setTransform(363.95,45,0.48,0.48,0,0,0,758.2,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:334,regY:52.5,x:160.3,y:25.2},0).wait(64).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_9
	this.instance_13 = new lib.Symbol9();
	this.instance_13.setTransform(174.95,21.25,0.48,0.48,0,0,0,364.5,44.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({_off:false},0).wait(1).to({regX:334,regY:52.5,x:160.3,y:25},0).wait(78).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,18.3,375.59999999999997,126.50000000000001);
// library properties:
lib.properties = {
	id: '63FF9F044C3891449334EC260996D8AA',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x50_atlas_1.png", id:"320x50_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['63FF9F044C3891449334EC260996D8AA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;