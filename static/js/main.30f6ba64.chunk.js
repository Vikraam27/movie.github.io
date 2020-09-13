(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(7),c=t.n(l),o=(t(13),t(1)),s=t(2),i=t(4),m=t(3),d=(t(14),t(5)),u=t.n(d),p=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){return n.a.createElement("div",{className:" col-xl-2 6 col-mb-3 mt-3 ",style:{width:"12rem",padding:"4px"}},n.a.createElement("div",{className:"card",style:{backgroundColor:"teal",height:"400px"}},null==this.props.movie.poster_src?n.a.createElement("img",{src:"https://muwaija.com/static/img/no_image.png",alt:"image not avaible",style:{height:"278px"}}):n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(this.props.movie.poster_src),alt:"movie-poster",style:{height:"278px"}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title",style:{fontSize:"13px",fontWeight:"bold"}},"".concat(this.props.movie.title)),n.a.createElement("p",{className:"card-text",style:{fontSize:"13px"}},"Relase date : ".concat(this.props.movie.release_date)),n.a.createElement("p",{style:{position:"absolute",top:"0",left:"0",borderBottomRightRadius:"6px",color:"white",backgroundColor:"black"}},"".concat(this.props.movie.vote_average," "),n.a.createElement("svg",{width:"1em",padding:"2px",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"}))))))}}]),t}(n.a.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={},r.upcomingMovie(),r}return Object(s.a)(t,[{key:"upcomingMovie",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=5f793d033ea33558e13b3664b3eadca9&language=en-US&page=1",success:function(a){var t=a.results,r=[];t.forEach((function(e){e.poster_src=e.poster_path;var a=n.a.createElement(p,{key:e.id,movie:e});r.push(a)})),e.setState({rows:r})},error:function(e,a,t){console.error("failed fetch")}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"marginUP",id:"pop"},n.a.createElement("h2",{className:"pl-5"},"Upcoming Movies"),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col w-100 d-flex flex-nowrap film",id:"popular"},this.state.rows))))}}]),t}(n.a.Component),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={},r.topRated(),r}return Object(s.a)(t,[{key:"topRated",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/movie/top_rated?api_key=5f793d033ea33558e13b3664b3eadca9&language=en-US&page=1",success:function(a){var t=a.results,r=[];t.forEach((function(e){e.poster_src=e.poster_path;var a=n.a.createElement(p,{key:e.id,movie:e});r.push(a)})),e.setState({rows:r})},error:function(e,a,t){console.error("failed fetch")}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"marginUP",id:"pop"},n.a.createElement("h2",{className:"pl-5"},"Top Rated Movies"),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col w-100 d-flex flex-nowrap film",id:"popular"},this.state.rows))))}}]),t}(n.a.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).state={},r.trendingMovie(),r}return Object(s.a)(t,[{key:"trendingMovie",value:function(){var e=this;u.a.ajax({url:"https://api.themoviedb.org/3/trending/all/day?api_key=5f793d033ea33558e13b3664b3eadca9&language=en-US&page=1",success:function(a){var t=a.results,r=[];t.forEach((function(e){e.poster_src=e.poster_path;var a=n.a.createElement(p,{key:e.id,movie:e});r.push(a)})),e.setState({rows:r})},error:function(e,a,t){console.error("failed fetch")}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"marginUP",id:"pop"},n.a.createElement("h2",{className:"pl-5"},"Trending Movies"),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col w-100 d-flex flex-nowrap film",id:"popular"},this.state.rows))))}}]),t}(n.a.Component),E=function(){return n.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),n.a.createElement("div",{className:"carousel-inner"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:"https://m.media-amazon.com/images/M/MV5BN2RmZmZiZTUtMDFjZi00MTEzLWFhOTAtMjA0Nzg3YTg2YmI5XkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"Interstellar (2014)"),n.a.createElement("p",null,"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{src:"https://m.media-amazon.com/images/M/MV5BMjQ3ODllODYtYzNjMS00NmQyLTlhNWQtZjM3MjMxOGRiOGM5XkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"The Martian (2015"),n.a.createElement("p",null,"An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive."))),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{src:"https://m.media-amazon.com/images/M/MV5BYjBiY2Q0ZTctNDFlOS00MTA5LTk1ZGMtMjRlMDE5NDhhYzBlXkEyXkFqcGdeQXVyNDczOTA3ODE@._V1_SY1000_SX1600_AL_.jpg",className:"d-block w-100",alt:"..."}),n.a.createElement("div",{className:"carousel-caption d-none d-md-block"},n.a.createElement("h5",null,"Gravity (2013)"),n.a.createElement("p",null,"Two astronauts work together to survive after an accident leaves them stranded in space.")))),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))},g=function(){return n.a.createElement("footer",null,n.a.createElement("p",null,"MovieGeeK || Free Information Movie \xa9 2020, Vikram"))},b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this)).state={},r.performSeach(r.performSeach),r}return Object(s.a)(t,[{key:"performSeach",value:function(e){var a=this,t="https://api.themoviedb.org/3/search/movie?api_key=5f793d033ea33558e13b3664b3eadca9&language=en-US&query="+e;u.a.ajax({url:t,success:function(e){var t=e.results,r=[];t.forEach((function(e){e.poster_src=e.poster_path;var a=n.a.createElement(p,{key:e.id,movie:e});r.push(a)})),a.setState({rows:r})},error:function(e,a,t){console.error("failed fetch")}})}},{key:"searchChangeHandler",value:function(e){var a=e.target.value;this.performSeach(a)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"#"},"MovieGeeK"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"})),n.a.createElement("form",{className:"form-inline my-3 my-lg-0"},n.a.createElement("input",{className:"form-control mr-sm-2",onChange:this.searchChangeHandler.bind(this),type:"search",placeholder:"Search","aria-label":"Search"})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col w-100 d-flex flex-nowrap film"},this.state.rows)),n.a.createElement(E,null),n.a.createElement(v,null),n.a.createElement(h,null),n.a.createElement(f,null),n.a.createElement(g,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.30f6ba64.chunk.js.map