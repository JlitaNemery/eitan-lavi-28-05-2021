(this.webpackJsonpherolo=this.webpackJsonpherolo||[]).push([[0],{33:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(6),i=c.n(r),s=(c(33),c(16)),o=c(3),u=function(e){return{type:"activeView/setActiveView",payload:e}},l="Main",d=function(e){return e.activeView},j=function(e){return e.menuToggle},h=function(e){return e.temperatureToggle},v=function(e){return{type:"searchKey/setSearchKey",payload:e}},f=function(e){return e.searchKey},b=c(1),m=function(e){Object(s.a)(e);var t=Object(o.b)(),c=Object(o.c)(d),a=Object(o.c)(h),n=Object(o.c)(j),r=function(e){t(v("")),t(u(e)),i(!1)},i=function(e){t(function(e){return{type:"menu/setToggle",payload:e}}(e))};return Object(b.jsxs)("div",{id:"header",children:[Object(b.jsx)("div",{className:"title",children:"Eitan's weather app"}),Object(b.jsxs)("div",{className:"switch-env",children:[Object(b.jsx)("span",{children:"\u2109"}),Object(b.jsxs)("label",{className:"switch",htmlFor:"temprature-selector",children:[Object(b.jsx)("input",{type:"checkbox",name:"temprature-selector",id:"temprature-selector",checked:a,onChange:function(e){return c=e.target.checked,void t(function(e){return{type:"temperature/setTemperatureToggle",payload:e}}(c));var c}}),Object(b.jsx)("span",{className:"slider"})]}),Object(b.jsx)("span",{children:"\u2103"})]}),Object(b.jsxs)("div",{className:"navigation",children:[Object(b.jsxs)("div",{id:"menu",children:[Object(b.jsx)("input",{id:"burger",type:"checkbox",checked:n,onChange:function(e){return i(e.target.checked)}}),Object(b.jsx)("label",{htmlFor:"burger",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})}),Object(b.jsx)("nav",{children:Object(b.jsxs)("div",{className:"text-env",style:{top:n?"35%":"100%"},children:[Object(b.jsx)("div",{onClick:function(){r("Favorites")},children:"Favorites"}),Object(b.jsx)("div",{onClick:function(){r("Main")},children:"Main"})]})})]}),Object(b.jsxs)("div",{className:"desktop",children:[Object(b.jsx)("div",{onClick:function(){r("Main")},className:"button ".concat("Main"===c?"active":""),children:"Main"}),Object(b.jsx)("div",{onClick:function(){r("Favorites")},className:"button ".concat("Favorites"===c?"active":""),children:"Favorites"})]})]})]})},p=c(27),O=c(8),x=c.n(O),y=c(13),g=c(11),N=function(e,t,c){var n=Object(a.useState)(e),r=Object(g.a)(n,2),i=r[0],s=r[1],o=Object(a.useState)(!1),u=Object(g.a)(o,2),l=u[0],d=u[1],j=Object(a.useState)(""),h=Object(g.a)(j,2),v=h[0],f=h[1];return Object(a.useEffect)((function(){t.test(i)||""===i?d(!0):(f(c),d(!1))}),[i]),[l,s,v]},w=c(9),k=c(10),I="HadMXOom5YKgwzzsfCoggIoAZigQV4vc",S=function(e){return{type:"city/setCity",payload:e}},T={},C=function(e){return e.city},M=function(e){return{type:"currentWeather/setWeather",payload:e}},D=function(e){return e.currentWeather},F=function(e){return{type:"forecast/setForecast",payload:e}},W=function(e){return e.forecast},K=function(e){return{type:"favorites/setFavorites",payload:e}},V=[],z=function(e){return e.favorites},J=[],L=function(e){return e.searchResults},E=c(7),A=c(26),R=c.n(A),U=function(e){var t=e.removeFavorite,c=e.getCurrentTemperature,n=e.getWeatherImage,r=e.DegreesIcon,i=e.defaultSearchKey,s=Object(o.b)(),u=Object(o.c)(C),l=Object(o.c)(f),j=Object(o.c)(D),m=Object(o.c)(W),O=Object(o.c)(h),T=Object(o.c)(z),V=Object(o.c)(d),J=N(l,/^[a-zA-Z\s]+$/,"Ileagal characters"),A=Object(g.a)(J,3),U=A[0],P=A[1],Y=A[2],Z=Object(o.c)(L);Object(a.useEffect)((function(){Q(i,!0)}),[i]),Object(a.useEffect)((function(){void 0!==l&&""!==l&&"Main"===V&&Q(l,!0)}),[V]),Object(a.useEffect)((function(){u.Key&&H(u.Key)}),[O]);var q=function(){var e=Object(y.a)(x.a.mark((function e(t){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),U){e.next=3;break}return e.abrupt("return");case 3:c="no-key",a=0;case 5:if(!(a<Z.length)){e.next=12;break}if(Z[a].LocalizedName!==t.target[0].value){e.next=9;break}return c=Z[a].Key,e.abrupt("break",12);case 9:a++,e.next=5;break;case 12:if("no-key"!==c){e.next=15;break}return E.NotificationManager.error("No imaginary cities pls...","Whoops...",3e3),e.abrupt("return");case 15:s(S(Z[0])),B(c),H(c);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(y.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(I),fetch(c).then((function(e){return e.json()})).then((function(e){s(M(e[0])),console.log(j)})).catch((function(e){E.NotificationManager.error("Can't get weather, If I knew I'd tell you","Whoops...",3e3)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(I,"&metric=").concat(O),fetch(c).then((function(e){return e.json()})).then((function(e){s(F(e.DailyForecasts))})).catch((function(e){E.NotificationManager.error("Can't get weather, If I knew I'd tell you","Whoops...",3e3)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(y.a)(x.a.mark((function e(t,c){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(I,"&q=").concat(t),fetch(a).then((function(e){return e.json()})).then((function(e){s({type:"searchResults/setSearchResults",payload:e}),c&&(s(S(e[0])),B(e[0].Key),H(e[0].Key))})).catch((function(e){E.NotificationManager.error("No city found, Are you lost?","Whoops...",3e3)}));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),X=function(e){T.includes(e)?t(e):function(e){if(T.length>0){var t=[].concat(Object(p.a)(T),[e]);localStorage.setItem("favorites",JSON.stringify(t))}else localStorage.setItem("favorites",JSON.stringify([e]));s(K(JSON.parse(localStorage.getItem("favorites"))))}(e)},$=function(e){var t=new Date(e);return Intl.DateTimeFormat("en-US",{weekday:"short"}).format(t)},G=function(){return Object(b.jsxs)("div",{className:"content-env",children:[Object(b.jsxs)("div",{className:"top-row",children:[Object(b.jsxs)("div",{className:"city",children:[Object(b.jsx)("div",{className:"weather-image",style:{backgroundImage:n(null===j||void 0===j?void 0:j.WeatherIcon)}}),Object(b.jsxs)("div",{className:"text-large",children:[Object(b.jsx)("div",{className:"name",children:u.LocalizedName}),Object(b.jsxs)("div",{className:"conditions",children:[Object(b.jsx)("div",{className:"temperature",children:c(j)}),Object(b.jsx)("div",{children:j.WeatherText})]})]})]}),Object(b.jsx)("div",{className:"info"}),Object(b.jsx)("div",{className:"favorites-button",onClick:function(){return X(u.Key+":"+u.LocalizedName)},children:Object(b.jsx)("div",{className:"icon ".concat(T.includes(u.Key+":"+u.LocalizedName)?"remove":"add"),children:Object(b.jsx)(w.a,{icon:k.a})})})]}),Object(b.jsx)("div",{className:"forecast-env",style:{overflowY:"scroll"},children:Object(b.jsx)("div",{className:"forecast",children:m.map((function(e){return Object(b.jsxs)("div",{className:"box",style:{backgroundImage:n(e.Day.Icon)},children:[Object(b.jsx)("div",{className:"day",children:$(e.Date)}),Object(b.jsx)("div",{className:"text",children:e.Day.IconPhrase}),Object(b.jsxs)("div",{className:"temperature",children:[Object(b.jsxs)("div",{className:"min",children:[Object(b.jsx)("span",{children:e.Temperature.Minimum.Value}),Object(b.jsx)(r,{str:e.Temperature.Minimum.Unit})]}),Object(b.jsx)("span",{children:"-"}),Object(b.jsxs)("div",{className:"max",children:[Object(b.jsx)("span",{children:e.Temperature.Maximum.Value}),Object(b.jsx)(r,{str:e.Temperature.Maximum.Unit})]})]})]},e.EpochDate)}))})})]})};return Object(b.jsxs)("div",{id:"main",children:[Object(b.jsx)("div",{className:"search-box-env",children:Object(b.jsxs)("div",{className:"search-box",children:[Object(b.jsxs)("form",{onSubmit:q,spellCheck:"false",children:[Object(b.jsx)(R.a,{getItemValue:function(e){return e.LocalizedName},items:Z,renderItem:function(e,t){return Object(b.jsx)("div",{className:"selection ".concat(t?"highlight":"normal"),children:e.LocalizedName},e.Key)},value:l,onChange:function(e){return t=e.target.value,s(v(t)),P(t),void(U&&/[a-zA-Z]/g.test(t)&&Q(t));var t},onSelect:function(e){return function(e){s(v(e)),P(e),U&&Q(e,!0)}(e)}}),Object(b.jsx)("button",{type:"submit",className:"submit-search ".concat(U?"":"disabled"),children:Object(b.jsx)(w.a,{icon:k.c})})]}),Object(b.jsx)("div",{className:"error-env",children:Object(b.jsx)("div",{className:U?"invalid-search":"invalid-search on",children:Y})})]})}),m&&j?Object(b.jsx)(G,{}):Object(b.jsx)("div",{className:"loader",children:"Loading..."})]})},P=c(22),Y=function(e){return{type:"favoritesData/setFavoritesData",payload:e}},Z=[],q=function(e){return e.favoritesData},B=function(e){var t=e.removeFavorite,c=e.getCurrentTemperature,n=e.getWeatherImage,r=Object(o.b)(),i=Object(o.c)(z),s=Object(o.c)(q);Object(a.useEffect)((function(){!function(){var e=i.map((function(e){var t=e.split(":")[0];return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(I))}));Promise.all(e).then((function(e){return Promise.all(e.map((function(e){return e.json()}))).then((function(e){var t=e.map((function(e,t){var c=i[t].split(":"),a=Object(g.a)(c,2),n=a[0],r=a[1];return Object(P.a)(Object(P.a)({},e[0]),{},{key:n,name:r})}));r(Y(t))})).catch((function(e){E.NotificationManager.error("Can't get weather, If I knew I'd tell you","Whoops...",3e3)}))})).catch((function(e){return E.NotificationManager.error("Can't get weather, If I knew I'd tell you","Whoops...",3e3)}))}()}),[i]);var l=function(){return Object(b.jsx)("div",{className:"boxes",children:s.map((function(e){return Object(b.jsxs)("div",{className:"box",style:{backgroundImage:n(e.WeatherIcon)},children:[Object(b.jsx)("div",{className:"dark",onClick:function(){var t;t=e.name,r(v(t)),r(u("Main"))}}),Object(b.jsx)("div",{className:"icon",onClick:function(){t(e.key+":"+e.name)},children:Object(b.jsx)(w.a,{icon:k.a})}),Object(b.jsx)("div",{className:"city-name",children:e.name}),Object(b.jsx)("div",{className:"text",children:e.WeatherText}),Object(b.jsx)("div",{className:"temperature",children:c(e)}),Object(b.jsxs)("div",{className:"city-id",children:[Object(b.jsx)("span",{children:"id: "}),Object(b.jsx)("span",{children:e.key})]})]},e.key)}))})},d=function(){return Object(b.jsx)("div",{style:{margin:"auto"},children:Object(b.jsx)("span",{children:"You have no favorites yet... except you :)"})})};return Object(b.jsx)("div",{id:"favorites",children:Object(b.jsxs)("div",{className:"content-env",children:[Object(b.jsx)("div",{className:"top-row"}),s.length>0?Object(b.jsx)(l,{}):Object(b.jsx)(d,{})]})})},H=function(e){return{type:"theme/setTheme",payload:e}},Q="Dark",X=function(e){return e.theme},$=(c(48),function(e){Object(s.a)(e);var t=Object(o.b)(),c=Object(o.c)(d),n=Object(o.c)(z),r=Object(o.c)(h),i=Object(o.c)(q),l=Object(o.c)(X);Object(a.useEffect)((function(){t(u()),t(K(JSON.parse(localStorage.getItem("favorites")))),t(H(JSON.parse(localStorage.getItem("theme"))))}),[]);var j=function(e){var c=e.split(":")[0],a=i.filter((function(e){return e.key!==c})),r=n.filter((function(t){return t!==e}));localStorage.setItem("favorites",JSON.stringify(r)),t(K(JSON.parse(localStorage.getItem("favorites")))),t(Y(a))},v=function(e){if(e)return r?Object(b.jsxs)("div",{className:"temperature-text",children:[Object(b.jsx)("span",{children:e.Temperature.Metric.Value}),Object(b.jsx)(p,{str:e.Temperature.Metric.Unit})]}):Object(b.jsxs)("div",{className:"temperature-text",children:[Object(b.jsx)("span",{children:e.Temperature.Imperial.Value}),Object(b.jsx)(p,{str:e.Temperature.Imperial.Unit})]})},f=function(e){if(e){var t=e<10?"0"+e.toString():e.toString();return"url(https://developer.accuweather.com/sites/default/files/".concat(t,"-s.png)")}},p=function(e){var t=e.str;switch(t=t.toLowerCase()){case"c":return Object(b.jsx)("span",{children:"\u2103"});case"f":return Object(b.jsx)("span",{children:"\u2109"});default:return""}};return Object(b.jsxs)("div",{id:"app-content",className:"Light"===l?"light-theme":"dark-theme",children:[Object(b.jsxs)("div",{className:"change-theme",onClick:function(){return function(){var e="Dark";switch(l){case"Dark":e="Light"}t(H(e)),localStorage.setItem("theme",JSON.stringify(e))}()},children:[Object(b.jsx)(w.a,{icon:k.d}),Object(b.jsx)(w.a,{icon:k.b})]}),Object(b.jsx)(E.NotificationContainer,{}),Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"view ".concat("Main"===c?"active":"hidden"),children:Object(b.jsx)(U,{removeFavorite:j,getCurrentTemperature:v,getWeatherImage:f,DegreesIcon:p,defaultSearchKey:"Tel Aviv"})}),Object(b.jsx)("div",{className:"view ".concat("Favorites"===c?"active":"hidden"),children:Object(b.jsx)(B,{removeFavorite:j,getCurrentTemperature:v,getWeatherImage:f,DegreesIcon:p})})]})]})}),G=c(21),_={city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"city/setCity":return t.payload?t.payload:e;default:return e}},searchKey:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"searchKey/setSearchKey":return t.payload?t.payload:"";default:return e}},currentWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentWeather/setWeather":return t.payload?t.payload:e;default:return e}},forecast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forecast/setForecast":return t.payload?t.payload:e;default:return e}},activeView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"activeView/setActiveView":return t.payload?t.payload:e;default:return e}},temperatureToggle:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"temperature/setTemperatureToggle":return t.payload;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"favorites/setFavorites":return t.payload?t.payload:e;default:return e}},favoritesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"favoritesData/setFavoritesData":return t.payload?t.payload:e;default:return e}},menuToggle:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"menu/setToggle":return t.payload;default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"searchResults/setSearchResults":return t.payload;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"theme/setTheme":return t.payload?t.payload:Q;default:return e}}},ee=Object(G.b)(Object(G.a)(_));i.a.render(Object(b.jsx)(o.a,{store:ee,children:Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)($,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.61af03f3.chunk.js.map