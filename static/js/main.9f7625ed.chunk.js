(window.webpackJsonpsr10_simple=window.webpackJsonpsr10_simple||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/logo.38cfcf27.svg"},15:function(e,a,t){e.exports=t.p+"static/media/map1.ae71cd64.png"},16:function(e,a,t){e.exports=t.p+"static/media/map2.35844779.png"},17:function(e,a,t){e.exports=t.p+"static/media/orsini.82376367.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/CollageWed.bc073bd6.png"},32:function(e,a,t){e.exports=t(48)},46:function(e,a,t){},47:function(e,a,t){e.exports=t.p+"static/media/map3.edfbd92a.png"},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(25),o=t.n(i),l=t(10),c=t(12),s=t(26),m=function(e){var a=function(e){return e.split("").map(function(e){return e.charCodeAt(0)})},t=function(e){return("0"+Number(e).toString(16)).substr(-2)},n=function(t){return a(e).reduce(function(e,a){return e^a},t)};return function(e){return e.split("").map(a).map(n).map(t).join("")}}("isladog"),u="undefined"!==typeof window?window:0,p=function(){return"undefined"!==typeof window},d=function(e){return"3f121e18123a1515123d1a"===m(e)&&(u.localStorage.setItem("loggedIn",e),!0)},h=function(){return!!p()&&(!!u.localStorage.getItem("loggedIn")&&!(!p()||"3f121e18123a1515123d1a"!==m(u.localStorage.getItem("loggedIn"))))};var f=function(e){var a=e.component,t=Object(s.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},t,{render:function(e){return h()?r.a.createElement(a,e):r.a.createElement(c.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},E=t(1),g=t(2),b=t(4),v=t(3),y=t(5),O=t(29),w=t.n(O),j=(t(46),function(e){var a=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{title:"Seth + Raff 10",meta:[{name:"robts",content:"noindex"}]},r.a.createElement("html",{lang:"en"})),a)}),S=t(14),N=t.n(S),F=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(b.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={password:"",error:!1,success:!1},t.handleUpdate=function(e){t.setState({password:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var a=d(t.state.password);h()&&t.setState({success:!0}),a||t.setState({error:!0})},t}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e,a=this;return this.state.error&&(e=r.a.createElement("span",null,"Wrong Password.")),h()&&this.setState({success:!0}),this.state.success?r.a.createElement(c.a,{to:{pathname:"/"}}):r.a.createElement(j,null,r.a.createElement("div",{className:"body"},r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:N.a,alt:"westie logo"})),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"Seth + Raff 10"),r.a.createElement("form",{method:"post",onSubmit:function(e){a.handleSubmit(e)}},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",onChange:this.handleUpdate})),r.a.createElement("input",{type:"submit",value:"Log In",style:{backgroundColor:"#302E31"}})),e)))),r.a.createElement("div",{id:"bg"})))}}]),a}(r.a.Component),C={en:"Join Seth and Raff for their 10th anniversary celebration",it:"Partecipa al 10\xba anniversario di Seth and Raff"},z={anniversary:{en:"anniversary",it:"l'anniversario"},venue:{en:"venue",it:"location e hotel"},rsvp:{en:"RSVP",it:"Rispondi all'invito"},travel:{en:"travel",it:"come arrivare"}},k=function(e){var a=e.language,t=e.isMain?r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",null,"Seth + Raff 10"),r.a.createElement("p",null,C[a]))):"";return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:N.a,alt:"westie logo"}))),t,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/anniversary#".concat(a)},z.anniversary[a])),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/venue#".concat(a)},z.venue[a])),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/travel#".concat(a)},z.travel[a])),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/rsvp#".concat(a)},z.rsvp[a])))))},T=function(e){return r.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"Any questions? Contact ",r.a.createElement("a",{href:"mailto:sethandraff@gmail.com"},"sethandraff@gmail.com")))},I=function(e){return r.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"Domande? Scrivi a ",r.a.createElement("a",{href:"mailto:sethandraff@gmail.com"},"sethandraff@gmail.com")))},R=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(v.a)(a).call(this,e))).state={loading:"is-loading"},t}return Object(y.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e="en";this.props.location.hash.match(/it$/)&&(e="it");var a="en"===e?r.a.createElement(T,{language:e}):r.a.createElement(I,{language:e});return r.a.createElement(j,{location:this.props.location},r.a.createElement("div",{className:"body ".concat(this.state.loading)},r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{className:"lang",ref:"lang"},r.a.createElement("a",{href:"#it",className:"button"},"IT"),r.a.createElement("a",{href:"#",className:"button"},"EN")),r.a.createElement(k,{language:e,isMain:!0}),a),r.a.createElement("div",{id:"bg"})))}}]),a}(r.a.Component),x=t(31);var A=function(e){var a=e.children,t=e.location,i=Object(n.useState)("is-loading"),o=Object(x.a)(i,2),l=o[0],c=o[1],s=setTimeout(function(){c("")},100);Object(n.useEffect)(function(){return function(){s&&clearTimeout(s)}},[s]);var m="en";t.hash.match(/it$/)&&(m="it");var u="en"===m?r.a.createElement(T,{language:m}):r.a.createElement(I,{language:m});return r.a.createElement(j,{location:t},r.a.createElement("div",{className:"body ".concat(l)},r.a.createElement("div",{id:"wrapper"},r.a.createElement("div",{className:"lang"},r.a.createElement("a",{href:"#it",className:"button"},"IT"),r.a.createElement("a",{href:"#",className:"button"},"EN")),r.a.createElement("div",{className:"alttitle"},r.a.createElement("h1",null,"Seth + Raff 10")),r.a.createElement(k,{language:m}),r.a.createElement("div",{id:"main",className:l},a),u),r.a.createElement("div",{id:"bg"})))},D=t(15),P=t.n(D),M=t(16),W=t.n(M),L=(t(47),function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Travel"),r.a.createElement("p",null,"N.B. Rideshare apps are not available in this area of Italy."),r.a.createElement("h3",null,"By Car"),r.a.createElement("p",null,"For those with a car or rental car, there is plenty of room to park in the castle moat. Upon arrival, there is an intercom at the gate. Press the buzzer to be let in. Cars will give guests the greatest flexibility in travel."),r.a.createElement("h3",null,"Coach Transport"),r.a.createElement("p",null,"For those who will benefit from transport options, we will run a coach shuttle between the local train station (Fara Sabina) and Castello Orsini Saturday afternoon and Sunday afternoon. You can reach Fara Sabina direct from Fiumicino Airport and Rome. We will post transport times in the coming months. Do get in touch with us if you have questions."),r.a.createElement("p",null,"Castello Orsini can arrange private transfers between the castle and the train station. These transfers cost \u20ac54."),r.a.createElement("h3",null,"From Fiumicino Airport"),r.a.createElement("p",null,"There is a direct train to Fara Sabina from Rome's Fiumicino Airport. Take the Trenitalia REG 22001 travelling towards Orte. There will be 17 stops and the trip time is about 1hr 30mins."),r.a.createElement("p",null,"There is no further public transport from Fara Sabina to the venue. See above for more details."),r.a.createElement("img",{src:P.a,alt:"train map from FCO to Fara Sabina"}),r.a.createElement("h3",null,"From Rome"),r.a.createElement("p",null,"Depart from Roma Tiburtina station and take the TrenItalia REG 21720 train towards Poggio Mirteto. There will be 7 stops and travel time is approximately 40 minutes."),r.a.createElement("p",null,"There is no further public transport from Fara Sabina to the venue. See below for more details."),r.a.createElement("img",{src:W.a,alt:"train map from Rome to Fara Sabina"}),r.a.createElement("h3",null,"From Fara Sabina"),r.a.createElement("p",null,"There is no public transport from the train station in Fara Sabina to Nerola and Castello Orsini."),r.a.createElement("p",null,"In case you are delayed and need transport, call Castello Orsini or one of us to arrange transport. (More info and numbers coming soon)"))}}]),a}(r.a.Component)),$=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Come Arrivare"),r.a.createElement("h3",null,"In macchina"),r.a.createElement("p",null,"Si pu\xf2 parcheggiare nel fossato del castello. Una volta arrivati, citofonate al cancello per farvi aprire."),r.a.createElement("h3",null,"Pullman"),r.a.createElement("p",null,"Organizzeremo degli autobus dalla stazione dei treni pi\xf9 vicina: Fara Sabina a cui \xe8 possibile arrivare a Fara Sabina con il treno da Roma Tiburtina o da Fiumicino. Gli autobus saranno disponibili Sabato pomeriggio e Domenica pomeriggio. Aggiungeremo ulteriori dettagli nei prossimi mesi. Scrivete pure se avete domande."),r.a.createElement("p",null,"Se fosse necessario, il Castello Orsini pu\xf2 organizzare trasferimenti su richiesta tra la stazione e il castello per \u20ac54."),r.a.createElement("h3",null,"Dall\u2019aeroporto di Fiumicino"),r.a.createElement("p",null,"C\u2019\xe8 un treno diretto dall\u2019aeroporto a Fara Sabina: Trenitalia REG 22001 direzione Orte. Sono 17 fermate e ci mette un\u2019ora e mezza."),r.a.createElement("p",null,"Non sappiamo se ci siano trasporti pubblici da Fara Sabina al castello, ma ci saranno gli i pullman organizzati da noi descritti sopra."),r.a.createElement("img",{src:P.a,alt:"train map from FCO to Fara Sabina"}),r.a.createElement("h3",null,"Da Roma"),r.a.createElement("p",null,"Da Roma Tiburtina prendete il TrenItalia REG 21720 direzione Poggio Mirteto. Sono 7 fermate fino Fara Sabina e ci mette circa 40 minuti."),r.a.createElement("p",null,"Non sappiamo se ci siano trasporti pubblici da Fara Sabina al castello, ma ci saranno gli i pullman organizzati da noi descritti sopra."),r.a.createElement("img",{src:W.a,alt:"train map from Rome to Fara Sabina"}),r.a.createElement("h3",null,"Da Fara Sabina"),r.a.createElement("p",null,"Non sappiamo se ci siano trasporti pubblici da Fara Sabina al castello."),r.a.createElement("p",null,"In caso di ritardi, chiamate il Castello Orsini o uno di noi per farvi venire a prendere. (Aggiungeremo ulteriori informazioni)"))}}]),a}(r.a.Component),G=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=r.a.createElement(L,null);return this.props.location.hash.match(/it$/)&&(e=r.a.createElement($,null)),r.a.createElement(A,{location:this.props.location},r.a.createElement("article",{className:"active"},e))}}]),a}(r.a.Component),U=t(30),q=t.n(U),B=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Anniversary"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:q.a,alt:""})),r.a.createElement("p",null,"In 2010 we celebrated our union in a small, intimate ceremony. In 2020, we would like to celebrate with all our friends and family."),r.a.createElement("h3",null,"Dress Code"),r.a.createElement("p",null,"Foremost, dress to enjoy the evening! If you have particular considerations that need attention in order to enjoy the anniversary event comfortably over 5-6 hours, definitely follow your instinct. Otherwise, typical wedding attire is appropriate. Black tie not necessary, bow ties always appreciated."),r.a.createElement("h3",null,"Social Media Guidelines"),r.a.createElement("p",null,"Social media is great!"),r.a.createElement("p",null,"No rules or guidelines. Feel free to make your grandmother blush and giggle."),r.a.createElement("p",null,"If you would like to use a hashtag, we would suggest:",r.a.createElement("br",null),r.a.createElement("code",null,"#dieciannifa")," and ",r.a.createElement("code",null,"#sethandraff10")))}}]),a}(r.a.Component),V=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"L'anniversario"),r.a.createElement("p",null,"Nel 2010 abbiamo celebrato la nostra unione con una cerimonia piccola e intima. In occasione del nostro decimo anniversario vorremmo festeggiare con tutti i nostri amici e parenti."),r.a.createElement("h3",null,"All\u2019evento"),r.a.createElement("p",null,"Consigliamo di vestirvi come per un matrimonio! Tenete conto del fatto che il castello ha scale e sampietrini."),r.a.createElement("h3",null,"Uso dei social"),r.a.createElement("p",null,"Nessuna regola particolare, divertitevi e postate pure! Suggeriamo l\u2019uso degli hashtag:",r.a.createElement("br",null),r.a.createElement("code",null,"#dieciannifa")," e ",r.a.createElement("code",null,"#sethandraff10")))}}]),a}(r.a.Component);var J=function(e){var a=e.location,t=r.a.createElement(B,null);return a.hash.match(/it$/)&&(t=r.a.createElement(V,null)),r.a.createElement(A,{location:a},r.a.createElement("article",{className:"active"},t))},_=t(17),Q=t.n(_),Y=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Venue and Accommodation"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:Q.a,alt:"view of Orsini castle"})),r.a.createElement("p",null,"The anniversary celebration will take place at Castello Orsini in Nerola. The anniversary will take place on Saturday the 5th of September, but feel free to join for the weekend. More info on the specific agenda coming soon!"),r.a.createElement("h3",null,"Lodging"),r.a.createElement("p",null,"We encourage utilizing room blocks that have been reserved at the venue itself, ",r.a.createElement("a",{href:"https://www.castellorsini.it/en/home"},"Castello Orsini"),", however there is a limited number of rooms available. If you\u2019re interested in staying in the castle, please indicate so in the RSVP form and we\u2019ll get in touch and do our best to accommodate you. Also keep in mind that the castle is centuries old; the rooms are comfortable and have the amenities of a good hotel, but cannot match the luxury level of a modern hotel. Stay for the historical charm! Each room is en suite and has air conditioning. The rooms are \u20ac90 per night, and a third bed can be added to most rooms for an extra \u20ac40. There are a number of rooms that are designed with a mezzanine sleeping area above and a lounge area below, which can be an additional sleeping area. If couples or close friends want to share a room, do let us know or ask for more information. This will also help maximize castle capacity for guests. We are locating another convenient hotel nearby. Check again in the next few months for more details."))}}]),a}(r.a.Component),H=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Location e alloggio"),r.a.createElement("span",{className:"image main"},r.a.createElement("img",{src:Q.a,alt:"veduta del castello Orsini"})),r.a.createElement("p",null,"L\u2019anniversario avr\xe0 luogo al Castello Orsini a Nerola (Roma). La data \xe8 il 5 Settembre 2020 (Sabato), ma restate pure per l\u2019intero fine settimana se volete! Presto aggiungeremo altri dettagli per l\u2019evento principale e altre attivit\xe0."),r.a.createElement("h3",null,"Dove alloggiare"),r.a.createElement("p",null,"Se voleste restare a dormire, vi consigliamo di stare proprio alla location, il ",r.a.createElement("a",{href:"https://www.castellorsini.it"},"Castello Orsini"),". Per\xf2 c\u2019\xe8 un numero limitato di stanze, quindi se foste interessati, fatecelo sapere nel modulo di risposta e ci metteremo in contatto con voi direttamente. Tenete anche conto che il castello \xe8 antico e anche se le camere sono confortevoli, non sono al livello di un hotel di lusso. Ogni camera ha il proprio bagno e aria condizionata. Le camere sono \u20ac90 a notte, e un terzo letto pu\xf2 essere aggiunto in parecchie camere per \u20ac40 extra. Ci sono alcune camere ampie con un soppalco, con il letto sopra e un salotto sotto che pu\xf2 essere attrezzato con un letto a doppia piazza. Se due coppie o amici volessero condividere una di queste stanze, fatecelo sapere o chiedeteci ulteriori informazioni. Questo ci aiuterebbe anche a massimizzare il numero di ospiti al castello. Stiamo ancora cercando un hotel alternativo nelle vicinanze, quindi tenete d\u2019occhio il sito per ulteriori informazioni."))}}]),a}(r.a.Component);var K=function(e){var a=e.location,t=r.a.createElement(Y,null);return a.hash.match(/it$/)&&(t=r.a.createElement(H,null)),r.a.createElement(A,{location:a},r.a.createElement("article",{className:"active"},t))},X=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"RSVP"),r.a.createElement("p",null,"Coming Soon!"))}}]),a}(r.a.Component),Z=function(e){function a(){return Object(E.a)(this,a),Object(b.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"major"},"Rispondi all'invito"),r.a.createElement("p",null,"Coming Soon!"))}}]),a}(r.a.Component);var ee=function(e){var a=e.location,t=r.a.createElement(X,null);return a.hash.match(/it$/)&&(t=r.a.createElement(Z,null)),r.a.createElement(A,{location:a},r.a.createElement("article",{className:"active"},t))};var ae=function(){return r.a.createElement(l.a,null,r.a.createElement(c.b,{path:"/login",component:F}),r.a.createElement(f,{exact:!0,path:"/",component:R}),r.a.createElement(f,{path:"/travel",component:G}),r.a.createElement(f,{path:"/anniversary",component:J}),r.a.createElement(f,{path:"/venue",component:K}),r.a.createElement(f,{path:"/rsvp",component:ee}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.9f7625ed.chunk.js.map