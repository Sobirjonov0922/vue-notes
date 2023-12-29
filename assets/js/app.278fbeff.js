(function(){"use strict";var e={5846:function(e,t,n){var o=n(9242),s=n(3396),l=n.p+"assets/img/add-note.10842793.svg";const a=(0,s._)("img",{src:l,alt:"Add Note"},null,-1),i=[a];function r(e,t,n,l,a,r){const d=(0,s.up)("Header"),c=(0,s.up)("Notes"),u=(0,s.up)("Modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(d,{onGetSearch:t[0]||(t[0]=e=>a.search=e)}),(0,s.Wm)(c,{notes:r.filterNotes,onDel:r.delNote,onEdit:r.editNote},null,8,["notes","onDel","onEdit"]),(0,s.wy)((0,s.Wm)(u,{title:a.modalTitle,desc:a.modalDesc,id:a.curID,onChangeTitle:t[1]||(t[1]=e=>a.modalTitle=e),onChangeDesc:t[2]||(t[2]=e=>a.modalDesc=e),onAddOrChange:r.addOrChange,onShowOrClose:r.closeModal},null,8,["title","desc","id","onAddOrChange","onShowOrClose"]),[[o.F8,a.showModal]]),(0,s._)("a",{href:"#",class:"openModal",onClick:t[3]||(t[3]=(0,o.iM)((e=>a.showModal=!0),["prevent"]))},i)],64)}n(7658);const d=e=>((0,s.dD)("data-v-0efcf088"),e=e(),(0,s.Cn)(),e),c={class:"header"},u=d((()=>(0,s._)("h1",{class:"header__title"},"Notes",-1))),h={class:"header__form"};function _(e,t,n,l,a,i){return(0,s.wg)(),(0,s.iD)("header",c,[u,(0,s._)("form",h,[(0,s.wy)((0,s._)("input",{type:"text",class:"header__form-input",placeholder:"Search...","onUpdate:modelValue":t[0]||(t[0]=e=>a.search=e)},null,512),[[o.nr,a.search]])])])}var f={data(){return{search:""}},watch:{search(e){this.$emit("getSearch",e)}}},m=n(89);const p=(0,m.Z)(f,[["render",_],["__scopeId","data-v-0efcf088"]]);var g=p,v=n(7139);const w={class:"modal__content-title"},b=["value"],C=["value"],O={class:"modal__content-btns"},D={class:"modal__content-add"};function y(e,t,n,l,a,i){return(0,s.wg)(),(0,s.j4)(o.uT,{name:"modal"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"modal",onClick:t[5]||(t[5]=t=>e.$emit("showOrClose","close"))},[(0,s._)("div",{class:"modal__content",onClick:t[4]||(t[4]=(0,o.iM)((()=>{}),["stop"]))},[(0,s._)("h3",w,(0,v.zw)(n.id?"Edit note":"Add note"),1),(0,s._)("form",{action:"",class:"modal__content-form",onSubmit:t[3]||(t[3]=(0,o.iM)(((...e)=>i.addOrChange&&i.addOrChange(...e)),["prevent"]))},[(0,s._)("input",{type:"text",class:"modal__content-inp",placeholder:"Title",value:n.title,onInput:t[0]||(t[0]=t=>e.$emit("changeTitle",t.target.value)),required:""},null,40,b),(0,s._)("textarea",{name:"",id:"",cols:"30",rows:"5",class:"modal__content-area",placeholder:"Content",value:n.desc,onInput:t[1]||(t[1]=t=>e.$emit("changeDesc",t.target.value)),required:""},null,40,C),(0,s._)("div",O,[(0,s._)("a",{href:"#!",class:"modal__content-cancel",onClick:t[2]||(t[2]=t=>e.$emit("showOrClose","close"))},"Cancel"),(0,s._)("button",D,(0,v.zw)(n.id?"Edit":"Add"),1)])],32)])])])),_:1})}var k={props:{title:{type:String,default:""},desc:{type:String,default:""},id:{type:String,default:null}},methods:{addOrChange(){this.$emit("showOrClose","open"),this.$emit("addOrChange",this.id)}}};const N=(0,m.Z)(k,[["render",y],["__scopeId","data-v-4b1b0853"]]);var M=N,S=n.p+"assets/img/list.4bf38f66.svg",I=n.p+"assets/img/grid.e2c63407.svg";const T={class:"notes"},$={class:"container"},x={class:"notes__content"},j={class:"notes__title"},A=["disabled"],z={src:S,alt:"list",class:"notes__checker-icon"},E={src:I,alt:"list",class:"notes__checker-icon"};function Z(e,t,n,l,a,i){const r=(0,s.up)("OneNote");return(0,s.wg)(),(0,s.iD)("div",T,[(0,s._)("div",$,[(0,s._)("div",x,[(0,s._)("h2",j,(0,v.zw)(n.notes.length?"All Notes":"No Notes"),1),(0,s._)("button",{class:"notes__checker",onClick:t[0]||(t[0]=e=>a.grid=!a.grid),disabled:!n.notes.length},[(0,s.wy)((0,s._)("img",z,null,512),[[o.F8,a.grid]]),(0,s.wy)((0,s._)("img",E,null,512),[[o.F8,!a.grid]]),(0,s._)("b",null,(0,v.zw)(a.grid?"List":"Grid"),1)],8,A)]),(0,s._)("div",{class:(0,v.C_)([{column:!a.grid},{notes__grid:!0}])},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.notes,(t=>((0,s.wg)(),(0,s.j4)(r,{key:t.id,note:t,onDel:n=>e.$emit("del",t.id),onEdit:n=>e.$emit("edit",t.id)},null,8,["note","onDel","onEdit"])))),128))],2)])])}var F=n.p+"assets/img/edit.10842793.svg",H=n.p+"assets/img/delete.f2533121.svg";const L=e=>((0,s.dD)("data-v-302a5d15"),e=e(),(0,s.Cn)(),e),U={class:"notes__item"},W={class:"notes__item-title"},q={class:"notes__item-date"},G={class:"notes__item-desc"},J={class:"notes__item-control"},P=L((()=>(0,s._)("img",{src:F,alt:"edit",class:"notes__item-icon"},null,-1))),Y=L((()=>(0,s._)("img",{src:H,alt:"delete",class:"notes__item-icon"},null,-1)));function K(e,t,n,o,l,a){return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("h3",W,(0,v.zw)(n.note.title),1),(0,s._)("span",q,(0,v.zw)(n.note.date),1),(0,s._)("p",G,(0,v.zw)(n.note.desc),1),(0,s._)("div",J,[(0,s._)("a",{href:"#!",class:"notes__item-edit",onClick:t[0]||(t[0]=t=>e.$emit("edit",n.note.id))},[P,(0,s.Uk)(" edit ")]),(0,s._)("a",{href:"#!",class:"notes__item-delete",onClick:t[1]||(t[1]=t=>e.$emit("del",n.note.id))},[Y,(0,s.Uk)(" delete ")])])])}var V={props:{note:{type:Object,default:{title:"",date:"",desc:"",id:0}}}};const B=(0,m.Z)(V,[["render",K],["__scopeId","data-v-302a5d15"]]);var Q=B,R={components:{OneNote:Q},data(){return{grid:!0}},props:{notes:{type:Array,default:[]}}};const X=(0,m.Z)(R,[["render",Z],["__scopeId","data-v-07409284"]]);var ee=X,te=n(536),ne={name:"App",components:{Header:g,Modal:M,Notes:ee},data(){return{modalTitle:"",modalDesc:"",label:localStorage.label?JSON.parse(localStorage.label):[],showModal:!1,curID:null,search:""}},computed:{filterNotes(){return this.search?this.label.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.label}},methods:{addOrChange(e){let t={title:this.modalTitle,desc:this.modalDesc,date:new Date(Date.now()).toLocaleDateString(),id:e||(0,te.Z)()};if(e){let n=this.label.findIndex((t=>t.id==e));this.label[n]=t}else this.label.push(t);this.curID=null,this.closeModal("close"),this.save()},closeModal(e){"close"===e&&(setTimeout((()=>{this.modalTitle="",this.modalDesc="",this.curID=null}),400),this.showModal=!this.showModal)},save(){localStorage.label=JSON.stringify(this.label)},delNote(e){let t=this.label.findIndex((t=>t.id===e));this.label.splice(t,1),this.save()},editNote(e){const t=this.label.find((t=>t.id==e));this.modalTitle=t.title,this.modalDesc=t.desc,this.curID=t.id,this.showModal=!0}}};const oe=(0,m.Z)(ne,[["render",r]]);var se=oe;(0,o.ri)(se).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,l){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],s=e[c][1],l=e[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(i=!1,l<a&&(a=l));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,s,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/vue-notes/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,l,a=o[0],i=o[1],r=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(r)var c=r(n)}for(t&&t(o);d<a.length;d++)l=a[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunknotes"]=self["webpackChunknotes"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5846)}));o=n.O(o)})();
//# sourceMappingURL=app.278fbeff.js.map