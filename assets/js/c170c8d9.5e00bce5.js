"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},a="Deployment",l={unversionedId:"getting-started/-deployment",id:"getting-started/-deployment",title:"Deployment",description:"Since FuxFramework CLI is under development, there is no automatic configuration process, this mean that you have to",source:"@site/docs/getting-started/-deployment.md",sourceDirName:"getting-started",slug:"/getting-started/-deployment",permalink:"/FuxFrameworkDocs/docs/getting-started/-deployment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/-deployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Directory structure",permalink:"/FuxFrameworkDocs/docs/getting-started/-directory-structure"},next:{title:"Request lifecycle",permalink:"/FuxFrameworkDocs/docs/getting-started/-request-lifecycle"}},p={},s=[{value:"The environment.php file",id:"the-environmentphp-file",level:2},{value:"The .htaccess file",id:"the-htaccess-file",level:2},{value:"Project (relative) directory examples",id:"project-relative-directory-examples",level:2},{value:"Local web server (MAMP, XAMPP, etc...)",id:"local-web-server-mamp-xampp-etc",level:3},{value:"Production / online hosting",id:"production--online-hosting",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Since FuxFramework CLI is under development, there is no automatic configuration process, this mean that you have to\nmanually edit some files in order to get the project working. Don't worry it's not hard to do and it doesn't takes more\nthan 2 minutes, ",(0,r.kt)("strong",{parentName:"p"},"really"),"."),(0,r.kt)("p",null,"The minimum framework configuration require you to know just 1 simple thing: where your project folder is placed\nrelative to the domain root (or your localhost in case you are on your local web server). For example if your project\nfolder is named ",(0,r.kt)("inlineCode",{parentName:"p"},"MyWebApp")," and you placed it directly under the ",(0,r.kt)("inlineCode",{parentName:"p"},"htdocs")," folder your project (relative) directory\nis ",(0,r.kt)("inlineCode",{parentName:"p"},"/MyWebApp"),". If you are trying to deploy your web application on an hosting solution, directly under a specific\ndomain name. Your project (relative) directory is an empty string (meaning that the whole project is placed in the root\nof the web server)."),(0,r.kt)("h2",{id:"the-environmentphp-file"},"The environment.php file"),(0,r.kt)("p",null,"In your project ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," folder you should have a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"environment.example.php"),", just make a copy of it and\nrename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"environment.php"),". After that just open it and edit it as explained in the following instructions:"),(0,r.kt)("p",null,"1) Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"SERVER_PORT")," constant if your web server is listening to a specific port\n2) Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_DIR")," constant with your project directory realtive to the web server root (with web server root\nwe mean the ",(0,r.kt)("inlineCode",{parentName:"p"},"htdocs")," folder or your web hosting root)\n3) Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT_HTTP_SCHEMA")," in order to match your preferences and web server configuration. Usually this\nconstant can be untouched when developing in local web server, and changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," when deploying your project\nonline"),(0,r.kt)("h2",{id:"the-htaccess-file"},"The .htaccess file"),(0,r.kt)("p",null,"In your project root folder you should have a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"example.htaccess"),", just make a copy of it and\nrename it to ",(0,r.kt)("inlineCode",{parentName:"p"},".htaccess"),". After that just open it and edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"RewriteBase /fuxframework")," line as following: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your ",(0,r.kt)("inlineCode",{parentName:"li"},"PROJECT_DIR")," constant (in environment.php file) is an empty string you can rewrite the line as ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /")),(0,r.kt)("li",{parentName:"ul"},"Else you have to change the ",(0,r.kt)("inlineCode",{parentName:"li"},"/fuxframework")," path in the .htaccess in order to match with your ",(0,r.kt)("inlineCode",{parentName:"li"},"PROJECT_DIR"))),(0,r.kt)("h2",{id:"project-relative-directory-examples"},"Project (relative) directory examples"),(0,r.kt)("p",null,"The following examples better explain how to know your project relative directory in order to proceed with the\nconfiguration process. Assuming that your named your project folder as ",(0,r.kt)("inlineCode",{parentName:"p"},"MyWebApp"),", let's see some cases:"),(0,r.kt)("h3",{id:"local-web-server-mamp-xampp-etc"},"Local web server (MAMP, XAMPP, etc...)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project is placed directly under ",(0,r.kt)("inlineCode",{parentName:"li"},"htdocs")," folder, so you have somthing like ",(0,r.kt)("inlineCode",{parentName:"li"},"<...>/MAMP/htdocs/MyWebApp"),". In this case\nyour configuration is: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = "/MyWebApp"')," inside the environment.php file and ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /MyWebApp"),"\ninside .htaccess file"),(0,r.kt)("li",{parentName:"ul"},"Project is placed directly under ",(0,r.kt)("inlineCode",{parentName:"li"},"htdocs/SideProjects")," folder, so you have somthing\nlike ",(0,r.kt)("inlineCode",{parentName:"li"},"<...>/MAMP/htdocs/SideProjects/MyWebApp"),". In this case your configuration\nis: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = "/SideProjects/MyWebApp"')," inside the environment.php file\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /SideProjects/MyWebApp"),"\ninside .htaccess file"),(0,r.kt)("li",{parentName:"ul"},"If your ",(0,r.kt)("inlineCode",{parentName:"li"},"htdocs")," folder directly contain all project files (this mean that in your htdocs folders there are no other\nfiles than skeleton files), your configuration is: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = ""')," inside the environment.php file\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /"),"\ninside .htaccess file")),(0,r.kt)("h3",{id:"production--online-hosting"},"Production / online hosting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If want to publish your project directly under your domain ",(0,r.kt)("inlineCode",{parentName:"li"},"mywebsite.com")," (this mean that in your web hosting root\nfolder there are no other files than your project files), your configuration is: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = ""')," inside the\nenvironment.php file and ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /")," inside .htaccess file"),(0,r.kt)("li",{parentName:"ul"},"Project is placed inside a sub fodler in your web hosting root, so you have somthing like ",(0,r.kt)("inlineCode",{parentName:"li"},"mywebsite.com/MyWebApp"),". In\nthis case your configuration is: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = "/MyWebApp"')," inside the environment.php file\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /MyWebApp")," inside .htaccess file"),(0,r.kt)("li",{parentName:"ul"},"Project is placed in a deeper folder structure, for example you have ",(0,r.kt)("inlineCode",{parentName:"li"},"mywebsite.com/applications/MyWebapp"),". In this\ncase your configuration is: ",(0,r.kt)("inlineCode",{parentName:"li"},'const PROJECT_DIR = "/applications/MyWebapp"')," inside the environment.php file\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"RewriteBase /applications/MyWebapp"),"\ninside .htaccess file")))}d.isMDXComponent=!0}}]);