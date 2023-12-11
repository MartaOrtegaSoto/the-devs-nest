"use strict";(self.webpackChunkthe_devs_nest=self.webpackChunkthe_devs_nest||[]).push([[259],{1077:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(5893),i=t(1151);const s={id:"sb-component",sidebar_position:3,sidebar_label:"Components",description:"",tags:["SpringBoot"]},r="SpringBoot Components",a={id:"springBoot/sb-component",title:"SpringBoot Components",description:"",source:"@site/docs/springBoot/springBoot_component.md",sourceDirName:"springBoot",slug:"/springBoot/sb-component",permalink:"/springBoot/sb-component",draft:!1,unlisted:!1,tags:[{label:"SpringBoot",permalink:"/tags/spring-boot"}],version:"current",sidebarPosition:3,frontMatter:{id:"sb-component",sidebar_position:3,sidebar_label:"Components",description:"",tags:["SpringBoot"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Injection",permalink:"/springBoot/sb-dependency-injection"},next:{title:"Configuration",permalink:"/springBoot/sb-configuration"}},l={},c=[{value:"Component Scanning",id:"component-scanning",level:2},{value:"Annotations",id:"annotations",level:2},{value:"@Component",id:"component",level:3},{value:"@Service",id:"service",level:3},{value:"@Controller",id:"controller",level:3},{value:"@Repository",id:"repository",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"springboot-components",children:"SpringBoot Components"}),"\n",(0,o.jsx)(e.h2,{id:"component-scanning",children:"Component Scanning"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Component Scanning is the process where Spring looks through the project to look for ",(0,o.jsx)(e.strong,{children:"Bean"})," definition and where are those beans needed."]}),"\n",(0,o.jsx)(e.li,{children:"This process starts when the application starts up."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"annotations",children:"Annotations"}),"\n",(0,o.jsx)(e.h3,{id:"component",children:"@Component"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"It is a class-level annotation"}),"\n",(0,o.jsxs)(e.li,{children:["It tells Spring that the class is a ",(0,o.jsx)(e.strong,{children:"Bean"})," and it should be put inside the ",(0,o.jsx)(e.strong,{children:"application context"}),"."]}),"\n",(0,o.jsx)(e.li,{children:"It also indicates that its dependencies (ex: via constructor) should be injected as well."}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"@Component\npublic class ColourPrinter {\n  private RedPrinter redPrinter; // interface\n  private BluePrinter bluePrinter; // interface\n\n  public ColourPrinter(RedPrinter redPrinter, BluePrinter bluePrinter) {\n    this.redPrinter = redPrinter;\n    this.bluePrinter = bluePrinter;\n  }\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"service",children:"@Service"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["It has the same behaviour as the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation."]}),"\n",(0,o.jsxs)(e.li,{children:["It works as an alias of the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation and indicates a specialized use, classes annotated with ",(0,o.jsx)(e.code,{children:"@Service"})," hold some business logic."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"controller",children:"@Controller"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["It has the same behaviour as the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation."]}),"\n",(0,o.jsxs)(e.li,{children:["It works as an alias of the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation and indicates a specialized use, classes annotated with ",(0,o.jsx)(e.code,{children:"@Controller"})," hold some business logic."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"repository",children:"@Repository"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["It has the same behaviour as the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation."]}),"\n",(0,o.jsxs)(e.li,{children:["It works as an alias of the ",(0,o.jsx)(e.code,{children:"@Component"})," annotation and indicates a specialized use, classes annotated with ",(0,o.jsx)(e.code,{children:"@Repository"})," belong to the persistence layer and"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);