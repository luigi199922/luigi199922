(this["webpackJsonpfinance-api"]=this["webpackJsonpfinance-api"]||[]).push([[8],{81:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(17),l=a(18),r=a(20),i=a(19),u=a(21),c=a(0),o=a.n(c),m=a(48),h=a.n(m),s=function(e){return o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,e.option.lastPrice),o.a.createElement("td",null,e.option.volume),o.a.createElement("td",null,e.option.delta),o.a.createElement("td",null,e.option.gamma),o.a.createElement("td",null,e.option.theta),o.a.createElement("td",null,e.option.vega),o.a.createElement("td",null,e.option.impliedVolatility),o.a.createElement("td",null,e.option.bid),o.a.createElement("td",null,e.option.ask),o.a.createElement("td",null,e.option.strike)))},d=function(){return o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Last"),o.a.createElement("th",null,"Volume"),o.a.createElement("th",null,"Delta"),o.a.createElement("th",null,"Gamma"),o.a.createElement("th",null,"Theta"),o.a.createElement("th",null,"Vega"),o.a.createElement("th",null,"IV"),o.a.createElement("th",null,"bid"),o.a.createElement("th",null,"Ask"),o.a.createElement("th",null,"Strike")))},p=function(e){var t=null;e.data.options&&(t=e.data.options.PUT.map((function(e,t){return o.a.createElement(s,{option:e,key:t})})));var a=null;return e.data.options&&(a=e.data.options.CALL.map((function(e,t){return o.a.createElement(s,{option:e,key:t})}))),o.a.createElement("div",null,o.a.createElement("table",{style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"10"},e.name," ",e.data.expirationDate," Calls"))),o.a.createElement(d,null),t),o.a.createElement("hr",null),o.a.createElement("table",{style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"10"},e.name," ",e.data.expirationDate," Puts"))),o.a.createElement(d,null),a))},b=(a(81),a(24)),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){a.setState({nameToSubmit:e.target.value.toUpperCase()})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.baseURL.replace("AAPL",a.state.nameToSubmit);console.log(t),h.a.get(t).then((function(e){return a.setState({name:e.data.code,exchange:e.data.exchange,data:e.data.data})}))},a.state={name:"JNJ",url:"https://finnhub.io/api/v1/stock/option-chain?symbol=JNJ&token=boqata7rh5rfjhndqf1g",nametoSubmit:"",data:[]},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleChange.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleSubmit,method:"post"},o.a.createElement("p",null,"Enter Stock Ticker: "),o.a.createElement("input",{type:"text",value:this.state.nameToSubmit,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(o.a.Component);a.d(t,"default",(function(){return f}));var f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(u)))).state={name:"AAPL",exchange:"",data:[],view:!1,baseURL:"https://finnhub.io/api/v1/stock/option-chain?symbol=AAPL&token=boqata7rh5rfjhndqf1g",url:"",nameToSubmit:"",loading:!0},a.request=function(e){h.a.get(e).then((function(e){return a.setState({name:e.data.code,exchange:e.data.exchange,data:e.data.data})}))},a.handleChange=function(e){a.setState({nameToSubmit:e.target.value.toUpperCase()}),console.log(a.state.nameToSubmit)},a.handleSubmit=function(e){e.preventDefault();var t=a.state.baseURL.replace("AAPL",a.state.nameToSubmit);console.log(t),h.a.get(t).then((function(e){return a.setState({name:e.data.code,exchange:e.data.exchange,data:e.data.data})}))},a.ViewHandler=function(){var e=a.state.view;a.setState({view:!e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get(this.state.baseURL).then((function(t){return e.setState({name:t.data.code,exchange:t.data.exchange,data:t.data.data})}))}},{key:"render",value:function(){var e=this,t=null;return this.state.data&&(t=this.state.data.map((function(t,a){return o.a.createElement(p,{key:a,data:t,name:e.state.name})}))),o.a.createElement("div",{className:"container-fluid text-center",style:{minHeight:"500px"}},o.a.createElement("form",{onSubmit:this.handleSubmit,method:"post"},o.a.createElement("p",null,"Enter Stock Ticker: "),o.a.createElement("input",{type:"text",value:this.state.nameToSubmit,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{type:"submit",value:"Submit"})),o.a.createElement("button",{onClick:this.ViewHandler,className:"btn btn-primary"},"View"),o.a.createElement(E,null),this.state.view?t:null)}}]),t}(o.a.Component)}}]);
//# sourceMappingURL=8.e2fa871e.chunk.js.map