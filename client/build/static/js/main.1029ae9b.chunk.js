(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),c=n(1),u=n(2),o=n(4),h=n(3),s=n(5),m=(n(14),function(e){var t=e.description.charAt(0).toUpperCase()+e.description.slice(1),n=Math.round(e.temperature);return r.a.createElement("div",null,r.a.createElement("h1",null,e.city),r.a.createElement("h2",null,n,"\xb0F"),r.a.createElement("h3",null,t),r.a.createElement("p",null,"High: ",e.high,"\xb0F"),r.a.createElement("p",null,"Low: ",e.low,"\xb0F"),r.a.createElement("p",null,"Humidity: ",e.humidity,"%"),r.a.createElement("p",null,"Wind Speed: ",e.wind,"mps"))}),d=function(e){var t=new Date,n=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear(),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(n).getDay()];return r.a.createElement("div",null,r.a.createElement("h1",null,a," ",n))},p=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("br",null),r.a.createElement("p",{className:"highlight"},"Please enter a valid city"),r.a.createElement("p",{className:"highlight"},"for current weather."))},y=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{type:"text",value:e.query,onChange:e.handleChange,placeholder:"Enter City"}),r.a.createElement("button",{type:"submit"})))},w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={weather:null,city:"",error:!1,query:""},n.getWeather=function(e){return fetch("/weather",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e})}).then(function(e){return e.json()}).then(function(e){0!==Object.keys(e).length?n.setState({weather:e,city:e.name,error:!1,query:""}):n.setState({weather:null,city:"",error:!0,query:""})})},n.handleChange=function(e){n.setState({query:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.getWeather(n.state.query),n.setState({query:""})},n}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.getWeather(e.state.weather)},9e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"centered"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(y,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,query:this.state.query}),this.state.error&&r.a.createElement(p,null),r.a.createElement("br",null),this.state.weather&&r.a.createElement(m,{city:this.state.weather.name,temperature:this.state.weather.main.temp,description:this.state.weather.weather[0].description,humidity:this.state.weather.main.humidity,low:this.state.weather.main.temp_min,high:this.state.weather.main.temp_max,wind:this.state.weather.wind.speed}))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App overlay"},r.a.createElement(w,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.1029ae9b.chunk.js.map