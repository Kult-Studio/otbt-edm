(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x100_atlas_1", frames: [[662,890,52,51],[0,212,668,209],[766,815,86,79],[501,634,140,166],[716,890,26,48],[836,896,58,61],[643,634,116,127],[0,829,288,172],[662,815,102,73],[0,423,668,209],[0,634,499,193],[290,829,370,116],[0,0,668,210],[643,763,174,50],[290,947,544,70]]}
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
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1bg = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1faceicon = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1phone = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1profile = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f1scan = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f1wallet = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.f3button = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["320x100_atlas_1"]);
	this.gotoAndStop(14);
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


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,52,51), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f1phone();
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,12.5,23.1), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,668,209), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(4,1,76.4,22), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(18,2,259.9,33.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,668,210), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,176.6,55.4), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(4,6,239.5,92.7), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,668,209), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,67.7,80.2), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-59,20,48.7,34.9), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-50,-8,27.7,29.2), null);


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
p.nominalBounds = new cjs.Rectangle(0,0,56.4,61.8);


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

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,139.2,83.2), null);


// stage content:
(lib._320x100 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(174,82,1,1,0,0,0,58,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regX:42.2,regY:12,x:158.2,y:77,alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(93));

	// Layer_4
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(222,40,1,1,0,0,0,211,26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).wait(1).to({regX:147.9,regY:18.7,x:158.9,y:32.7,alpha:0.0712},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.2125},0).wait(1).to({alpha:0.2825},0).wait(1).to({alpha:0.3521},0).wait(1).to({alpha:0.4213},0).wait(1).to({alpha:0.4902},0).wait(1).to({alpha:0.5586},0).wait(1).to({alpha:0.6266},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.7615},0).wait(1).to({alpha:0.8283},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9608},0).wait(1).to({alpha:1},0).wait(105));

	// Layer_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,44.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).wait(1).to({regX:334,regY:105,x:160.3,y:50.6},0).wait(119));

	// Layer_11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(276,52,1,1,0,0,0,204,29.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).wait(1).to({regX:88.3,regY:27.7,x:160.3,y:50.2,alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(47).to({_off:true},1).wait(120));

	// Layer_10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(289,138,1,1,0,0,0,253,47);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(1).to({regX:123.8,regY:52.3,x:159.8,y:133.35,alpha:0.1754},0).wait(1).to({y:123.55,alpha:0.3447},0).wait(1).to({y:113.85,alpha:0.5081},0).wait(1).to({y:104.2,alpha:0.6658},0).wait(1).to({y:94.7,alpha:0.8179},0).wait(1).to({y:85.25,alpha:0.9645},0).wait(1).to({y:75.9,alpha:1},0).wait(1).to({y:66.7},0).wait(1).to({y:57.55},0).wait(1).to({y:50.3},0).wait(58).to({_off:true},1).wait(120));

	// hand
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(366.95,74.35,1,1,14.9983,0,0,49.2,46.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).wait(1).to({regX:33.8,regY:40.1,rotation:13.6354,x:348.45,y:61.15},0).wait(1).to({rotation:12.2718,x:343.6,y:58},0).wait(1).to({rotation:10.9083,x:338.95,y:54.85},0).wait(1).to({rotation:9.5448,x:334.45,y:52.15},0).wait(1).to({rotation:8.1812,x:329.95,y:49.9},0).wait(1).to({rotation:6.8177,x:325.45,y:48.35},0).wait(1).to({rotation:5.4541,x:320.8,y:47.65},0).wait(1).to({rotation:4.0906,x:315.85,y:48},0).wait(1).to({rotation:2.7271,x:310.6,y:49.6},0).wait(1).to({rotation:1.3635,x:304.95,y:52.55},0).wait(1).to({rotation:0,x:298.75,y:57.1},0).wait(29).to({_off:true},1).wait(189));

	// faceicon
	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(271.5,33.2,0.599,0.599,0,0,0,20.9,19.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(1).to({regX:20.7,regY:19,scaleX:0.7481,scaleY:0.7481,x:271.35,y:32.9,alpha:0.25},0).wait(1).to({scaleX:0.8938,scaleY:0.8938,y:32.85,alpha:0.5},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,y:32.75,alpha:0.75},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,x:271.3,y:32.8,alpha:1},0).wait(1).to({scaleX:0.9016,scaleY:0.9016,y:32.85},0).wait(1).to({scaleX:0.8591,scaleY:0.8591,x:271.35,y:32.8},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,y:32.85},0).wait(1).to({scaleX:0.8074,scaleY:0.8074},0).wait(22).to({_off:true},1).wait(189));

	// Layer_3
	this.instance_7 = new lib.Symbol17();
	this.instance_7.setTransform(192.95,79.55,0.48,0.48,0,0,0,25.9,25.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({_off:false},0).wait(1).to({regX:26,regY:25.5,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(29).to({alpha:0.8333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// phone
	this.instance_8 = new lib.Symbol16();
	this.instance_8.setTransform(174.2,85.5,1,1,0,0,0,6.2,11.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// wallet
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(241,42,1,1,0,0,0,41,29.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(1).to({regX:-34.7,regY:37.4,x:165.3,y:49.9,alpha:0.1147},0).wait(1).to({alpha:0.228},0).wait(1).to({alpha:0.3399},0).wait(1).to({alpha:0.4505},0).wait(1).to({alpha:0.5597},0).wait(1).to({alpha:0.6675},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.8791},0).wait(1).to({alpha:0.9828},0).wait(1).to({alpha:1},0).wait(34).to({alpha:0.9107},0).wait(1).to({alpha:0.8226},0).wait(1).to({alpha:0.7366},0).wait(1).to({alpha:0.653},0).wait(1).to({alpha:0.5715},0).wait(1).to({alpha:0.4923},0).wait(1).to({alpha:0.4153},0).wait(1).to({alpha:0.3405},0).wait(1).to({alpha:0.2679},0).wait(1).to({alpha:0.1976},0).wait(1).to({alpha:0.1295},0).wait(1).to({alpha:0.0636},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// profile
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(241,42,1,1,0,0,0,23,24);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).wait(1).to({regX:-36.1,regY:6.6,x:181.9,y:24.6,alpha:0.1355},0).wait(1).to({alpha:0.2696},0).wait(1).to({alpha:0.4022},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.6628},0).wait(1).to({alpha:0.7909},0).wait(1).to({alpha:0.9174},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.9524},0).wait(1).to({alpha:0.8935},0).wait(1).to({alpha:0.8358},0).wait(1).to({alpha:0.7792},0).wait(1).to({alpha:0.7239},0).wait(1).to({alpha:0.6696},0).wait(1).to({alpha:0.6167},0).wait(1).to({alpha:0.5649},0).wait(1).to({alpha:0.5143},0).wait(1).to({alpha:0.4649},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.3697},0).wait(1).to({alpha:0.3239},0).wait(1).to({alpha:0.2792},0).wait(1).to({alpha:0.2357},0).wait(1).to({alpha:0.1935},0).wait(1).to({alpha:0.1524},0).wait(1).to({alpha:0.1125},0).wait(1).to({alpha:0.0739},0).wait(1).to({alpha:0.0364},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// face
	this.instance_11 = new lib.Symbol4("synched",0);
	this.instance_11.setTransform(274.7,58,1,1,0,0,0,41.5,44);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:28.2,regY:30.9,x:259.15,y:43.8},0).wait(1).to({x:256.9,y:42.75},0).wait(1).to({x:254.65,y:41.7},0).wait(1).to({x:252.4,y:40.6},0).wait(1).to({x:250.15,y:39.55},0).wait(1).to({x:247.9,y:38.5},0).wait(1).to({x:245.65,y:37.4,alpha:0.25},0).wait(1).to({x:243.45,y:36.35,alpha:0.5},0).wait(1).to({x:241.2,y:35.3,alpha:0.75},0).wait(1).to({x:238.95,y:34.2,alpha:1},0).wait(1).to({x:236.7,y:33.15},0).wait(1).to({x:234.45,y:32.1},0).wait(1).to({x:232.2,y:31},0).wait(1).to({x:229.95,y:30},0).wait(1).to({x:227.7,y:28.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9615},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8846},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8077},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.7308},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6538},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5769},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.4231},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3462},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2692},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1154},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.0385},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_2
	this.instance_12 = new lib.Symbol2();
	this.instance_12.setTransform(64,47.5,1,1,0,0,0,199,37.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:69.6,regY:41.6,x:-41,y:51.6,alpha:0.1659},0).wait(1).to({x:-16.85,alpha:0.3302},0).wait(1).to({x:7.15,alpha:0.4932},0).wait(1).to({x:30.85,alpha:0.6546},0).wait(1).to({x:54.35,alpha:0.8146},0).wait(1).to({x:77.6,alpha:0.9729},0).wait(1).to({x:81.6,alpha:1},0).wait(55).to({x:80.95,alpha:0.9961},0).wait(1).to({x:66,alpha:0.9026},0).wait(1).to({x:51.3,alpha:0.8109},0).wait(1).to({x:36.9,alpha:0.7211},0).wait(1).to({x:22.8,alpha:0.6333},0).wait(1).to({x:9,alpha:0.5474},0).wait(1).to({x:-4.45,alpha:0.4634},0).wait(1).to({x:-17.65,alpha:0.3813},0).wait(1).to({x:-30.5,alpha:0.3013},0).wait(1).to({x:-43.05,alpha:0.223},0).wait(1).to({x:-55.25,alpha:0.1469},0).wait(1).to({x:-67.2,alpha:0.0724},0).wait(1).to({x:-78.85,alpha:0},0).to({_off:true},1).wait(189));

	// Layer_14
	this.instance_13 = new lib.Symbol15();
	this.instance_13.setTransform(363.95,45,0.48,0.48,0,0,0,758.2,93.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:334,regY:104.5,x:160.3,y:50.15},0).wait(64).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_9
	this.instance_14 = new lib.Symbol9();
	this.instance_14.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,44.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(64).to({_off:false},0).wait(1).to({regX:334,regY:104.5,x:160.3,y:50.35},0).wait(78).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,48,385.2,141.7);
// library properties:
lib.properties = {
	id: '63FF9F044C3891449334EC260996D8AA',
	width: 320,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x100_atlas_1.png", id:"320x100_atlas_1"}
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