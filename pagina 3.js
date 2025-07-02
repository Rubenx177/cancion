(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pagina 3_atlas_1", frames: [[0,0,1200,1199],[1202,0,736,1040]]}
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
	this.initialize(ss["pagina 3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.initialize(ss["pagina 3_atlas_1"]);
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
		playSound("LadyGagaAbracadabraEspañolLyricsvideomusical",-1);
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
(lib.pagina3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.InstagramLogoPNG();
	this.instance.setTransform(302,740,0.0438,0.0439);

	this.instance_1 = new lib.Mapadebits2();
	this.instance_1.setTransform(584,173,0.4775,0.3883);

	this.instance_2 = new lib.play1();
	this.instance_2.setTransform(760,630.9);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.index = new lib.Inicio();
	this.index.name = "index";
	this.index.setTransform(268.6,641.65);
	new cjs.ButtonHelper(this.index, 0, 1, 1);

	this.text = new cjs.Text("Abracadabra, abracadabraAbracadabra, abracadabraPay the toll to the angelsDrawin' circles in the cloudsKeep your mind on the distanceWhen the devil turns aroundHold me in your heart tonightIn the magic of the dark moonlightSave me from this empty fightIn the game of lifeLike a poem said by a lady in redYou hear the last few words of your lifeWith a hauntin' dance, now you're both in a tranceIt's time to cast your spell on the nightAbracadabra, amor, ooh-na-naAbracadabra, morta, ooh-ga-gaAbracadabra, abra, ooh-na-naIn her tongue, she saidDeath or love tonightAbracadabra, abracadabraAbracadabra, abracadabraFeel the beat under your feet, the floor's on fireAbracadabra, abracadabraChoose the road on the west sideAs the dust flies, watch it burnDon't waste time on a feelin'Use your passion, no returnHold me in your heart tonightIn the magic of the dark moonlightSave me from this empty fightIn the game of lifeLike a poem said by a lady in redYou hear the last few words of your lifeWith a hauntin' dance, now you're both in a tranceIt's time to cast your spell on the nightAbracadabra, amor, ooh-na-naAbracadabra, morta, ooh-ga-gaAbracadabra, abra, ooh-na-naIn her tongue, she saidDeath or love tonightAbracadabra, abracadabraAbracadabra, abracadabraFeel the beat under your feet, the floor's on fireAbracadabra, abracadabraPhantom of the dance floor, come to meSing for me a sinful melodyAh-ah-ah-ah, ah-ah-ah-ahAh-ah-ah-ah, ah-ah-ah-ahAbracadabra, amor, ooh-na-naAbracadabra, morta, ooh-ga-gaAbracadabra, abra, ooh-na-naIn her tongue, she saidDeath or love tonight", "13px 'Margareth Rosinante Demo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 515;
	this.text.parent = this;
	this.text.setTransform(269.6,174.6);

	this.text_1 = new cjs.Text("ABRACADRABRA", "50px 'Margareth Rosinante Demo'", "#00FFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 70;
	this.text_1.lineWidth = 652;
	this.text_1.parent = this;
	this.text_1.setTransform(494.15,32);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("EhN7gM0MCb3AAAEBN8AM1Mib3AAA");
	this.shape.setTransform(496.775,72.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("A2inxIAADII6sAAIAAjIEgxOgObIAAhZIasAAIAABZAHNv0MBDZAAAIAAKUMhDZAAAgEhOpAH6MCdTAAAIAAH7MidTAAAg");
	this.shape_1.setTransform(498.3,691.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AtVDVIAAmpIarAAIAAGpg");
	this.shape_2.setTransform(268.625,620.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EhOaA+tIAAn6MCdTAAAIAAH6gEBN8glCMib4AAAIi3AAIAA5qIC3AAMCb4AAAIC4AAIAAZqg");
	this.shape_3.setTransform(496.825,391.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("EheeBLSMAAAiWjMC89AAAMAAACWjgEhL5A4FMCdTAAAIAAn6MidTAAAgEgueAZ0IAAGrIAADIIatAAIAAjIIAAmrIAAhYI6tAAgEAJ8AiwMBDaAAAIAAqUMhDaAAAgEhOSgrqIC3AAMCb4AAAIC4AAIAA5qIi4AAMib4AAAIi3AAg");
	this.shape_4.setTransform(480.7,433.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.index},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(376,352,709.5,563.6);
// library properties:
lib.properties = {
	id: '99439545A435CC4DBFA3196E207817D6',
	width: 1000,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pagina 3_atlas_1.png", id:"pagina 3_atlas_1"},
		{src:"sounds/LadyGagaAbracadabraEspañolLyricsvideomusical.mp3", id:"LadyGagaAbracadabraEspañolLyricsvideomusical"}
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