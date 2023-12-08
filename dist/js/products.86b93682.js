"use strict";(self["webpackChunkhomework_base_2"]=self["webpackChunkhomework_base_2"]||[]).push([[893],{7318:function(e,t,s){s.r(t),s.d(t,{default:function(){return G}});var r=s(3396),l=s(7139);const i={class:"product"},o={class:"product__container container"},a={class:"product__title title"},c={class:"product__body"};function n(e,t,s,n,d,u){const p=(0,r.up)("products-filter"),m=(0,r.up)("products-list");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",o,[(0,r._)("h2",a,(0,l.zw)(e.$t("titles.mainTitle")),1),(0,r._)("div",c,[(0,r.Wm)(p),(0,r.Wm)(m)])])])}const d={class:"products__wrapper"},u={key:0,class:"loading"},p={key:1},m={class:"product__list"},h={class:"item-product__info"},_={class:"item-product__name"},g={class:"item-product__price"},w={class:"actions item-product__actions"},k={class:"item-product__image"},f=["src","alt"],v={key:1,class:"err-msg"};function b(e,t,s,i,o,a){const c=(0,r.up)("v-progress-circular"),n=(0,r.up)("v-btn"),b=(0,r.up)("font-awesome-icon"),F=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",d,[e.isLoading?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(c,{indeterminate:"",color:"purple"})])):e.hasError?((0,r.wg)(),(0,r.iD)("div",p,"Error")):((0,r.wg)(),(0,r.iD)(r.HY,{key:2},[(0,r._)("ul",m,[e.getFilteredList.length?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(e.getFilteredList,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id,class:"product__item item-product"},[(0,r._)("div",h,[(0,r._)("h4",_,(0,l.zw)(a.productTitle(t)),1),(0,r._)("strong",g,(0,l.zw)(t.price)+"₴",1),(0,r._)("div",w,[e.userPermissions.update?((0,r.wg)(),(0,r.j4)(n,{key:0,elevation:"2",onClick:e=>a.onEdit(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("buttonActions.buttonEdit")),1)])),_:2},1032,["onClick"])):(0,r.kq)("",!0),e.userPermissions.delete?((0,r.wg)(),(0,r.j4)(n,{key:1,elevation:"2",onClick:s=>e.deleteItem(t.id)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("buttonActions.buttonDelete")),1)])),_:2},1032,["onClick"])):(0,r.kq)("",!0)])]),(0,r._)("div",k,[(0,r._)("img",{src:t.image,alt:a.productTitle(t)},null,8,f),e.getUser?((0,r.wg)(),(0,r.j4)(b,{key:0,icon:["fas","cart-shopping"],class:"item-product__icon",onClick:e=>a.addItemToTheCart(t)},null,8,["onClick"])):(0,r.kq)("",!0)])])))),128)):(0,r.kq)("",!0)]),e.userPermissions.update?((0,r.wg)(),(0,r.j4)(F,{key:0,to:{name:"product_editor"}},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{class:"button-add",block:"",elevation:"2"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("buttonActions.buttonAdd")),1)])),_:1})])),_:1})):(0,r.kq)("",!0),!e.getFilteredList.length&&e.getItemsList?((0,r.wg)(),(0,r.iD)("strong",v,(0,l.zw)(e.$t("errors.noProductsError")),1)):(0,r.kq)("",!0)],64))])}s(560);var F=s(65),L={name:"ProductsList",computed:{...(0,F.Se)("products",["getItemsList","getFilteredList","hasError","isLoading"]),...(0,F.Se)("auth",["getUser"]),...(0,F.Se)("users",["userPermissions"]),productTitle(){return e=>"ua"===this.$i18n.locale?e.name.ua:e.name.en}},created(){console.log(this.getUser)},methods:{...(0,F.nv)("cart",["addItem"]),...(0,F.nv)("products",["deleteItem","updateItem"]),onEdit(e){this.$router.push({name:"product_editor",params:{productId:e}})},addItemToTheCart(e){this.getUser.cart.push(e)}}},y=s(89);const D=(0,y.Z)(L,[["render",b]]);var U=D,C=s(9242);const T={class:"filters-container"},z={class:"filter"},P={class:"filter-list"},$={class:"small-title"},x={class:"filter-label"},I=["onUpdate:modelValue","value"],V={class:"search"},q={class:"filter"},E={key:0,class:"filter-list"},S={class:"small-title"},W={class:"filter-label"},j=["onUpdate:modelValue","value"];function A(e,t,s,i,o,a){const c=(0,r.up)("v-text-field"),n=(0,r.up)("v-btn");return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",z,[(0,r._)("ul",P,[(0,r._)("h5",$,(0,l.zw)(e.$t("filters.seller")),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getSellersList,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"filter-item"},[(0,r._)("label",x,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":e=>o.filter.seller=e,value:e},null,8,I),[[C.e8,o.filter.seller]]),(0,r.Uk)(" "+(0,l.zw)(e),1)])])))),128))])]),(0,r._)("div",V,[(0,r.Wm)(c,{class:"search-input",modelValue:o.searchFilterText,"onUpdate:modelValue":t[0]||(t[0]=e=>o.searchFilterText=e),placeholder:e.$t("filters.searchPlaceholder"),"hide-details":"auto"},null,8,["modelValue","placeholder"])]),(0,r._)("div",q,[a.searchFilter.length?((0,r.wg)(),(0,r.iD)("ul",E,[(0,r._)("h5",S,(0,l.zw)(e.$t("filters.brand")),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.searchFilter,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:"filter-item"},[(0,r._)("label",W,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":e=>o.filter.brand=e,value:e},null,8,j),[[C.e8,o.filter.brand]]),(0,r.Uk)(" "+(0,l.zw)(e),1)])])))),128))])):(0,r.kq)("",!0)]),(0,r.Wm)(n,{class:"main-button",elevation:"2",onClick:a.dropFilters},{default:(0,r.w5)((()=>[(0,r.Uk)((0,l.zw)(e.$t("filters.dropFilters")),1)])),_:1},8,["onClick"])])}var H={name:"ProductsFilter",data(){return{searchFilterText:null,filter:{brand:[],seller:[]}}},computed:{...(0,F.Se)("products",["getBrandsList","getSellersList"]),searchFilter(){if(this.searchFilterText){const e=this.searchFilterText.toLowerCase();return this.getBrandsList.filter((t=>t&&t.toLowerCase().includes(e)))}return this.getBrandsList}},watch:{filter:{handler(e){this.updateFilter(e)},deep:!0}},methods:{...(0,F.nv)("products",["updateFilter"]),dropFilters(){this.filter.brand=[],this.filter.seller=[],this.searchFilterText=null}}};const Y=(0,y.Z)(H,[["render",A]]);var B=Y,K={components:{ProductsList:U,ProductsFilter:B},name:"ProductsView",computed:{},created(){this.loadList()},methods:{...(0,F.nv)("products",["loadList"])}};const Z=(0,y.Z)(K,[["render",n]]);var G=Z}}]);
//# sourceMappingURL=products.86b93682.js.map