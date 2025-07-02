(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Pagina 1_atlas_1", frames: [[0,0,1200,1199],[0,1201,640,480]]}
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



(lib.InstagramLogoPNG = function() {
	this.initialize(ss["Pagina 1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.initialize(ss["Pagina 1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.play1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("dog_days_converted");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.text = new cjs.Text("reproducir", "50px 'Margareth Rosinante Demo'", "#33FFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 427;
	this.text.parent = this;
	this.text.setTransform(-2.3,-31);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghrAFKIAAqTMBDXAAAIAAKTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217.9,-33,433.6,71.5);


(lib.Inicio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("INICIO", "50px 'Margareth Rosinante Demo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 70;
	this.text.lineWidth = 167;
	this.text.parent = this;
	this.text.setTransform(0,-33.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-35.7,170.9,71.5);


// stage content:
(lib.Pagina1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.index.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa_1
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(560,207,0.6533,0.6708);

	this.instance_1 = new lib.InstagramLogoPNG();
	this.instance_1.setTransform(304,748,0.0438,0.0439);

	this.instance_2 = new lib.play1();
	this.instance_2.setTransform(762.05,639.3);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.index = new lib.Inicio();
	this.index.name = "index";
	this.index.setTransform(270.65,650.05);
	new cjs.ButtonHelper(this.index, 0, 1, 1);

	this.text = new cjs.Text("Happiness hit herLike a train on a trackComing towards herStuck still, no turning backShe hid around cornersAnd she hid under bedsShe killed it with kissesAnd from it she fledWith every bubbleShe sank with a drinkAnd washed it awayDown the kitchen sinkThe dog days are overThe dog days are doneThe horses are comingSo you better runRun fast for your motherRun fast for your fatherRun for your childrenFor your sisters and brothersLeave all your love and your longing behindYou can't carry it with you if you want to surviveThe dog days are overThe dog days are doneCan you hear the horses?'Cause here they comeAnd I never wantedAnything from youExcept everything you hadAnd what was left after that too, ohHappiness hit herLike a bullet in the backStruck from a great heightBy someone who should have known better than thatThe dog days are overThe dog days are doneCan you hear the horses?'Cause here they comeRun fast for your motherRun fast for your fatherRun for your childrenFor your sisters and brothersLeave all your love and your longing behindYou can't carry it with you if you want to surviveThe dog days are overThe dog days are doneCan you hear the horses?'Cause here they come (here they come)The dog days are overThe dog days are done (here they come)The horses are comingSo you better run", "13px 'Margareth Rosinante Demo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 515;
	this.text.parent = this;
	this.text.setTransform(271.65,183);

	this.text_1 = new cjs.Text("DOGS DAYS ARE OVER", "50px 'Margareth Rosinante Demo'", "#00FFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 70;
	this.text_1.lineWidth = 652;
	this.text_1.parent = this;
	this.text_1.setTransform(496.2,40.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EgxOgObIAAhZIasAAIAABZA2inxIAADII6sAAIAAjIAHMv0MBDaAAAIAAKUMhDaAAAgEhOpAH6MCdTAAAIAAH7MidTAAAg");
	this.shape.setTransform(500.35,699.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EBN8AM1Mib3AAAEhN7gM0MCb3AAA");
	this.shape_1.setTransform(498.825,80.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtVDVIAAmpIarAAIAAGpg");
	this.shape_2.setTransform(270.675,628.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EhOaA+tIAAn6MCdTAAAIAAH6gEBN8glCMib4AAAIi3AAIAA5qIC3AAMCb4AAAIC4AAIAAZqg");
	this.shape_3.setTransform(498.875,399.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("EhefBLSMAAAiWjMC8+AAAMAAACWjgEhL5A4FMCdTAAAIAAn6MidTAAAgEgueAZ0IAAGrIAADIIatAAIAAjIIAAmrIAAhYI6tAAgEAJ8AiwMBDZAAAIAAqUMhDZAAAgEhOSgrqIC3AAMCb4AAAIC4AAIAA5qIi4AAMib4AAAIi3AAg");
	this.shape_4.setTransform(482.75,442.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.index},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(378,361.9,709.5,562.1);
// library properties:
lib.properties = {
	id: '99439545A435CC4DBFA3196E207817D6',
	width: 1000,
	height: 803,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Pagina 1_atlas_1.png", id:"Pagina 1_atlas_1"},
		{src:"sounds/dog_days_converted.mp3", id:"dog_days_converted"}
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
an.compositions['99439545A435CC4DBFA3196E207817D6'] = {
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