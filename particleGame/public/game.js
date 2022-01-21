var CE;(()=>{"use strict";var t={906:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(308)),s=r(i(925)),n=r(i(873)),a=r(i(898)),u=function(){function t(t,e){var i=document.querySelector(t);this.configuration=new o.default,this.configuration.htmlCanvasElement=i,this.configuration.canvasWidth=i.clientWidth,this.configuration.canvasHeight=i.clientHeight,this.configuration.canvasElement2DContext=i.getContext("2d"),this.configuration.window=e,this.configuration.canvasElement2DContext.imageSmoothingEnabled=!1,this.controls=new s.default(this.configuration),this.draw=new n.default(this.configuration),this.loop=new a.default(this.configuration),this.initialize()}return t.prototype.initialize=function(){this.controls.initialize()},t}();e.default=u},308:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},925:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.KeyboardKeys=void 0;var n,a=s(i(929));(n=e.KeyboardKeys||(e.KeyboardKeys={}))[n.LEFT=39]="LEFT",n[n.RIGHT=37]="RIGHT",n[n.UP=38]="UP",n[n.DOWN=40]="DOWN",n[n.ENTER=13]="ENTER",n[n.SPACE=32]="SPACE",n[n.ESCAPE=27]="ESCAPE",n[n.SHIFT=16]="SHIFT";var u=function(t){function e(e){var i=t.call(this,e)||this;return i.currentKeys=new Set,i.mouseState={clientX:0,clientY:0,mouseDown:!1},i.setEvents(e.window),i}return o(e,t),e.prototype.initialize=function(){this.initialized=!0},e.prototype.setEvents=function(t){t.addEventListener("keydown",this.keyDown.bind(this),!1),t.addEventListener("keyup",this.keyUp.bind(this),!1),t.addEventListener("mousemove",this.mousemove.bind(this),!1),t.addEventListener("mousedown",this.mousedown.bind(this),!1),t.addEventListener("mouseup",this.mouseup.bind(this),!1)},e.prototype.keyDown=function(t){this.currentKeys.add(t.code)},e.prototype.keyUp=function(t){this.currentKeys.delete(t.code)},e.prototype.mousemove=function(t){this.mouseState.clientX=t.clientX,this.mouseState.clientY=t.clientY},e.prototype.mousedown=function(t){this.mouseState.mouseDown=!0},e.prototype.mouseup=function(t){this.mouseState.mouseDown=!1},e.prototype.read=function(){return this.currentKeys},e.prototype.isPressed=function(t){return this.currentKeys.has(t.toString())},e}(a.default);e.default=u},873:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.initialize=function(){this.initialized=!0},e.prototype.setEvents=function(t){},e.prototype.fillRect=function(t,e,i,r,o){this.configuration.canvasElement2DContext.fillStyle=o,this.configuration.canvasElement2DContext.fillRect(t,e,i,r)},e.prototype.clear=function(t){this.fillRect(0,0,this.configuration.canvasWidth,this.configuration.canvasHeight,t)},e.prototype.blit=function(t,e,i){this.configuration.canvasElement2DContext.drawImage(i.imageObject,t,e)},e.prototype.print=function(t,e,i,r){this.configuration.canvasElement2DContext.fillStyle=r,this.configuration.canvasElement2DContext.fillText(i,t,e)},e}(s(i(929)).default);e.default=n},929:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.initialized=!1,this.configuration=t}return t.prototype.initialize=function(t){this.setEvents(t)},t.prototype.setEvents=function(t){},t}();e.default=i},898:function(t,e,i){var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.setEvents=function(t){var e=this;t.requestAnimationFrame((function(){return e.doRender()}))},e.prototype.requestFrame=function(t){this.requestFrameFunction=t,this.setEvents(this.configuration.window)},e.prototype.doRender=function(){var t=this;this.requestFrameFunction&&this.requestFrameFunction(),window.requestAnimationFrame((function(){return t.doRender()}))},e}(s(i(929)).default);e.default=n},938:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(i(906));e.default=o.default},492:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(i(909)),s=r(i(938)),n=i(925),a=new s.default("#canvas",window),u=new o.default(a);u.initialize(),a.initialize();const l=a.draw.configuration.htmlCanvasElement;if(!l)throw new Error("Canvas Element (#canvas) does not exist.");var h=l.offsetLeft,c=l.offsetTop;document.querySelectorAll(".tool-changer").forEach((t=>{t.addEventListener("click",(t=>{var e=t.target;u.changeTool(parseInt(e.getAttribute("data-tool")))}))})),document.querySelectorAll("#btn-save-map").forEach((t=>{t.addEventListener("click",(t=>{try{u.map.exportMap(t)}catch(t){console.error(t)}}))})),document.querySelectorAll("#btn-load-map").forEach((t=>{t.addEventListener("click",(t=>{try{u.map.loadMap()}catch(t){console.error(t)}}))}));var d={x:0,y:0,on_map_x:0,on_map_y:0};a.loop.requestFrame((()=>{u.drawMap(d.x,d.y);const t=a.controls.mouseState.clientX-h,e=a.controls.mouseState.clientY-c;if(a.controls.isPressed(n.KeyboardKeys.DOWN)&&(d.y-=1,d.on_map_y+=u.TILE_SIZE),a.controls.isPressed(n.KeyboardKeys.UP)&&(d.y++,d.on_map_y-=u.TILE_SIZE),a.controls.isPressed(n.KeyboardKeys.RIGHT)&&(d.x--,d.on_map_x+=u.TILE_SIZE),a.controls.isPressed(n.KeyboardKeys.LEFT)&&(d.x++,d.on_map_x-=u.TILE_SIZE),a.controls.isPressed(n.KeyboardKeys.ENTER)&&u.map.generate(),a.controls.isPressed(n.KeyboardKeys.SPACE)&&(u.physicsOn=!u.physicsOn),a.controls.mouseState.mouseDown)for(var i=-1;i<1;i++)for(var r=-1;r<1;r++)u.addParticle(d.on_map_x+t+i,d.on_map_y+e+r,0)}))},909:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=r(i(862)),s=r(i(791)),n=r(i(150)),a=r(i(485)),u=r(i(221)),l=r(i(522)),h=r(i(710));e.default=class{constructor(t){this.map=new o.default,this.TILE_SIZE=5,this.currentTool=1,this.tools=[0,1,2,3,4,5,6],this.physicsOn=!0,this.calcTimer=()=>{this.physicsOn&&new Promise(((t,e)=>{this.map.calc(),t(!0)}))},this.initialize=()=>{setInterval(this.calcTimer,5)},this.addParticle=(t,e,i)=>{this.map.addParticle(Math.round(t/this.TILE_SIZE),Math.round(e/this.TILE_SIZE),this.createParticleOfTool(this.currentTool))},this.drawMap=(t,e)=>{var i;null===(i=this.context2D)||void 0===i||i.draw.clear("#A4BAB7"),this.map.forEachParticle(((i,r,o)=>{o&&(o.calculatedInCycle=!1),this.drawParticle(t+i,e+r,o)}))},this.drawParticle=(t,e,i)=>{if(!this.context2D)throw new Error("context2D should be set");this.context2D.draw.fillRect(t*this.TILE_SIZE,e*this.TILE_SIZE,this.TILE_SIZE,this.TILE_SIZE,i.primaryColor)},this.context2D=t}create(t){return new t}createParticleOfTool(t){switch(t){case 0:case 1:default:return new s.default;case 2:return new n.default;case 3:return new a.default;case 4:return new u.default;case 5:return new l.default;case 6:return new h.default}}changeTool(t){this.currentTool=t,console.log("change tool to",t)}}},324:(t,e)=>{var i,r;Object.defineProperty(e,"__esModule",{value:!0}),e.DIRECTION=e.AGGREGATESTATE=void 0,function(t){t[t.SOLID=0]="SOLID",t[t.LIQUID=1]="LIQUID",t[t.GASEOUS=2]="GASEOUS"}(i=e.AGGREGATESTATE||(e.AGGREGATESTATE={})),function(t){t[t.UP=0]="UP",t[t.UPRIGHT=1]="UPRIGHT",t[t.RIGHT=2]="RIGHT",t[t.RIGHTDOWN=3]="RIGHTDOWN",t[t.DOWN=4]="DOWN",t[t.DOWNLEFT=5]="DOWNLEFT",t[t.LEFT=6]="LEFT",t[t.LEFTUP=7]="LEFTUP"}(r=e.DIRECTION||(e.DIRECTION={})),e.default=class{constructor(){this.name="unknown",this.calculatedInCycle=!1,this.colors=["white"],this.primaryColor="",this.density=1,this.temperature=20,this.weight=100,this.acceleration=0,this.aggregateState=i.SOLID,this.conductivity=50,this.heatCapacity=.01,this.angle=0,this.brightness=0,this.spawner=!0,this.replaceWith=t=>{this.parentMapState&&(this.parentMapState.particles=this.parentMapState.particles.splice(this.parentMapState.particles.indexOf(this)),this.parentMapState.particles.push(t))},this.initialize=()=>{let t=Math.round(Math.random()*this.colors.length);this.primaryColor=this.colors[t]},this.calc=t=>{this.calculatedInCycle||(this.move(t.moveParticle),this.outerCircumstancesPerCycle(),this.calculatedInCycle=!0)},this.collision=t=>{t.temperature>this.temperature?this.temperature+=this.heatCapacity*t.temperature*Math.floor(2):this.temperature>t.temperature&&(this.temperature-=this.heatCapacity*t.temperature*Math.floor(2))},this.moveOutOrRandom=t=>{var e,i,o,s,n,a,u,l,h,c,d,f;0==(null===(o=null===(i=null===(e=this.parentMapState)||void 0===e?void 0:e.neighbours)||void 0===i?void 0:i.above)||void 0===o?void 0:o.particles.length)?t(r.UP):0==(null===(a=null===(n=null===(s=this.parentMapState)||void 0===s?void 0:s.neighbours)||void 0===n?void 0:n.below)||void 0===a?void 0:a.particles.length)?t(r.DOWN):0==(null===(h=null===(l=null===(u=this.parentMapState)||void 0===u?void 0:u.neighbours)||void 0===l?void 0:l.right)||void 0===h?void 0:h.particles.length)?t(r.RIGHT):0==(null===(f=null===(d=null===(c=this.parentMapState)||void 0===c?void 0:c.neighbours)||void 0===d?void 0:d.left)||void 0===f?void 0:f.particles.length)?t(r.LEFT):t(r.UP)},this.move=t=>{var e,o,s,n,a,u,l,h,c,d,f,p,v,g,y,_,S,E,b,m,T,O,w,I,P,A;if(this.parentMapState&&this.parentMapState.density>this.density)this.moveOutOrRandom(t);else if(this.aggregateState===i.GASEOUS)t(this,r.UP);else if(this.aggregateState===i.SOLID)this.weight>0&&(null===(o=null===(e=this.parentMapState)||void 0===e?void 0:e.neighbours)||void 0===o?void 0:o.below)&&(null===(a=null===(n=null===(s=this.parentMapState)||void 0===s?void 0:s.neighbours)||void 0===n?void 0:n.below)||void 0===a?void 0:a.density)<this.density?t(this,r.DOWN):this.weight<0&&t(this,r.UP);else if(this.aggregateState===i.LIQUID){if((null===(u=this.parentMapState)||void 0===u?void 0:u.density)>this.density&&0==(null===(c=null===(h=null===(l=this.parentMapState)||void 0===l?void 0:l.neighbours)||void 0===h?void 0:h.above)||void 0===c?void 0:c.density))return void t(this,r.UP);this.weight>0&&(null===(f=null===(d=this.parentMapState)||void 0===d?void 0:d.neighbours)||void 0===f?void 0:f.below)&&(null===(g=null===(v=null===(p=this.parentMapState)||void 0===p?void 0:p.neighbours)||void 0===v?void 0:v.below)||void 0===g?void 0:g.density)<=this.density/2?t(this,r.DOWN):(null===(S=null===(_=null===(y=this.parentMapState)||void 0===y?void 0:y.neighbours)||void 0===_?void 0:_.below)||void 0===S?void 0:S.density)>=this.density/2&&(null===(m=null===(b=null===(E=this.parentMapState)||void 0===E?void 0:E.neighbours)||void 0===b?void 0:b.left)||void 0===m?void 0:m.density)<=this.density&&(1==Math.floor(3*Math.random())&&0==(null===(w=null===(O=null===(T=this.parentMapState)||void 0===T?void 0:T.neighbours)||void 0===O?void 0:O.left)||void 0===w?void 0:w.density)?t(this,r.LEFT):0==Math.floor(2*Math.random())&&0==(null===(A=null===(P=null===(I=this.parentMapState)||void 0===I?void 0:I.neighbours)||void 0===P?void 0:P.right)||void 0===A?void 0:A.density)&&t(this,r.RIGHT))}},this.outerCircumstancesPerCycle=()=>{},this.initialize()}}},862:function(t,e,i){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=i(324),s=r(i(576)),n=r(i(221)),a=r(i(485)),u=r(i(150)),l=r(i(791)),h=r(i(522));e.default=class{constructor(){this.dataSource=[[]],this.CHUNK_SIZE=4,this.width=420,this.height=120,this.physics={temperature:20,gravity:0,windDirection:o.DIRECTION.RIGHT},this.generate=()=>{for(var t=0;t<this.height;t++){this.dataSource[t]=[];for(var e=0;e<this.width;e++)this.dataSource[t][e]=new s.default,0!=t&&0!=e&&e!=this.width-1&&t!=this.height-1||this.dataSource[t][e].particles.push(new h.default)}this.setNeigbours()},this.setNeigbours=()=>{for(var t=0;t<this.height;t++)for(var e=0;e<this.width;e++)this.dataSource[t][e].neighbours={above:t>0?this.dataSource[t-1][e]:void 0,below:t<this.height-1?this.dataSource[t+1][e]:void 0,right:e>0?this.dataSource[t][e+1]:void 0,left:e<this.width-1?this.dataSource[t][e-1]:void 0}},this.forEachParticleMapState=t=>{for(var e=this.height-1;e>0;e--)for(var i=0;i<this.width-1;i++)t(this.dataSource[e][i],i,e)},this.forEachParticleinChunk=(t,e)=>{const i=Math.round(this.width/this.CHUNK_SIZE),r=Math.round(this.height/this.CHUNK_SIZE);for(var o=t>i?t%i:t,s=Math.round(r/t),n=s*this.CHUNK_SIZE;n<s*this.CHUNK_SIZE+this.CHUNK_SIZE;n++)for(var a=o*this.CHUNK_SIZE;a<o*this.CHUNK_SIZE+this.CHUNK_SIZE;a++)n>=0&&a>=0&&n<this.height&&a<this.width&&e(this.dataSource[n][a],a,n)},this.forEachParticle=t=>{for(var e=0;e<this.height;e++)for(var i=0;i<this.width;i++)for(var r of this.dataSource[e][i].particles)e>=0&&i>=0&&e<this.height&&i<this.width&&t(i,e,r)},this.calc=()=>{Math.round(Math.floor(Math.random()*this.chunks)),this.forEachParticleMapState(((t,e,i)=>{t.calc(e,i)}))},this.generate()}get chunks(){return Math.round(this.width/this.CHUNK_SIZE*(this.height/this.CHUNK_SIZE))}addParticle(t,e,i){t>=0&&t<this.width-1&&e>=0&&e<this.height-1&&(i.parentMapState=this.dataSource[e][t],this.dataSource[e][t].particles.push(i),i.parentMapState.calc(t,e))}createParticle(){}loadMap(){for(var t=JSON.parse(localStorage.getItem("map")),e=0;e<this.height;e++)for(var i=0;i<this.width;i++){switch(t[e][i]){case 0:case 1:this.dataSource[e][i].particles.push(new l.default);break;case 2:this.dataSource[e][i].particles.push(new u.default);break;case 3:this.dataSource[e][i].particles.push(new a.default);break;case 4:this.dataSource[e][i].particles.push(new n.default);break;case 5:this.dataSource[e][i].particles.push(new h.default)}this.dataSource[e][i].particles.length>0&&(this.dataSource[e][i].particles[0].parentMapState=this.dataSource[e][i])}}exportMap(t){for(var e=[],i=0;i<this.height;i++){e[i]=[];for(var r=0;r<this.width;r++)if(0==this.dataSource[i][r].particles.length)e[i][r]=-1;else switch(this.dataSource[i][r].particles[0].name){case"water":e[i][r]=0;break;case"water":e[i][r]=1;break;case"stone":e[i][r]=2;break;case"lava":e[i][r]=3;break;case"grass":e[i][r]=4;break;case"border":e[i][r]=5}localStorage.setItem("map",JSON.stringify(e))}}}},576:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=i(324);e.default=class{constructor(){this.particles=[],this.calc=(t,e)=>{for(const t of this.particles)new Promise(((e,i)=>{t&&t.calc(this),e(!0)}))},this.moveParticle=(t,e)=>{var i,o,s,n,a,u,l,h,c,d,f,p,v,g,y,_;const S=this.particles.indexOf(t);(null===(i=this.neighbours)||void 0===i?void 0:i.below)&&(null===(o=this.neighbours)||void 0===o?void 0:o.below.particles.length)>0&&(null===(s=this.neighbours)||void 0===s||s.below.particles[0].collision(t)),(null===(n=this.neighbours)||void 0===n?void 0:n.above)&&(null===(a=this.neighbours)||void 0===a?void 0:a.above.particles.length)>0&&(null===(u=this.neighbours)||void 0===u||u.above.particles[0].collision(t)),(null===(l=this.neighbours)||void 0===l?void 0:l.left)&&(null===(h=this.neighbours)||void 0===h?void 0:h.left.particles.length)>0&&(null===(c=this.neighbours)||void 0===c||c.left.particles[0].collision(t)),(null===(d=this.neighbours)||void 0===d?void 0:d.right)&&(null===(f=this.neighbours)||void 0===f?void 0:f.right.particles.length)>0&&(null===(p=this.neighbours)||void 0===p||p.right.particles[0].collision(t)),this.particles.splice(S,1),e==r.DIRECTION.DOWN?(null===(v=this.neighbours)||void 0===v?void 0:v.below)&&(this.particles=this.particles.splice(S,1),this.neighbours.below.particles.push(t),t.parentMapState=this.neighbours.below):e==r.DIRECTION.UP?(null===(g=this.neighbours)||void 0===g?void 0:g.above)&&(this.particles=this.particles.splice(S,1),this.neighbours.above.particles.push(t),t.parentMapState=this.neighbours.above):e==r.DIRECTION.LEFT?(null===(y=this.neighbours)||void 0===y?void 0:y.left)&&(this.particles=this.particles.splice(S,1),this.neighbours.left.particles.push(t),t.parentMapState=this.neighbours.left):e==r.DIRECTION.RIGHT&&(null===(_=this.neighbours)||void 0===_?void 0:_.right)&&(this.particles=this.particles.splice(S,1),this.neighbours.right.particles.push(t),t.parentMapState=this.neighbours.right)}}get density(){var t=0;for(const e in this.particles)t+=this.particles[e].density;return t}calcCollisions(){for(const t of this.particles)for(const e of this.particles)t.collision(e)}}},221:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(324));class a extends n.default{constructor(){super(),this.name="grass",this.colors=["#136d15","#117c13","#138510"],this.density=2,this.aggregateState=n.AGGREGATESTATE.SOLID,this.outerCircumstancesPerCycle=()=>{this.aggregateState===n.AGGREGATESTATE.GASEOUS&&(this.weight=-1),this.temperature>100?(this.aggregateState=n.AGGREGATESTATE.GASEOUS,this.primaryColor="rgba(255,255,255,0.5)"):this.aggregateState=n.AGGREGATESTATE.SOLID},this.initialize()}}e.default=a},710:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(324));class a extends n.default{constructor(){super(),this.name="ice",this.colors=["rgba(255,255,255,0.5)","rgba(255,255,255,0.4)","rgba(255,255,255,0.6)","rgba(255,255,255,0.8)"],this.temperature=-4,this.aggregateState=n.AGGREGATESTATE.SOLID,this.outerCircumstancesPerCycle=()=>{this.temperature>=100?this.aggregateState=n.AGGREGATESTATE.GASEOUS:this.temperature>=0&&this.temperature<100?this.aggregateState=n.AGGREGATESTATE.LIQUID:this.temperature<0&&(this.aggregateState=n.AGGREGATESTATE.SOLID)},this.initialize()}}e.default=a},485:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(324)),u=n(i(150));class l extends a.default{constructor(){super(),this.name="lava",this.colors=["#ff2500","#ff6600","#f2f217","#f2f217","#ea5c0f"],this.density=1,this.conductivity=130,this.temperature=1200,this.aggregateState=a.AGGREGATESTATE.LIQUID,this.outerCircumstancesPerCycle=()=>{this.temperature>700?this.aggregateState=a.AGGREGATESTATE.LIQUID:this.temperature<=700&&(this.aggregateState=a.AGGREGATESTATE.SOLID,this.replaceWith(new u.default))},this.initialize()}}e.default=l},150:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(324));class a extends n.default{constructor(){super(),this.name="stone",this.colors=["rgba(100,100,90)","rgba(90,90,90)","rgba(100,100,100)"],this.density=8,this.conductivity=130,this.aggregateState=n.AGGREGATESTATE.SOLID,this.outerCircumstancesPerCycle=()=>{this.temperature>700?this.aggregateState=n.AGGREGATESTATE.LIQUID:this.temperature<=700&&(this.aggregateState=n.AGGREGATESTATE.SOLID)},this.initialize()}}e.default=a},791:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(324)),u=n(i(710));class l extends a.default{constructor(){super(),this.name="water",this.colors=["#0f5e9c","#2389da","#1ca3ec","#5abcd8"],this.density=1,this.conductivity=130,this.aggregateState=a.AGGREGATESTATE.LIQUID,this.outerCircumstancesPerCycle=()=>{this.aggregateState===a.AGGREGATESTATE.GASEOUS&&(this.weight=-1),this.temperature>=100?(this.aggregateState=a.AGGREGATESTATE.GASEOUS,this.primaryColor="rgba(255,255,255,0.5)"):this.temperature<100&&this.temperature>0?this.aggregateState=a.AGGREGATESTATE.LIQUID:this.temperature<0&&(this.aggregateState=a.AGGREGATESTATE.SOLID,this.replaceWith(new u.default))},this.initialize()}}e.default=l},522:function(t,e,i){var r=this&&this.__createBinding||(Object.create?function(t,e,i,r){void 0===r&&(r=i),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[i]}})}:function(t,e,i,r){void 0===r&&(r=i),t[r]=e[i]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)"default"!==i&&Object.prototype.hasOwnProperty.call(t,i)&&r(e,t,i);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const n=s(i(324));class a extends n.default{constructor(){super(),this.name="border",this.colors=["rgba(100,100,90)","rgba(90,90,90)","rgba(100,100,100)"],this.density=10,this.conductivity=130,this.weight=0,this.heatCapacity=.9,this.aggregateState=n.AGGREGATESTATE.SOLID,this.initialize()}}e.default=a}},e={},i=function i(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,i),s.exports}(492);CE=i.default})();