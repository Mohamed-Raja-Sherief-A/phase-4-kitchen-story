package com.kitchen.model;
import org.springframework.web.multipart.MultipartFile;

public class ProductDTO {
 private Product product;
 private MultipartFile file;
 public ProductDTO() {
	// TODO Auto-generated constructor stub
}
public ProductDTO(Product product, MultipartFile file) {
	this.product = product;
	this.file = file;
}
public Product getProduct() {
	return product;
}
public void setProduct(Product product) {
	this.product = product;
}
public MultipartFile getFile() {
	return file;
}
public void setFile(MultipartFile file) {
	this.file = file;
}
 
}
