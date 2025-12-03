(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x250_atlas_1", frames: [[1884,135,114,110],[0,0,626,522],[1884,247,86,79],[1298,709,230,293],[1972,247,60,110],[1884,0,126,133],[1530,709,232,252],[532,524,408,353],[1764,709,225,160],[628,0,626,522],[0,524,530,426],[942,524,354,287],[1256,0,626,522],[942,813,294,85],[1298,524,524,183]]}
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
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1bg = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1faceicon = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1phone = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1profile = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f1scan = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f1wallet = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.f3button = function() {
	this.initialize(ss["320x250_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["320x250_atlas_1"]);
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


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,300.5,250.6), null);


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
	this.instance.setTransform(9,8,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(9,8,96.9,93.5), null);


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
	this.instance.setTransform(1,2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(1,2,24,44), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(4,1,129,37.3), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(18,2,250.3,87.4), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,626,522), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,169,137), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(4,6,254.39999999999998,204.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,626,522), null);


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
	this.instance.setTransform(-3,-3,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-3,-3,47.3,43.5), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,111.2,141.6), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-59,20,107.4,76.4), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-50,-8,60.2,63.6), null);


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
	this.instance.setTransform(10,11,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,11,92.8,100.8);


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

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,197.2,170.6), null);


// stage content:
(lib._320x250 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(141,189,1,1,0,0,0,58,17);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).wait(1).to({regX:68.5,regY:19.6,x:151.5,y:191.6,alpha:0.0769},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:1},0).wait(93));

	// Layer_4
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(218,72,1,1,0,0,0,211,26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144).to({_off:false},0).wait(1).to({regX:143.2,regY:45.7,x:150.2,y:91.7,alpha:0.0712},0).wait(1).to({alpha:0.142},0).wait(1).to({alpha:0.2125},0).wait(1).to({alpha:0.2825},0).wait(1).to({alpha:0.3521},0).wait(1).to({alpha:0.4213},0).wait(1).to({alpha:0.4902},0).wait(1).to({alpha:0.5586},0).wait(1).to({alpha:0.6266},0).wait(1).to({alpha:0.6942},0).wait(1).to({alpha:0.7615},0).wait(1).to({alpha:0.8283},0).wait(1).to({alpha:0.8947},0).wait(1).to({alpha:0.9608},0).wait(1).to({alpha:1},0).wait(105));

	// Layer_12
	this.instance_2 = new lib.Symbol12();
	this.instance_2.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,44.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).wait(1).to({regX:313,regY:261,x:150.25,y:125.5},0).wait(119));

	// Layer_11
	this.instance_3 = new lib.Symbol11();
	this.instance_3.setTransform(270,84,1,1,0,0,0,204,29.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).wait(1).to({regX:84.5,regY:68.5,x:150.5,y:123,alpha:0.0833},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:1},0).wait(47).to({_off:true},1).wait(120));

	// Layer_10
	this.instance_4 = new lib.Symbol10();
	this.instance_4.setTransform(272,156,1,1,0,0,0,253,47);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(1).to({regX:131.2,regY:108.2,x:150.2,y:202.55,alpha:0.1754},0).wait(1).to({y:188,alpha:0.3447},0).wait(1).to({y:179.45,alpha:0.5081},0).wait(1).to({y:171.1,alpha:0.6658},0).wait(1).to({y:162.8,alpha:0.8179},0).wait(1).to({y:154.6,alpha:0.9645},0).wait(1).to({y:146.5,alpha:1},0).wait(1).to({y:138.45},0).wait(1).to({y:130.5},0).wait(1).to({y:124.2},0).wait(58).to({_off:true},1).wait(120));

	// Layer_2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(64,47.5,1,1,0,0,0,199,37.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:98.6,regY:85.3,x:-12,y:95.3,alpha:0.1659},0).wait(1).to({x:12.15,alpha:0.3302},0).wait(1).to({x:36.15,alpha:0.4932},0).wait(1).to({x:59.85,alpha:0.6546},0).wait(1).to({x:83.35,alpha:0.8146},0).wait(1).to({x:106.6,alpha:0.9729},0).wait(1).to({x:110.6,alpha:1},0).wait(55).to({x:109.95,alpha:0.9961},0).wait(1).to({x:95,alpha:0.9026},0).wait(1).to({x:80.3,alpha:0.8109},0).wait(1).to({x:65.9,alpha:0.7211},0).wait(1).to({x:51.8,alpha:0.6333},0).wait(1).to({x:38,alpha:0.5474},0).wait(1).to({x:24.55,alpha:0.4634},0).wait(1).to({x:11.35,alpha:0.3813},0).wait(1).to({x:-1.5,alpha:0.3013},0).wait(1).to({x:-14.05,alpha:0.223},0).wait(1).to({x:-26.25,alpha:0.1469},0).wait(1).to({x:-38.2,alpha:0.0724},0).wait(1).to({x:-49.85,alpha:0},0).to({_off:true},1).wait(189));

	// hand
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(325.85,86,1,1,14.9983,0,0,48.7,42.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).wait(1).to({regX:55.6,regY:70.8,rotation:13.6354,x:320.8,y:111.85},0).wait(1).to({rotation:12.2718,x:316.85,y:108.3},0).wait(1).to({rotation:10.9083,x:313.1,y:104.85},0).wait(1).to({rotation:9.5448,x:309.5,y:101.7},0).wait(1).to({rotation:8.1812,x:305.9,y:99.15},0).wait(1).to({rotation:6.8177,x:302.3,y:97.15},0).wait(1).to({rotation:5.4541,x:298.5,y:96.05},0).wait(1).to({rotation:4.0906,x:294.45,y:95.9},0).wait(1).to({rotation:2.7271,x:290.1,y:97},0).wait(1).to({rotation:1.3635,x:285.25,y:99.45},0).wait(1).to({rotation:0,x:279.9,y:103.5},0).wait(27).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// faceicon
	this.instance_7 = new lib.Symbol8();
	this.instance_7.setTransform(234,61.95,0.599,0.599,0,0,0,20.8,19.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).wait(1).to({regX:20.6,regY:18.7,scaleX:0.7481,scaleY:0.7481,x:233.8,y:61.45,alpha:0.25},0).wait(1).to({scaleX:0.8938,scaleY:0.8938,y:61.3,alpha:0.5},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,y:61.2,alpha:0.75},0).wait(1).to({scaleX:0.9452,scaleY:0.9452,y:61.25,alpha:1},0).wait(1).to({scaleX:0.9016,scaleY:0.9016,y:61.3},0).wait(1).to({scaleX:0.8591,scaleY:0.8591},0).wait(1).to({scaleX:0.8177,scaleY:0.8177,x:233.85,y:61.35},0).wait(1).to({scaleX:0.818,scaleY:0.818,x:233.8},0).wait(1).to({scaleX:0.8318,scaleY:0.8318,x:233.85},0).wait(1).to({scaleX:0.8452,scaleY:0.8452,x:233.8},0).wait(1).to({scaleX:0.8582,scaleY:0.8582,x:233.85},0).wait(1).to({scaleX:0.8709,scaleY:0.8709,x:233.8},0).wait(1).to({scaleX:0.8831,scaleY:0.8831,y:61.3},0).wait(1).to({scaleX:0.895,scaleY:0.895},0).wait(1).to({scaleX:0.9065,scaleY:0.9065},0).wait(1).to({scaleX:0.9177,scaleY:0.9177},0).wait(1).to({scaleX:0.9284,scaleY:0.9284,y:61.25},0).wait(1).to({scaleX:0.9388,scaleY:0.9388},0).wait(1).to({scaleX:0.9488,scaleY:0.9488},0).wait(1).to({scaleX:0.9585,scaleY:0.9585},0).wait(1).to({scaleX:0.9677,scaleY:0.9677},0).wait(1).to({scaleX:0.9766,scaleY:0.9766,x:233.75},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:233.8,y:61.2},0).wait(1).to({scaleX:0.9932,scaleY:0.9932},0).wait(1).to({scaleX:1,scaleY:1,y:61.25},0).wait(3).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_3
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(154,186,0.48,0.48,0,0,0,25.9,24.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({_off:false},0).wait(1).to({regX:57.4,regY:54.7,x:169.05,y:200.25,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(29).to({alpha:0.8333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// phone
	this.instance_9 = new lib.Symbol16();
	this.instance_9.setTransform(130.95,193,1,1,0,0,0,6.2,11.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({_off:false},0).wait(1).to({regX:13,regY:24,x:137.75,y:205.5,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// wallet
	this.instance_10 = new lib.Symbol6();
	this.instance_10.setTransform(176,96,1,1,0,0,0,41,29.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(18).to({_off:false},0).wait(1).to({regX:-5.3,regY:58.2,x:129.7,y:124.7,alpha:0.0459},0).wait(1).to({alpha:0.0912},0).wait(1).to({alpha:0.136},0).wait(1).to({alpha:0.1802},0).wait(1).to({alpha:0.2239},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.3096},0).wait(1).to({alpha:0.3516},0).wait(1).to({alpha:0.3931},0).wait(1).to({alpha:0.4025},0).wait(1).to({alpha:0.4055},0).wait(1).to({alpha:0.4085},0).wait(1).to({alpha:0.4114},0).wait(1).to({alpha:0.4143},0).wait(1).to({alpha:0.4171},0).wait(1).to({alpha:0.4199},0).wait(1).to({alpha:0.4227},0).wait(1).to({alpha:0.4254},0).wait(1).to({alpha:0.4281},0).wait(1).to({alpha:0.4307},0).wait(1).to({alpha:0.4333},0).wait(1).to({alpha:0.4358},0).wait(1).to({alpha:0.4383},0).wait(1).to({alpha:0.4408},0).wait(1).to({alpha:0.4432},0).wait(1).to({alpha:0.4456},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.4503},0).wait(1).to({alpha:0.4526},0).wait(1).to({alpha:0.4548},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.4591},0).wait(1).to({alpha:0.4612},0).wait(1).to({alpha:0.4633},0).wait(1).to({alpha:0.4653},0).wait(1).to({alpha:0.4673},0).wait(1).to({alpha:0.4692},0).wait(1).to({alpha:0.4711},0).wait(1).to({alpha:0.473},0).wait(1).to({alpha:0.4748},0).wait(1).to({alpha:0.4766},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.48},0).wait(1).to({alpha:0.4372},0).wait(1).to({alpha:0.3949},0).wait(1).to({alpha:0.3536},0).wait(1).to({alpha:0.3134},0).wait(1).to({alpha:0.2743},0).wait(1).to({alpha:0.2363},0).wait(1).to({alpha:0.1993},0).wait(1).to({alpha:0.1634},0).wait(1).to({alpha:0.1286},0).wait(1).to({alpha:0.0949},0).wait(1).to({alpha:0.0622},0).wait(1).to({alpha:0.0305},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// profile
	this.instance_11 = new lib.Symbol5();
	this.instance_11.setTransform(209,76,1,1,0,0,0,23,24);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(1).to({regX:-19.9,regY:23.8,x:166.1,y:75.8,alpha:0.0813},0).wait(1).to({alpha:0.1618},0).wait(1).to({alpha:0.2413},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.3977},0).wait(1).to({alpha:0.4745},0).wait(1).to({alpha:0.5504},0).wait(1).to({alpha:0.6},0).wait(32).to({alpha:0.5715},0).wait(1).to({alpha:0.5361},0).wait(1).to({alpha:0.5015},0).wait(1).to({alpha:0.4675},0).wait(1).to({alpha:0.4343},0).wait(1).to({alpha:0.4018},0).wait(1).to({alpha:0.37},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.3086},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.2218},0).wait(1).to({alpha:0.1943},0).wait(1).to({alpha:0.1675},0).wait(1).to({alpha:0.1414},0).wait(1).to({alpha:0.1161},0).wait(1).to({alpha:0.0915},0).wait(1).to({alpha:0.0675},0).wait(1).to({alpha:0.0443},0).wait(1).to({alpha:0.0218},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// face
	this.instance_12 = new lib.Symbol4("synched",0);
	this.instance_12.setTransform(253.7,126,1,1,0,0,0,41.5,44);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:56.4,regY:61.4,x:266.35,y:142.3},0).wait(1).to({x:264.1,y:141.25},0).wait(1).to({x:261.85,y:140.2},0).wait(1).to({x:259.6,y:139.1},0).wait(1).to({x:257.35,y:138.05},0).wait(1).to({x:255.1,y:137},0).wait(1).to({x:252.85,y:135.9,alpha:0.25},0).wait(1).to({x:250.65,y:134.85,alpha:0.5},0).wait(1).to({x:248.4,y:133.8,alpha:0.75},0).wait(1).to({x:246.15,y:132.7,alpha:1},0).wait(1).to({x:243.9,y:131.65},0).wait(1).to({x:241.65,y:130.6},0).wait(1).to({x:239.4,y:129.5},0).wait(1).to({x:237.15,y:128.45},0).wait(1).to({x:234.9,y:127.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9615},0).wait(1).to({alpha:0.9231},0).wait(1).to({alpha:0.8846},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.8077},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.7308},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6538},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5769},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.4231},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3462},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2692},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1923},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.1154},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0.0385},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_14
	this.instance_13 = new lib.Symbol19();
	this.instance_13.setTransform(150.2,125.2,1,1,0,0,0,150.2,125.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regY:125.3,y:125.3},0).wait(61).to({alpha:0.9231},0).wait(1).to({alpha:0.8462},0).wait(1).to({alpha:0.7692},0).wait(1).to({alpha:0.6923},0).wait(1).to({alpha:0.6154},0).wait(1).to({alpha:0.5385},0).wait(1).to({alpha:0.4615},0).wait(1).to({alpha:0.3846},0).wait(1).to({alpha:0.3077},0).wait(1).to({alpha:0.2308},0).wait(1).to({alpha:0.1538},0).wait(1).to({alpha:0.0769},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// Layer_9
	this.instance_14 = new lib.Symbol9();
	this.instance_14.setTransform(174.95,21.8,0.48,0.48,0,0,0,364.5,44.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(61).to({_off:false},0).wait(1).to({regX:313,regY:261,x:150.25,y:125.5},0).wait(81).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,125,395.5,194.5);
// library properties:
lib.properties = {
	id: '63FF9F044C3891449334EC260996D8AA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/320x250_atlas_1.png", id:"320x250_atlas_1"}
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