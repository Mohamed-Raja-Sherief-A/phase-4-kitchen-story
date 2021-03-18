package com.kitchen.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
//Product Table Model
@Entity
@Table(name = "product")
public class Product {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int pid;
private String name;
private double amount;
@Column(length = 1000)
private byte[] img;
private String status;

@OneToMany(cascade = CascadeType.ALL,mappedBy = "product")
@JsonIgnore
List<Order> orders;
public Product() {

}



public Product(int pid, String name, double amount, String status, List<Order> orders) {
	this.pid = pid;
	this.name = name;
	this.amount = amount;
	this.status = status;
	this.orders = orders;
}



public int getPid() {
	return pid;
}
public void setPid(int pid) {
	this.pid = pid;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public double getAmount() {
	return amount;
}
public void setAmount(double amount) {
	this.amount = amount;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public List<Order> getOrders() {
	return orders;
}
public void setOrders(List<Order> orders) {
	this.orders = orders;
}



public byte[] getImg() {
	return img;
}



public void setImg(byte[] img) {
	this.img = img;
}


	
}
