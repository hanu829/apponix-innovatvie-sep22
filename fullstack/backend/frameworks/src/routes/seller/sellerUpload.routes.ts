import { Router } from "../../../config/commom.config";
import { userReg_Post } from "../../controller";
import { sellerUpload_Post } from "../../controller/seller/sellerUpload.Ctrl";


Router.route('/seller-upload-product')
.post(sellerUpload_Post)
module.exports=Router