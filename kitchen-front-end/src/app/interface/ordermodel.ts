import { ProductModel } from "./productmodel";
import { UserModel } from "./usermodel";
//Order Model
export interface OrderModel{
    oid:number;
    user:UserModel;
    product:ProductModel;
}