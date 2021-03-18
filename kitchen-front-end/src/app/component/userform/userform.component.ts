import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/interface/ordermodel';
import { UserModel } from 'src/app/interface/usermodel';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
user:string="";
users:UserModel[]=[];
orders:OrderModel[]=[];
  constructor(private service:UserService ) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      users=>this.users=users,
      err=>alert("unable to fetch")
    );
  }
  //Gets the orders of the selected user
  search(){
    this.service.getOrders(this.user).subscribe(
      orders=>this.orders=orders,
      err=>console.log(err),
      ()=>alert("Report Generated")
    );
  }

}
