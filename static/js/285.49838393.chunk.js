"use strict";(self.webpackChunkProjects=self.webpackChunkProjects||[]).push([[285],{8285:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var s=t(1413),r=t(9439),a=t(2791),i=t(3044),o=t(8551),l=t(4708),c=t(9176),u=t(4554),m=t(403),p=t(890),d=t(1614),h=t(533),g=t(9434),x=t(8661),f=t(8820),j="SignUpForm_infoBlock__93kyI",y="SignUpForm_emailTextHelper__gsg3C",w="SignUpForm_signUpButton__YU+Rt",b="SignUpForm_signUpLink__MtoqH",v=t(184);function Z(){var e=(0,g.I0)(),n=(0,g.v9)((function(e){return e.auth.isAuthProblem.isRegProblem})),t=(0,a.useState)(!1),Z=(0,r.Z)(t,2),S=Z[0],P=Z[1],_={backgroundColor:S?"#2072af":"#003262",transition:"background-color 0.2s ease"},k=(0,a.useState)(!1),M=(0,r.Z)(k,2),U=M[0],T=M[1],A=(0,a.useState)(!1),C=(0,r.Z)(A,2),F=C[0],I=C[1],L=(0,a.useState)(!1),D=(0,r.Z)(L,2),W=D[0],E=D[1];return(0,v.jsxs)(d.Z,{component:"main",maxWidth:"xs",children:[(0,v.jsx)(l.ZP,{}),(0,v.jsxs)(u.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,v.jsx)(i.Z,{sx:{m:1,bgcolor:"#003262"},children:(0,v.jsx)(m.Z,{})}),(0,v.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,v.jsxs)(u.Z,{component:"form",onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),s=t.get("email"),r=t.get("password");if(""===s)return T(!0);if(!s.includes("@")||s.split(".").length-1!==2)return T(!0);if(T(!1),r.length<=6)return I(!0);I(!1);var a={name:s.split("@")[0],email:s,password:r};e((0,x.a$)(a))},noValidate:!0,sx:{mt:1},style:{position:"relative"},children:[(0,v.jsx)(c.Z,{id:"email",name:"email",type:"email",label:"Email Address",placeholder:"example.something@gmail.com",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,error:!(!U&&!n),helperText:U?(0,v.jsxs)("span",{children:["Invalid email. Please try again"," ",(0,v.jsx)(f.KpA,{onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}})]}):(0,v.jsxs)("span",{children:['Must contain two "." symbols'," ",(0,v.jsx)(f.KpA,{className:y,onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}})]})}),(0,v.jsx)("div",{className:j,style:{display:W?"block":"none"},children:(0,v.jsx)("p",{style:{padding:7,fontSize:12,fontWeight:500,color:"white"},children:'Due to specific API features email must contain two "." and "@" symbols. Please write the email in the following format "example.smth@gmail.com"'})}),(0,v.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!!F,inputProps:{pattern:/^\S+@\S+\.\S+$/},helperText:"Must be at least 7 characters long",autoComplete:"current-password"}),n&&(0,v.jsx)("div",{style:{marginTop:10},children:(0,v.jsxs)("p",{style:{margin:0,color:"red"},children:["This email is already registered or written form is not accepted in API. Please try to write a new one"," "]})}),(0,v.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},style:(0,s.Z)({},_),className:w,onMouseEnter:function(){return P(!0)},onMouseLeave:function(){return P(!1)},children:"Sign Up"})]}),(0,v.jsx)(h.Z,{href:"http://localhost:3000/goit-react-hw-08-phonebook/login",variant:"body2",style:{textDecoration:"none"},children:(0,v.jsxs)("p",{className:b,children:[(0,v.jsx)("span",{children:"Have already an account?"}),(0,v.jsx)("span",{style:{marginLeft:5},children:"Login"})]})})]})]})}var S=function(){return(0,v.jsx)(Z,{})}}}]);
//# sourceMappingURL=285.49838393.chunk.js.map