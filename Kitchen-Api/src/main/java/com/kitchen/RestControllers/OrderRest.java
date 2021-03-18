package com.kitchen.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kitchen.model.Order;
import com.kitchen.service.CentralService;
//Rest Orders Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrderRest {

	@Autowired
	private CentralService service;
	@GetMapping("/orders")
	public List<Order> getOrders(){
		return service.getOrders();
	}
	@GetMapping("/orders/{id}")
	public Order getOrder(@PathVariable int id) {
		return service.getOrder(id);
	}
	@PostMapping("/orders")
	public void addOrder(@RequestBody Order order) {
		service.saveOrder(order);
	}
	@PutMapping("/orders")
	public void updateOrder(@RequestBody Order order) {
		service.saveOrder(order);
	}
	@DeleteMapping("/orders/{id}")
	public void deleteOrder(@PathVariable int id) {
		service.deleteOrder(id);
	}
}
