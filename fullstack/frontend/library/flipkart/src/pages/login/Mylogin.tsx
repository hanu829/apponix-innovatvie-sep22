import { Container, Grid } from "@mui/material"
import { MyAtocomplete, Myform } from "../../components"

export const MyLogin:React.FC<{}>=()=>{
    return <>
    <Container maxWidth="xl">
<Grid>
    navbar
</Grid>
<Grid> autocomple
<MyAtocomplete/>

</Grid>
<Grid>
  my form
    <Myform/>
</Grid>
    </Container>
    </>
}