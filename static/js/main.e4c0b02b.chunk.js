(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),i=n.n(c),o=n(2),s=n(15),u=n(5),l=n.n(u),d=n(7),j=n(3),b=n(0),O=function(t){var e=t.song,n=t.audioRef,a=Object(o.b)(),r={songs:Object(o.c)((function(t){return t.songs})),isPlaying:Object(o.c)((function(t){return t.isPlaying})),currentSong:Object(o.c)((function(t){return t.currentSong}))},c=r.songs,i=r.isPlaying,s=r.currentSong,u=function(){var t=Object(d.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem("song",JSON.stringify(e)),t.next=3,a({type:"SET_CURRENT_SONG",payload:e});case 3:r=c.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{active:!0}):Object(j.a)(Object(j.a)({},t),{},{active:!1})})),a({type:"SET_SONGS",payload:r}),i&&n.current.play();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:u,className:"library-song ".concat(e.id===s.id?"selected":""),children:[Object(b.jsx)("img",{src:e.cover,alt:e.name}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("h4",{children:e.artist})]})]})},p=n(8),g=n(6),f=n.p+"static/media/exit.96711cae.svg",y=function(t){var e=t.audioRef,n=Object(o.b)(),r=function(){var t=Object(o.c)((function(t){return t.songs})),e=Object(o.c)((function(t){return t.libraryStatus})),n=Object(o.c)((function(t){return t.currentSong})),a=Object(o.c)((function(t){return t.isPlaying})),r=Object(o.c)((function(t){return t.visibleSongs}));return{songs:t,libraryStatus:e,isPlaying:a,searchInputValue:Object(o.c)((function(t){return t.searchInputValue})),currentSong:n,visibleSongs:r}}(),c=r.songs,i=r.libraryStatus,s=r.searchInputValue,u=r.visibleSongs,l=function(t,e){return 0===e.length?t:t.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1||t.artist.toLowerCase().indexOf(e.toLowerCase())>-1}))}(c,s);Object(a.useEffect)((function(){n({type:"SET_VISIBLE_SONGS",payload:l})}),[s]);return Object(b.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(b.jsxs)("div",{className:"library-header",children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("img",{src:f,alt:"",onClick:function(){n({type:"SET_LIBRARY_STATUS",payload:!1})}})]}),Object(b.jsxs)("div",{className:"library-search",style:{marginBottom:s?null:"2rem"},children:[Object(b.jsx)(p.a,{icon:g.e}),Object(b.jsx)("input",{type:"text",placeholder:"Seacrh music",value:s,onChange:function(t){n({type:"SET_SEARCH_INPUT_VALUE",payload:t.target.value})}}),s?Object(b.jsx)("h3",{style:{marginLeft:"10%",marginBottom:"1rem",marginTop:"1rem"},children:"Searched songs:"}):null]}),Object(b.jsx)("div",{className:"library-songs",children:u?u.map((function(t){return Object(b.jsx)(O,{song:t,audioRef:e},t.id)})):c.map((function(t){return Object(b.jsx)(O,{song:t,audioRef:e},t.id)}))})]})},S=function(t,e){if(t){var n=e.current.play();void 0!==n&&n.then((function(t){e.current.play()})).catch((function(t){return console.log(t)}))}},h=function(t){var e=t.audioRef,n=Object(o.b)(),a={songs:Object(o.c)((function(t){return t.songs})),songInfo:Object(o.c)((function(t){return t.songInfo})),currentSong:Object(o.c)((function(t){return t.currentSong})),isPlaying:Object(o.c)((function(t){return t.isPlaying}))},r=a.songs,c=a.songInfo,i=a.currentSong,s=a.isPlaying,u=function(t){var e=r.map((function(e){return e.id===t.id?(localStorage.setItem("song",JSON.stringify(e)),Object(j.a)(Object(j.a)({},e),{},{active:!0})):Object(j.a)(Object(j.a)({},e),{},{active:!1})}));n({type:"SET_SONGS",payload:e})},O={transform:"translateX(".concat(c.animationPercentage,"%)")};function f(t){return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}var y=function(){var t=Object(d.a)(l.a.mark((function t(a){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=r.findIndex((function(t){return t.id===i.id})),"skip-forward"!==a){t.next=5;break}return t.next=4,n({type:"SET_CURRENT_SONG",payload:r[(c+1)%r.length]});case 4:u(r[(c+1)%r.length]);case 5:if("skip-back"!==a){t.next=15;break}if((c-1)%r.length!==-1){t.next=12;break}return t.next=9,n({type:"SET_CURRENT_SONG",payload:r[r.length-1]});case 9:return u(r[r.length-1]),S(s,e),t.abrupt("return");case 12:return t.next=14,n({type:"SET_CURRENT_SONG",payload:r[(c-1)%r.length]});case 14:u(r[(c-1)%r.length]);case 15:s&&e.current.play();case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h={background:void 0!==i.color?"linear-gradient(to right, ".concat(i.color[0],",").concat(i.color[1],")"):"#51C0E4"};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:f(c.currentTime)}),Object(b.jsxs)("div",{style:h,className:"track",children:[Object(b.jsx)("input",{value:c.currentTime,type:"range",max:c.duration||0,min:0,onChange:function(t){e.current.currentTime=t.target.value,n({type:"SET_SONG_INFO",payload:Object(j.a)(Object(j.a)({},c),{},{currentTime:t.target.value})})}}),Object(b.jsx)("div",{style:O,className:"animate-track"})]}),Object(b.jsx)("p",{children:c.duration?f(c.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(p.a,{onClick:function(){return y("skip-back")},className:"skip-back",size:"2x",icon:g.a}),Object(b.jsx)(p.a,{onClick:function(){s?(e.current.pause(),n({type:"IS_PLAYING",payload:!s})):(e.current.play(),n({type:"IS_PLAYING",payload:!s}))},className:"play",size:"2x",icon:s?g.c:g.d}),Object(b.jsx)(p.a,{className:"skip-forward",size:"2x",icon:g.b,onClick:function(){return y("skip-forward")}})]})]})},m=function(){var t=Object(o.b)(),e={currentSong:Object(o.c)((function(t){return t.currentSong})),libraryStatus:Object(o.c)((function(t){return t.libraryStatus}))}.currentSong;return Object(b.jsxs)("div",{onClick:function(e){e.target.classList.contains("song-container")&&t({type:"SET_LIBRARY_STATUS",payload:!1})},className:"song-container",children:[Object(b.jsx)("img",{src:e.cover,alt:e.name}),Object(b.jsx)("h2",{children:e.name}),Object(b.jsx)("h3",{children:e.artist})]})},v=(n(30),n.p+"static/media/Dua.db06e01d.mp3"),x=n.p+"static/media/KALEO.ee224ca1.mp3",N=n.p+"static/media/Harris.4e3c3283.mp3";var T=function(){return[{name:"Break My Heart (DIMD Remix)",cover:"https://i1.sndcdn.com/artworks-pfcFgq1CHVLOaJiN-eTGfDw-t500x500.jpg",artist:"Dua Lipa",audio:v,color:["#51C0E4","#EBEBEB"],id:1,active:!1},{name:"Hey Gringo",cover:"https://i1.sndcdn.com/artworks-zp3g5hWdyYNa3Lte-vnTGDQ-t500x500.jpg",artist:"KALEO",audio:x,color:["#9C4618","#A6B1B9"],id:2,active:!1},{name:"Giant",cover:"https://upload.wikimedia.org/wikipedia/uk/3/36/Calvin_Harris_-_Giant.png",artist:" Calvin Harris & Rag'n'Bone Man",audio:N,color:["#25152B","#201328"],id:3,active:!1},{name:"Close Eyes",cover:"https://i1.sndcdn.com/artworks-PGOhLJywxoxv3dDz-GcLxlg-t500x500.jpg",artist:"DVRST",audio:"https://cf-media.sndcdn.com/QuY4lAs1Rksz.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vUXVZNGxBczFSa3N6LjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjM2MDU1MjQ2fX19XX0_&Signature=ENzQ0P1-S1yn4hq5Arx3CzdvrGc-366Q2Vg8vimeKfsHzBUJWTzQQTgayCs148YleCtQl3clbJCIqQUlpnsZfrfudzVXRMlHHUosgr9JTYpPowlis~by7UZm9OPwzaOqxV8dLVc891bQxOpTUxh2WADaQvqyv78V--FjRv6SNFH6wLAbTW1Dn-4lgMkPGVjCqaF9NJ5hZBEXfct7M4tzZnffUur4c7gf7No91UoKLY72duMHhA9Z~yy9cE22RbJKZy9zUasVeR9QUNPdyyiuTxgdcDKPtYX6~LAFA6g5L8HA0SvtEJVuudnMLtnfdn4MhROnmH57uKGNANo-0ILC0w__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",color:["#DB4013","#F2F2F2"],id:4,active:!1}]},_=n.p+"static/media/library.d3cbb3c0.svg",E=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.libraryStatus}));return Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)("h1",{children:"Waves"}),Object(b.jsx)("div",{onClick:function(){t({type:"SET_LIBRARY_STATUS",payload:!e})},children:Object(b.jsx)("img",{src:_,style:e?{filter:"invert(19%) sepia(0%) saturate(3006%) hue-rotate(360deg) brightness(102%) contrast(98%)"}:null,alt:""})})]})},I=function(){var t=Object(a.useRef)(null),e=Object(o.b)(),n={songs:Object(o.c)((function(t){return t.songs})),currentSong:Object(o.c)((function(t){return t.currentSong})),isPlaying:Object(o.c)((function(t){return t.isPlaying})),songInfo:Object(o.c)((function(t){return t.songInfo})),libraryStatus:Object(o.c)((function(t){return t.libraryStatus})),searchInputValue:Object(o.c)((function(t){return t.searchInputValue}))},r=n.songs,c=n.currentSong,i=n.isPlaying,s=n.songInfo,u=n.libraryStatus,O=function(t){var n=t.target.currentTime,a=t.target.duration,r=Math.round(n),c=Math.round(a),i=Math.round(r/c*100);e({type:"SET_SONG_INFO",payload:Object(j.a)(Object(j.a)({},s),{},{currentTime:n,duration:a,animationPercentage:i})})},p=function(){var n=Object(d.a)(l.a.mark((function n(){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=r.findIndex((function(t){return t.id===c.id})),n.next=3,e({type:"SET_CURRENT_SONG",payload:r[(a+1)%r.length]});case 3:i&&t.current.play();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){e({type:"SET_SONGS",payload:T()}),e({type:"SET_CURRENT_SONG",payload:JSON.parse(localStorage.getItem("song"))?JSON.parse(localStorage.getItem("song")):T()[0]}),e({type:"SET_SONG_INFO",payload:{currentTime:0,duration:0,animationPercentage:0}})}),[e]),Object(b.jsxs)("div",{className:"App ".concat(u?"library-active":""),children:[Object(b.jsx)(E,{}),Object(b.jsx)(m,{}),Object(b.jsx)(h,{audioRef:t}),Object(b.jsx)(y,{audioRef:t}),Object(b.jsx)("audio",{onLoadedMetadata:O,onTimeUpdate:O,ref:t,src:c.audio,onEnded:p})]})},R={songs:null,currentSong:{},isPlaying:!1,songInfo:{currentTime:0,duration:0,animationPercentage:0},libraryStatus:!1,searchInputValue:"",ref:null,visibleSongs:[]},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SONGS":return Object(j.a)(Object(j.a)({},t),{},{songs:e.payload});case"SET_VISIBLE_SONGS":return Object(j.a)(Object(j.a)({},t),{},{visibleSongs:e.payload});case"SET_CURRENT_SONG":return Object(j.a)(Object(j.a)({},t),{},{currentSong:e.payload});case"IS_PLAYING":return Object(j.a)(Object(j.a)({},t),{},{isPlaying:e.payload});case"SET_SONG_INFO":return Object(j.a)(Object(j.a)({},t),{},{songInfo:e.payload});case"SET_LIBRARY_STATUS":return Object(j.a)(Object(j.a)({},t),{},{libraryStatus:e.payload});case"SET_SEARCH_INPUT_VALUE":return Object(j.a)(Object(j.a)({},t),{},{searchInputValue:e.payload});case"SET_REF":return Object(j.a)(Object(j.a)({},t),{},{ref:e.payload});default:return Object(j.a)({},t)}},L=Object(s.a)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(o.a,{store:L,children:Object(b.jsx)(I,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e4c0b02b.chunk.js.map