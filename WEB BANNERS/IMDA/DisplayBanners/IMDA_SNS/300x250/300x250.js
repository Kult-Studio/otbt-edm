(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_1", frames: [[0,0,601,501],[1809,274,141,109],[1809,150,127,122],[513,503,371,397],[1809,0,223,148],[1702,586,125,120],[886,503,472,210],[603,0,601,501],[0,503,511,411],[1360,503,340,276],[1206,0,601,501],[1702,503,283,81],[886,781,503,175]]}
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
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1block = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1graph = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1map = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1route = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f3button = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["300x250_atlas_1"]);
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
	this.instance = new lib.f3button();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,283,81), null);


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
	this.instance = new lib.f3logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,251.5,87.5), null);


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
	this.instance = new lib.f3bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,601,501), null);


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
	this.instance = new lib.f2text();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,170,138), null);


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
	this.instance = new lib.f2frame();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,255.5,205.5), null);


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
	this.instance = new lib.f2bg();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,300.5,250.5), null);


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
	this.instance = new lib.f1route();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,62.5,60), null);


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
	this.instance = new lib.f1hand();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,185.5,198.5), null);


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
	this.instance = new lib.f1block();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,70.5,54.5), null);


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
	this.instance = new lib.f1graph();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,63.5,61), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f1map();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,111.5,74), null);


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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,236,105), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,300.5,250.5), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// f3_button
	this.instance = new lib.Symbol13();
	this.instance.setTransform(141.4,187.45,0.4,0.4,0,0,0,109.9,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).wait(1).to({regX:141.5,regY:40.5,scaleX:0.4143,scaleY:0.4143,x:153.55,y:203.45,alpha:0.1429},0).wait(1).to({scaleX:0.4286,scaleY:0.4286,x:153.1,y:203.25,alpha:0.2857},0).wait(1).to({scaleX:0.4429,scaleY:0.4429,x:152.6,y:203.05,alpha:0.4286},0).wait(1).to({scaleX:0.4571,scaleY:0.4571,x:152.2,y:202.85,alpha:0.5714},0).wait(1).to({scaleX:0.4714,scaleY:0.4714,x:151.7,y:202.65,alpha:0.7143},0).wait(1).to({scaleX:0.4857,scaleY:0.4857,x:151.25,y:202.45,alpha:0.8571},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:150.8,y:202.3,alpha:1},0).wait(83).to({scaleX:0.4875,scaleY:0.4875,x:151.2,y:202.45,alpha:0.875},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:151.6,y:202.65,alpha:0.75},0).wait(1).to({scaleX:0.4625,scaleY:0.4625,x:152,y:202.8,alpha:0.625},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:152.4,y:202.95,alpha:0.5},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,x:152.8,y:203.1,alpha:0.375},0).wait(1).to({scaleX:0.425,scaleY:0.425,x:153.25,y:203.3,alpha:0.25},0).wait(1).to({scaleX:0.4125,scaleY:0.4125,x:153.6,y:203.45,alpha:0.125},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:154,y:203.65,alpha:0},0).wait(1));

	// f3_logo
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(235.05,66.2,1,1,0,0,0,210.8,25.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(157).to({_off:false},0).wait(1).to({regX:125.8,regY:43.8,x:150.05,y:85.75,alpha:0.125},0).wait(1).to({y:87.35,alpha:0.25},0).wait(1).to({y:88.95,alpha:0.375},0).wait(1).to({y:90.55,alpha:0.5},0).wait(1).to({y:92.15,alpha:0.625},0).wait(1).to({y:93.75,alpha:0.75},0).wait(1).to({y:95.35,alpha:0.875},0).wait(1).to({y:96.95,alpha:1},0).wait(86).to({y:95.95,alpha:0.9231},0).wait(1).to({y:94.95,alpha:0.8462},0).wait(1).to({y:94,alpha:0.7692},0).wait(1).to({y:93,alpha:0.6923},0).wait(1).to({y:92,alpha:0.6154},0).wait(1).to({y:91.05,alpha:0.5385},0).wait(1).to({y:90.05,alpha:0.4615},0).wait(1).to({y:89.1,alpha:0.3846},0).wait(1).to({y:88.1,alpha:0.3077},0).wait(1).to({y:87.1,alpha:0.2308},0).wait(1).to({y:86.15,alpha:0.1538},0).wait(1).to({y:85.15,alpha:0.0769},0).wait(1).to({y:84.2,alpha:0},0).wait(1));

	// f3_bg
	this.instance_2 = new lib.Symbol11();
	this.instance_2.setTransform(364,45,0.5,0.5,0,0,0,728.5,90.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).wait(1).to({regX:300.5,regY:250.5,x:150,y:125,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(106));

	// f2_text
	this.instance_3 = new lib.Symbol10();
	this.instance_3.setTransform(268.8,85.2,1,1,0,0,0,203.8,29.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(1).to({regX:85,regY:69,x:150,y:125,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(33).to({alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(118));

	// f2_frame
	this.instance_4 = new lib.Symbol9();
	this.instance_4.setTransform(275.05,303.05,1,1,0,0,0,252.8,46.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).wait(1).to({regX:127.8,regY:102.8,x:150.05,y:335.65,alpha:0.1},0).wait(1).to({y:312.25,alpha:0.2},0).wait(1).to({y:288.85,alpha:0.3},0).wait(1).to({y:265.45,alpha:0.4},0).wait(1).to({y:242.05,alpha:0.5},0).wait(1).to({y:218.65,alpha:0.6},0).wait(1).to({y:195.25,alpha:0.7},0).wait(1).to({y:171.85,alpha:0.8},0).wait(1).to({y:148.45,alpha:0.9},0).wait(1).to({y:125.05,alpha:1},0).wait(1).to({y:125},0).wait(50).to({y:158.45,alpha:0.8571},0).wait(1).to({y:191.85,alpha:0.7143},0).wait(1).to({y:225.3,alpha:0.5714},0).wait(1).to({y:258.75,alpha:0.4286},0).wait(1).to({y:292.15,alpha:0.2857},0).wait(1).to({y:325.6,alpha:0.1429},0).wait(1).to({y:359.05,alpha:0},0).to({_off:true},1).wait(112));

	// f2_bg
	this.instance_5 = new lib.Symbol8();
	this.instance_5.setTransform(364.2,45.2,1,1,0,0,0,364.2,45.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).wait(1).to({regX:150.2,regY:125.2,x:150.2,y:125.2,alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(74).to({_off:true},1).wait(104));

	// f1_text
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(13,55.5,1,1,0,0,0,127,32.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:118,regY:52.5,x:26.5,y:74.75,alpha:0.1667},0).wait(1).to({x:49,y:74.35,alpha:0.3333},0).wait(1).to({x:71.5,y:73.95,alpha:0.5},0).wait(1).to({x:94,y:73.55,alpha:0.6667},0).wait(1).to({x:116.5,y:73.15,alpha:0.8333},0).wait(1).to({x:139,y:72.75,alpha:1},0).wait(54).to({alpha:0.8333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(198));

	// f1_hand
	this.instance_7 = new lib.Symbol6();
	this.instance_7.setTransform(-77.95,229.9,1,1,0,0,0,51.8,54.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off:false},0).wait(1).to({regX:92.8,regY:99.2,x:-34.7,y:265.95,alpha:0.1111},0).wait(1).to({x:-31.5,y:256.95,alpha:0.2222},0).wait(1).to({x:-27.05,y:248.1,alpha:0.3333},0).wait(1).to({x:-21.25,y:239.7,alpha:0.4444},0).wait(1).to({x:-14.25,y:232.15,alpha:0.5556},0).wait(1).to({x:-6.25,y:225.65,alpha:0.6667},0).wait(1).to({x:2.4,y:220.3,alpha:0.7778},0).wait(1).to({x:11.35,y:216.15,alpha:0.8889},0).wait(1).to({x:20.35,y:212.95,alpha:1},0).wait(47).to({alpha:0.8571},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(185));

	// f1_map
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(94.05,179.95,1,1,0,0,0,63.8,42.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).wait(1).to({regX:55.8,regY:37,scaleX:1.05,scaleY:1.05,x:84.5,y:174.95,alpha:0.25},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:83,y:175.2,alpha:0.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:81.45,y:175.45,alpha:0.75},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:79.95,y:175.7,alpha:1},0).wait(1).to({scaleX:1.1333,scaleY:1.1333,x:82,y:175.4},0).wait(1).to({scaleX:1.0667,scaleY:1.0667,x:84,y:175.05},0).wait(1).to({scaleX:1,scaleY:1,x:86.05,y:174.75},0).wait(35).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(194));

	// f1_graph
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(178,123.05,1,1,0,0,0,29,27.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(1).to({regX:31.8,regY:30.5,x:180.8,y:125.75,alpha:0.1667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:1},0).wait(58).to({alpha:0.8889},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(180));

	// f1_route
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(233,108,1,1,0,0,0,39,37.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).wait(1).to({regX:31.2,regY:30,x:225.2,y:100.3,alpha:0.1429},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:1},0).wait(46).to({alpha:0.8571},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.1429},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(185));

	// f1_block
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(125.95,103,1,1,0,0,0,30.2,23.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).wait(1).to({regX:35.2,regY:27.2,x:130.95,y:106.7,alpha:0.1429},0).wait(1).to({alpha:0.2857},0).wait(1).to({alpha:0.4286},0).wait(1).to({alpha:0.5714},0).wait(1).to({alpha:0.7143},0).wait(1).to({alpha:0.8571},0).wait(1).to({alpha:1},0).wait(57).to({alpha:0.8333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// f1_bg
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364.2,45.2,1,1,0,0,0,364.2,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:150.2,regY:125.2,x:150.2,y:125.2},0).wait(89).to({_off:true},1).wait(173));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(20.3,124.8,280.2,337);
// library properties:
lib.properties = {
	id: 'CF7FEAEA668B0F4FB51837935941041E',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_1.png", id:"300x250_atlas_1"}
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
an.compositions['CF7FEAEA668B0F4FB51837935941041E'] = {
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