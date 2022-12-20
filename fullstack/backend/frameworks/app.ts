var express=require('express')
var app=express()
var cors=require('cors')
function middle(req:any,res:any,next:any){
console.log('im called adveded')
next()
}
app.use(middle)
app.use(cors())

app.get('/',(req:any,res:any)=>{
    res.send([{a:'apple',b:'boll'}])
})
app.get('/a',(req:any,res:any)=>{
    res.send([{a:'apple',b:'boll'}])
})

app.listen(8003,()=>{
    console.log('server started on portt no 8003')
})