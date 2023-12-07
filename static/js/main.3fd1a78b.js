(()=>{"use strict";var e={6837:(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var n=r(5004),o=r(3426),a=r(5705),i=r(7472),l=r(8711),s=r(1785),c=r(5861),u=r(885),d=r(9385),p=r(6792),f=r(1054),y=r(9546),b=r(2629),x=p.default.create({container:{padding:8,backgroundColor:y.GlobalStyles.colors.primary50,borderRadius:6,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},period:{fontSize:12,color:y.GlobalStyles.colors.primary400},sum:{fontSize:16,fontWeight:"bold",color:y.GlobalStyles.colors.primary500}});const g=function(e){var t=e.expenses,r=e.periodName,n=t.reduce((function(e,t){return e+t.amount}),0);return(0,b.jsxs)(d.default,{style:x.container,children:[(0,b.jsx)(f.default,{style:x.period,children:r}),(0,b.jsxs)(f.default,{style:x.sum,children:["$",n.toFixed(2)]})]})};var h=r(4942),m=r(3645),j=r(5326),v=r(1318);function O(e){return e.toISOString().slice(0,10)}var w=p.default.create({pressed:{opacity:.75},expenseItem:{padding:12,marginVertical:8,backgroundColor:y.GlobalStyles.colors.primary500,flexDirection:"row",justifyContent:"space-between",borderRadius:6,elevation:3,shadowColor:y.GlobalStyles.colors.gray500,shadowRadius:4,shadowOffset:{width:1,height:1},shadowOpacity:.4},textBase:{color:y.GlobalStyles.colors.primary50},description:{fontSize:16,marginBottom:4,fontWeight:"bold"},amountContainer:{paddingHorizontal:12,paddingVertical:4,backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:4,minWidth:80},amount:{color:y.GlobalStyles.colors.primary500,fontWeight:"bold"}});const S=function(e){var t=e.id,r=e.description,n=e.amount,o=e.date,a=(0,v.useNavigation)();return(0,b.jsx)(j.default,{onPress:function(){a.navigate("ManageExpense",{expenseId:t})},style:function(e){return e.pressed&&w.pressed},children:(0,b.jsxs)(d.default,{style:w.expenseItem,children:[(0,b.jsxs)(d.default,{children:[(0,b.jsx)(f.default,{style:(w.textBase,w.description),children:r}),(0,b.jsx)(f.default,{style:w.textBase,children:O(o)})]}),(0,b.jsx)(d.default,{style:w.amountContainer,children:(0,b.jsx)(f.default,{style:w.amount,children:n.toFixed(2)})})]})})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){return(0,b.jsx)(S,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.item))}const E=function(e){var t=e.expenses;return(0,b.jsx)(m.default,{data:t,renderItem:C,keyExtractor:function(e){return e.id}})};var D=p.default.create({container:{flex:1,paddingHorizontal:24,paddingTop:24,paddingBottom:0,backgroundColor:y.GlobalStyles.colors.primary700},infoText:{color:"white",fontSize:16,textAlign:"center",marginTop:32}});const T=function(e){var t=e.expenses,r=e.expensesPeriod,n=e.fallbackText,o=(0,b.jsx)(f.default,{style:D.infoText,children:n});return t.length>0&&(o=(0,b.jsx)(E,{expenses:t})),(0,b.jsxs)(d.default,{style:D.container,children:[(0,b.jsx)(g,{expenses:t,periodName:r}),o]})};var k=r(2982);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=(0,n.createContext)({expenses:[],addExpense:function(e){e.description,e.amount,e.date},setExpenses:function(e){},deleteExpense:function(e){},updateExpense:function(e,t){t.description,t.amount,t.date}});function V(e,t){switch(t.type){case"ADD":return[t.payload].concat((0,k.default)(e));case"SET":return t.payload.reverse();case"UPDATE":var r=e.findIndex((function(e){return e.id===t.payload.id})),n=G(G({},e[r]),t.payload.data),o=(0,k.default)(e);return o[r]=n,o;case"DELETE":return e.filter((function(e){return e.id!==t.payload}));default:return e}}const A=function(e){var t=e.children,r=(0,n.useReducer)(V,[]),o=(0,u.default)(r,2),a=o[0],i=o[1],l={expenses:a,setExpenses:function(e){i({type:"SET",payload:e})},addExpense:function(e){i({type:"ADD",payload:e})},deleteExpense:function(e){i({type:"DELETE",payload:e})},updateExpense:function(e,t){i({type:"UPDATE",payload:{id:e,data:t}})}};return(0,b.jsx)(z.Provider,{value:l,children:t})};var B=r(3408),R="https://react-native-course-aca61-default-rtdb.firebaseio.com";function L(){return(L=(0,c.default)((function*(e){return(yield B.default.post(R+"/expenses.json",e)).data.name}))).apply(this,arguments)}function M(){return(M=(0,c.default)((function*(){var e=yield B.default.get(R+"/expenses.json"),t=[];for(var r in e.data){var n={id:r,amount:e.data[r].amount,date:new Date(e.data[r].date),description:e.data[r].description};t.push(n)}return t}))).apply(this,arguments)}function N(){return(N=(0,c.default)((function*(e){return B.default.delete(R+`/expenses/${e}.json`)}))).apply(this,arguments)}var W=r(229),H=p.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:24,backgroundColor:y.GlobalStyles.colors.primary700}});const Y=function(){return(0,b.jsx)(d.default,{style:H.container,children:(0,b.jsx)(W.default,{size:"large",color:"white"})})};var F=p.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",padding:24,backgroundColor:y.GlobalStyles.colors.primary700},text:{color:"white",textAlign:"center",marginBottom:8},title:{fontSize:20,fontWeight:"bold"}});const _=function(e){var t=e.message;return(0,b.jsxs)(d.default,{style:F.container,children:[(0,b.jsx)(f.default,{style:[F.text,F.title],children:"An error ocurred!"}),(0,b.jsx)(f.default,{style:F.text,children:t})]})};const U=function(){var e=(0,n.useState)(!0),t=(0,u.default)(e,2),r=t[0],o=t[1],a=(0,n.useState)(),i=(0,u.default)(a,2),l=i[0],s=i[1],d=(0,n.useContext)(z);if((0,n.useEffect)((function(){function e(){return e=(0,c.default)((function*(){o(!0);try{var e=yield function(){return M.apply(this,arguments)}();d.setExpenses(e)}catch(l){s("Could not fetch expenses.")}o(!1)})),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l&&!r)return(0,b.jsx)(_,{message:l});if(r)return(0,b.jsx)(Y,{});var p=d.expenses.filter((function(e){var t,r,n=new Date,o=(t=n,r=7,new Date(t.getFullYear(),t.getMonth(),t.getDate()-r));return e.date>=o&&e.date<=n})).sort((function(e,t){return t.date-e.date}));return(0,b.jsx)(T,{expenses:p,expensesPeriod:"Last 7 days",fallbackText:"No expenses registered for the last 7 days"})};const $=function(){var e=(0,n.useContext)(z),t=(0,k.default)(e.expenses).sort((function(e,t){return t.date-e.date}));return(0,b.jsx)(T,{expenses:t,expensesPeriod:"Total",fallbackText:"No registered expense found!"})};var q=r(6591);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=p.default.create({inputContainer:{marginHorizontal:4,marginVertical:8},label:{fontSize:12,color:y.GlobalStyles.colors.primary100,marginBottom:4},input:{backgroundColor:y.GlobalStyles.colors.primary100,color:y.GlobalStyles.colors.primary700,padding:6,borderRadius:6,fontSize:18},inputMultiline:{minHeight:100,textAlignVertical:"top"},invalidLabel:{color:y.GlobalStyles.colors.error500},invalidInput:{backgroundColor:y.GlobalStyles.colors.error50}});const X=function(e){var t=e.label,r=e.invalid,n=e.style,o=e.textInputConfig,a=[Q.input];return o&&o.multiline&&a.push(Q.inputMultiline),r&&a.push(Q.invalidInput),(0,b.jsxs)(d.default,{style:(Q.inputContainer,n),children:[(0,b.jsx)(f.default,{style:[Q.label,r&&Q.invalidLabel],children:t}),(0,b.jsx)(q.default,K({style:a},o))]})};var Z=p.default.create({button:{borderRadius:4,padding:8,backgroundColor:y.GlobalStyles.colors.primary500},flat:{backgroundColor:"transparent"},buttonText:{color:"white",textAlign:"center"},flatText:{color:y.GlobalStyles.colors.primary200},pressed:{opacity:.75,backgroundColor:y.GlobalStyles.colors.primary100,borderRadius:4}});const ee=function(e){var t=e.children,r=e.onPress,n=e.mode,o=e.style;return(0,b.jsx)(d.default,{style:o,children:(0,b.jsx)(j.default,{onPress:r,style:function(e){return e.pressed&&Z.pressed},children:(0,b.jsx)(d.default,{style:[Z.button,"flat "===n&&Z.flat],children:(0,b.jsx)(f.default,{style:[Z.buttonText,"flat"===n&&Z.flatText],children:t})})})})};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=p.default.create({form:{marginTop:80},title:{fontSize:18,fontWeight:"bold",color:"white",marginVertical:24,textAlign:"center"},inputsRow:{flexDirection:"row",justifyContent:"space-between"},rowInput:{flex:1,margin:3},errorText:{textAlign:"center",color:y.GlobalStyles.colors.error500,margin:8},buttons:{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:14},button:{minWidth:120,marginHorizontal:8}});const oe=function(e){var t=e.submitButtonLabel,r=e.onCancel,o=e.onSubmit,a=e.defaultValues,i=(0,n.useState)({amount:{value:a?a.amount.toString():"",isValid:!0},date:{value:a?O(a.date):"",isValid:!0},description:{value:a?a.description:"",isValid:!0}}),l=(0,u.default)(i,2),s=l[0],c=l[1];function p(e,t){c((function(r){return re(re({},r),{},(0,h.default)({},e,{value:t,isValid:!0}))}))}var y=!s.amount.isValid||!s.date.isValid||!s.description.isValid;return(0,b.jsxs)(d.default,{style:ne.form,children:[(0,b.jsx)(f.default,{style:ne.title,children:"Your Expense"}),(0,b.jsxs)(d.default,{style:ne.inputsRow,children:[(0,b.jsx)(X,{style:ne.rowInput,label:"Amount",invalid:!s.amount.isValid,textInputConfig:{keyboardType:"decimal-pad",onChangeText:p.bind(this,"amount"),value:s.amount.value}}),(0,b.jsx)(X,{style:ne.rowInput,label:"Date",invalid:!s.date.isValid,textInputConfig:{placeholder:"YYYY-MM-DD",maxLength:10,onChangeText:p.bind(this,"date"),value:s.date.value}})]}),(0,b.jsx)(X,{label:"Description",invalid:!s.description.isValid,textInputConfig:{multiline:!0,onChangeText:p.bind(this,"description"),value:s.description.value}}),y&&(0,b.jsx)(f.default,{style:ne.errorText,children:"Invalid input values - please check your entered data!"}),(0,b.jsxs)(d.default,{style:ne.buttons,children:[(0,b.jsx)(ee,{style:ne.button,mode:"flat",onPress:r,children:"Cancel"}),(0,b.jsx)(ee,{style:ne.button,onPress:function(){var e={amount:+s.amount.value,date:new Date(s.date.value),description:s.description.value},t=!isNaN(e.amount)&&e.amount>0,r=!isNaN(e.date),n=e.description.trim().length>0;t&&r&&n?o(e):c((function(e){return{amount:{value:e.amount.value,isValid:t},date:{value:e.date.value,isValid:r},description:{value:e.description.value,isValid:n}}}))},children:t})]})]})};var ae=p.default.create({buttonContainer:{borderRadius:24,padding:6,marginHorizontal:8,marginVertical:2},pressed:{opacity:.75}});const ie=function(e){var t=e.icon,r=e.size,n=e.color,o=e.onPress;return(0,b.jsx)(j.default,{onPress:o,style:function(e){return e.pressed&&ae.pressed},children:(0,b.jsx)(d.default,{style:ae.buttonContainer,children:(0,b.jsx)(s.default,{name:t,size:r,color:n})})})};function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,h.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=p.default.create({container:{flex:1,padding:24,backgroundColor:y.GlobalStyles.colors.primary800},deleteContainer:{marginTop:16,paddingTop:8,borderTopWidth:2,borderTopColor:y.GlobalStyles.colors.primary200,alignItems:"center"}});const ue=function(e){var t,r=e.route,o=e.navigation,a=(0,n.useState)(!1),i=(0,u.default)(a,2),l=i[0],s=i[1],p=(0,n.useState)(),f=(0,u.default)(p,2),x=f[0],g=f[1],h=(0,n.useContext)(z),m=null==(t=r.params)?void 0:t.expenseId,j=!!m,v=h.expenses.find((function(e){return e.id===m}));function O(){return O=(0,c.default)((function*(){s(!0);try{yield function(e){return N.apply(this,arguments)}(m),h.deleteExpense(m),o.goBack()}catch(x){g("Could not delete expense - please try again later"),s(!1)}})),O.apply(this,arguments)}function w(){return w=(0,c.default)((function*(e){s(!0);try{if(j)h.updateExpense(m,e),yield function(e,t){return B.default.put(R+`/expenses/${e}.json`,t)}(m,e);else{var t=yield function(e){return L.apply(this,arguments)}(e);h.addExpense(se(se({},e),{},{id:t}))}o.goBack()}catch(x){g("Could not save data - please try again later"),s(!1)}})),w.apply(this,arguments)}return(0,n.useLayoutEffect)((function(){o.setOptions({title:j?"Edit Expense":"Add Expense"})}),[o,j]),x&&!l?(0,b.jsx)(_,{message:x,onConfirm:function(){g(null)}}):l?(0,b.jsx)(Y,{}):(0,b.jsxs)(d.default,{style:ce.container,children:[(0,b.jsx)(oe,{submitButtonLabel:j?"Update":"Add",onSubmit:function(e){return w.apply(this,arguments)},onCancel:function(){o.goBack()},defaultValues:v}),j&&(0,b.jsx)(d.default,{style:ce.deleteContainer,children:(0,b.jsx)(ie,{icon:"trash",color:y.GlobalStyles.colors.error500,size:36,onPress:function(){return O.apply(this,arguments)}})})]})};var de=(0,i.default)(),pe=(0,l.default)(),fe=r(9546).GlobalStyles;function ye(){return(0,b.jsxs)(pe.Navigator,{screenOptions:function(e){var t=e.navigation;return{headerStyle:{backgroundColor:fe.colors.primary800},headerTintColor:"white",tabBarStyle:{backgroundColor:fe.colors.primary800},tabBarActiveTintColor:fe.colors.primary200,headerRight:function(e){var r=e.tintColor;return(0,b.jsx)(ie,{icon:"add",size:24,color:r,onPress:function(){t.navigate("ManageExpense")}})}}},children:[(0,b.jsx)(pe.Screen,{name:"RecentExpenses",component:U,options:{title:"Recent Expenses",tabBarLabel:"Recent",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,b.jsx)(s.default,{name:"hourglass",size:r,color:t})}}}),(0,b.jsx)(pe.Screen,{name:"AllExpenses",component:$,options:{title:"All Expenses",tabBarLabel:"All Expenses",tabBarIcon:function(e){var t=e.color,r=e.size;return(0,b.jsx)(s.default,{name:"calendar",size:r,color:t})}}})]})}function be(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o.default,{style:"light"}),(0,b.jsx)(A,{children:(0,b.jsx)(a.default,{children:(0,b.jsxs)(de.Navigator,{screenOptions:{headerStyle:{backgroundColor:fe.colors.primary500},headerTintColor:"white"},children:[(0,b.jsx)(de.Screen,{name:"ExpensesOverview",component:ye,options:{headerShown:!1}}),(0,b.jsx)(de.Screen,{name:"ManageExpense",component:ue,options:{presentation:"modal"}})]})})})]})}},9546:(e,t,r)=>{r.r(t),r.d(t,{GlobalStyles:()=>n});var n={colors:{primary50:"#e4d9fd",primary100:"#c6affc",primary200:"#a281f0",primary400:"#5721d4",primary500:"#8A2BE2",primary700:"#1c1c1c",primary800:"#2a2829",accent500:"#f7bc0c",error50:"#fcc4e4",error500:"#9b095c",gray500:"#39324a",gray700:"#221c30"}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/expense-tracker/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[478],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.3fd1a78b.js.map