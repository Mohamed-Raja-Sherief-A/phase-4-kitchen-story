package com.kitchen.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

//Order Table Model
@Entity
@Table(name="ordertable")
public class Order {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int oid;
@ManyToOne(cascade = CascadeType.MERGE)
@JoinColumn(name = "username")
private UserCredentials user;
@ManyToOne(cascade = CascadeType.MERGE)
@JoinColumn(name = "pid")
private Product product;
public Order() {

}
public Order(int oid, UserCredentials user, Product product) {
	this.oid = oid;
	this.user = user;
	this.product = product;
}
public int getOid() {
	return oid;
}
public void setOid(int oid) {
	this.oid = oid;
}
public UserCredentials getUser() {
	return user;
}
public void setUser(UserCredentials user) {
	this.user = user;
}
public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}
@Override
public String toString() {
	return "Order [oid=" + oid + ", user=" + user + ", product=" + product + "]";
}

}
