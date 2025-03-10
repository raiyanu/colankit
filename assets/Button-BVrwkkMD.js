import{j as m}from"./jsx-runtime-D_zvdyIk.js";const _="_btn_r4s2n_1",d="_rounded_r4s2n_15",u="_icon_r4s2n_18",p="_primary_r4s2n_24",y="_secondary_r4s2n_31",b="_outline_r4s2n_38",v="_link_r4s2n_47",h="_xs_r4s2n_57",x="_sm_r4s2n_61",g="_md_r4s2n_65",f="_lg_r4s2n_69",B="_disabled_r4s2n_89",z="_btnGroup_r4s2n_95",$="_vertical_r4s2n_104",q="_horizontal_r4s2n_107",n={btn:_,rounded:d,icon:u,primary:p,secondary:y,outline:b,link:v,xs:h,sm:x,md:g,lg:f,disabled:B,btnGroup:z,vertical:$,horizontal:q},T=({children:a,variant:r,disabled:o,size:s,borderRadius:t,rounded:e,...i})=>{const l=`${n.btn} ${n[r??"primary"]} ${n[s??""]} ${r??""} ${n[s??""]} ${o?n.disabled:""} ${e?n.rounded:""}`,c={borderRadius:t&&e?t:e?"4px":"","--border-radius":t&&e?t:e?"4px":""};return m.jsx("button",{...i,className:l,style:c,children:a})};T.__docgenInfo={description:`@param children Inner content of the button
@param variant
@param disabled
@param size
@param rest
@returns
@description
Button component with 4 variants and 4 sizes
@example
<Button variant="primary" size="lg">
	Hey there! Inner content goes here
</Button>
<Button variant="outline" size="lg">
	Hey there! Inner content goes here
</Button>
@returns Button component`,methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "outline" | "link"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"link"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""}}};export{T as B};
