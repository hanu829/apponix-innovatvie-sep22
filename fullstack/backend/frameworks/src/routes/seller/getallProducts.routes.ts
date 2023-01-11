import { Router } from "../../../config/commom.config";
import { userReg_Post } from "../../controller";
import { getallProducts_Get } from "../../controller/seller/getallProducts.Ctrl";


Router.route('/get-all-products')
.get(getallProducts_Get)
module.exports=Router