(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{73471:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[id]",function(){return t(45850)}])},97349:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(26042),s=t(99534),a=t(85893),l=t(67294);function o(n){var e=n.src,t=n.fallbackSrc,o=n.onError,i=(0,s.Z)(n,["src","fallbackSrc","onError"]),d=(0,l.useMemo)(function(){return"string"==typeof e&&e.startsWith("ipfs://")?"https://w3s.link/ipfs/".concat(e.replace(/^ipfs:\/\//,"")):e},[e]),c=(0,l.useState)(d),u=c[0],m=c[1],f=(0,l.useCallback)(function(n){m(t),null==o||o(n)},[o,t]);return(0,a.jsx)("img",(0,r.Z)({src:u,onError:f},i))}},53672:function(n,e,t){"use strict";t.d(e,{Nm:function(){return a},Tg:function(){return l},Wd:function(){return o}});var r=t(11163),s=t(67294),a=function(n){return Array.isArray(n)?n[0]:n},l=function(n){return Array.isArray(n)?Number(n[0]):Number(n)},o=function(n,e){var t=(0,r.useRouter)();return(0,s.useMemo)(function(){var r,s,a;return e((r=t.query)[n])},[t.query,n,e])}},45850:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return X}});var r,s=t(85893),a=t(55850),l=t(56371),o=t(98597),i=t(97349),d=t(54842),c=t(20571),u=t(86010),m=t(67294),f=t(73936),x=t(14924),h=t(26042),v=t(99534),p=t(44593),g=t(22564),j=t(83454),y=function(n){return fetch(n,{headers:{"Content-Type":"application/json",Authorization:j.env.NEXT_PUBLIC_NFTPORT_API_KEY}}).then(function(n){return n.json()})},N=(r={},(0,x.Z)(r,g.b.mainnet,"ethereum"),(0,x.Z)(r,g.b.rinkeby,"rinkeby"),(0,x.Z)(r,g.b.goerli,"goerli"),(0,x.Z)(r,g.b.polygon,"CSC"),r),w=function(n,e){var t=(0,m.useCallback)(function(t,r){return r&&!r.continuation?null:"https://api.nftport.xyz/v0/accounts/".concat(e,"?chain=").concat(n,"&include=metadata").concat((null==r?void 0:r.continuation)?"&continuation=".concat(r.continuation):"")},[e,n]),r=(0,p.ZP)(t,y),s=r.data,a=r.setSize,l=(0,v.Z)(r,["data","setSize"]),o=(0,m.useMemo)(function(){if(s)return s.map(function(n){return n.nfts.map(function(n){return{contractAddress:n.contract_address,tokenId:n.token_id,owner:e,fileUrl:n.cached_file_url||n.file_url}})})},[e,s]),i=(0,m.useMemo)(function(){var n;return!!s&&Boolean(null===(n=s[s.length-1])||void 0===n?void 0:n.continuation)},[s]);return(0,h.Z)({data:o,hasNextPage:i,setSize:a},l)},b=t(69396),k=t(27501),I=t(89731),F=t(41664),P=t.n(F),Z=t(8100);function M(n){var e=n.tokenURI,t=(0,Z.ZP)(e).data;return(0,s.jsx)("div",{className:"relative aspect-square",children:t?(0,s.jsx)(i.Z,{className:"h-full w-full object-cover",src:t.image,alt:e}):"Loading"})}function A(n){var e=n.address,t=n.items,r=n.isLoading,a=(0,I.Z)(),l=(0,m.useMemo)(function(){return t?{contracts:t.map(function(n){return(0,b.Z)((0,h.Z)({},a),{functionName:"tokenURI",args:[n.tokenId]})})}:{contracts:[],enabled:!1}},[t,a]),o=(0,k.Dm)(l).data;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"grid grid-cols-3 gap-4",children:(null==o?void 0:o.length)&&o.map(function(n,r){return(0,s.jsx)(P(),{href:"/post/".concat(t[r].tokenId.toString()),children:(0,s.jsx)("a",{children:(0,s.jsx)(M,{owner:e,contractAddress:a.addressOrName,tokenId:t[r].tokenId.toString(),tokenURI:n})})},t[r].tokenId.toString())})}),(0,s.jsx)("div",{className:"py-4 text-center",children:r?"Loading...":(null==o?void 0:o.length)?"":"No Items Found"})]})}function S(n){var e=n.address,t=(0,I.Z)(),r=(0,k.do)((0,b.Z)((0,h.Z)({},t),{functionName:"fetchUserOwnedNfts",args:[e],watch:!0})),a=r.data,l=r.isLoading;return(0,s.jsx)(A,{address:e,items:a,isLoading:l})}function _(n){var e=n.address,t=(0,I.Z)(),r=(0,k.do)((0,b.Z)((0,h.Z)({},t),{functionName:"fetchUserCreatedNfts",args:[e],watch:!0})),a=r.data,l=r.isLoading;return(0,s.jsx)(A,{address:e,items:a,isLoading:l})}function C(n){var e,t,r=n.address,a=(0,f.Z)(),l=(0,m.useMemo)(function(){return null!==(t=N[a])&&void 0!==t?t:"Coinex Smart Chain"},[a]),o=w(l,r),d=o.data,c=o.hasNextPage,u=o.isValidating,x=o.setSize;return(0,s.jsxs)(s.Fragment,{children:[(null==d?void 0:d.length)&&(0,s.jsx)("div",{className:"grid grid-cols-3 gap-4",children:d.map(function(n){return n.map(function(n){return(0,s.jsx)(P(),{href:"/".concat(a,"/collection/").concat(n.contractAddress,"?tokenId=").concat(n.tokenId),children:(0,s.jsx)("a",{children:(0,s.jsx)("div",{className:"relative aspect-square",children:(0,s.jsx)(i.Z,{className:"h-full w-full object-cover",src:n.fileUrl||"https://via.placeholder.com/300?text=".concat(encodeURIComponent("".concat(n.tokenId))),fallbackSrc:"https://via.placeholder.com/300?text=".concat(encodeURIComponent("".concat(n.tokenId))),alt:"".concat(n.contractAddress,".").concat(n.tokenId)})})})},"".concat(n.contractAddress,".").concat(n.tokenId))})})}),(0,s.jsx)("div",{className:"py-4 text-center",children:u?"Loading...":c?(0,s.jsx)("button",{onClick:function(){return x(function(n){return n+1})},children:"Load More"}):(null==d?void 0:null===(e=d[0])||void 0===e?void 0:e.length)?null:"No Items Found"})]})}var T=function(n){var e=n.selected;return(0,u.default)("border-b px-4 py-2",e?"border-b-black":"border-b-transparent")};function O(n){var e=n.address,t=(0,f.Z)(),r=(0,m.useMemo)(function(){return Boolean(N[t])},[t]);return(0,s.jsxs)(c.O.Group,{as:"div",className:"w-full",children:[(0,s.jsxs)(c.O.List,{as:"div",className:"my-4 flex justify-center gap-4",children:[(0,s.jsx)(c.O,{className:T,children:"Created"}),(0,s.jsx)(c.O,{className:T,children:"Owned"}),r&&(0,s.jsx)(c.O,{className:T,children:"All NFTs"})]}),(0,s.jsxs)(c.O.Panels,{children:[(0,s.jsx)(c.O.Panel,{children:(0,s.jsx)(_,{address:e})}),(0,s.jsx)(c.O.Panel,{children:(0,s.jsx)(S,{address:e})}),r&&(0,s.jsx)(c.O.Panel,{children:(0,s.jsx)(C,{address:e})})]})]})}var E=t(7297),R=t(17283);function U(){var n=(0,E.Z)(["\n  query DefaultProfile($address: EthereumAddress!) {\n    defaultProfile(request: { ethereumAddress: $address }) {\n      id\n      name\n      bio\n      isDefault\n      attributes {\n        displayType\n        traitType\n        key\n        value\n      }\n      followNftAddress\n      metadata\n      handle\n      picture {\n        ... on NftImage {\n          contractAddress\n          tokenId\n          uri\n          chainId\n          verified\n        }\n        ... on MediaSet {\n          original {\n            url\n            mimeType\n          }\n        }\n      }\n      coverPicture {\n        ... on NftImage {\n          contractAddress\n          tokenId\n          uri\n          chainId\n          verified\n        }\n        ... on MediaSet {\n          original {\n            url\n            mimeType\n          }\n        }\n      }\n      ownedBy\n      dispatcher {\n        address\n        canUseRelay\n      }\n      stats {\n        totalFollowers\n        totalFollowing\n        totalPosts\n        totalComments\n        totalMirrors\n        totalPublications\n        totalCollects\n      }\n      followModule {\n        ... on FeeFollowModuleSettings {\n          type\n          contractAddress\n          amount {\n            asset {\n              name\n              symbol\n              decimals\n              address\n            }\n            value\n          }\n          recipient\n        }\n        ... on ProfileFollowModuleSettings {\n          type\n        }\n        ... on RevertFollowModuleSettings {\n          type\n        }\n      }\n    }\n  }\n"]);return U=function(){return n},n}var L=(0,R.Ps)(U());function q(){var n=(0,E.Z)(["\n  query Profile($id: ProfileId!) {\n    profile(request: { profileId: $id }) {\n      id\n      name\n      bio\n      attributes {\n        displayType\n        traitType\n        key\n        value\n      }\n      followNftAddress\n      metadata\n      isDefault\n      picture {\n        ... on NftImage {\n          contractAddress\n          tokenId\n          uri\n          verified\n        }\n        ... on MediaSet {\n          original {\n            url\n            mimeType\n          }\n        }\n        __typename\n      }\n      handle\n      coverPicture {\n        ... on NftImage {\n          contractAddress\n          tokenId\n          uri\n          verified\n        }\n        ... on MediaSet {\n          original {\n            url\n            mimeType\n          }\n        }\n        __typename\n      }\n      ownedBy\n      dispatcher {\n        address\n        canUseRelay\n      }\n      stats {\n        totalFollowers\n        totalFollowing\n        totalPosts\n        totalComments\n        totalMirrors\n        totalPublications\n        totalCollects\n      }\n      followModule {\n        ... on FeeFollowModuleSettings {\n          type\n          amount {\n            asset {\n              symbol\n              name\n              decimals\n              address\n            }\n            value\n          }\n          recipient\n        }\n        ... on ProfileFollowModuleSettings {\n          type\n        }\n        ... on RevertFollowModuleSettings {\n          type\n        }\n      }\n    }\n  }\n"]);return q=function(){return n},n}var B=(0,R.Ps)(q());function z(){var n=(0,E.Z)(["\n  query Profiles($address: EthereumAddress!) {\n    profiles(request: { ownedBy: [$address] }) {\n      items {\n        id\n        name\n        bio\n        isDefault\n        attributes {\n          displayType\n          traitType\n          key\n          value\n        }\n        followNftAddress\n        metadata\n        handle\n        picture {\n          ... on NftImage {\n            contractAddress\n            tokenId\n            uri\n            chainId\n            verified\n          }\n          ... on MediaSet {\n            original {\n              url\n              mimeType\n            }\n          }\n        }\n        coverPicture {\n          ... on NftImage {\n            contractAddress\n            tokenId\n            uri\n            chainId\n            verified\n          }\n          ... on MediaSet {\n            original {\n              url\n              mimeType\n            }\n          }\n        }\n        ownedBy\n        dispatcher {\n          address\n          canUseRelay\n        }\n        stats {\n          totalFollowers\n          totalFollowing\n          totalPosts\n          totalComments\n          totalMirrors\n          totalPublications\n          totalCollects\n        }\n        followModule {\n          ... on FeeFollowModuleSettings {\n            type\n            contractAddress\n            amount {\n              asset {\n                name\n                symbol\n                decimals\n                address\n              }\n              value\n            }\n            recipient\n          }\n          ... on ProfileFollowModuleSettings {\n            type\n          }\n          ... on RevertFollowModuleSettings {\n            type\n          }\n        }\n      }\n    }\n  }\n"]);return z=function(){return n},n}var $=(0,R.Ps)(z()),D=t(7329),W=t(53672);function X(){var n,e,t,r,c,u,m,x,h,v=(0,W.Wd)("id",W.Nm),p=(h=(0,f.Z)(),Boolean(D.Z0[h])),g=(0,l.isAddress)(null!=v?v:""),j=(0,a.a)(g?L:B,{variables:g?{address:v}:{id:v},skip:!v||!p}),y=j.data,N=j.loading,w=j.error,b=(0,a.a)($,{variables:{address:v},skip:!g||!p||(null==y?void 0:y.profile)}).data,k=null!==(x=null==y?void 0:y.profile)&&void 0!==x?x:null==b?void 0:null===(n=b.profiles)||void 0===n?void 0:null===(e=n.items)||void 0===e?void 0:e[0];return N?(0,s.jsx)(d.Z,{children:(0,s.jsx)(o.s,{})}):w?(0,s.jsxs)(s.Fragment,{children:["Error! ",w.message]}):(0,s.jsx)(d.Z,{children:(0,s.jsx)("div",{className:"my-12 flex flex-col gap-8 divide-y",children:k?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex w-full flex-wrap items-start md:flex-nowrap",children:[(0,s.jsx)("div",{className:"mb-4 w-full md:mr-8 md:w-auto",children:(0,s.jsx)("div",{className:"mx-auto h-60 w-60 rounded bg-blue-800",children:(null==k?void 0:null===(t=k.picture)||void 0===t?void 0:null===(r=t.original)||void 0===r?void 0:r.url)&&(0,s.jsx)(i.Z,{src:null==k?void 0:null===(c=k.picture)||void 0===c?void 0:c.original.url,alt:k.handle,className:"h-full w-full rounded object-cover"})})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"text-center md:text-left",children:[(0,s.jsx)("h1",{className:"mb-1 text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight",children:null==k?void 0:k.name}),(0,s.jsx)("h2",{className:"mb-2 text-xl font-bold text-emerald-500 sm:text-2xl sm:tracking-tight",children:null==k?void 0:k.handle}),(0,s.jsx)("h2",{className:"mb-2 text-xl font-bold text-black sm:text-2xl sm:tracking-tight",children:null==k?void 0:k.ownedBy}),(0,s.jsxs)("div",{className:"mb-4 flex flex-wrap justify-center gap-x-2 text-sm text-gray-600 sm:text-base md:justify-start",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-medium text-gray-900",children:null==k?void 0:null===(u=k.stats)||void 0===u?void 0:u.totalFollowers})," ","Followers"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-medium text-gray-900",children:null==k?void 0:null===(m=k.stats)||void 0===m?void 0:m.totalFollowing})," ","Following"]})]}),(0,s.jsx)("p",{className:"mb-4",children:k.bio})]})})]}),(0,s.jsx)(O,{address:k.ownedBy})]}):g?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex w-full flex-wrap items-start md:flex-nowrap",children:[(0,s.jsx)("div",{className:"mb-4 w-full md:mr-8 md:w-auto",children:(0,s.jsx)("div",{className:"relative mx-auto h-60 w-60 rounded bg-emerald-900"})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("div",{className:"text-center md:text-left",children:[(0,s.jsx)("h2",{className:"mb-2 text-xl font-bold text-black sm:text-2xl sm:tracking-tight",children:(0,l.getAddress)(v)}),(0,s.jsxs)("div",{className:"mb-4 flex flex-wrap justify-center gap-x-2 text-sm text-gray-600 sm:text-base md:justify-start",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-medium text-gray-900",children:"0"})," ","Followers"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"font-medium text-gray-900",children:"0"})," ","Following"]})]})]})})]}),(0,s.jsx)(O,{address:v})]}):(0,s.jsx)("div",{children:"Invalid address"})})})}}},function(n){n.O(0,[186,13,493,774,888,179],function(){return n(n.s=73471)}),_N_E=n.O()}]);