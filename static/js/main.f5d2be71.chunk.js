(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),o=(a(30),a(21)),s=a(8),m=a(9),i=a(10),u=a(12),d=a(11),h=(a(18),[]),E=[],b=[],p=[],g=[],f=[l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Gender"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Education"),l.a.createElement("th",null,"Training"))],v=0,C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).myChangeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(o.a)({},t,a))},n.sub=function(e){e.preventDefault(),h.push(n.state.name),E.push(n.state.gen),b.push(n.state.add),g.push(n.state.edu),p.push(n.state.train),alert("Data Stored Successfully")},n.show=function(e){e.preventDefault(),n.setState({key:"true"}),v=1},n.clear=function(){document.getElementById("frm").reset()},n.next=function(){n.props.history.push("/learn/ajax/")},n.state={name:"",gen:"Male",add:"",edu:"",train:"",key:"false"},n.handleInputChange=n.handleInputChange.bind(Object(i.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value;t.checked&&(this.state.edu+=a)}},{key:"render",value:function(){var e=this.state.key,t=h.length;if("true"==e)for(var a=0;a<t;a++)f[a+1]=l.a.createElement("tr",null,l.a.createElement("td",null,h[a]),l.a.createElement("td",null,E[a]),l.a.createElement("td",null,b[a]),l.a.createElement("td",null,g[a]),l.a.createElement("td",null,p[a]));else f.push();return l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"container bg-info"},l.a.createElement("br",null),l.a.createElement("div",{className:"bg-danger text-center text-white"},l.a.createElement("h1",null,"Welcome to React Application"),l.a.createElement("br",null),l.a.createElement("h3",null,"Enter the Details")),l.a.createElement("form",{id:"frm"},"Hi,",this.state.name,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:this.myChangeHandler,class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Gender:"),l.a.createElement("select",{class:"form-control",id:"gender",onChange:this.myChangeHandler,name:"gen"},l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Address:"),l.a.createElement("textarea",{class:"form-control",id:"address",onChange:this.myChangeHandler,name:"add"})),l.a.createElement("label",null,"Educational Qualification:"),l.a.createElement("div",{class:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"edu1",onChange:this.handleInputChange,name:"edu",value:"10th"}),l.a.createElement("label",{class:"custom-control-label",for:"edu1"},"10th")),l.a.createElement("div",{class:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"edu2",onChange:this.handleInputChange,name:"edu",value:"12th"}),l.a.createElement("label",{class:"custom-control-label",for:"edu2"},"12th")),l.a.createElement("label",null,"Training:"),l.a.createElement("div",{class:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",class:"custom-control-input",id:"train1",onChange:this.myChangeHandler,name:"train",value:"Yes"}),l.a.createElement("label",{class:"custom-control-label",for:"train1"},"Yes")),l.a.createElement("div",{class:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",class:"custom-control-input",id:"train2",onChange:this.myChangeHandler,name:"train",value:"No"}),l.a.createElement("label",{class:"custom-control-label",for:"train2"},"No")),l.a.createElement("div",{class:"form-group text-center"},l.a.createElement("button",{id:"submit",class:"btn btn-success",onClick:this.sub},"Submit"),"\xa0\xa0",l.a.createElement("button",{id:"clear",class:"btn btn-danger",onClick:this.clear},"Clear"),"\xa0\xa0",l.a.createElement("button",{id:"clear",class:"btn btn-warning",onClick:this.show},"Show Data"),"\xa0\xa0"),l.a.createElement("p",{className:"text-center ",href:"#",role:"button",onClick:this.next},l.a.createElement("a",{className:"nav-link text-danger",href:"#"},l.a.createElement("b",null,"Click Here to view React Application with Jquery and PHP")))),v?l.a.createElement("div",{className:"text-center"},l.a.createElement("table",{className:"table table-bordered"},f)):null,l.a.createElement("br",null)))}}]),a}(l.a.Component),y=a(13),k=a.n(y),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).sub=function(e){e.preventDefault(),k.a.ajax({url:"http://hypertexttechies2020.000webhostapp.com/React/ajax.php",type:"POST",data:k()("#frm").serialize(),success:function(e){alert("Success"),k()("#res").html(e)},error:function(e,t,a){alert("Error")}})},e.clear=function(){document.getElementById("frm").reset()},e.back=function(){e.props.history.push("/learn/")},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{class:"container bg-info"},l.a.createElement("br",null),l.a.createElement("div",{className:"bg-danger text-center text-white"},l.a.createElement("h1",null,"Welcome to React Application with Jquery and PHP"),l.a.createElement("br",null),l.a.createElement("h3",null,"Enter the Details")),l.a.createElement("form",{id:"frm"},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:this.myChangeHandler,class:"form-control"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Gender:"),l.a.createElement("select",{class:"form-control",id:"gender",onChange:this.myChangeHandler,name:"gen"},l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Address:"),l.a.createElement("textarea",{class:"form-control",id:"address",onChange:this.myChangeHandler,name:"add"})),l.a.createElement("label",null,"Educational Qualification:"),l.a.createElement("div",{class:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"edu1",onChange:this.handleInputChange,name:"edu[]",value:"10th"}),l.a.createElement("label",{class:"custom-control-label",for:"edu1"},"10th")),l.a.createElement("div",{class:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"edu2",onChange:this.handleInputChange,name:"edu[]",value:"12th"}),l.a.createElement("label",{class:"custom-control-label",for:"edu2"},"12th")),l.a.createElement("label",null,"Training:"),l.a.createElement("div",{class:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",class:"custom-control-input",id:"train1",onChange:this.myChangeHandler,name:"train",value:"Yes"}),l.a.createElement("label",{class:"custom-control-label",for:"train1"},"Yes")),l.a.createElement("div",{class:"custom-control custom-radio"},l.a.createElement("input",{type:"radio",class:"custom-control-input",id:"train2",onChange:this.myChangeHandler,name:"train",value:"No"}),l.a.createElement("label",{class:"custom-control-label",for:"train2"},"No")),l.a.createElement("div",{class:"form-group text-center"},l.a.createElement("button",{id:"submit",class:"btn btn-success",type:"submit",onClick:this.sub},"Submit"),"\xa0\xa0",l.a.createElement("button",{id:"clear",class:"btn btn-danger",onClick:this.clear},"Clear"),"\xa0\xa0",l.a.createElement("button",{id:"clear",class:"btn btn-warning",onClick:this.back},"Back"),"\xa0\xa0")),l.a.createElement("div",{id:"res"}),l.a.createElement("br",null)))}}]),a}(l.a.Component),w=a(22),H=a(5);var N=function(){return l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement(H.a,{exact:!0,path:"/learn/",component:C}),l.a.createElement(H.a,{exact:!0,path:"/learn/ajax/",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.f5d2be71.chunk.js.map