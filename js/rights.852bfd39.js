(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rights"],{"1af6":function(e,t,r){var s=r("63b6");s(s.S,"Array",{isArray:r("9003")})},"20fd":function(e,t,r){"use strict";var s=r("d9f6"),a=r("aebd");e.exports=function(e,t,r){t in e?s.f(e,t,a(0,r)):e[t]=r}},"43fe":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-button",{attrs:{type:"success",plain:""},on:{click:e.showAddRole}},[e._v("添加角色")]),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rolesList}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return e._l(s.children,function(t){return r("el-row",{key:t.id,staticClass:"l1"},[r("el-col",{attrs:{span:4}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.delRights(s,t.id)}}},[e._v(e._s(t.authName))])],1),r("el-col",{attrs:{span:20}},e._l(t.children,function(t){return r("el-row",{key:t.id},[r("el-col",{attrs:{span:4}},[r("el-tag",{attrs:{closable:"",type:"success"},on:{close:function(r){return e.delRights(s,t.id)}}},[e._v(e._s(t.authName))])],1),r("el-col",{attrs:{span:20}},e._l(t.children,function(t){return r("el-tag",{key:t.id,staticClass:"l3",attrs:{closable:"",type:"warning"},on:{close:function(r){return e.delRights(s,t.id)}}},[e._v(e._s(t.authName))])}),1)],1)}),1)],1)})}}])}),r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作",prop:"desc"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-edit",plain:""},on:{click:function(t){return e.editRole(s)}}}),r("el-button",{attrs:{size:"small",type:"danger",icon:"el-icon-delete",plain:""},on:{click:function(t){return e.delRole(s)}}}),r("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-check",plain:""},on:{click:function(t){return e.showassVisible(s)}}},[e._v("分配权限")])]}}])})],1),r("el-dialog",{attrs:{title:"提示",visible:e.assVisible,width:"30%"},on:{"update:visible":function(t){e.assVisible=t}}},[r("el-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"",props:e.defaultProps}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.assVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.assRolesVisible}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:e.title,visible:e.addVisible,width:"40%"},on:{"update:visible":function(t){e.addVisible=t},close:e.closeDialog}},[r("el-form",{ref:"roleForm",attrs:{model:e.roleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{attrs:{placeholder:"请输入角色名称"},model:{value:e.roleForm.roleName,callback:function(t){e.$set(e.roleForm,"roleName",t)},expression:"roleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{attrs:{placeholder:"请输入角色描述"},model:{value:e.roleForm.roleDesc,callback:function(t){e.$set(e.roleForm,"roleDesc",t)},expression:"roleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1)],1)},a=[],n=r("a745"),i=r.n(n);function o(e){if(i()(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var l=r("774e"),c=r.n(l),u=r("c8bb"),d=r.n(u);function f(e){if(d()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return c()(e)}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(e){return o(e)||f(e)||h()}r("ac6a"),r("96cf");var p=r("3b8d"),b={data:function(){return{roleId:"",data:[],defaultProps:{children:"children",label:"authName"},rolesList:[],assVisible:!1,addVisible:!1,title:"",roleForm:{id:"",roleName:"",roleDesc:""},rules:{roleName:[{required:!0,message:"请输入活动名称",trigger:["blur","change"]},{min:2,max:12,message:"长度在 2 到 12 个字符",trigger:["blur","change"]}],roleDesc:[{min:2,max:16,message:"长度在 2 到 16 个字符",trigger:["blur","change"]}]}}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.get("roles");case 2:t=e.sent,r=t.data,s=t.meta,200===s.status&&(this.rolesList=r);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delRights:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t,r){var s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.delete("roles/".concat(t.id,"/rights/").concat(r));case 2:s=e.sent,a=s.data,n=s.meta,200===n.status?(this.$message.success(n.msg),t.children=a):this.$message.error(n.msg);case 6:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}(),delRole:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("此操作将删除该角色, 是否继续?","温馨提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"});case 3:return e.next=5,this.$axios.delete("roles/".concat(t.id));case 5:r=e.sent,s=r.meta,200===s.status?(this.$message.success(s.msg),this.getRolesList()):this.$message.error(s.msg),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(t){return e.apply(this,arguments)}return t}(),showassVisible:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(t){var r,s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.roleId=t.id,this.assVisible=!0,e.next=4,this.$axios.get("rights/tree");case 4:r=e.sent,s=r.data,a=r.meta,200===a.status?(this.data=s,n=[],t.children.forEach(function(e){e.children.forEach(function(e){e.children.forEach(function(e){n.push(e.id)})})}),this.$refs.tree.setCheckedKeys(n)):this.$message.error(a.msg);case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),assRolesVisible:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,r,s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$refs.tree.getCheckedKeys(),r=this.$refs.tree.getHalfCheckedKeys(),s=[].concat(m(t),m(r)).join(","),e.next=5,this.$axios.post("roles/".concat(this.roleId,"/rights"),{rids:s});case 5:a=e.sent,n=a.meta,200===n.status?(this.$message.success(n.msg),this.assVisible=!1,this.getRolesList()):this.$message.error(n.msg);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),showAddRole:function(){this.addVisible=!0,this.title="添加角色"},editRole:function(e){var t=this;this.addVisible=!0,this.title="修改角色",this.$nextTick(function(){t.roleForm.id=e.id,t.roleForm.roleName=e.roleName,t.roleForm.roleDesc=e.roleDesc}),console.log(e)},closeDialog:function(){this.$refs.roleForm.resetFields(),this.roleForm.id=""},addRole:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,r,s,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$refs.roleForm.validate();case 3:return t="添加角色"===this.title,r=t?"roles":"roles/".concat(this.roleForm.id),s=t?"post":"put",e.next=8,this.$axios[s](r,this.roleForm);case 8:a=e.sent,n=a.meta,201===n.status||200===n.status?(this.$message.success(n.msg),this.addVisible=!1,this.getRolesList()):this.$message.error(n.msg),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}},e,this,[[0,13]])}));function t(){return e.apply(this,arguments)}return t}()}},g=b,v=(r("5a43"),r("2877")),y=Object(v["a"])(g,s,a,!1,null,"77063be4",null);t["default"]=y.exports},"549b":function(e,t,r){"use strict";var s=r("d864"),a=r("63b6"),n=r("241e"),i=r("b0dc"),o=r("3702"),l=r("b447"),c=r("20fd"),u=r("7cd6");a(a.S+a.F*!r("4ee1")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,a,d,f=n(e),h="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,b=void 0!==p,g=0,v=u(f);if(b&&(p=s(p,m>2?arguments[2]:void 0,2)),void 0==v||h==Array&&o(v))for(t=l(f.length),r=new h(t);t>g;g++)c(r,g,b?p(f[g],g):f[g]);else for(d=v.call(f),r=new h;!(a=d.next()).done;g++)c(r,g,b?i(d,p,[a.value,g],!0):a.value);return r.length=g,r}})},"54a1":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("95d5")},"5a43":function(e,t,r){"use strict";var s=r("c66d"),a=r.n(s);a.a},"774e":function(e,t,r){e.exports=r("d2d5")},9003:function(e,t,r){var s=r("6b4c");e.exports=Array.isArray||function(e){return"Array"==s(e)}},"95d5":function(e,t,r){var s=r("40c3"),a=r("5168")("iterator"),n=r("481b");e.exports=r("584a").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||n.hasOwnProperty(s(t))}},"9d50":function(e,t,r){"use strict";var s=r("b6b6"),a=r.n(s);a.a},a745:function(e,t,r){e.exports=r("f410")},ac6a:function(e,t,r){for(var s=r("cadf"),a=r("0d58"),n=r("2aba"),i=r("7726"),o=r("32e9"),l=r("84f2"),c=r("2b4c"),u=c("iterator"),d=c("toStringTag"),f=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(h),p=0;p<m.length;p++){var b,g=m[p],v=h[g],y=i[g],w=y&&y.prototype;if(w&&(w[u]||o(w,u,f),w[d]||o(w,d,g),l[g]=f,v))for(b in s)w[b]||n(w,b,s[b],!0)}},b6b6:function(e,t,r){},c66d:function(e,t,r){},c8bb:function(e,t,r){e.exports=r("54a1")},d2d5:function(e,t,r){r("1654"),r("549b"),e.exports=r("584a").Array.from},d6a0:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rights"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),r("el-table-column",{attrs:{prop:"path",label:"路径"}}),r("el-table-column",{attrs:{prop:"level",label:"层级"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return["0"===s.level?r("span",[e._v("一级")]):e._e(),"1"===s.level?r("span",[e._v("二级")]):e._e(),"2"===s.level?r("span",[e._v("三级")]):e._e()]}}])})],1)],1)},a=[],n=(r("96cf"),r("3b8d")),i={data:function(){return{tableData:[]}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.get("rights/list");case 2:t=e.sent,r=t.data,s=t.meta,200===s.status&&(this.tableData=r);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},o=i,l=(r("9d50"),r("2877")),c=Object(l["a"])(o,s,a,!1,null,"830ac404",null);t["default"]=c.exports},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=rights.852bfd39.js.map