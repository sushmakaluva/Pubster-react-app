(this["webpackJsonppubster-react-app"]=this["webpackJsonppubster-react-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),s=a.n(i),l=(a(37),a(8)),c=a(2);var u=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Pupster"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"}," About ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link"},"Discover")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")))))};var o=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center",style:{backgroundImage:'url("https://i.imgur.com/qkdpN.jpg")',backgroundSize:"cover",display:"block",height:500}},r.a.createElement("h1",null,"Pupster"),r.a.createElement("h2",null,"They are the good boys and girls !!")),r.a.createElement("h1",null,"Welcome To Pupster!"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis."),r.a.createElement("p",null,"Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh."),r.a.createElement("p",null,"Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa."))},m=a(31),d=a(11),p=a(12),h=a(14),v=a(13),b=a(15),g=a.n(b),f=function(){return g.a.get("https://dog.ceo/api/breeds/image/random")},E=function(e){return g.a.get("https://dog.ceo/api/breed/"+e+"/images")},N=function(){return g.a.get("https://dog.ceo/api/breeds/list")};var k=function(e){return r.a.createElement("div",{role:"alert",className:"alert alert-".concat(e.type," fade in")},e.children)};var y=function(e){return r.a.createElement("button",{onClick:e.onClick,"data-value":e["data-value"],className:"card-btn ".concat(e["data-value"]," "),style:{borderRadius:50,height:50,width:50,position:"absolute",border:"none",float:"center",bottom:10,color:"#FFF",cursor:"pointer"}})};a(62);var C=function(e){return r.a.createElement("div",{className:"card",style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover",backgroundClip:"content-box",height:400,width:400,position:"relative",border:6,display:"block"}},r.a.createElement(y,{"data-value":"pass",onClick:e.handleBtnClick}),r.a.createElement(y,{"data-value":"pick",onClick:e.handleBtnClick}))},q=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={image:"",match:!1,matchCount:0},e.loadNextDog=function(){f().then((function(t){return e.setState({image:t.data.message})})).catch((function(e){return console.log(e)}))},e.handleBtnClick=function(t){var a=t.target.attributes.getNamedItem("data-value").value,n=Object(m.a)({},e.state);"pick"===a?(n.match=1===Math.floor(5*Math.random())+1,n.matchCount=n.match?n.matchCount+1:n.matchCount):n.match=!1,e.setState(n),e.loadNextDog()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.loadNextDog()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Make New Friends"),r.a.createElement("h3",{className:"text-center"},"Thumbs up on any pups you'd like to meet!"),r.a.createElement(C,{image:this.state.image,handleBtnClick:this.handleBtnClick}),r.a.createElement("h1",{className:"text-center"},"Made friends with ",this.state.matchCount," pups so far!"),r.a.createElement(k,{style:{opacity:this.state.match?1:0},type:"success"},"Yay! That Pup Liked You Too!!!"))}}]),a}(n.Component);var w=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Breed Name:"),r.a.createElement("input",{className:"form-control",onChange:e.handleInputChange,value:e.search,list:"breeds",id:"breed",name:"breed",type:"text",placeholder:"Type in a dog breed to begin"}),r.a.createElement("datalist",{id:"breeds"},e.breeds.map((function(e,t){return r.a.createElement("option",{value:e,key:t})}))),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:" btn btn-success",onClick:e.handleFormSubmit},"Search")))};var x=function(e){return r.a.createElement("ul",{className:"list-group search-results"},e.results.map((function(e,t){return r.a.createElement("li",{className:"list-group-item",id:t},r.a.createElement("img",{alt:"Dog",src:e,className:"img-fluid"}))})))},S=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={search:"",breeds:[],results:[],error:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),E(e.state.search).then((function(t){return e.setState({results:t.data.message})})).catch((function(e){return console.log(e)}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;N().then((function(t){return e.setState({breeds:t.data.message})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"Search By Breed!"),r.a.createElement(k,{type:"danger",style:{opacity:this.state.error?1:0}},this.state.error),r.a.createElement(w,{breeds:this.state.breeds,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),r.a.createElement(x,{results:this.state.results}))}}]),a}(n.Component);var P=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Pupster 2017"))};var M=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(c.a,{exact:!0,path:"/",component:o}),r.a.createElement(c.a,{exact:!0,path:"/about",component:o}),r.a.createElement(c.a,{exact:!0,path:"/discover",component:q}),r.a.createElement(c.a,{exact:!0,path:"/search",component:S})),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0ef84fd6.chunk.js.map