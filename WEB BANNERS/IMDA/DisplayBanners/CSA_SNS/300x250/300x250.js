(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_1", frames: [[0,0,601,501],[1809,0,143,146],[1126,503,360,328],[1488,503,273,364],[0,503,611,479],[1468,869,451,207],[603,0,601,501],[613,503,511,409],[1126,833,340,276],[1206,0,601,501],[1763,503,283,81],[613,914,503,176]]}
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



(lib.f1globe = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f1graphic = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.f1hand = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1overlay = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f1text = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f2bg = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.f2frame = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.f2text = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.f3bg = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.f3buttonpngcopy = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.f3logo = function() {
	this.initialize(ss["300x250_atlas_1"]);
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
	this.instance.setTransform(-141.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-141.5,-40.5,283,81), null);


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
	this.instance.setTransform(-251.5,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-251.5,-88,503,176), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-300.5,-250.5,601,501), null);


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
	this.instance.setTransform(-170,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-170,-138,340,276), null);


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
	this.instance.setTransform(-255.5,-204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-255.5,-204.5,511,409), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-300.5,-250.5,601,501), null);


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
	this.instance.setTransform(-136.5,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-136.5,-182,273,364), null);


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
	this.instance.setTransform(-71.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-71.5,-73,143,146), null);


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
	this.instance.setTransform(-180,-164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-180,-164,360,328), null);


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
	this.instance.setTransform(-225.5,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-225.5,-103.5,451,207), null);


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
	this.instance.setTransform(-305.5,-239.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-305.5,-239.5,611,479), null);


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

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-300.5,-250.5,601,501), null);


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

	// button
	this.instance = new lib.Symbol12();
	this.instance.setTransform(150,200,0.45,0.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({_off:false},0).wait(1).to({scaleX:0.4593,scaleY:0.4593,y:198.1325,alpha:0.1867},0).wait(1).to({scaleX:0.4686,scaleY:0.4686,y:196.2763,alpha:0.3724},0).wait(1).to({scaleX:0.4778,scaleY:0.4778,y:194.4325,alpha:0.5568},0).wait(1).to({scaleX:0.487,scaleY:0.487,y:192.6013,alpha:0.7399},0).wait(1).to({scaleX:0.4961,scaleY:0.4961,y:190.7838,alpha:0.9216},0).wait(1).to({scaleX:0.5,scaleY:0.5,y:190,alpha:1},0).wait(86).to({scaleX:0.4969,scaleY:0.4969,y:190.63,alpha:0.937},0).wait(1).to({scaleX:0.4898,scaleY:0.4898,y:192.045,alpha:0.7955},0).wait(1).to({scaleX:0.4828,scaleY:0.4828,y:193.4325,alpha:0.6568},0).wait(1).to({scaleX:0.476,scaleY:0.476,y:194.7975,alpha:0.5203},0).wait(1).to({scaleX:0.4693,scaleY:0.4693,y:196.135,alpha:0.3865},0).wait(1).to({scaleX:0.4628,scaleY:0.4628,y:197.4475,alpha:0.2553},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,y:198.735,alpha:0.1265},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:200,alpha:0},0).to({_off:true},1).wait(4));

	// logo
	this.instance_1 = new lib.Symbol11();
	this.instance_1.setTransform(150,90,0.48,0.48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(188).to({_off:false},0).wait(1).to({scaleX:0.4837,scaleY:0.4837,alpha:0.1869},0).wait(1).to({scaleX:0.4875,scaleY:0.4875,alpha:0.3726},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,alpha:0.5574},0).wait(1).to({scaleX:0.4948,scaleY:0.4948,alpha:0.7409},0).wait(1).to({scaleX:0.4985,scaleY:0.4985,alpha:0.9233},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(97).to({scaleX:0.4986,scaleY:0.4986,alpha:0.9308},0).wait(1).to({scaleX:0.4958,scaleY:0.4958,alpha:0.791},0).wait(1).to({scaleX:0.4931,scaleY:0.4931,alpha:0.6535},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,alpha:0.5182},0).wait(1).to({scaleX:0.4877,scaleY:0.4877,alpha:0.3853},0).wait(1).to({scaleX:0.4851,scaleY:0.4851,alpha:0.2548},0).wait(1).to({scaleX:0.4825,scaleY:0.4825,alpha:0.1263},0).wait(1).to({scaleX:0.48,scaleY:0.48,alpha:0},0).wait(1));

	// bg
	this.instance_2 = new lib.Symbol10();
	this.instance_2.setTransform(150,125,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).wait(111));

	// text
	this.instance_3 = new lib.Symbol9();
	this.instance_3.setTransform(150,125,0.4,0.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).wait(1).to({scaleX:0.4213,scaleY:0.4213,alpha:0.2133},0).wait(1).to({scaleX:0.4425,scaleY:0.4425,alpha:0.4246},0).wait(1).to({scaleX:0.4634,scaleY:0.4634,alpha:0.634},0).wait(1).to({scaleX:0.4841,scaleY:0.4841,alpha:0.8414},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(58).to({scaleX:0.4948,scaleY:0.4948,alpha:0.9475},0).wait(1).to({scaleX:0.4843,scaleY:0.4843,alpha:0.8425},0).wait(1).to({scaleX:0.474,scaleY:0.474,alpha:0.7398},0).wait(1).to({scaleX:0.4639,scaleY:0.4639,alpha:0.6393},0).wait(1).to({scaleX:0.4541,scaleY:0.4541,alpha:0.5412},0).wait(1).to({scaleX:0.4445,scaleY:0.4445,alpha:0.4453},0).wait(1).to({scaleX:0.4352,scaleY:0.4352,alpha:0.3517},0).wait(1).to({scaleX:0.426,scaleY:0.426,alpha:0.2603},0).wait(1).to({scaleX:0.4171,scaleY:0.4171,alpha:0.1713},0).wait(1).to({scaleX:0.4085,scaleY:0.4085,alpha:0.0845},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(127));

	// frame
	this.instance_4 = new lib.Symbol8();
	this.instance_4.setTransform(150,296.25,0.5,0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).wait(1).to({y:264.2691,alpha:0.1867},0).wait(1).to({y:232.545,alpha:0.372},0).wait(1).to({y:201.0564,alpha:0.5559},0).wait(1).to({y:169.8461,alpha:0.7381},0).wait(1).to({y:138.8713,alpha:0.919},0).wait(1).to({y:125,alpha:1},0).wait(70).to({y:125.7878,alpha:0.9954},0).wait(1).to({y:146.3378,alpha:0.8754},0).wait(1).to({y:166.4768,alpha:0.7578},0).wait(1).to({y:186.239,alpha:0.6424},0).wait(1).to({y:205.556,alpha:0.5296},0).wait(1).to({y:224.4963,alpha:0.419},0).wait(1).to({y:243.0598,alpha:0.3106},0).wait(1).to({y:261.178,alpha:0.2048},0).wait(1).to({y:278.9195,alpha:0.1012},0).wait(1).to({y:296.25,alpha:0},0).to({_off:true},1).wait(122));

	// bg
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(150,125,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).wait(1).to({alpha:0.1495},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.4456},0).wait(1).to({alpha:0.5923},0).wait(1).to({alpha:0.7379},0).wait(1).to({alpha:0.8826},0).wait(1).to({alpha:1},0).wait(97).to({_off:true},1).wait(110));

	// hand
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(-65.65,315.45,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(1).to({x:-54.4191,y:299.1458},0).wait(1).to({x:-39.271,y:280.5139},0).wait(1).to({x:-18.4146,y:259.4082},0).wait(1).to({x:8.8389,y:237.614},0).wait(1).to({x:38.2807,y:219.6938},0).wait(1).to({x:64.3624,y:207.8471},0).wait(1).to({x:85.9344,y:200.6063},0).wait(1).to({x:103.9,y:196.25},0).wait(1).to({x:101.5167,y:195.2},0).wait(1).to({x:99.1333,y:194.15},0).wait(1).to({x:96.75,y:193.1},0).wait(35).to({x:83.5271,y:208.2979,alpha:0.8571},0).wait(1).to({x:72.6096,y:224.7431,alpha:0.7143},0).wait(1).to({x:64.2665,y:242.3405,alpha:0.5714},0).wait(1).to({x:58.6773,y:260.9329,alpha:0.4286},0).wait(1).to({x:55.9039,y:280.3135,alpha:0.2857},0).wait(1).to({x:55.8848,y:300.2478,alpha:0.1429},0).wait(1).to({x:58.45,y:320.5,alpha:0},0).to({_off:true},1).wait(227));

	// globe
	this.instance_7 = new lib.Symbol5();
	this.instance_7.setTransform(162.45,133.55,0.3,0.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0.3333},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:0.6667},0).wait(1).to({scaleX:0.6,scaleY:0.6,alpha:1},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(33).to({scaleX:0.4875,scaleY:0.4875,alpha:0.875},0).wait(1).to({scaleX:0.475,scaleY:0.475,alpha:0.75},0).wait(1).to({scaleX:0.4625,scaleY:0.4625,alpha:0.625},0).wait(1).to({scaleX:0.45,scaleY:0.45,alpha:0.5},0).wait(1).to({scaleX:0.4375,scaleY:0.4375,alpha:0.375},0).wait(1).to({scaleX:0.425,scaleY:0.425,alpha:0.25},0).wait(1).to({scaleX:0.4125,scaleY:0.4125,alpha:0.125},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(227));

	// graphic
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(72.45,215.55,0.4,0.4);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({scaleX:0.4136,scaleY:0.4136,alpha:0.1356},0).wait(1).to({scaleX:0.427,scaleY:0.427,alpha:0.2698},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,alpha:0.4026},0).wait(1).to({scaleX:0.4534,scaleY:0.4534,alpha:0.5341},0).wait(1).to({scaleX:0.4664,scaleY:0.4664,alpha:0.664},0).wait(1).to({scaleX:0.4793,scaleY:0.4793,alpha:0.7925},0).wait(1).to({scaleX:0.492,scaleY:0.492,alpha:0.9197},0).wait(1).to({scaleX:0.5,scaleY:0.5,alpha:1},0).wait(43).to({scaleX:0.4978,scaleY:0.4978,alpha:0.9776},0).wait(1).to({scaleX:0.4891,scaleY:0.4891,alpha:0.8906},0).wait(1).to({scaleX:0.4806,scaleY:0.4806,alpha:0.8058},0).wait(1).to({scaleX:0.4723,scaleY:0.4723,alpha:0.7228},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,alpha:0.6416},0).wait(1).to({scaleX:0.4563,scaleY:0.4563,alpha:0.5625},0).wait(1).to({scaleX:0.4485,scaleY:0.4485,alpha:0.4854},0).wait(1).to({scaleX:0.441,scaleY:0.441,alpha:0.4103},0).wait(1).to({scaleX:0.4337,scaleY:0.4337,alpha:0.337},0).wait(1).to({scaleX:0.4266,scaleY:0.4266,alpha:0.2656},0).wait(1).to({scaleX:0.4196,scaleY:0.4196,alpha:0.1964},0).wait(1).to({scaleX:0.4129,scaleY:0.4129,alpha:0.129},0).wait(1).to({scaleX:0.4064,scaleY:0.4064,alpha:0.0635},0).wait(1).to({scaleX:0.4,scaleY:0.4,alpha:0},0).to({_off:true},1).wait(223));

	// text
	this.instance_9 = new lib.Symbol3();
	this.instance_9.setTransform(-78.75,73.95,0.5,0.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({x:-54.1098,alpha:0.1148},0).wait(1).to({x:-29.6676,alpha:0.2288},0).wait(1).to({x:-5.4234,alpha:0.3418},0).wait(1).to({x:18.5897,alpha:0.4537},0).wait(1).to({x:42.4047,alpha:0.5647},0).wait(1).to({x:66.0217,alpha:0.6748},0).wait(1).to({x:89.4077,alpha:0.7838},0).wait(1).to({x:112.5956,alpha:0.8918},0).wait(1).to({x:135.5855,alpha:0.999},0).wait(1).to({x:135.8,alpha:1},0).wait(54).to({x:134.0121,alpha:0.9917},0).wait(1).to({x:117.7063,alpha:0.9157},0).wait(1).to({x:101.7104,alpha:0.8411},0).wait(1).to({x:86.0244,alpha:0.768},0).wait(1).to({x:70.6245,alpha:0.6962},0).wait(1).to({x:55.5345,alpha:0.6259},0).wait(1).to({x:40.7544,alpha:0.557},0).wait(1).to({x:26.2841,alpha:0.4896},0).wait(1).to({x:12.1,alpha:0.4234},0).wait(1).to({x:-1.7981,alpha:0.3587},0).wait(1).to({x:-15.3624,alpha:0.2954},0).wait(1).to({x:-28.6407,alpha:0.2336},0).wait(1).to({x:-41.6328,alpha:0.173},0).wait(1).to({x:-54.2913,alpha:0.114},0).wait(1).to({x:-66.6637,alpha:0.0563},0).wait(1).to({x:-78.75,alpha:0},0).to({_off:true},1).wait(219));

	// overlay
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(148.75,121.3,0.5,0.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({alpha:0.0786},0).wait(1).to({alpha:0.1566},0).wait(1).to({alpha:0.2339},0).wait(1).to({alpha:0.3107},0).wait(1).to({alpha:0.3868},0).wait(1).to({alpha:0.4623},0).wait(1).to({alpha:0.5371},0).wait(1).to({alpha:0.6113},0).wait(1).to({alpha:0.6848},0).wait(1).to({alpha:0.7577},0).wait(1).to({alpha:0.8301},0).wait(1).to({alpha:0.9017},0).wait(1).to({alpha:0.9727},0).wait(1).to({alpha:1},0).wait(54).to({alpha:0.984},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.8354},0).wait(1).to({alpha:0.7631},0).wait(1).to({alpha:0.6921},0).wait(1).to({alpha:0.6226},0).wait(1).to({alpha:0.5542},0).wait(1).to({alpha:0.4873},0).wait(1).to({alpha:0.4218},0).wait(1).to({alpha:0.3574},0).wait(1).to({alpha:0.2946},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.1728},0).wait(1).to({alpha:0.1139},0).wait(1).to({alpha:0.0563},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(215));

	// bg
	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(150.25,125.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(93).to({_off:true},1).wait(205));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,124.8,343,286.7);
// library properties:
lib.properties = {
	id: '6046552A2DB9E74EA29CC014160D0BBD',
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