function customRender(reactElement,Container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    Container.appendChild(domElement)
    */

   // Another way

   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for (const prop in reactElement.props) {
    if(prop==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])    
   }
   Container.appendChild(domElement)

   
     
}

const reactElement={
    type:'a',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

/*
Evaluated Expression: jb hum javascript variable eject krta hn html ma to 
curly bracket ma hota hn.
const reactElement=React.CreateElement(
        tag name 'a',
        setAttribute {},
        context,
        javascript variable
)
*/        

