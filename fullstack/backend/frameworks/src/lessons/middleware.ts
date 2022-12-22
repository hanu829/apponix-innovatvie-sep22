function middle(req:any,res:any,next:any){
    console.log('im called adveded')
    next()
    }
    //calling
//app.use(middle)
    ///middel ware we give in in curd methods