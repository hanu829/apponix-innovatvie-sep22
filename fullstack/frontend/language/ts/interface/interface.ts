interface Imarrage3{
    gift?:number|boolean,
    gift2?:string|number|boolean,
}
function marrage3({prop:Imarrage3}){
console.log(Imarrage3)
}
marrage3({gift:'watch'})

var glass:Iglass={
frame:'squre',
shape:'squre',
color:'red',

}
interface  Iglass{
    frame:string,
    shape:string,
    color:string,
spec?:string
}
console.log(glass)
glass.spec