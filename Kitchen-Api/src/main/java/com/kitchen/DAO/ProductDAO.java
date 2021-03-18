package com.kitchen.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kitchen.model.Product;

//Product Repository
@Repository
public interface ProductDAO extends JpaRepository<Product, Integer> {

}
