"use strict";(self.webpackChunkvuepress=self.webpackChunkvuepress||[]).push([[616],{1937:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-e0d70398",path:"/docs/introduction/project-structure.html",title:"Project Structure",lang:"en-US",frontmatter:{id:"project-structure",title:"Project Structure"},excerpt:"",headers:[{level:2,title:"Project Structure",slug:"project-structure",children:[]},{level:2,title:"Terminology",slug:"terminology",children:[{level:3,title:"Features",slug:"features",children:[]},{level:3,title:"Tools",slug:"tools",children:[]},{level:3,title:"Id vs Type",slug:"id-vs-type",children:[]}]},{level:2,title:"Conventions",slug:"conventions",children:[]}],filePathRelative:"docs/introduction/project-structure.md",git:{updatedTime:1633465343e3,contributors:[{name:"Isha",email:"ishadijcks@gmail.com",commits:1}]}}},964:(e,n,a)=>{a.r(n),a.d(n,{default:()=>f});var s=a(6252);const t=(0,s._)("p",null,"This page will explain the layout of the project. It explains some terminology as well.",-1),o=(0,s._)("h2",{id:"project-structure",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#project-structure","aria-hidden":"true"},"#"),(0,s.Uk)(" Project Structure")],-1),r=(0,s.Uk)("The global static root object is called "),l=(0,s._)("code",null,"App",-1),i=(0,s.Uk)(". When it is started, it creates an instance of "),c=(0,s._)("code",null,"Game",-1),p=(0,s.Uk)(" where you can inject different Features. This means that all features are accessible with "),u=(0,s._)("code",null,"App.game.features.<feature>",-1),d=(0,s.Uk)(". During the "),h=(0,s.Uk)("initialization"),m=(0,s.Uk)(" of a feature, all features are passed to the initialization method."),g=(0,s.uE)('<h2 id="terminology" tabindex="-1"><a class="header-anchor" href="#terminology" aria-hidden="true">#</a> Terminology</h2><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3><p>Features are part of your game containing some sort of state. Think of a Wallet to track currencies, Settings for player preferences, and Achievements.</p><p>Features can be implemented by extending the <code>Feature</code> class. Features like this automatically get included in the game loop. This means they get called with <code>update(delta: number)</code> automatically, as well as being saved and loaded. A game will consist of multiple features communicating with each other.</p><h3 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Tools is not really a good name. Might change it in the future</p></div><p>Tools are a collection name for things that can be reused between features. Think of Upgrades, Saving, DropTables.</p><p>Note that these aren&#39;t saved as they shouldn&#39;t contain any game state.</p><h3 id="id-vs-type" tabindex="-1"><a class="header-anchor" href="#id-vs-type" aria-hidden="true">#</a> Id vs Type</h3><p>I am a huge fan of using <code>Enum</code>s over strings. They prevent mistakes with minimal boilerplate. Anything that uniquely identifies an object instance should be an <code>Id</code>. Otherwise, it should be a <code>Type</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> UpgradeId <span class="token punctuation">{</span>\n  ExampleUpgradeOne<span class="token punctuation">,</span>\n  ExampleUpgradeTwo<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">enum</span> UpgradeType <span class="token punctuation">{</span>\n  MoneyMultiplier<span class="token punctuation">,</span>\n  ExampleMultiplier<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Upgrade</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> UpgradeId<span class="token punctuation">;</span>\n  type<span class="token operator">:</span> UpgradeType<span class="token punctuation">;</span>\n  <span class="token comment">// other stuff</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="conventions" tabindex="-1"><a class="header-anchor" href="#conventions" aria-hidden="true">#</a> Conventions</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>All percentages scale from <code>0</code> to <code>1</code>. <strong>Not 0 to 100%</strong>. This is nicer as you can simply multiply all of them.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>All times are floats in seconds. <code>const time: number = 1;</code> means 1 second.</p></div>',14),b={},f=(0,a(3744).Z)(b,[["render",function(e,n){const a=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,o,(0,s._)("p",null,[r,l,i,c,p,u,d,(0,s.Wm)(a,{to:"/docs/introduction/launch-behaviour.html"},{default:(0,s.w5)((()=>[h])),_:1}),m]),g],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}}}]);