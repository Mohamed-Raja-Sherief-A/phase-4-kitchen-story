import { Productmodel } from "./productmodel";
import { Usermodel } from "./usermodel";

export interface Ordermodel {
    oid:number;
    user:Usermodel;
    product:Productmodel;
}
