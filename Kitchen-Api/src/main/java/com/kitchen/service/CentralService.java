package com.kitchen.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kitchen.DAO.OrderDAO;
import com.kitchen.DAO.ProductDAO;
import com.kitchen.DAO.UserDAO;
import com.kitchen.model.Order;
import com.kitchen.model.Product;
import com.kitchen.model.UserCredentials;
//Central Service
@Service
public class CentralService {
  
	@Autowired
	private UserDAO uDAO;
	@Autowired
	private OrderDAO oDAO;
	@Autowired
	private ProductDAO pDAO;
	//User Service
	@Transactional
	public List<UserCredentials> getUsers(){
		return uDAO.findAll();
	}
	@Transactional
	public UserCredentials getUser(String username) {	
		if( uDAO.findById(username).isPresent())
		{
			return uDAO.findById(username).get();
		}
		else
		{
			return null;
		}
	}
	@Transactional
	public void deleteUser(String username) {
		uDAO.deleteById(username);
	}
	@Transactional
	public void saveUser(UserCredentials user) {
		uDAO.save(user);
	}
	@Transactional
	public void updateUser(UserCredentials user) {
		uDAO.save(user);
	}
	@Transactional
	public UserCredentials check(String username,String password) {
		return uDAO.checkCredentials(username, password);
	}
	
	//Order Service
	@Transactional
	public List<Order> getOrders(){
		return oDAO.findAll();
	}
	@Transactional
	public Order getOrder(int id) {	
		return oDAO.findById(id).get();
	}
	@Transactional
	public void deleteOrder(int id) {
		oDAO.deleteById(id);
	}
	@Transactional
	public void saveOrder(Order order) {
		oDAO.save(order);
	}
	@Transactional
	public void updateOrder(Order order) {
		oDAO.save(order);
	}
	
	//Product Service
	@Transactional
	public List<Product> getProducts(){
		return pDAO.findAll();
	}
	@Transactional
	public Product getProducts(int id) {	
		return pDAO.findById(id).get();
	}
	@Transactional
	public void deleteProduct(int id) {
		pDAO.deleteById(id);
	}
	@Transactional
	public void saveProduct(Product product) {
		pDAO.save(product);
	}
	@Transactional
	public void updateProduct(Product product) {
		pDAO.save(product);
	}
	
}
