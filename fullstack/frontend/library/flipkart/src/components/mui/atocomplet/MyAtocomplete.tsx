import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface IMyAtocomplete{}
export const MyAtocomplete:React.FC<IMyAtocomplete>=(props)=>{
    var [movies,setMovies]=useState()
    var handleOnchange=(e:any,val:any)=>{
        console.log(val)
        setMovies(val.label)
    }
    return <>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={mydata}
      sx={{ width: 300 }}
      onChange={handleOnchange}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    {movies}
    
    </>
}
var mydata=[
    {label:'kantara',value:'1'},
    {label:'fast and furiopus',value:'2'},
    {label:'kgf',value:'3'},
    {label:'toilet',value:'4'}
]