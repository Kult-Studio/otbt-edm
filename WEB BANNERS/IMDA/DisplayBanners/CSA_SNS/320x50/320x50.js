(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"320x50_atlas_1", frames: [[0,198,641,101],[915,276,48,49],[529,462,129,118],[780,103,134,171],[0,0,334,196],[643,276,270,75],[336,0,641,101],[0,404,527,105],[336,103,442,64],[0,301,641,101],[643,169,116,34],[529,404,418,56]]}
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
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f1globe = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1graphic = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1overlay = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f3buttonpngcopy = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["320x50_atlas_1"]);
	this.gotoAndStop(11);
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
	this.instance = new lib.f3buttonpngcopy();
	this.instance.setTransform(-58,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-58,-17,116,34), null);


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
	this.instance = new lib.f3logo();
	this.instance.setTransform(-209,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-209,-28,418,56), null);


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
	this.instance = new lib.f3bg();
	this.instance.setTransform(-300.5,-250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-300.5,-250.5,641,101), null);


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
	this.instance = new lib.f2text();
	this.instance.setTransform(-221,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-221,-32,442,64), null);


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
	this.instance = new lib.f2frame();
	this.instance.setTransform(-264,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-264,-53,527,105), null);


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
	this.instance = new lib.f2bg();
	this.instance.setTransform(-300.5,-250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-300.5,-250.5,641,101), null);


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
	this.instance.setTransform(-67,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-67,-86,134,171), null);


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
	this.instance = new lib.f1globe();
	this.instance.setTransform(-24,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-24,-25,48,49), null);


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
	this.instance = new lib.f1graphic();
	this.instance.setTransform(-65,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-65,-59,129,118), null);


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
	this.instance = new lib.f1text();
	this.instance.setTransform(-135,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-135,-38,270,75), null);


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
	this.instance = new lib.f1overlay();
	this.instance.setTransform(-167,-98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-167,-98,334,196), null);


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
	this.instance.setTransform(-300.5,-250.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-300.5,-250.5,641,101), null);


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

	// button
	this.instance = new lib.Symbol12();
	this.instance.setTransform(276.8,35,0.45,0.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).wait(1).to({scaleX:0.4593,scaleY:0.4593,y:33.1325,alpha:0.1867},0).wait(1).to({scaleX:0.4686,scaleY:0.4686,y:31.2763,alpha:0.3724},0).wait(1).to({scaleX:0.4778,scaleY:0.4778,y:29.4325,alpha:0.5568},0).wait(1).to({scaleX:0.487,scaleY:0.487,y:27.6013,alpha:0.7399},0).wait(1).to({scaleX:0.4961,scaleY:0.4961,y:25.7838,alpha:0.9216},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:276.8055,y:25,alpha:1},0).wait(1).to({x:276.8066},0).wait(1).to({x:276.8065},0).wait(1).to({x:276.8064},0).wait(1).to({x:276.8063},0).wait(1).to({x:276.8062},0).wait(1).to({x:276.8061},0).wait(1).to({x:276.806},0).wait(1).to({x:276.8059},0).wait(1).to({x:276.8058},0).wait(1).to({x:276.8057},0).wait(1).to({x:276.8055},0).wait(1).to({x:276.8054},0).wait(1).to({x:276.8053},0).wait(1).to({x:276.8052},0).wait(1).to({x:276.8051},0).wait(1).to({x:276.805},0).wait(1).to({x:276.8049},0).wait(1).to({x:276.8048},0).wait(1).to({x:276.8047},0).wait(1).to({x:276.8046},0).wait(1).to({x:276.8045},0).wait(1).to({x:276.8044},0).wait(2).to({x:276.8043},0).wait(1).to({x:276.8042},0).wait(1).to({x:276.8041},0).wait(1).to({x:276.804},0).wait(1).to({x:276.8039},0).wait(1).to({x:276.8038},0).wait(1).to({x:276.8037},0).wait(1).to({x:276.8036},0).wait(1).to({x:276.8035},0).wait(2).to({x:276.8034},0).wait(1).to({x:276.8033},0).wait(1).to({x:276.8032},0).wait(1).to({x:276.8031},0).wait(1).to({x:276.803},0).wait(2).to({x:276.8029},0).wait(1).to({x:276.8028},0).wait(1).to({x:276.8027},0).wait(1).to({x:276.8026},0).wait(2).to({x:276.8025},0).wait(1).to({x:276.8024},0).wait(1).to({x:276.8023},0).wait(1).to({x:276.8022},0).wait(2).to({x:276.8021},0).wait(1).to({x:276.802},0).wait(1).to({x:276.8019},0).wait(2).to({x:276.8018},0).wait(1).to({x:276.8017},0).wait(2).to({x:276.8016},0).wait(1).to({x:276.8015},0).wait(2).to({x:276.8014},0).wait(1).to({x:276.8013},0).wait(2).to({x:276.8012},0).wait(2).to({x:276.8011},0).wait(1).to({x:276.801},0).wait(2).to({x:276.8009},0).wait(2).to({x:276.8008},0).wait(1).to({x:276.8007},0).wait(2).to({x:276.8006},0).wait(2).to({x:276.8005},0).wait(2).to({x:276.8004},0).wait(2).to({x:276.8003},0).wait(2).to({x:276.8002},0).wait(2).to({x:276.8001},0).wait(2).to({x:276.8},0).wait(1).to({scaleX:0.4969,scaleY:0.4969,y:25.63,alpha:0.937},0).wait(1).to({scaleX:0.4898,scaleY:0.4898,y:27.045,alpha:0.7955},0).wait(1).to({scaleX:0.4828,scaleY:0.4828,y:28.4325,alpha:0.6568},0).wait(1).to({scaleX:0.476,scaleY:0.476,y:29.7975,alpha:0.5203},0).wait(1).to({scaleX:0.4693,scaleY:0.4693,y:31.135,alpha:0.3865},0).wait(1).to({scaleX:0.4628,scaleY:0.4628,y:32.4475,alpha:0.2553},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,y:33.735,alpha:0.1265},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:35,alpha:0},0).to({_off:true},1).wait(4));

	// logo
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(120.5,24,0.48,0.48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).wait(1).to({scaleX:0.4837,scaleY:0.4837,alpha:0.1869},0).wait(1).to({scaleX:0.4875,scaleY:0.4875,alpha:0.3726},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,alpha:0.5574},0).wait(1).to({scaleX:0.4948,scaleY:0.4948,alpha:0.7409},0).wait(1).to({scaleX:0.4985,scaleY:0.4985,alpha:0.9233},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(97).to({scaleX:0.4986,scaleY:0.4986,alpha:0.9308},0).wait(1).to({scaleX:0.4958,scaleY:0.4958,alpha:0.791},0).wait(1).to({scaleX:0.4931,scaleY:0.4931,alpha:0.6535},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,alpha:0.5182},0).wait(1).to({scaleX:0.4877,scaleY:0.4877,alpha:0.3853},0).wait(1).to({scaleX:0.4851,scaleY:0.4851,alpha:0.2548},0).wait(1).to({scaleX:0.4825,scaleY:0.4825,alpha:0.1263},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0},0).wait(1));

	// bg
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(150,125,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).wait(1).to({regX:20,regY:-200,x:160,y:25},0).wait(110));

	// text
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(160,25,0.4,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).wait(1).to({scaleX:0.4213,scaleY:0.4213,alpha:0.2133},0).wait(1).to({scaleX:0.4425,scaleY:0.4425,alpha:0.4246},0).wait(1).to({scaleX:0.4634,scaleY:0.4634,alpha:0.634},0).wait(1).to({scaleX:0.4841,scaleY:0.4841,alpha:0.8414},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(58).to({scaleX:0.4948,scaleY:0.4948,alpha:0.9475},0).wait(1).to({scaleX:0.4843,scaleY:0.4843,alpha:0.8425},0).wait(1).to({scaleX:0.474,scaleY:0.474,alpha:0.7398},0).wait(1).to({scaleX:0.4639,scaleY:0.4639,alpha:0.6393},0).wait(1).to({scaleX:0.4541,scaleY:0.4541,alpha:0.5412},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,alpha:0.4453},0).wait(1).to({scaleX:0.4352,scaleY:0.4352,alpha:0.3517},0).wait(1).to({scaleX:0.426,scaleY:0.426,alpha:0.2603},0).wait(1).to({scaleX:0.4171,scaleY:0.4171,alpha:0.1713},0).wait(1).to({scaleX:0.4085,scaleY:0.4085,alpha:0.0845},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(127));

	// frame
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(160,196.25,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).wait(1).to({regX:-0.5,regY:-0.5,x:159.75,y:164,alpha:0.1867},0).wait(1).to({y:132.25,alpha:0.372},0).wait(1).to({y:100.8,alpha:0.5559},0).wait(1).to({y:69.55,alpha:0.7381},0).wait(1).to({y:38.6,alpha:0.919},0).wait(1).to({y:24.75,alpha:1},0).wait(70).to({y:25.5,alpha:0.9954},0).wait(1).to({y:46.05,alpha:0.8754},0).wait(1).to({y:66.2,alpha:0.7578},0).wait(1).to({y:85.95,alpha:0.6424},0).wait(1).to({y:105.3,alpha:0.5296},0).wait(1).to({y:124.2,alpha:0.419},0).wait(1).to({y:142.8,alpha:0.3106},0).wait(1).to({y:160.9,alpha:0.2048},0).wait(1).to({y:178.65,alpha:0.1012},0).wait(1).to({y:196,alpha:0},0).to({_off:true},1).wait(122));

	// bg
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(150,125,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).wait(1).to({regX:20,regY:-200,x:160,y:25,alpha:0.1495},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.4456},0).wait(1).to({alpha:0.5923},0).wait(1).to({alpha:0.7379},0).wait(1).to({alpha:0.8826},0).wait(1).to({alpha:1},0).wait(97).to({_off:true},1).wait(110));

	// hand
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(34,155.2,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(1).to({regY:-0.5,x:45.2,y:138.6},0).wait(1).to({x:60.35,y:120},0).wait(1).to({x:81.2,y:98.9},0).wait(1).to({x:108.45,y:77.1},0).wait(1).to({x:137.9,y:59.15},0).wait(1).to({x:164,y:47.3},0).wait(1).to({x:185.55,y:40.1},0).wait(1).to({x:203.55,y:35.75},0).wait(1).to({x:201.15,y:34.7},0).wait(1).to({x:198.75,y:33.65},0).wait(1).to({x:196.4,y:32.6},0).wait(35).to({x:183.15,y:47.75,alpha:0.8571},0).wait(1).to({x:172.25,y:64.2,alpha:0.7143},0).wait(1).to({x:163.9,y:81.8,alpha:0.5714},0).wait(1).to({x:158.3,y:100.4,alpha:0.4286},0).wait(1).to({x:155.55,y:119.8,alpha:0.2857},0).wait(1).to({x:155.5,y:139.7,alpha:0.1429},0).wait(1).to({x:158.1,y:160,alpha:0},0).to({_off:true},1).wait(227));

	// globe
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(232,9,0.3,0.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).wait(1).to({regY:-0.5,scaleX:0.4,scaleY:0.4,y:8.8,alpha:0.3333},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:8.75,alpha:0.6667},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:8.7,alpha:1},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:8.75},0).wait(33).to({scaleX:0.4875,scaleY:0.4875,alpha:0.875},0).wait(1).to({scaleX:0.475,scaleY:0.475,alpha:0.75},0).wait(1).to({scaleX:0.4625,scaleY:0.4625,alpha:0.625},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:8.8,alpha:0.5},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,alpha:0.375},0).wait(1).to({scaleX:0.425,scaleY:0.425,alpha:0.25},0).wait(1).to({scaleX:0.4125,scaleY:0.4125,alpha:0.125},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(227));

	// graphic
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(207,41,0.4,0.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({regX:-0.5,scaleX:0.4136,scaleY:0.4136,x:206.8,alpha:0.1356},0).wait(1).to({scaleX:0.427,scaleY:0.427,alpha:0.2698},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,alpha:0.4026},0).wait(1).to({scaleX:0.4534,scaleY:0.4534,x:206.75,alpha:0.5341},0).wait(1).to({scaleX:0.4664,scaleY:0.4664,alpha:0.664},0).wait(1).to({scaleX:0.4793,scaleY:0.4793,alpha:0.7925},0).wait(1).to({scaleX:0.492,scaleY:0.492,alpha:0.9197},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(43).to({scaleX:0.4978,scaleY:0.4978,alpha:0.9776},0).wait(1).to({scaleX:0.4891,scaleY:0.4891,alpha:0.8906},0).wait(1).to({scaleX:0.4806,scaleY:0.4806,alpha:0.8058},0).wait(1).to({scaleX:0.4723,scaleY:0.4723,alpha:0.7228},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,alpha:0.6416},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,alpha:0.5625},0).wait(1).to({scaleX:0.4485,scaleY:0.4485,x:206.8,alpha:0.4854},0).wait(1).to({scaleX:0.441,scaleY:0.441,alpha:0.4103},0).wait(1).to({scaleX:0.4337,scaleY:0.4337,alpha:0.337},0).wait(1).to({scaleX:0.4266,scaleY:0.4266,alpha:0.2656},0).wait(1).to({scaleX:0.4196,scaleY:0.4196,alpha:0.1964},0).wait(1).to({scaleX:0.4129,scaleY:0.4129,alpha:0.129},0).wait(1).to({scaleX:0.4064,scaleY:0.4064,alpha:0.0635},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(223));

	// text
	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(-135,28.7,0.5,0.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:-0.5,x:-110.35,y:28.45,alpha:0.1148},0).wait(1).to({x:-85.9,alpha:0.2288},0).wait(1).to({x:-61.65,alpha:0.3418},0).wait(1).to({x:-37.65,alpha:0.4537},0).wait(1).to({x:-13.8,alpha:0.5647},0).wait(1).to({x:9.75,alpha:0.6748},0).wait(1).to({x:33.15,alpha:0.7838},0).wait(1).to({x:56.3,alpha:0.8918},0).wait(1).to({x:79.3,alpha:0.999},0).wait(1).to({x:79.55,y:28.4,alpha:1},0).wait(54).to({x:77.75,y:28.45,alpha:0.9917},0).wait(1).to({x:61.45,alpha:0.9157},0).wait(1).to({x:45.45,alpha:0.8411},0).wait(1).to({x:29.75,alpha:0.768},0).wait(1).to({x:14.35,alpha:0.6962},0).wait(1).to({x:-0.7,alpha:0.6259},0).wait(1).to({x:-15.45,alpha:0.557},0).wait(1).to({x:-29.95,alpha:0.4896},0).wait(1).to({x:-44.1,alpha:0.4234},0).wait(1).to({x:-58,alpha:0.3587},0).wait(1).to({x:-71.6,alpha:0.2954},0).wait(1).to({x:-84.85,alpha:0.2336},0).wait(1).to({x:-97.85,alpha:0.173},0).wait(1).to({x:-110.5,alpha:0.114},0).wait(1).to({x:-122.9,alpha:0.0563},0).wait(1).to({x:-135,alpha:0},0).to({_off:true},1).wait(219));

	// overlay
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(242.45,13.25,0.5,0.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({y:13.2496,alpha:0.1148},0).wait(1).to({y:13.2492,alpha:0.2288},0).wait(1).to({y:13.2488,alpha:0.3419},0).wait(1).to({y:13.2484,alpha:0.4541},0).wait(1).to({y:13.2481,alpha:0.5653},0).wait(1).to({y:13.2477,alpha:0.6756},0).wait(1).to({y:13.2473,alpha:0.7849},0).wait(1).to({y:13.2469,alpha:0.8934},0).wait(1).to({y:13.2466,alpha:1},0).wait(1).to({y:13.2462},0).wait(1).to({y:13.2458},0).wait(1).to({y:13.2455},0).wait(1).to({y:13.2451},0).wait(1).to({y:13.2448},0).wait(1).to({y:13.2444},0).wait(1).to({y:13.2441},0).wait(1).to({y:13.2437},0).wait(1).to({y:13.2434},0).wait(1).to({y:13.2431},0).wait(1).to({y:13.2427},0).wait(1).to({y:13.2424},0).wait(1).to({y:13.2421},0).wait(1).to({y:13.2417},0).wait(2).to({y:13.2419},0).wait(1).to({y:13.2421},0).wait(1).to({y:13.2422},0).wait(1).to({y:13.2424},0).wait(1).to({y:13.2426},0).wait(1).to({y:13.2428},0).wait(1).to({y:13.243},0).wait(1).to({y:13.2432},0).wait(1).to({y:13.2434},0).wait(1).to({y:13.2436},0).wait(1).to({y:13.2437},0).wait(1).to({y:13.2439},0).wait(1).to({y:13.2441},0).wait(1).to({y:13.2443},0).wait(1).to({y:13.2444},0).wait(1).to({y:13.2446},0).wait(1).to({y:13.2448},0).wait(1).to({y:13.2449},0).wait(1).to({y:13.2451},0).wait(1).to({y:13.2453},0).wait(1).to({y:13.2454},0).wait(1).to({y:13.2456},0).wait(1).to({y:13.2457},0).wait(1).to({y:13.2459},0).wait(1).to({y:13.246},0).wait(1).to({y:13.2462},0).wait(1).to({y:13.2463},0).wait(1).to({y:13.2465},0).wait(1).to({y:13.2466},0).wait(1).to({y:13.2468},0).wait(1).to({y:13.2469},0).wait(1).to({y:13.247},0).wait(1).to({y:13.2472},0).wait(1).to({y:13.2473},0).wait(1).to({y:13.2474},0).wait(1).to({y:13.2476},0).wait(1).to({y:13.2477},0).wait(1).to({y:13.2478},0).wait(1).to({y:13.2479},0).wait(1).to({y:13.2481},0).wait(1).to({y:13.2482},0).wait(1).to({y:13.2483},0).wait(1).to({y:13.2484,alpha:0.9543},0).wait(1).to({y:13.2485,alpha:0.8856},0).wait(1).to({y:13.2486,alpha:0.8181},0).wait(1).to({y:13.2488,alpha:0.7519},0).wait(1).to({y:13.2489,alpha:0.6868},0).wait(1).to({y:13.249,alpha:0.6229},0).wait(1).to({y:13.2491,alpha:0.5603},0).wait(1).to({y:13.2492,alpha:0.4988},0).wait(1).to({y:13.2493,alpha:0.4386},0).wait(1).to({y:13.2494,alpha:0.3796},0).wait(1).to({y:13.2495,alpha:0.3217},0).wait(1).to({y:13.2496,alpha:0.2651},0).wait(1).to({y:13.2497,alpha:0.2097},0).wait(1).to({alpha:0.1555},0).wait(1).to({y:13.2498,alpha:0.1025},0).wait(1).to({y:13.2499,alpha:0.0507},0).wait(1).to({y:13.25,alpha:0},0).to({_off:true},1).wait(215));

	// bg
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(150.25,125.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:20,regY:-200,x:160.25,y:25.25},0).wait(92).to({_off:true},1).wait(205));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-10.7,368.5,233);
// library properties:
lib.properties = {
	id: '6046552A2DB9E74EA29CC014160D0BBD',
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
an.compositions['6046552A2DB9E74EA29CC014160D0BBD'] = {
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