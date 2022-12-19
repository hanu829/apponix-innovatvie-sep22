var express=require('express')
var app=express()

app.get('/flight',(req:any,res:any)=>{
    res.send('enjoy the party')
})
app.post('/user',(req:any,res:any)=>{
    res.send('apponix student post')
})
app.delete('/user',(req:any,res:any)=>{
    res.send('apponix student delete')
})
app.put('/user',(req:any,res:any)=>{
    res.send('apponix student put or update')
})
app.get('/user',(req:any,res:any)=>{
    res.send('apponix student get')
})
app.get('/triler',(req:any,res:any)=>{
    var triler='<iframe width="560" height="315" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    res.send(triler)
})




app.listen(8003,()=>{
    console.log('server started on portt no 8003')
})