(this.webpackJsonpjerdonsite=this.webpackJsonpjerdonsite||[]).push([[0],{40:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(21),l=a.n(i),c=(a(45),a(15)),r=a(16),o=(a(46),a(26),a(6)),u=a(7),m=a(9),d=a(8),g=a(10),p=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},s.a.createElement(c.b,{to:"/",className:"navbar-brand"},"Home"),s.a.createElement("div",{className:"collapse navbar-collapse"},s.a.createElement("ul",{className:"navbar-nav mr-auto"},s.a.createElement("li",{className:"navbar-item"},s.a.createElement(c.b,{to:"/recipes",className:"navbar-brand"},"Recipes")),s.a.createElement("li",{className:"navbar-item"},s.a.createElement(c.b,{to:"/blog",className:"navbar-brand"},"The Blog")),s.a.createElement("li",{className:"navbar-item"},s.a.createElement(c.b,{to:"/about",className:"navbar-brand"},"The Site")))))}}]),t}(n.Component),h=a(2),b=a(20),v=a(5),f=a.n(v),k=a(3);function E(){console.log("LIST UPDATE f(x) reached")}function y(e){var t=e.likes,a=e.id,i=e.date,l=Object(n.useState)(t),c=Object(b.a)(l,2),r=c[0],o=c[1];return s.a.createElement("div",{className:"like_dislike"},s.a.createElement(k.a,{variant:"success",size:"sm",id:"dlikeButtons",onClick:function(){o(r+1),console.log("count:",r),f.a.post("http://localhost:5000/jweets/update/"+a,{likes:r+1})}},"Like"),s.a.createElement(k.a,{variant:"danger",size:"sm",id:"dlikeButtons",onClick:function(){o(r-1),f.a.post("http://localhost:5000/jweets/update/"+a,{likes:r-1})}},"Dislike"),s.a.createElement("p",{id:"likes"},"Likes: ",r,"|",i.slice(0,10)," "))}function j(e){var t=e.name,a=e.message,n=e.likes,i=e.id,l=e.date;return s.a.createElement("div",{className:"jweet",class:"alert alert-dark",role:"alert"},s.a.createElement("div",null,s.a.createElement("p",null,t,": ",a)),s.a.createElement(y,{key:n,likes:n,id:i,date:l}))}var w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).deleteJweet=a.deleteJweet.bind(Object(h.a)(a)),a.sortTypeLikes=a.sortTypeLikes.bind(Object(h.a)(a)),a.sortTypeDate=a.sortTypeDate.bind(Object(h.a)(a)),a.state={jweets:[],sortType:"Likes"},E=E.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/jweets/").then((function(t){e.setState({jweets:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteJweet",value:function(e){f.a.delete("http://localhost:5000/jweets/"+e).then((function(e){return console.log(e.data)})),this.setState({jweets:this.state.jweets.filter((function(t){return t._id!==e}))})}},{key:"sortTypeLikes",value:function(){this.setState({sortType:"Likes"})}},{key:"sortTypeDate",value:function(){this.setState({sortType:"Date"})}},{key:"jweetList",value:function(){return console.log("jweets:",this.state.jweets),"Likes"==this.state.sortType?this.state.jweets.sort((function(e,t){return parseInt(t.likes)-parseInt(e.likes)})):this.state.jweets.sort((function(e,t){return Date.parse(t.createdAt)-Date.parse(e.createdAt)})),this.state.jweets.map((function(e){return s.a.createElement(j,{name:e.name,message:e.message,likes:e.likes,id:e._id,date:e.createdAt})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"jweets"},s.a.createElement("div",{id:"sortType"},s.a.createElement("p",{id:"sortTypeLabel"},"Sort By: "),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"warning",size:"sm",id:"dlikeButtons",onClick:this.sortTypeLikes},"Likes")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{className:"button",variant:"warning",size:"sm",id:"dlikeButtons",onClick:this.sortTypeDate},"Date"))),this.jweetList())}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"homePage"},s.a.createElement("h4",null,"Home Page"),s.a.createElement("p",null,"My name is Jerdon Helgeson and this is JerdonSite. JerdonSite is where I practice/showoff my webdev skills by organizing things I am interested in. Select any of the above tabs to view a slice of my life!"),s.a.createElement("p",null,"Leave your mark and contribute a message off to the right ----\x3e"))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onChangeName=a.onChangeName.bind(Object(h.a)(a)),a.onChangeMessage=a.onChangeMessage.bind(Object(h.a)(a)),a.onChangeLikes=a.onChangeLikes.bind(Object(h.a)(a)),a.onSubmit=a.onSubmit.bind(Object(h.a)(a)),a.state={name:"",message:"",likes:0,date:Date.now()},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:"",message:"",likes:0,date:Date.now()})}},{key:"onChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"onChangeMessage",value:function(e){this.setState({message:e.target.value})}},{key:"onChangeLikes",value:function(e){this.setState({likes:e})}},{key:"onChangeDate",value:function(e){this.setState({date:Date.now()})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,message:this.state.message,likes:0,date:Date.now()};f.a.post("http://localhost:5000/jweets/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return s.a.createElement("div",{id:"createJweet"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"addJweetInput"},s.a.createElement("h4",null," Name\u2002\u2002 "),s.a.createElement("input",{id:"addJweetInputTxt",type:"text",required:!0,className:"form-control",value:this.state.name,onChange:this.onChangeName})),s.a.createElement("div",{className:"addJweetInput"},s.a.createElement("h5",null,"Message\u2002 "),s.a.createElement("input",{id:"addJweetInputTxt",ref:"userInput",required:!0,className:"form-control",value:this.state.message,onChange:this.onChangeMessage})),s.a.createElement("div",{className:"form-group"},s.a.createElement(k.a,{onClick:this.onSubmit,variant:"warning"},"Leave a Message!"))))}}]),t}(n.Component),N=a(39);function B(e){var t=e.difficulty;return s.a.createElement("div",null,s.a.createElement("p",null,"Difficulty: ",t))}function S(e){var t=e.likes,a=e.id,i=Object(n.useState)(t),l=Object(b.a)(i,2),c=l[0],r=l[1];return s.a.createElement("div",{className:"rlike_dislike"},s.a.createElement(k.a,{variant:"success",size:"sm",id:"dlikeButtons",onClick:function(){r(c+1),console.log("count:",c),f.a.post("http://localhost:5000/recipes/update/"+a,{likes:c+1})}},"Like"),s.a.createElement(k.a,{variant:"danger",size:"sm",id:"dlikeButtons",onClick:function(){r(c-1),f.a.post("http://localhost:5000/recipes/update/"+a,{likes:c-1})}},"Dislike"),s.a.createElement("p",{id:"likes"},"Likes: ",c," "))}function L(e){var t=e.instructions.split(",");return s.a.createElement("div",{className:"instructions"},s.a.createElement("h4",null,"Instructions"),s.a.createElement("div",{class:"alert alert-primary",role:"alert"},t.map((function(e){return s.a.createElement("p",{className:"instruction"},e)}))))}function C(e){var t=e.ingredients.split(",");return s.a.createElement("div",{className:"ingredients"},s.a.createElement("h4",null,"Ingredients"),s.a.createElement("div",{class:"alert alert-warning",role:"alert"},t.map((function(e){return s.a.createElement("p",{className:"ingredient"},e)}))))}function D(e){var t=e.name,a=e.ingredients,i=e.instructions,l=e.likes,c=e.id,r=(e.date,e.difficulty),o=Object(n.useState)(!1),u=Object(b.a)(o,2),m=u[0],d=u[1];return s.a.createElement("div",{className:"alert alert-dark",onClick:function(){console.log("Clicked",t),d(!m)},onMouseOver:function(e){e.target.style.cursor="pointer"},onMouseOut:function(e){},"aria-controls":"collapser","aria-expanded":m},s.a.createElement("div",{className:"row"},s.a.createElement("h3",null,t),s.a.createElement("div",{className:"center_container"},s.a.createElement(B,{difficulty:r})),s.a.createElement("div",{className:"right_container"},s.a.createElement(S,{key:l,likes:l,id:c}))),s.a.createElement(N.a,{in:m},s.a.createElement("div",{id:"collapser"},s.a.createElement(C,{ingredients:a}),s.a.createElement(L,{instructions:i}))))}var A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).deleteRecipe=a.deleteRecipe.bind(Object(h.a)(a)),a.sortByLikes=a.sortByLikes.bind(Object(h.a)(a)),a.sortByDifficulty=a.sortByDifficulty.bind(Object(h.a)(a)),a.state={recipes:[],sortBy:"likes"},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"sortByLikes",value:function(){this.setState({sortBy:"likes"})}},{key:"sortByDifficulty",value:function(){this.setState({sortBy:"difficulty"})}},{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/recipes/").then((function(t){e.setState({recipes:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteRecipe",value:function(e){f.a.delete("http://localhost:5000/recipes/"+e).then((function(e){return console.log(e.data)})),this.setState({recipes:this.state.recipes.filter((function(t){return t._id!==e}))})}},{key:"recipeList",value:function(){return console.log("recipes:",this.state.recipes),"likes"===this.state.sortBy?this.state.recipes.sort((function(e,t){return parseInt(t.likes)-parseInt(e.likes)})):this.state.recipes.sort((function(e,t){return parseInt(e.difficulty)-parseInt(t.difficulty)})),this.state.recipes.map((function(e){return s.a.createElement(D,{name:e.name,ingredients:e.ingredients,instructions:e.instructions,likes:e.likes,id:e._id,date:e.createdAt,difficulty:e.difficulty})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h4",null,"Recipes"),s.a.createElement("p",null,"I love all sorts of cooking and especially love collecting unique and flavorful recipes. Scroll down and select one of my favorite recipes to learn how to make it yourself!"),s.a.createElement("div",{id:"sortType"},s.a.createElement("p",{id:"sortTypeLabel"},"Sort By: "),s.a.createElement(k.a,{variant:"outline-primary",size:"sm",id:"dlikeButtons",onClick:this.sortByLikes},"Likes"),s.a.createElement(k.a,{variant:"outline-primary",size:"sm",id:"dlikeButtons",onClick:this.sortByDifficulty},"Difficulty")),this.recipeList())}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e)),console.log("About Site Constructed"),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("Component mounted")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"mernStack"},s.a.createElement("p",null,"JerdonSite is a built using the MERN stack."),s.a.createElement("p",null,"MongoDB"),s.a.createElement("p",null,"Express"),s.a.createElement("p",null,"React"),s.a.createElement("p",null,"NODE.JS"),s.a.createElement("h4",null,"+"),s.a.createElement("p",null,"Bootstrap elements")),s.a.createElement("div",{className:"tutorials"},s.a.createElement("p",null,"I followed many tutorials and guides to get me started, here are a few:"),s.a.createElement("p",null,"https://www.youtube.com/watch?v=7CqJlxBYj-M&t=3154s"),s.a.createElement("p",null,"https://www.youtube.com/watch?v=dGcsHMXbSOA&list=PLAXPgqkrPzudR8coJQu_JM79-g8ZQUohU&index=7&t=532s"),s.a.createElement("p",null,"https://www.youtube.com/watch?v=fsCjFHuMXj0&list=PLAXPgqkrPzudR8coJQu_JM79-g8ZQUohU&index=5&t=1348s"),s.a.createElement("p",null,"https://www.youtube.com/watch?v=vjf774RKrLc&list=PLAXPgqkrPzudR8coJQu_JM79-g8ZQUohU&index=6&t=743s"),s.a.createElement("p",null,"https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129"))))}}]),t}(n.Component);function J(e){return e.message.split("_n").map((function(e){return s.a.createElement("p",null,e)}))}function I(e){return e.tags.split(",").map((function(e){return"All"==e?s.a.createElement("span",{class:"badge badge-primary"},e):"Dev"==e?s.a.createElement("span",{class:"badge badge-dark"},e):"Finance"==e?s.a.createElement("span",{class:"badge badge-success"},e):"Guns"==e?s.a.createElement("span",{class:"badge badge-danger"},e):"Work"==e?s.a.createElement("span",{class:"badge badge-warning"},e):"Life"==e?s.a.createElement("span",{class:"badge badge-light"},e):s.a.createElement("span",{class:"badge badge-dark"},e)}))}function x(e){var t=e.name,a=e.message,n=(e.id,e.image),i=e.date,l=e.tags,c=new Date(i),r=c.toLocaleDateString()+" "+c.toLocaleTimeString();if(n.length>4&&n.indexOf("\\")>-1)var o=n.split("\\"),u=o[o.length-1];else u="";return s.a.createElement("div",{className:"alert alert-dark"},s.a.createElement("div",{className:"row"},s.a.createElement("h6",null,t),s.a.createElement("div",{className:"right_container"},s.a.createElement("p",null,r))),s.a.createElement("div",{className:"BlogMessageBlock"},s.a.createElement("img",{src:u,width:"100"}),s.a.createElement("div",{className:"BlogMessageBlock"},s.a.createElement(J,{message:a}))),s.a.createElement("div",{className:"tags"},s.a.createElement(I,{tags:l})))}var z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).setTagAll=a.setTagAll.bind(Object(h.a)(a)),a.setTagLife=a.setTagLife.bind(Object(h.a)(a)),a.setTagWork=a.setTagWork.bind(Object(h.a)(a)),a.setTagFinance=a.setTagFinance.bind(Object(h.a)(a)),a.setTagDev=a.setTagDev.bind(Object(h.a)(a)),a.setTagOther=a.setTagOther.bind(Object(h.a)(a)),a.setTagGuns=a.setTagGuns.bind(Object(h.a)(a)),a.unhideButton=a.unhideButton.bind(Object(h.a)(a)),a.state={blogPosts:[],Tag:"All",allow:!0},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:5000/blog/").then((function(t){e.setState({blogPosts:t.data})})).catch((function(e){console.log(e)}))}},{key:"unhideButton",value:function(){0==this.state.allow?(document.getElementById("gunButton").style.opacity=0,this.setState({allow:!0})):(document.getElementById("gunButton").style.opacity=1,this.setState({allow:!1}))}},{key:"setTagAll",value:function(){this.setState({Tag:"All"})}},{key:"setTagLife",value:function(){this.setState({Tag:"Life"})}},{key:"setTagWork",value:function(){this.setState({Tag:"Work"})}},{key:"setTagFinance",value:function(){this.setState({Tag:"Finance"})}},{key:"setTagDev",value:function(){this.setState({Tag:"Dev"})}},{key:"setTagOther",value:function(){this.setState({Tag:"Other"})}},{key:"setTagGuns",value:function(){this.setState({Tag:"Guns"})}},{key:"blogList",value:function(){var e=this;return console.log("blog posts:",this.state.blogPosts),this.state.blogPosts.sort((function(e,t){return Date.parse(t.createdAt)-Date.parse(e.createdAt)})),this.state.blogPosts.map((function(t){if("All"==e.state.Tag)return s.a.createElement(x,{name:t.name,message:t.message,image:t.image,id:t._id,date:t.createdAt,tags:t.tags});if("Guns"==e.state.Tag){if(t.tags.includes(e.state.Tag))return s.a.createElement("div",null,s.a.createElement(x,{name:t.name,message:t.message,image:t.image,id:t._id,date:t.createdAt,tags:t.tags}))}else if(t.tags.includes(e.state.Tag)||t.tags.includes("All"))return s.a.createElement(x,{name:t.name,message:t.message,image:t.image,id:t._id,date:t.createdAt,tags:t.tags})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"blogPage"},s.a.createElement("h3",null,s.a.createElement("span",{class:"label"},"Blog Page")),s.a.createElement("div",{id:"sortType"},s.a.createElement("p",{id:"sortTypeLabel"},"Topics:"),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"primary",size:"sm",id:"dlikeButtons",onClick:this.setTagAll},"All")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"light",size:"sm",id:"dlikeButtons",onClick:this.setTagLife},"Life")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"success",size:"sm",id:"dlikeButtons",onClick:this.setTagFinance},"Finance")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"warning",size:"sm",id:"dlikeButtons",onClick:this.setTagWork},"Work")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"dark",size:"sm",id:"dlikeButtons",onClick:this.setTagDev},"Dev")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"dark",size:"sm",id:"dlikeButtons",onClick:this.setTagOther},"Other")),s.a.createElement("div",{className:"button"},s.a.createElement(k.a,{variant:"danger",size:"sm",id:"gunButton",onClick:this.setTagGuns},"Guns")),s.a.createElement("div",{className:"buttonr"},s.a.createElement(k.a,{variant:"danger",size:"sm",id:"dlikeButtons",onClick:this.unhideButton},"?"))),this.blogList())}}]),t}(n.Component);var P=function(){return s.a.createElement(c.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement("br",null),s.a.createElement(r.a,{path:"/",exact:!0,component:w}),s.a.createElement(r.a,{path:"/",exact:!0,component:T}),s.a.createElement(r.a,{path:"/",exact:!0,component:O}),s.a.createElement(r.a,{path:"/recipes",exact:!0,component:A}),s.a.createElement(r.a,{path:"/about",exact:!0,component:M}),s.a.createElement(r.a,{path:"/blog",exact:!0,component:z})))};l.a.render(s.a.createElement(P,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d18dc194.chunk.js.map