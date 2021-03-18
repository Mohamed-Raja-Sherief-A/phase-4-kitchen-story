package com.kitchen.RestControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kitchen.model.CustomException;
import com.kitchen.model.ErrorResponse;
import com.kitchen.model.Order;
import com.kitchen.model.Product;
import com.kitchen.model.UserCredentials;
import com.kitchen.service.CentralService;
//User Rest Controller
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserRest {
 
	@Autowired
	private CentralService service;
	@GetMapping("/users")
	public List<UserCredentials> getALL()
	{
		return service.getUsers();
	}
	@GetMapping("/users/{username}")
	public UserCredentials getUser(@PathVariable String username)
	{
		return service.getUser(username);
	}
	@PostMapping("/users")
	public void addUser(@RequestBody UserCredentials user) {
		UserCredentials temp=service.getUser(user.getUsername());
		if(temp!=null) {throw new CustomException("User Already exists");}
		service.saveUser(user);
		
	}
	@PutMapping("/users")
	public void updateUser(@RequestBody UserCredentials user) {
		service.updateUser(user);
		
	}
	@DeleteMapping("/users/{username}")
	public void deleteUser(@PathVariable String username) {
		service.deleteUser(username);
	}
	@GetMapping("/users/{username}/{password}")
	public UserCredentials check(@PathVariable String username,@PathVariable String password) {
		UserCredentials user=service.check(username, password);
		return user;
	}
	@GetMapping("/users/{username}/product")
	public List<Order> getProducts(@PathVariable String username)
	{
		UserCredentials user=service.getUser(username);
		return user.getOrders();
	}
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleException(CustomException exc){
		ErrorResponse error=new ErrorResponse();
		error.setStatus(HttpStatus.BAD_REQUEST.value());
		error.setMessage(exc.getMessage());
		error.setTimestamp(System.currentTimeMillis());
		return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
		
	}
}
