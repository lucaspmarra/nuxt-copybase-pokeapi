(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(e,t,o){e.exports=o.p+"img/Pokemon_brand.c616965.png"},339:function(e,t,o){"use strict";o.r(t);o(23);var n=o(32),r=(o(86),{name:"IndexPage",data:function(){return{pokemonName:"",pokemon:{},loading:!1,error:!1}},methods:{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.get("https://pokeapi.co/api/v2/pokemon/".concat(e.pokemonName));case 4:o=t.sent,e.error=!1,e.pokemon=o.data,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.error=t.t0;case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}}}),c=o(61),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},[t("img",{staticClass:"pokemon-photo",attrs:{src:o(337),alt:"all starters pokemons photo"}}),e._v(" "),t("article",[t("section",[t("b-card",{staticClass:"poke-card"},[t("b-form-group",{attrs:{id:"input-group-1",label:"Pokemon name:","label-for":"pokemon-name"}},[t("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"pokemon-name",type:"search",placeholder:"Please type a Pokemon name"},model:{value:e.pokemonName,callback:function(t){e.pokemonName=t},expression:"pokemonName"}}),e._v(" "),t("p",{staticClass:"mt-1"},[e._v("\n            You can find pokemon list here:\n            "),t("a",{attrs:{href:"https://pokeapi.co/api/v2/pokemon/"}},[e._v("https://pokeapi.co/api/v2/pokemon/")])])],1),e._v(" "),t("b-button",{attrs:{variant:"primary"},on:{click:e.onSubmit}},[e._v("Search")]),e._v(" "),t("b-card-text",{staticClass:"mt-4"},[e.pokemon.name?t("article",[t("h4",[e._v("Pokemon:")]),e._v(" "),t("NuxtLink",{staticClass:"poke-text",attrs:{to:"/pokemon/".concat(e.pokemon.id),prefetch:""}},[e._v(e._s(e.pokemon.name))])],1):e._e(),e._v(" "),e.loading?t("article",[t("div",{staticClass:"spinner-border",attrs:{role:"status"}}),e._v(" "),t("span",{staticClass:"visually-hidden"},[e._v("Loading...")])]):e._e(),e._v(" "),e.error?t("article",[t("p",[e._v("Sorry, We Couldn't Connect You! Please try again later.")]),e._v(" "),t("p",[e._v("Stacktrace: "+e._s(e.error.message))])]):e._e()])],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);