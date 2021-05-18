(this["webpackJsonpmovie-website"]=this["webpackJsonpmovie-website"]||[]).push([[0],{17:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(21),r=c.n(n),i=(c(27),c(2)),o=c(4),l=c(3),j=c(0),d=Object(o.i)((function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1],n=function(){return s(!c)},r=Object(a.useState)(""),d=Object(i.a)(r,2),u=d[0],b=d[1],m=Object(o.f)();return Object(j.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(l.b,{to:"/",className:"navbar-brand logo",children:[Object(j.jsx)("i",{className:"fa fa-kiwi-bird"})," Movie"]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":!c,"aria-label":"Toggle navigation",onClick:n,children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"navbar-collapse ".concat(c?"collapse":""),id:"navbarSupportedContent",toggle:"collapse","data-target":".navbar-collapse",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/",className:"nav-link active","aria-current":"page",onClick:n,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/category/now_playing",className:"nav-link",onClick:n,children:"Now Playing"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/category/popular",className:"nav-link",onClick:n,children:"Popular"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/category/top_rated",className:"nav-link",onClick:n,children:"Top Rated"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/category/upcoming",className:"nav-link",onClick:n,children:"Upcoming"})})]}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!c),document.querySelector(".form-control").value="",b(""),m.push("/search/".concat(u))},className:"d-flex",children:[Object(j.jsx)("input",{onChange:function(e){b(e.target.value)},className:"form-control bg-dark me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:Object(j.jsx)("i",{className:"fas fa-search"})})]})]})]})})})),u=function(){return Object(j.jsx)("footer",{className:"footer bg-dark",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"copyright",children:"\xa9 2021"})})})},b="f34017670be63d234e0e89143a63a6ea",m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){n()}),[]);var n=function(){var e="https://api.themoviedb.org/3/movie/popular?api_key=".concat(b,"&language=en-US&page=1");fetch(e).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){e.results?s(e.results.slice(0,6)):s([e])})).catch((function(e){console.error("Error:",e)}))};return Object(j.jsx)(j.Fragment,{children:c?Object(j.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:[Object(j.jsx)("div",{className:"carousel-indicators",children:c.map((function(e,t){return 0===t?Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":t,className:"active","aria-current":"true","aria-label":e.id},e.id):Object(j.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":t,"aria-label":e.id},e.id)}))}),Object(j.jsx)("div",{className:"carousel-inner",children:c.map((function(e,t){return 0===t?Object(j.jsxs)("div",{className:"carousel-item active",children:[Object(j.jsxs)("div",{className:"carousel-movie-info",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)(l.b,{to:"/movie/".concat(e.id),className:"btn",children:" More Details "})]}),Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),className:"d-block w-100",alt:"..."})]},e.id):Object(j.jsxs)("div",{className:"carousel-item",children:[Object(j.jsxs)("div",{className:"carousel-movie-info",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)(l.b,{to:"/movie/".concat(e.id),className:"btn",children:" More Details "})]}),Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path),className:"d-block w-100",alt:e.title})]},e.id)}))}),Object(j.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(j.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(j.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(j.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(j.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}):""})},h=function(e){var t=e.movie,c=e.disableClick;return Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(l.b,{to:"/movie/".concat(t.id),className:"".concat(c?"disable":""),children:Object(j.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):"",alt:t.title})})})},O=function(e){switch(e){case"latest":return"Latest";case"now_playing":return"Now Playing";case"popular":return"Popular";case"top_rated":return"Top Rated";case"upcoming":return"Upcoming";case"similar":return"Related Movies";default:return""}},v=function(){var e=Object(o.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},p=function(e){var t=e.category,c=e.movieID,s=Object(a.useState)([]),n=Object(i.a)(s,2),r=n[0],o=n[1];Object(a.useEffect)((function(){return d(t),document.querySelector(".slider")&&(document.querySelector(".slider").scrollLeft=0),function(){return o([])}}),[c]);var d=function(e){var t="https://api.themoviedb.org/3/movie/".concat(c?c+"/":"").concat(e,"?api_key=").concat(b,"&language=en-US&page=1");fetch(t).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){e.results?o(e.results):o([e])})).catch((function(e){console.error("Error:",e)}))},u=Object(a.useState)(!1),m=Object(i.a)(u,2),v=m[0],p=m[1],f=Object(a.useState)(!1),x=Object(i.a)(f,2),g=x[0],N=x[1];Object(a.useEffect)((function(){g&&(document.addEventListener("mouseup",S,!0),document.addEventListener("mousemove",y,!0))}),[g]);var S=function e(t){N(!1),document.removeEventListener("mouseup",e,!0),document.removeEventListener("mousemove",y,!0),setTimeout((function(){return p(!1)}),100)},y=function(e){g&&(e.preventDefault(),p(!0),e.target.scrollLeft-=3*e.movementX)},w=function(e){return function(t){var c=t.target.parentElement;"left"===e?c.scrollLeft-=1e3:c.scrollLeft+=1e3}};return Object(j.jsx)(j.Fragment,{children:0!==r.length&&Object(j.jsxs)("div",{className:"slider-wrap",children:[Object(j.jsx)(l.b,{className:"similar"===t?"disable":"",to:"similar"!==t?"/category/".concat(t):"#",children:Object(j.jsx)("h1",{children:O(t)})}),Object(j.jsxs)("div",{onMouseDown:function(e){e.preventDefault(),N(!0)},className:"slider",children:[Object(j.jsx)("i",{onClick:w("left"),className:"left-arrow carousel-control-prev-icon"}),r.map((function(e){return Object(j.jsx)(h,{movie:e,disableClick:v},e.id)})),Object(j.jsx)("i",{onClick:w("right"),className:"right-arrow carousel-control-next-icon"})]})]})})},f=(c(17),function(){return Object(a.useEffect)((function(){document.title="Home"}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)("div",{className:"container content",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(p,{category:"now_playing"},"now_playing"),Object(j.jsx)(p,{category:"popular"},"popular"),Object(j.jsx)(p,{category:"top_rated"},"top_rated"),Object(j.jsx)(p,{category:"upcoming"},"upcoming")]})})]})}),x=c(9),g=function(e){var t=e.movie;return Object(j.jsx)("div",{className:"card col-lg-3 col-md-6 col-sm-6 movie-card",children:Object(j.jsx)(l.b,{to:"/movie/".concat(t.id),className:"card-img-top",children:t.poster_path?Object(j.jsx)("img",{src:t.poster_path&&"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):Object(j.jsx)("div",{className:"no-img",children:t.title})})})},N=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),r=Object(i.a)(n,2),l=r[0],d=r[1],u=Object(a.useState)(0),m=Object(i.a)(u,2),h=(m[0],m[1]),v=Object(a.useState)(1),p=Object(i.a)(v,2),f=p[0],N=p[1],S=Object(o.h)(),y=S.category,w=S.query;Object(a.useEffect)((function(){document.title="Results"}),[]),Object(a.useEffect)((function(){s([]),N(1),h(0),d(0),void 0===w&&void 0===y||1===f&&k()}),[y,w]),Object(a.useEffect)((function(){void 0===w&&void 0===y||k()}),[f]);var k=function(){var e;e=w||!y?"https://api.themoviedb.org/3/search/movie?query=".concat(w,"&api_key=").concat(b,"&language=en-US&page=").concat(f):"https://api.themoviedb.org/3/movie/".concat(y||"","?api_key=").concat(b,"&language=en-US&page=").concat(f),console.log(e),fetch(e).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){e&&e.results&&(1===f?(s(e.results),d(e.total_pages),h(e.total_results)):s([].concat(Object(x.a)(c),Object(x.a)(e.results))))})).catch((function(e){console.error("Error:",e)}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container content",children:Object(j.jsx)("div",{className:"row movie-grid",children:0!==c.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"title",children:"Results for ".concat(y?O(y):"'"+w+"'")}),c.map((function(e){return Object(j.jsx)(g,{movie:e},e.id)})),f<l&&Object(j.jsx)("div",{onClick:function(){f<l&&N(f+1)},className:"show-more btn btn-primary col-12",children:"Show More"})]}):Object(j.jsx)("h2",{className:"title",children:"No results, please enter search value..."})})})})},S=(c(34),function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)({}),r=Object(i.a)(n,2),d=r[0],u=r[1],m=Object(a.useState)([]),h=Object(i.a)(m,2),O=h[0],v=h[1],f=Object(a.useState)([]),x=Object(i.a)(f,2),g=x[0],N=x[1],S=Object(o.h)().movieID;Object(a.useEffect)((function(){document.title=c.title,localStorage.setItem("selectedMovie",JSON.stringify(c))}),[c]),Object(a.useEffect)((function(){w(S),E(S),k(S)}),[S]);var y,w=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(b,"&language=en-US");fetch(t).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){s(e)})).catch((function(e){console.error("Error:",e)}))},k=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(b,"&language=en-US");fetch(t).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){var t=e.cast,c=e.crew,a=t.filter((function(e){return"Acting"===e.known_for_department})),s=c.filter((function(e){return"Director"===e.job}));N(a),v(s)})).catch((function(e){console.error("Error:",e)}))},E=function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(b,"&language=en-US");fetch(t).then((function(e){if(200===e.status)return e.json();console.log("There is an issue. Status code:"+e.status)})).then((function(e){if(e.results){var t=e.results.filter((function(e){return"YouTube"===e.site}));u(t[0])}})).catch((function(e){console.error("Error:",e)}))};return Object(j.jsxs)("div",{className:"container content",children:[Object(j.jsx)("div",{id:"bg-fade",children:Object(j.jsx)("img",{src:c.backdrop_path&&"https://image.tmdb.org/t/p/original".concat(c.backdrop_path),className:"",alt:c.title})}),Object(j.jsxs)("div",{className:"row movie-image-info",children:[Object(j.jsx)("div",{className:"col-xs-12 col-sm-3 col-md-3 image-lg-dev",children:Object(j.jsx)("img",{className:"card-img-top",src:c.poster_path&&"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title})}),Object(j.jsxs)("div",{className:"col-xs-12 col-lg-7",children:[Object(j.jsx)("div",{className:"col-12",children:Object(j.jsx)("h1",{children:c.title})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-5 image-sm-dev",children:Object(j.jsx)("img",{className:"card-img-top",src:c.poster_path&&"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:c.title})}),Object(j.jsxs)("div",{className:"col-7 movie-info",children:[Object(j.jsxs)("div",{className:"mbottom",children:[Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("i",{className:"fa fa-calendar-day"})," ",Object(j.jsx)("strong",{children:(y=c.release_date,new Date(y).getFullYear().toString())})]}),Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("i",{className:"fa fa-clock-o"})," ",Object(j.jsxs)("strong",{children:[c.runtime," minutes"]})]})]}),Object(j.jsx)("div",{className:"mbottom",children:c.genres&&c.genres.map((function(e,t){return"".concat(e.name," ").concat(t!==c.genres.length-1?"|":""," ")}))}),d&&Object(j.jsxs)("div",{className:"mbottom",children:[Object(j.jsxs)("a",{className:"trailer-link",href:"","data-bs-toggle":"modal","data-bs-target":"#trailer",children:[Object(j.jsx)("i",{className:"fa fa-play-circle"})," Trailer"]}),Object(j.jsx)("div",{id:"trailer",className:"modal fade",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"video modal-content",children:[Object(j.jsx)("div",{className:"modal-header",children:Object(j.jsx)("button",{onClick:function(){document.getElementById("trailer-video").src="https://www.youtube.com/embed/".concat(d.key)},type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(j.jsx)("iframe",{id:"trailer-video",className:"embed-responsive-item",width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(d.key),allowFullScreen:!0})})})]})})})]})]})]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsx)(l.b,{to:"/movie/".concat(c.id,"/movie-seat"),className:"tickets-btn btn btn-primary",children:"Get Tickets"})})]})]}),Object(j.jsx)("div",{className:"border-line"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-6 col-xs-12",children:[Object(j.jsx)("h2",{children:"Overview"}),Object(j.jsx)("p",{children:c.overview})]}),Object(j.jsxs)("div",{className:"col-md-6 col-xs-12",children:[Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h2",{children:"Director"}),Object(j.jsx)("p",{children:O.map((function(e,t){return"".concat(e.name," ").concat(t!==O.length-1?", ":""," ")}))})]}),Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsx)("h2",{children:"Cast"}),Object(j.jsx)("p",{children:g.map((function(e,t){return"".concat(e.name," ").concat(t!==g.length-1?", ":""," ")}))})]})]}),Object(j.jsx)(p,{category:"similar",movieID:S})]})]})}),y=c(11),w=function(e){var t=e.selectedMovie;return Object(j.jsx)("h2",{children:t?t.title:""})},k=function(){return Object(j.jsxs)("ul",{className:"showcase",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"seat"}),Object(j.jsx)("small",{children:"N/A"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"seat selected"}),Object(j.jsx)("small",{children:"Selected"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:"seat occupied"}),Object(j.jsx)("small",{children:"Occupied"})]})]})},E=function(e){var t=e.seat,c=e.seats,a=e.setSeats,s=e.selectedSeats,n=e.setSelectedSeats,r=function(e){return""!==e.status||s.some((function(t){return t===e.id}))?(n(s.filter((function(t){return t!==e.id}))),""):(n([].concat(Object(x.a)(s),[e.id])),"selected")};return Object(j.jsx)("div",{onClick:function(){"occupied"!==t.status&&a(c.map((function(e){return e.map((function(e){if(e.id===t.id){var c=r(e);return Object(y.a)(Object(y.a)({},e),{},{status:c})}return e}))})))},className:"seat ".concat(t.status),children:Object(j.jsx)("span",{className:"seat-text",children:t.id})})},_=function(e){var t=e.seats,c=e.setSeats,a=e.selectedSeats,s=e.setSelectedSeats;return Object(j.jsxs)("div",{className:"movie-seat-container",children:[Object(j.jsx)("div",{className:"screen"}),t.map((function(e,n){return Object(j.jsx)("div",{className:"movie-seat-row",children:e.map((function(e){return Object(j.jsx)(E,{seat:e,seats:t,setSeats:c,selectedSeats:a,setSelectedSeats:s},e.id)}))},n)}))]})},C=function(e){var t=e.selectedSeats,c=e.totalPrice;return Object(j.jsxs)("p",{className:"total-price",children:["You have selected ",Object(j.jsx)("span",{className:"highlighted-text",children:t.length})," seats for price of $",Object(j.jsx)("span",{className:"highlighted-text",children:t.length*c})]})},I=(c(35),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(null),r=Object(i.a)(n,2),o=r[0],l=r[1],d=Object(a.useState)([]),u=Object(i.a)(d,2),b=u[0],m=u[1],h=Object(a.useState)(["E4","E5","C9","C10"]),O=Object(i.a)(h,2),v=O[0],p=(O[1],Object(a.useState)(10)),f=Object(i.a)(p,2),g=f[0],N=(f[1],Object(a.useState)([])),S=Object(i.a)(N,2),E=S[0],I=S[1],D=function(e){return b.some((function(t){return t===e}))?"selected":v.some((function(t){return t===e}))?"occupied":""};return Object(a.useEffect)((function(){!function(){var e;if(null===localStorage.getItem("selectedMovie")?localStorage.setItem("selectedMovie",JSON.stringify(o)):(e=JSON.parse(localStorage.getItem("selectedMovie")),l(e)),null===localStorage.getItem("movieSeats"))localStorage.setItem("movieSeats",JSON.stringify(c));else{var t=JSON.parse(localStorage.getItem("movieSeats"));s(t),t.some((function(t){return t.m===e.id}))&&m(t.find((function(t){return t.m===e.id})).s)}}()}),[]),Object(a.useEffect)((function(){!function(){for(var e=["A","B","C","D","E","F","G"],t=Array.from(e,(function(){return[]})),c=0;c<e.length;c++)for(var a=0;a<10;a++){var s=e[c]+(a+1);t[c][a]={id:s,status:D(s)}}I(t)}(),o&&(c.some((function(e){return e.m===o.id}))?s(c.map((function(e){return e.m===o.id?Object(y.a)(Object(y.a)({},e),{},{s:b}):e}))):s([].concat(Object(x.a)(c),[{m:o.id,s:b}])))}),[b]),Object(a.useEffect)((function(){localStorage.setItem("movieSeats",JSON.stringify(c))}),[c]),Object(j.jsxs)("div",{className:"movie-seat",children:[Object(j.jsx)(w,{selectedMovie:o}),Object(j.jsx)(k,{}),Object(j.jsx)(_,{seats:E,setSeats:I,selectedSeats:b,setSelectedSeats:m}),Object(j.jsx)(C,{selectedSeats:b,totalPrice:g}),Object(j.jsx)("button",{className:"btn btn-primary",children:"Checkout"})]})});var D=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.a,{basename:"/movie-website",children:[Object(j.jsx)(v,{}),Object(j.jsx)(d,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/movie/:movieID",exact:!0,component:S,routerProps:":movieID"}),Object(j.jsx)(o.a,{path:"/movie/:movieID/movie-seat",exact:!0,component:I,routerProps:":movieID"}),Object(j.jsx)(o.a,{path:"/category/:category",exact:!0,component:N,routerProps:":category"}),Object(j.jsx)(o.a,{path:"/search/:query",exact:!0,component:N,routerProps:":query"}),Object(j.jsx)(o.a,{path:"/search/",exact:!0,component:N})]}),Object(j.jsx)(u,{})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.e6ae162d.chunk.js.map