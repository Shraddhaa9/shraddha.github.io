(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2675:function(e,r,t){Promise.resolve().then(t.t.bind(t,2827,23)),Promise.resolve().then(t.t.bind(t,4021,23)),Promise.resolve().then(t.bind(t,4242)),Promise.resolve().then(t.t.bind(t,2778,23)),Promise.resolve().then(t.t.bind(t,2648,23)),Promise.resolve().then(t.bind(t,4939))},4939:function(e,r,t){"use strict";t.d(r,{AuthProvider:function(){return u},a:function(){return c}});var n=t(7437),o=t(2265),a=t(5452),s=t(9376),i=t(4242);let l=(0,o.createContext)(void 0),u=e=>{let{children:r}=e,[t,u]=(0,o.useState)(null),c=(0,a.createClientComponentClient)(),d=(0,s.useRouter)(),h=async(e,r)=>{try{let{data:t,error:n}=await c.auth.signInWithPassword({email:e,password:r});if(n)throw n;let{data:o,error:a}=await c.auth.getUser();if(a)throw a;return u(o.user),i.Am.success("You have successfully signed in."),o}catch(r){console.error("Login error:",r);let e="Login failed. Please try again.";return e="Invalid login credentials"===r.message?"Invalid email or password. Please try again.":"An unexpected error occurred. Please try again later.",i.Am.error(e),e}},_=async()=>{let{error:e}=await c.auth.signOut();e?console.error("Logout error:",e):u(null)},f=async(e,r)=>{try{let{data:t,error:n}=await c.auth.signUp({email:e,password:r});if(n)return console.error("Registration error:",n),i.Am.error(n.message),null;return i.Am.success("Registration successful! Please check your email to confirm your account."),d.push("/auth/verify?message=Check email to continue sign in process&email=".concat(e)),t}catch(e){return console.error("Error in register function:",e),i.Am.error("An unexpected error occurred. Please try again later."),null}},g=async()=>{try{let{error:e}=await c.auth.signInWithOAuth({provider:"google",options:{redirectTo:"/upload"}});if(e)throw e;console.log("Google login successful!")}catch(e){console.error("Google login error:",e)}},m=async e=>{console.log("Password reset",e)};return(0,o.useEffect)(()=>{(async()=>{let{data:e,error:r}=await c.auth.getSession();if(r)console.error("Get session error:",r);else{var t;u((null==e?void 0:null===(t=e.session)||void 0===t?void 0:t.user)||null)}})();let e=c.auth.onAuthStateChange((e,r)=>{u((null==r?void 0:r.user)||null)});return()=>{e.data.subscription.unsubscribe()}},[c]),(0,n.jsx)(l.Provider,{value:{user:t,login:h,logOut:_,register:f,loginWithGoogle:g,resetPassword:m},children:r})},c=()=>{let e=(0,o.useContext)(l);if(!e)throw Error("useAuth must be used within an AuthProvider");return e}},2648:function(){},2778:function(){},4021:function(e){e.exports={style:{fontFamily:"'__Fraunces_ae2eaa', '__Fraunces_Fallback_ae2eaa'",fontStyle:"normal"},className:"__className_ae2eaa",variable:"__variable_ae2eaa"}},2827:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}}},function(e){e.O(0,[97,711,496,242,971,117,744],function(){return e(e.s=2675)}),_N_E=e.O()}]);