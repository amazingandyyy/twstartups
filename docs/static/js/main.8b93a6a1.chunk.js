(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){e.exports=t(236)},234:function(e,a,t){e.exports=t.p+"static/media/logo.fd873979.svg"},235:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t(10),o=t(12),s=t(11),i=t(3),m=t(7),u=t(14),p=t.n(u),d=t(25),v=t(33),E=t.n(v),h=localStorage.getItem("token"),f=E.a.create({baseURL:"".concat("https://twstartups.herokuapp.com"),"Access-Control-Allow-Origin":"*",headers:{authorization:"bearer ".concat(h)}}),b=localStorage.getItem("token"),y=E.a.create({baseURL:"".concat("https://twstartups.herokuapp.com","/api/candidate"),"Access-Control-Allow-Origin":"*",headers:{authorization:"bearer ".concat(b)}}),g=E.a.create({baseURL:"".concat("https://twstartups.herokuapp.com"),"Access-Control-Allow-Origin":"*"}),N=t(17),O=Object(N.b)(),w=localStorage.getItem("token"),C=function(){return{type:"ERR_MSG_RESET"}},j=t(238),_=t(237),k=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).onSubmit=function(a){console.log(a);var t=Object(i.a)(Object(i.a)({},a),{},{type:"normal"});console.log(t),e.props.signUp(t)},e.renderError=function(e){var a=e.error,t=e.touched,n=e.active;if(t&&a)return!n&&a.confirmPassword,r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},a))},e.renderServerErr=function(){if(e.props.errMsg)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},e.props.errMsg))},e.renderInput=function(a){var t=a.tag,n=a.input,c=a.label,l=a.placeholder,o=a.meta,s=a.type,i="required field";return o.error&&o.touched&&(i="field error"),"refer"===t&&(i="field"),console.log(i),r.a.createElement("div",{className:i},r.a.createElement("label",null,c),r.a.createElement("input",Object.assign({},n,{placeholder:l,autoComplete:"off",type:s})),e.renderError(o))},e.renderOptions=function(){if(e.props.formValues&&e.props.formValues.values){var a=e.props.formValues.values.referral;if("social_media"===a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement(j.a,{name:"referral_notes",component:"input",type:"radio",value:"Facebook",tag:"refer"})," ","Facebook"),r.a.createElement("label",null,r.a.createElement(j.a,{name:"referral_notes",component:"input",type:"radio",value:"LinkedIn",tag:"refer"})," ","LinkedIn"),r.a.createElement("label",null,r.a.createElement(j.a,{name:"referral_notes",component:"input",type:"radio",value:"Other",tag:"refer"})," ","Other"));if("accelerator"===a)return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{name:"referral_notes",component:e.renderInput,type:"text",label:"please put the name of the accelerator",tag:"refer"}));if("VC"===a)return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{name:"referral_notes",component:e.renderInput,type:"text",tag:"refer",label:"please put the name of the VC"}));if("friend"===a)return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{name:"referral_notes",component:e.renderInput,type:"text",label:"please put the name",tag:"refer"}));if("other"===a)return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{name:"referral_notes",component:"textarea",tag:"refer",label:"Please specific the information."}))}},e}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.errMsgReset()}},{key:"render",value:function(){return r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"ui grid container "},r.a.createElement("div",{className:"three column row"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column"},r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("div",{className:"ui huge header"},"Signup"),r.a.createElement(j.a,{name:"name",component:this.renderInput,label:"Your Name",placeholder:"Your Name",type:"text"}),r.a.createElement(j.a,{name:"email",component:this.renderInput,label:"Email",placeholder:"Email",type:"email"}),r.a.createElement(j.a,{name:"password",component:this.renderInput,label:"Password",placeholder:"Password",type:"password"}),r.a.createElement(j.a,{name:"confirmPassword",component:this.renderInput,label:"Confirm Password",placeholder:"Confirm Password",type:"password"}),r.a.createElement("div",{className:"ui small header"},"Referrals (optional)"),r.a.createElement(j.a,{name:"referral",component:"select"},r.a.createElement("option",null),r.a.createElement("option",{value:"social_media"},"Social Media"),r.a.createElement("option",{value:"accelerator"},"Accelerator"),r.a.createElement("option",{value:"VC"},"VC"),r.a.createElement("option",{value:"friend"},"Friend"),r.a.createElement("option",{value:"other"},"Other")),this.renderOptions(),r.a.createElement("button",{className:"ui button",type:"submit"},"Sign up"),this.renderServerErr())),r.a.createElement("div",{className:"column"})),r.a.createElement("div",{className:"three column row"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui divider"})),r.a.createElement("div",{className:"column"}))))}}]),t}(r.a.Component),I=Object(_.a)({form:"signUp",validate:function(e){var a={};return e.email||(a.email="You must enter an email."),e.password||(a.password="You must enter an password."),e.confirmPassword||(a.confirmPassword="Please confirm the password above."),e.password&&e.confirmPassword&&e.password!==e.confirmPassword&&(a.confirmPassword="Please make sure your password match."),a}})(k),S=Object(m.b)((function(e){var a=e.user,t=e.form;return{user:a,errMsg:a.errMsg,formValues:t.signUp}}),{signUp:function(e){return function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.post("./signup",{formValues:e});case 3:n=a.sent,t({type:"SIGN_UP",payload:n.data}),O.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),t({type:"SIGN_UP",payload:{err:a.t0.response.data.message}});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},errMsgReset:C})(I),x=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).onSubmit=function(a){e.props.logIn(a)},e.renderError=function(e){var a=e.error;if(e.touched&&a)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},a))},e.renderServerErr=function(){if(e.props.errMsg)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},e.props.errMsg))},e.renderInput=function(a){var t=a.input,n=a.label,c=a.placeholder,l=a.meta,o=a.type,s="required field ".concat(l.error&&l.touched?"error":"");return console.log("meta",l),r.a.createElement("div",{className:s},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({},t,{placeholder:c,autoComplete:"off",type:o})),e.renderError(l))},e}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.errMsgReset()}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"ui grid container "},r.a.createElement("div",{className:"three column row"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column"},r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("div",{className:"ui huge header"},"Log in"),r.a.createElement(j.a,{name:"email",component:this.renderInput,label:"Email",placeholder:"Email",type:"email"}),r.a.createElement(j.a,{name:"password",component:this.renderInput,label:"Password",placeholder:"Password",type:"password"}),r.a.createElement("button",{className:"ui button",type:"submit"},"Log in"),this.renderServerErr())),r.a.createElement("div",{className:"column"})),r.a.createElement("div",{className:"three column row"},r.a.createElement("div",{className:"column"}),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui divider"})),r.a.createElement("div",{className:"column"}))))}}]),t}(r.a.Component),A=Object(_.a)({form:"logIn",validate:function(e){var a={};return e.email||(a.email="You must enter an email."),e.password||(a.password="You must enter an password."),a}})(x),M=Object(m.b)((function(e){var a=e.user;return{user:a,errMsg:a.errMsg}}),{logIn:function(e){return function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,f.post("./login",{formValues:e});case 3:n=a.sent,t({type:"LOG_IN",payload:n.data}),O.push("/"),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.response.data.message),t({type:"LOG_IN",payload:{err:a.t0.response.data.message}});case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},errMsgReset:C})(A),P=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"This is Dashboard"))},T=function(e){return r.a.createElement("div",{className:"ui card",onClick:function(){return e.clickToCompany(e.compId)}},r.a.createElement("div",{className:"image"},e.image?r.a.createElement("img",{src:e.image}):r.a.createElement("img",{src:"./logoDefault.png"})),r.a.createElement("div",{className:"content"},r.a.createElement("a",{className:"header"},e.title),r.a.createElement("div",{className:"description"},"Kristy is an art director living in New York.")),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"ui blue labels"},r.a.createElement("a",{className:"ui label"},"Happy"),r.a.createElement("a",{className:"ui label"},"Smart"),r.a.createElement("a",{className:"ui label"},"Insane"),r.a.createElement("a",{className:"ui label"},"Exciting"))))},F=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).clickToCompany=function(e){O.push("/company/".concat(e))},e.renderCompany=function(){return console.log(e.props.companyList),e.props.companyList.map((function(a){return r.a.createElement(T,{title:a.company_name_en,clickToCompany:e.clickToCompany,compId:a._id})}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchComps()}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",null,"This is CompanyList"),r.a.createElement("div",null,this.props.email?this.props.email:"no email"),r.a.createElement("div",{className:"ui link cards"},this.props.companyList&&this.renderCompany()))}}]),t}(r.a.Component),R=Object(m.b)((function(e){var a=e.user,t=e.company;return{email:a.email,companyList:t.companylist}}),{fetchComps:function(){return function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.get("/company/all");case 3:t=e.sent,a({type:"FETCH_COMPS",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:"FETCH_COMPS",payload:{err:e.t0.response.data.message}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()}})(F),L=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"apply-confirm"},r.a.createElement("div",{className:"ui grid container"},r.a.createElement("div",{className:"five wide column"}),r.a.createElement("div",{className:"six wide column"},r.a.createElement("div",{className:"ui medium header"},"Your application is confirmed."),r.a.createElement("div",{className:"confirm-text"},"We will send email to:",r.a.createElement("br",null),this.props.candidate.email," ",r.a.createElement("br",null),"after the application is approved."),r.a.createElement("button",{className:"ui button",onClick:function(){return O.push("/")}},"Back to Home")),r.a.createElement("div",{className:"five wide column"})))}}]),t}(r.a.Component),D=Object(m.b)((function(e){return{candidate:e.candidate}}))(L),U=t(22),H=t(107),V=t.n(H),B=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).approve=function(a){console.log(a.target.getAttribute("value"));var t=a.target.getAttribute("value");e.props.approveCandi(t,e.props.user._id)},e.renderCandiRow=function(){return e.props.candidates.map((function(a){return r.a.createElement("tr",{key:a._id},r.a.createElement("td",null,V()(a.createdAt).format("l")),r.a.createElement("td",null,a.company_name_en),r.a.createElement("td",null,a.company_name_chi),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.website,style:{cursor:"pointer"}},a.website)),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.news,style:{cursor:"pointer"}},a.news)),r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.other,style:{cursor:"pointer"}},a.other)),r.a.createElement("td",null,a.applicant_email),r.a.createElement("td",null,a.approver?a.approver.name:""),a.approve_status?r.a.createElement("td",null,r.a.createElement("div",{className:"ui small button disabled"},"Approved")):r.a.createElement("td",null,r.a.createElement("div",{value:"".concat(a._id),className:"ui small button",onClick:e.approve},"Approve")))}))},e.renderCandidates=function(){return console.log(e.props.candidates),r.a.createElement("table",{className:"ui collapsing unstackable table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Apply At"),r.a.createElement("th",null,"Company Name"),r.a.createElement("th",null,"\u516c\u53f8\u540d\u7a31"),r.a.createElement("th",null,"Website"),r.a.createElement("th",null,"News/Media"),r.a.createElement("th",null,"Other Material"),r.a.createElement("th",null,"Contact Email"),r.a.createElement("th",null,"Approve by"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,e.props.candidates&&e.renderCandiRow()))},e.renderReturnBtn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui medium header"},"This page required admin access. Please log in as admin or go back to home page."),r.a.createElement(U.b,{to:"/",className:"ui button primary"},"Back to home")))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCandis()}},{key:"render",value:function(){return r.a.createElement("div",{className:"admin-dashboard"},"super"!==this.props.user.type?this.renderReturnBtn():r.a.createElement("div",{className:"ui"},this.renderCandidates()))}}]),t}(r.a.Component),G=Object(m.b)((function(e){var a=e.candidate;return{user:e.user,candidates:a.candidates,errMsg:a.errMsg}}),{fetchCandis:function(){return function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("fetchCandis"),e.next=4,y.get("/all");case 4:t=e.sent,a({type:"FETCH_CANDIS",payload:t.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err for fetchCandis",e.t0),a({type:"FETCH_CANDIS",payload:{err:e.t0.response.data.message}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}()},approveCandi:function(e,a){return function(){var t=Object(d.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.post("/approve/".concat(e),{approverId:a});case 3:r=t.sent,n({type:"APPROVE_CANDI",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:"APPROVE_CANDI",payload:{err:t.t0.response.data.message}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(B),Y=(t(233),function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).onSubmit=function(e){console.log(e)},e.renderStatus=function(){return!0===e.props.candidate.approve_status?r.a.createElement("div",{className:"ui green label"},"Approved"):r.a.createElement("div",{className:"ui yellow label"},"Pending")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCandi(this.props.match.params.id)}},{key:"render",value:function(){return this.props.candidate?r.a.createElement("div",{className:"show-application"},r.a.createElement("div",{className:"ui grid container"},r.a.createElement("div",{className:"ui vertical segment",style:{width:"100%"}},r.a.createElement("h2",{className:"uileft floated header"},"Your Application"),r.a.createElement("div",null,this.props.candidate&&this.renderStatus()),r.a.createElement("div",{className:"ui clearing divider"}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"one wide column"}),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"Company Name in English"),r.a.createElement("div",null,this.props.candidate.company_name_en)),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"Company Name in Chinese"),r.a.createElement("div",null,this.props.candidate.company_name_chi)),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"Company Contact Email"),r.a.createElement("div",null,this.props.candidate.company_email)),r.a.createElement("div",{className:"one wide column"}),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"Company Website"),r.a.createElement("div",null,this.props.candidate.website)),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"News/Media"),r.a.createElement("div",null,this.props.candidate.news)),r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"ui small header"},"Other support resource"),r.a.createElement("div",null,this.props.candidate.other)))))):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component)),W=Object(m.b)((function(e){var a=e.user,t=e.candidate;e.form;return{candidateId:a.candidate,candidate:t.candidate}}),{fetchCandi:function(e){return function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("candiId",e),w||O.push("/login"),a.prev=2,a.next=5,y.get("/".concat(e));case 5:n=a.sent,t({type:"FETCH_CANDI",payload:n.data}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),403===a.t0.response.status&&(window.location="#/login"),t({type:"FETCH_CANDI",payload:{err:a.t0.response.data.message}});case 13:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})(Y),q=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).renderEditbtn=function(){for(var a=e.props.user._id,t=e.props.company.owners,n=0;n<t.length;n++)if(t[n]===a)return r.a.createElement("button",{className:"circular ui icon button"},r.a.createElement("i",{className:"edit outline icon"}))},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchComp(this.props.match.params.id)}},{key:"render",value:function(){if(console.log(this.props.company),!this.props.company)return r.a.createElement("div",null,"Loading");var e=this.props.company,a=e.company_email,t=e.company_name_en,n=e.website;return r.a.createElement("div",{className:"company-container"},r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"two wide column"}),r.a.createElement("div",{className:"four wide column",style:{textAlign:"center"}},r.a.createElement("img",{className:"company-img",src:"./logoDefault.png"})),r.a.createElement("div",{className:"six wide column"},r.a.createElement("div",{className:"company-info"},r.a.createElement("div",null,r.a.createElement("h1",{className:"company-name"},t),r.a.createElement("div",{className:"ui blue labels"},r.a.createElement("a",{className:"ui label"},"Happy"),r.a.createElement("a",{className:"ui label"},"Smart"),r.a.createElement("a",{className:"ui label"},"Insane"),r.a.createElement("a",{className:"ui label"},"Exciting"))),r.a.createElement("div",{className:"btn-group"},r.a.createElement("div",{className:"ui teal button",onClick:function(){return window.open("".concat(n))}},"Website"),r.a.createElement("a",{className:"ui yellow button",href:"mailto:".concat(a)},"Contact")))),r.a.createElement("div",{className:"four wide column"},r.a.createElement("div",null,this.props.company&&this.renderEditbtn())))))}}]),t}(r.a.Component),z=Object(m.b)((function(e){return{user:e.user,company:e.company.currentCompany}}),{fetchComp:function(e){return function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.get("/company/".concat(e));case 3:n=a.sent,t({type:"FETCH_COMP",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t({type:"FETCH_COMP",payload:{err:a.t0.response.data.message}});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})(q),J=function(e){Object(o.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,l=new Array(t),o=0;o<t;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).handleLogOut=function(){e.props.logOut()},e.renderBtn=function(a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item"},r.a.createElement(U.b,{className:"ui button primary",to:a},t)),r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui button secondary",onClick:e.handleLogOut},"Log out")))},e.renderNav=function(){if(e.props.user.isLogIn){if("normal"!==e.props.user.type||e.props.user.candidate||e.props.candidate.candidate){if("normal"!==e.props.user.type||e.props.user.company)return"normal"===e.props.user.type?e.renderBtn("/dashboard","Dashboard"):e.renderBtn("/admin/dashboard","Admin Dashboard");var a=e.props.user.candidate?e.props.user.candidate:e.props.candidate.candidate._id;return e.renderBtn("/application/".concat(a),"See your application")}return e.renderBtn("/apply/".concat(e.props.user._id),"Add a company")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"item"},r.a.createElement(U.b,{className:"ui button primary",to:"/signup"},"Sign Up")),r.a.createElement("div",{className:"item"},r.a.createElement(U.b,{className:"ui button primary",to:"/login"},"Log In")))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui menu"},r.a.createElement(U.b,{to:"/"},r.a.createElement("img",{alt:"twstartups logo",src:t(234),style:{}})),r.a.createElement("div",{className:"right menu"},this.renderNav()))}}]),n}(r.a.Component),X=Object(m.b)((function(e){return{user:e.user,candidate:e.candidate}}),{logOut:function(){return function(e){O.push("/"),e({type:"LOG_OUT"})}}})(J),K=t(13),$=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).renderError=function(e){var a=e.error,t=e.touched;e.active;if(t&&a)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},a))},e.renderServerErr=function(){if(e.props.errMsg)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},e.props.errMsg))},e.renderInput=function(a){var t=a.input,n=a.label,c=a.placeholder,l=a.meta,o=a.type,s="required field";return l.error&&l.touched&&(s="required field error"),"Additional support items"!==n&&"Company Name in Chinese"!==n&&"News/Media link"!==n||(s="field"),r.a.createElement("div",{className:s},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({},t,{plazceholder:c,autoComplete:"off",type:o,className:e.props.classForInput?e.props.classForInput:""})),e.renderError(l))},e.onSubmit=function(a){e.props.onSubmit(a)},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"candidate-form"},r.a.createElement("div",{className:"ui grid container"},r.a.createElement("div",{className:"five wide column"}),r.a.createElement("div",{className:"six wide column"},r.a.createElement("form",{className:"ui form error",onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement("div",{className:"ui huge header"},this.props.header),r.a.createElement("div",{className:"ui medium header"},"Basic Information"),r.a.createElement(j.a,{name:"company_name_en",component:this.renderInput,label:"Company Name in English",placeholder:"",type:"text"}),r.a.createElement(j.a,{name:"company_name_chi",component:this.renderInput,label:"Company Name in Chinese",placeholder:"",type:"text"}),r.a.createElement(j.a,{name:"company_email",component:this.renderInput,label:"Contact Email",placeholder:"",type:"tel"}),r.a.createElement("div",{className:"ui medium header"},"Supporting Resource for Review"),r.a.createElement(j.a,{name:"website",component:this.renderInput,label:"Company Website",placeholder:"",type:"text"}),r.a.createElement(j.a,{name:"news",component:this.renderInput,label:"News/Media link",placeholder:"",type:"text"}),r.a.createElement(j.a,{name:"other",component:this.renderInput,label:"Additional support items\u2029",placeholder:"",type:"text"}),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit"),this.renderServerErr())),r.a.createElement("div",{className:"five wide column"})))}}]),t}(r.a.Component),Q=Object(_.a)({form:"candidateForm",validate:function(e){var a={};return e.company_name_en||(a.company_name_en="Please enter an English company name."),e.company_name_chi||(a.company_name_chi="Please enter a Chinese company name."),e.website||(a.website="Please provide a website."),e.news||(a.news="Please provide a news."),e.company_email||(a.company_email="Please enter an email."),e.company_email&&!e.company_email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)&&(a.company_email="Please enter a valid email."),a}})($),Z=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).onSubmit=function(a){console.log(a),e.props.createCandi(a)},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui grid container"},r.a.createElement(Q,{onSubmit:this.onSubmit,header:"About your company..."}))}}]),t}(r.a.Component),ee=Object(m.b)(null,{createCandi:function(e){return function(){var a=Object(d.a)(p.a.mark((function a(t){var n;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return w||O.push("/login"),a.prev=1,a.next=4,y.post("/create",{formValues:e});case 4:n=a.sent,t({type:"CREATE_CANDI",payload:n.data}),O.push("/apply/success"),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(1),403===a.t0.response.status&&(window.location="#/login"),t({type:"CREATE_CANDI",payload:{err:a.t0.response.data.message}});case 13:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()}})(Z),ae=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");e&&this.props.fetchUser(e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/",component:R}),r.a.createElement(K.a,{path:"/signup",component:S}),r.a.createElement(K.a,{path:"/login",component:M}),r.a.createElement(K.a,{path:"/dashboard",component:P}),r.a.createElement(K.a,{exact:!0,path:"/admin/dashboard",component:G}),r.a.createElement(K.a,{path:"/apply/success",component:D}),r.a.createElement(K.a,{exact:!0,path:"/apply/:id",component:ee}),r.a.createElement(K.a,{path:"/application/:id",component:W}),r.a.createElement(K.a,{path:"/company/:id",component:z})))}}]),t}(r.a.Component),te=Object(m.b)((function(e){return{email:e.user.email}}),{fetchUser:function(){return function(){var e=Object(d.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("./profile");case 3:t=e.sent,a({type:"FETCH_USER",payload:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()}})(ae),ne=t(52),re=t.n(ne),ce=(t(235),t(108)),le=t(8),oe={email:null,_id:null,type:null,errMsg:null,candidate:null,isLogIn:!1,company:null},se={errMsg:null,email:null,candidate:null,candidates:null},ie=t(239),me={errMsg:null,companylist:null,currentCompany:null},ue=Object(le.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_UP":case"LOG_IN":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):(localStorage.setItem("token",a.payload.token),Object(i.a)(Object(i.a)(Object(i.a)({},e),a.payload.user),{},{isLogIn:!0}));case"LOG_OUT":return localStorage.removeItem("token"),Object(i.a)({},oe);case"ERR_MSG_RESET":return Object(i.a)(Object(i.a)({},e),{},{errMsg:null});case"FETCH_USER":return Object(i.a)(Object(i.a)(Object(i.a)({},e),a.payload.user),{},{isLogIn:!0});default:return e}},form:ie.a,candidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_CANDI":case"FETCH_CANDI":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):Object(i.a)(Object(i.a)({},e),{},{candidate:a.payload.candidate,email:a.payload.candidate.company_email});case"FETCH_CANDIS":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):Object(i.a)(Object(i.a)({},e),{},{candidates:a.payload.candidates});case"APPROVE_CANDI":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):Object(i.a)(Object(i.a)({},e),{},{candidate:a.payload.candidate,candidates:a.payload.candidates});default:return e}},company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_COMPS":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):Object(i.a)(Object(i.a)({},e),{},{companylist:a.payload.companies});case"FETCH_COMP":return a.payload.err?Object(i.a)(Object(i.a)({},e),{},{errMsg:a.payload.err}):Object(i.a)(Object(i.a)({},e),{},{currentCompany:a.payload.company});default:return e}}}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,de=Object(le.e)(ue,pe(Object(le.a)(ce.a)));re.a.render(r.a.createElement(m.a,{store:de},r.a.createElement(U.a,{history:O},r.a.createElement(te,null))),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.8b93a6a1.chunk.js.map