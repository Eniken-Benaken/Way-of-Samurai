(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[3],{253:function(e,t,o){"use strict";var a=o(2),s=o(4),n=o(5),c=o(12),r=o(13),i=o(1),l=o(0),b=o.n(l),u=o(16),j=o(11),d=o(28),p=function(e){return{is_auth:Object(d.i)(e)}};t.a=function(e){var t=function(t){Object(c.a)(l,t);var o=Object(r.a)(l);function l(){return Object(s.a)(this,l),o.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return this.props.is_auth?Object(i.jsx)(e,Object(a.a)({},this.props)):Object(i.jsx)(j.a,{to:"/login"})}}]),l}(b.a.Component);return Object(u.b)(p)(t)}},254:function(e,t,o){e.exports={profileInfo_wrapper:"ProfileInfo_profileInfo_wrapper__PT8YA",banner:"ProfileInfo_banner__2jObx",person_info:"ProfileInfo_person_info__34u4h",avatar_block:"ProfileInfo_avatar_block__1nFGo",user_name:"ProfileInfo_user_name__38mv_",looking_for_job:"ProfileInfo_looking_for_job__2IveP",description_block:"ProfileInfo_description_block__1TkpC",description_content:"ProfileInfo_description_content__2lwQJ"}},258:function(e,t,o){e.exports={profile_wrapper:"Profile_profile_wrapper__1YLEU"}},259:function(e,t,o){e.exports={posts:"MyPosts_posts__3ng4M",new_post:"MyPosts_new_post__bwkT4",new_post_content:"MyPosts_new_post_content__2WQf-"}},260:function(e,t,o){e.exports={item:"Post_item__1I4R3",post_content_wrapper:"Post_post_content_wrapper__3Z6oL",author:"Post_author__1dN6P",post_content:"Post_post_content__1rFbh",action_buttons:"Post_action_buttons__1kYno",likes:"Post_likes__34yDk",add_comment:"Post_add_comment__nNteY"}},261:function(e,t,o){"use strict";o.r(t);var a=o(2),s=o(4),n=o(5),c=o(12),r=o(13),i=o(1),l=o(0),b=o(33),u=o(258),j=o.n(u),d=o(8),p=o(16),h=o(7),O=o(29),m=o(38),_=function(e){var t=e.addPost,o=m.a({new_post:m.b().max(200,"Your post text is too long")});return Object(i.jsx)(O.d,{initialValues:{new_post:""},validationSchema:o,onSubmit:function(e){t(e.new_post)},children:Object(i.jsxs)(O.c,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(O.b,{type:"textarea",name:"new_post"}),Object(i.jsx)(O.a,{name:"new_post"})]}),Object(i.jsx)("button",{type:"submit",children:"Add Post"})]})})},f=o(259),x=o.n(f),v=o(260),k=o.n(v),g=function(e){return Object(i.jsxs)("div",{className:k.a.item,id:e.id,children:[Object(i.jsx)("img",{src:"https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=a54fc963e39dd6645fce012663ed13c1",alt:"avatar"}),Object(i.jsxs)("div",{className:k.a.post_content_wrapper,children:[Object(i.jsx)("div",{className:k.a.author,children:Object(i.jsx)("a",{href:e.author_url,children:e.author})}),Object(i.jsx)("div",{className:k.a.post_content,children:e.post_content})]}),Object(i.jsxs)("div",{className:k.a.action_buttons,children:[Object(i.jsxs)("div",{className:k.a.likes,children:[e.likes_count,"\u2764"," like"]}),Object(i.jsx)("div",{className:k.a.add_comment,children:"add comment"})]})]})},w=function(e){var t=e.posts;return Object(i.jsxs)("div",{className:x.a.posts,children:[Object(i.jsx)("div",{className:x.a.new_post,children:Object(i.jsx)(_,{addPost:function(t){e.addPost(t)}})}),t.map((function(e){return Object(i.jsx)(g,{id:e.id,author:e.author,post_content:e.post_content,likes_count:e.likes_count},e.id)}))]})},N=Object(p.b)((function(e){return{posts:Object(a.a)(Object(a.a)({},e),{},{profile:{posts:Object(d.a)(e.profile.posts)}}).profile.posts}}),(function(e){return{addPost:function(t){var o=Object(h.a)(t);e(o)}}}))(w),y=o(9),P=o.n(y),F=o(21),M=o(44),I=o(254),A=o.n(I),J=o(92),D=function(e){var t=e.fullName,o=e.userId,s=e.contacts,n=e.lookingForAJob,c=e.lookingForAJobDescription,r=e.submitProfileInfoChange,l=e.error,b=e.aboutMe,u=Object(a.a)(Object(a.a)({},s),{},{lookingForAJob:n,lookingForAJobDescription:c,fullName:t,aboutMe:b}),j=m.a({}),d=l&&Object(i.jsx)("div",{className:A.a.submit_error,children:l});return Object(i.jsx)(O.d,{initialValues:u,validationSchema:j,onSubmit:function(e){var t=e.lookingForAJob,a=e.lookingForAJobDescription,s=e.fullName,n=e.facebook,c=e.github,i=e.instagram,l=e.mainLink,b=e.twitter,u=e.vk,j=e.website,d=e.youtube,p=e.aboutMe;r({userId:o,fullName:s,lookingForAJob:t,aboutMe:p,lookingForAJobDescription:a,contacts:{facebook:n,github:c,instagram:i,mainLink:l,twitter:b,vk:u,website:j,youtube:d}})},children:Object(i.jsxs)(O.c,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"fullName",children:"Your Full Name is "}),Object(i.jsx)(O.b,{type:"text",name:"fullName",placeholder:"fullName"}),Object(i.jsx)(O.a,{name:"fullName"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"Describe your skills "}),Object(i.jsx)(O.b,{component:"textarea",name:"lookingForAJobDescription",placeholder:"lookingForAJobDescription"}),Object(i.jsx)(O.a,{name:"lookingForAJobDescription"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"aboutMe",children:"Tell about yourself "}),Object(i.jsx)(O.b,{component:"textarea",name:"aboutMe",placeholder:"aboutMe"}),Object(i.jsx)(O.a,{name:"aboutMe"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"facebook",children:"Your facebook account link"}),Object(i.jsx)(O.b,{type:"text",name:"facebook",placeholder:"facebook"}),Object(i.jsx)(O.a,{name:"facebook"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"github",children:"Your github account link"}),Object(i.jsx)(O.b,{type:"text",name:"github",placeholder:"github"}),Object(i.jsx)(O.a,{name:"github"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"instagram",children:"Your instagram account link"}),Object(i.jsx)(O.b,{type:"text",name:"instagram",placeholder:"instagram"}),Object(i.jsx)(O.a,{name:"instagram"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"mainLink",children:"Your mainLink"}),Object(i.jsx)(O.b,{type:"text",name:"mainLink",placeholder:"mainLink"}),Object(i.jsx)(O.a,{name:"mainLink"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"twitter",children:"Your twitter account link"}),Object(i.jsx)(O.b,{type:"text",name:"twitter",placeholder:"twitter"}),Object(i.jsx)(O.a,{name:"twitter"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"vk",children:"Your vk account link"}),Object(i.jsx)(O.b,{type:"text",name:"vk",placeholder:"vk"}),Object(i.jsx)(O.a,{name:"vk"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"website",children:"Your website"}),Object(i.jsx)(O.b,{type:"text",name:"website",placeholder:"website"}),Object(i.jsx)(O.a,{name:"website"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"youtube",children:"Your youtube account link"}),Object(i.jsx)(O.b,{type:"text",name:"youtube",placeholder:"youtube"}),Object(i.jsx)(O.a,{name:"youtube"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"lookingForAJob",children:"I'm looking for a job "}),Object(i.jsx)(O.b,{type:"checkbox",name:"lookingForAJob"})]}),d,Object(i.jsx)("button",{type:"submit",children:"Submit"})]})})},S=function(e){var t=e.statusText,o=e.ownProfile,a=e.updateStatus,s=e.serverErrorMessage,n=Object(l.useState)(t),c=Object(b.a)(n,2),r=c[0],u=c[1],j=Object(l.useState)(!1),d=Object(b.a)(j,2),p=d[0],h=d[1],O=Object(l.useState)(s),m=Object(b.a)(O,2);m[0],m[1];""===r&&o&&u("Double-click here to add status"),Object(l.useEffect)((function(){u(t)}),[t]);var _=function(){h(!p)};return o?p?Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{"data-testid":"statusChangeInput",type:"text",autoFocus:!0,onChange:function(e){u(e.target.value)},value:r}),Object(i.jsx)("button",{"data-testid":"saveStatusButton",onClick:function(){_(),a(r)},children:"Save Changes"})]}):Object(i.jsx)("span",{"data-testid":"ownStatusText",onDoubleClick:_,children:t},"status"):Object(i.jsx)("span",{"data-testid":"statusText",children:r},"status")},C=function(e){var t=e.fullName,o=e.is_looking,a=e.avatar,s=e.ownProfile,n=e.onPhotoUpload,c=e.status,r=e.updateStatus,l=e.contacts,b=e.setEditMode,u=e.lookingForAJobDescription,j=e.aboutMe,d=e.serverErrorMessage;return Object(i.jsxs)("div",{className:A.a.profileInfo_wrapper,children:[Object(i.jsx)("div",{className:A.a.banner,children:Object(i.jsx)("img",{src:"https://source.unsplash.com/1000x200/?city",alt:"newyear"})}),Object(i.jsxs)("div",{className:A.a.person_info,children:[Object(i.jsxs)("div",{className:A.a.avatar_block,children:[Object(i.jsxs)("div",{className:A.a.user_name,children:[t," ",o]}),a,s&&Object(i.jsx)("input",{type:"file",onChange:n})]}),Object(i.jsxs)("div",{className:A.a.description_block,children:[Object(i.jsx)(S,{statusText:c,ownProfile:s,updateStatus:r,serverErrorMessage:d}),Object(i.jsx)("h3",{className:A.a.description_header,children:"About me: "}),Object(i.jsx)("div",{className:A.a.description_content,children:j}),Object(i.jsx)("h3",{className:A.a.description_header,children:"My Skills:"}),Object(i.jsx)("div",{className:A.a.description_content,children:u}),Object(i.jsx)("h3",{className:A.a.description_header,children:"Contacts:"}),l,s&&Object(i.jsx)("button",{onClick:function(){return b(!0)},children:"Change Your Info"})]})]})]})},Y=o(18),E=function(e){var t=e.current_visited_user,o=e.isFetching,a=e.status,s=e.updateStatus,n=e.user_id,c=e.savePhoto,r=e.editMode,u=e.setEditMode,j=Object(l.useState)(null),d=Object(b.a)(j,2),O=d[0],m=d[1],_=Object(p.c)();if(o)return Object(i.jsx)(M.a,{});if(!t)return Object(i.jsx)(M.a,{});var f=t.userId===n,x=t.lookingForAJob?Object(i.jsx)("span",{className:A.a.looking_for_job,children:"\ud83e\udd11"}):Object(i.jsx)("span",{className:A.a.looking_for_job,children:"\ud83e\udd20"}),v=[];for(var k in t.contacts)t.contacts[k]?v.push(Object(i.jsx)("div",{className:A.a.contact,children:"".concat(k,": ").concat(t.contacts[k])},k)):v.push(Object(i.jsx)("div",{className:A.a.contact,children:"".concat(k,": --")},k));var g=t.photos.large?Object(i.jsx)("img",{src:t.photos.large,alt:"avatar"}):Object(i.jsx)("img",{src:J.a,alt:"avatar"}),w=function(){var e=Object(F.a)(P.a.mark((function e(t){var o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.b.setProfileInfo(t);case 2:o=e.sent,console.log(o),0===o.data.resultCode?(_(Object(h.k)(t)),u(!1)):o.data.messages.length&&m(o.data.messages[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r?Object(i.jsx)(D,{userId:t.userId,fullName:t.fullName,contacts:t.contacts,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,submitProfileInfoChange:w,error:O,aboutMe:t.aboutMe}):Object(i.jsx)(C,{fullName:t.fullName,is_looking:x,avatar:g,ownProfile:f,onPhotoUpload:function(e){e.target.files.length?c(e.target.files[0],n):console.log("No file loaded")},status:a,updateStatus:s,contacts:v,setEditMode:u,lookingForAJobDescription:t.lookingForAJobDescription,aboutMe:t.aboutMe})},L=function(e){var t=Object(l.useState)(!1),o=Object(b.a)(t,2),s=o[0],n=o[1];return s?Object(i.jsx)("main",{className:j.a.profile_wrapper,children:Object(i.jsx)(E,Object(a.a)(Object(a.a)({},e),{},{editMode:s,setEditMode:n}))}):Object(i.jsxs)("main",{className:j.a.profile_wrapper,children:[Object(i.jsx)(E,Object(a.a)(Object(a.a)({},e),{},{editMode:s,setEditMode:n})),Object(i.jsx)(N,{})]})},T=o(27),U=o(253),R=o(26),Q=o(28),V=function(e){Object(c.a)(o,e);var t=Object(r.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"componentDidMount",value:function(){this.initProfile()}},{key:"componentDidUpdate",value:function(e,t,o){var a=e.match.params.userId!==this.props.match.params.userId,s=e.status!==this.props.status;(a||s)&&this.initProfile()}},{key:"initProfile",value:function(){var e=this.props.match.params.userId;e?(this.props.current_route!=="/profile/".concat(e)&&this.props.setCurrentRoute("/profile/".concat(e)),this.props.getUserData(e)):("/profile"!==this.props.current_route&&this.props.setCurrentRoute("/profile"),this.props.getUserData(this.props.user_id))}},{key:"render",value:function(){return Object(i.jsx)(L,Object(a.a)({},this.props))}}]),o}(l.Component);t.default=Object(R.d)(Object(p.b)((function(e){return{current_visited_user:Object(Q.f)(e),is_fetching:Object(Q.j)(e),status:Object(Q.g)(e),user_id:Object(Q.d)(e),current_route:Object(Q.b)(e)}}),{getUserData:T.d,updateStatus:T.k,setCurrentRoute:h.g,getCurrentRoute:Q.b,savePhoto:T.g,getAuthData:T.b}),U.a)(V)}}]);
//# sourceMappingURL=3.dd08a551.chunk.js.map