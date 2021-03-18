package com.kitchen.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
//User Table Model 
@Entity
@Table(name="usercredentials")
public class UserCredentials {
 
	@Id
	private String username;
	private String password;
	@OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Order> orders;
	public UserCredentials() {
		
	}
	public UserCredentials(String username, String password, List<Order> orders) {
		this.username = username;
		this.password = password;
		this.orders = orders;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	@Override
	public String toString() {
		return "UserCredentials [username=" + username + ", password=" + password + ", orders=" + orders + "]";
	}
	
	
	
}
