(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_atlas_1", frames: [[0,0,1517,188],[1615,205,86,79],[1519,0,211,203],[1519,205,94,100],[1732,0,172,183],[1055,570,827,154],[1732,185,171,121],[0,190,1517,188],[0,570,1053,195],[1055,726,849,121],[0,380,1517,188],[1519,308,240,68],[0,767,877,107]]}
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



(lib.f1bg = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1faceicon = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1profile = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1scan = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f1wallet = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f3button = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["728x90_atlas_1"]);
	this.gotoAndStop(12);
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

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,1517,188), null);


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
	this.instance.setTransform(0,0,0.4846,0.4846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,116.3,33), null);


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
	this.instance.setTransform(0,0,0.5439,0.5439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,477,58.2), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,1517,188), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,405.3,57.8), null);


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
	this.instance.setTransform(4,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(4,0,505.4,93.6), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1517,188), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,41.4,38.1), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,102,98.1), null);


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
	this.instance.setTransform(0,0,0.4772,0.4772);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,81.6,57.8), null);


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
	this.instance.setTransform(0,0,0.4778,0.4778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,44.9,47.8), null);


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
p.nominalBounds = new cjs.Rectangle(0,0,83.7,89);


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

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,399.7,74.5), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(637,45,1,1,0,0,0,58,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regX:58.1,regY:16.5,x:637.1,y:44.5,alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(93));

	// Layer_4
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(236,40,1,1,0,0,0,211,26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).wait(1).to({regX:238.5,regY:29.1,x:263.5,y:43.1,alpha:0.0712},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.2125},0).wait(1).to({alpha:0.2825},0).wait(1).to({alpha:0.3521},0).wait(1).to({alpha:0.4213},0).wait(1).to({alpha:0.4902},0).wait(1).to({alpha:0.5586},0).wait(1).to({alpha:0.6266},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.7615},0).wait(1).to({alpha:0.8283},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9608},0).wait(1).to({alpha:1},0).wait(105));

	// Layer_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,45.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).wait(1).to({regX:758.5,regY:94,x:364.1,y:45.15},0).wait(119));

	// Layer_11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(364,45.5,1,1,0,0,0,204,29.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).wait(1).to({regX:202.6,regY:28.9,x:362.6,y:44.9,alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(47).to({_off:true},1).wait(120));

	// Layer_10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(364,138,1,1,0,0,0,253,47);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(1).to({regX:256.7,regY:46.8,x:367.7,y:127.85,alpha:0.1754},0).wait(1).to({y:118.05,alpha:0.3447},0).wait(1).to({y:108.35,alpha:0.5081},0).wait(1).to({y:98.7,alpha:0.6658},0).wait(1).to({y:89.2,alpha:0.8179},0).wait(1).to({y:79.75,alpha:0.9645},0).wait(1).to({y:70.4,alpha:1},0).wait(1).to({y:61.2},0).wait(1).to({y:52.05},0).wait(1).to({y:44.8},0).wait(58).to({_off:true},1).wait(120));

	// Layer_7
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(776,47.85,1,1,14.9983,0,0,48.9,47.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:51,regY:49,rotation:13.499,x:767,y:48.35},0).wait(1).to({rotation:11.9991,x:757.15,y:47.4},0).wait(1).to({rotation:10.4992,x:747.85,y:47.3},0).wait(1).to({rotation:8.9993,x:739,y:48.1},0).wait(1).to({rotation:7.4995,x:730.4,y:49.7},0).wait(1).to({rotation:5.9996,x:722,y:52.2},0).wait(1).to({rotation:4.4997,x:713.7,y:55.5},0).wait(1).to({rotation:2.9998,x:705.35,y:59.75},0).wait(1).to({rotation:1.4999,x:696.85,y:65},0).wait(1).to({rotation:0,x:688.1,y:71.25},0).wait(1).to({rotation:2.5,x:688.3,y:69.5},0).wait(1).to({rotation:5,x:688.55,y:67.75},0).wait(1).to({rotation:7.5,x:688.75,y:66.05},0).wait(1).to({rotation:10,x:688.95,y:64.3},0).wait(18).to({alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_8
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(645.95,41.25,1,1,0,0,0,20.9,19.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(1).to({regX:20.7,regY:19,scaleX:1.0593,scaleY:1.0593,x:645.75,y:40.7,alpha:0.3333},0).wait(1).to({scaleX:1.1173,scaleY:1.1173,x:645.7,alpha:0.6667},0).wait(1).to({scaleX:1.174,scaleY:1.174,y:40.65,alpha:1},0).wait(1).to({scaleX:1.1511,scaleY:1.1511},0).wait(1).to({scaleX:1.0611,scaleY:1.0611,y:40.7},0).wait(1).to({scaleX:1,scaleY:1,x:645.75,y:40.75},0).wait(17).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_6
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(483,60,1,1,0,0,0,41,29.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).wait(1).to({regX:40.8,regY:28.9,x:482.8,y:59.4,alpha:0.1354},0).wait(1).to({alpha:0.269},0).wait(1).to({alpha:0.4007},0).wait(1).to({alpha:0.5305},0).wait(1).to({alpha:0.6585},0).wait(1).to({alpha:0.7847},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.8878},0).wait(1).to({alpha:0.7757},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5613},0).wait(1).to({alpha:0.4593},0).wait(1).to({alpha:0.3607},0).wait(1).to({alpha:0.2653},0).wait(1).to({alpha:0.1735},0).wait(1).to({alpha:0.0852},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_5
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(514,23,1,1,0,0,0,23,24);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(1).to({regX:22.5,regY:23.9,x:513.5,y:22.9,alpha:0.1355},0).wait(1).to({alpha:0.2696},0).wait(1).to({alpha:0.4022},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6628},0).wait(1).to({alpha:0.7909},0).wait(1).to({alpha:0.9174},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.9524},0).wait(1).to({alpha:0.8935},0).wait(1).to({alpha:0.8358},0).wait(1).to({alpha:0.7792},0).wait(1).to({alpha:0.7239},0).wait(1).to({alpha:0.6696},0).wait(1).to({alpha:0.6167},0).wait(1).to({alpha:0.5649},0).wait(1).to({alpha:0.5143},0).wait(1).to({alpha:0.4649},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3697},0).wait(1).to({alpha:0.3239},0).wait(1).to({alpha:0.2792},0).wait(1).to({alpha:0.2357},0).wait(1).to({alpha:0.1935},0).wait(1).to({alpha:0.1524},0).wait(1).to({alpha:0.1125},0).wait(1).to({alpha:0.0739},0).wait(1).to({alpha:0.0364},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_3
	this.instance_9 = new lib.Symbol4("synched",0);
	this.instance_9.setTransform(617,47,1,1,0,0,0,41.5,44);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:41.8,regY:44.5,x:615.05,y:46.4},0).wait(1).to({x:612.8,y:45.35},0).wait(1).to({x:610.55,y:44.3},0).wait(1).to({x:608.3,y:43.25},0).wait(1).to({x:606.05,y:42.2},0).wait(1).to({x:603.8,y:41.1},0).wait(1).to({x:601.55,y:40.05,alpha:0.25},0).wait(1).to({x:599.35,y:39,alpha:0.5},0).wait(1).to({x:597.1,y:37.9,alpha:0.75},0).wait(1).to({x:594.85,y:36.85,alpha:1},0).wait(1).to({x:592.6,y:35.8},0).wait(1).to({x:590.35,y:34.7},0).wait(1).to({x:588.1,y:33.65},0).wait(1).to({x:585.85,y:32.6},0).wait(1).to({x:583.6,y:31.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9615},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8846},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8077},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.7308},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6538},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5769},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.4231},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3462},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2692},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1154},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.0385},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_2
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(78,47.5,1,1,0,0,0,199,37.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:199.8,regY:37.2,x:103.2,y:47.2,alpha:0.1659},0).wait(1).to({x:127.35,alpha:0.3302},0).wait(1).to({x:151.35,alpha:0.4932},0).wait(1).to({x:175.05,alpha:0.6546},0).wait(1).to({x:198.55,alpha:0.8146},0).wait(1).to({x:221.8,alpha:0.9729},0).wait(1).to({x:225.8,alpha:1},0).wait(55).to({x:225.15,alpha:0.9961},0).wait(1).to({x:210.15,alpha:0.9026},0).wait(1).to({x:195.5,alpha:0.8109},0).wait(1).to({x:181.1,alpha:0.7211},0).wait(1).to({x:167,alpha:0.6333},0).wait(1).to({x:153.2,alpha:0.5474},0).wait(1).to({x:139.75,alpha:0.4634},0).wait(1).to({x:126.55,alpha:0.3813},0).wait(1).to({x:113.7,alpha:0.3013},0).wait(1).to({x:101.15,alpha:0.223},0).wait(1).to({x:88.95,alpha:0.1469},0).wait(1).to({x:77,alpha:0.0724},0).wait(1).to({x:65.35,alpha:0},0).to({_off:true},1).wait(189));

	// Layer_14
	this.instance_11 = new lib.Symbol15();
	this.instance_11.setTransform(363.95,45,0.48,0.48,0,0,0,758.2,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:758.5,regY:94,x:364.1,y:45.1},0).wait(64).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_9
	this.instance_12 = new lib.Symbol9();
	this.instance_12.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,45.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(64).to({_off:false},0).wait(1).to({regX:758.5,regY:94,x:364.1,y:45.15},0).wait(78).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(229.6,32,609.9,152.6);
// library properties:
lib.properties = {
	id: '63FF9F044C3891449334EC260996D8AA',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_atlas_1.png", id:"728x90_atlas_1"}
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