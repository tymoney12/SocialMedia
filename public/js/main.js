!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=41)}({41:function(t,e,n){t.exports=n(9)},9:function(t,e){$(".like").click(function(t){t.preventDefault();var e=null==t.target.previousElementSibling,n=t.target.parentNode.dataset.postid,i={isLike:e,post_id:n};axios.post("/like",i).then(function(e){$("[data-postid='"+e.data.post_id+"'] > .active-like").attr("class","btn btn-link like"),t.currentTarget.className="btn btn-link like active-like"})}),$(".friend").click(function(t){t.preventDefault();var e=t.target.parentNode.dataset.friendid,n={friend_id:e};axios.post("/friend",n).then(function(e){t.currentTarget.className="btn btn-link active-like"})})}});