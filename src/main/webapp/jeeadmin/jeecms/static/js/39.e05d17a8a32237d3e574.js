webpackJsonp([39],{"+9i7":function(n,t,s){"use strict";function e(n){var t=Object(r.a)()+"/api/admin/template/exportTpl";return n.appId="1580387213331704",n.sessionKey=localStorage.getItem("sessionKey"),t+"?"+a.a.stringify(n)}function o(n){s("sHcO")}Object.defineProperty(t,"__esModule",{value:!0});var i=s("PHrY"),l=s("DEjr"),a=s.n(l),r=(s("IcnI"),s("QmSG")),u=s("2RFS"),c=s("s4F+"),p=s("2sCs"),m=s.n(p),b={data:function(){var n=Object(u.a)();return{solutions:[],params:{solution:"",mobile:!0},solution:"",exportLink:"#",mobileState:"PC",upobj:Object(c.a)({appId:"1580387213331704",sessionKey:localStorage.getItem("sessionKey"),nonceStr:n},"Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi")}},methods:{getSolutions:function(){var n=this;i.j().then(function(t){n.solutions=t.body,m.a.post(n.$api.siteGet,{id:n.$getSiteId()}).then(function(t){"PC"==n.mobileState?(n.params.solution=t.body.tplSolution,n.solution=t.body.tplSolution,n.params.mobile=""):(n.params.solution=t.body.tplMobileSolution,n.solution=t.body.tplMobileSolution,n.params.mobile=t.body.tplMobileSolution)})})},setSolutions:function(){var n=this;"PC"==this.mobileState?this.params.mobile="":(this.params.mobile=this.params.solution,this.params.solution=""),i.o(this.params).then(function(t){"200"==t.code?(n.$message.success("设置成功"),n.getSolutions()):(n.$message.error("设置失败"),n.getSolutions())})},handleAvatarSuccess:function(n,t){200==n.code?this.successMessage("导入成功"):209==n.code?this.errorMessage("无上传权限"):this.errorMessage("上传失败")}},created:function(){this.params.mobile=this.$route.query.mobile,this.$route.query.mobile?this.mobileState="mobile":this.mobileState="PC",this.getSolutions(),this.exportLink=e({solution:this.solution})},watch:{$route:function(n,t){this.$route.query.mobile?this.mobileState="mobile":this.mobileState="PC",this.getSolutions()},solution:{handler:function(n,t){this.exportLink=e({solution:this.solution})}}}},d=function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",[s("div",{staticClass:"cms-list-header clearfix flex"},[s("span",{staticClass:"forum-name",staticStyle:{"font-size":"14px"}},[n._v(n._s(n.$route.name)+"-"+n._s(n.mobileState))])]),n._v(" "),s("el-form",{staticClass:"cms-form",staticStyle:{margin:"0",padding:"0"},attrs:{"label-width":"162px"}},[s("el-form-item",{staticClass:"flex-100",attrs:{label:"默认方案"}},[s("el-col",{attrs:{span:4}},[s("el-select",{model:{value:n.params.solution,callback:function(t){n.$set(n.params,"solution",t)},expression:"params.solution"}},n._l(n.solutions,function(n){return s("el-option",{key:n,attrs:{label:n,value:n}})}))],1),n._v(" "),s("el-col",{attrs:{span:6}},[s("el-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"},on:{click:n.setSolutions}},[n._v("设置")])],1)],1),n._v(" "),s("el-form-item",{staticClass:"flex-100",attrs:{label:"导出方案"}},[s("el-col",{attrs:{span:4}},[s("el-select",{model:{value:n.solution,callback:function(t){n.solution=t},expression:"solution"}},n._l(n.solutions,function(n){return s("el-option",{key:n,attrs:{label:n,value:n}})}))],1),n._v(" "),s("el-col",{attrs:{span:6}},[s("a",{staticClass:"el-button el-button--primary",staticStyle:{"margin-left":"15px"},attrs:{href:n.exportLink}},[n._v("导出")])])],1),n._v(" "),s("el-form-item",{staticClass:"flex-100",attrs:{label:"导入"}},[s("el-col",{attrs:{span:6}},[s("el-upload",{staticStyle:{display:"inline-block"},attrs:{action:n.$store.state.sys.importTpl,name:"uploadFile",data:n.upobj,"show-file-list":!1,"on-success":n.handleAvatarSuccess}},[s("el-button",{attrs:{type:"primary"}},[n._v("导入")])],1)],1)],1)],1),n._v(" "),s("div",{staticClass:"margin-md"})],1)},f=[],h={render:d,staticRenderFns:f},S=h,y=s("8AGX"),v=o,g=y(b,S,!1,v,null,null);t.default=g.exports},hd4I:function(n,t,s){t=n.exports=s("l95E")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},sHcO:function(n,t,s){var e=s("hd4I");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);s("8bSs")("23074c75",e,!0)}});