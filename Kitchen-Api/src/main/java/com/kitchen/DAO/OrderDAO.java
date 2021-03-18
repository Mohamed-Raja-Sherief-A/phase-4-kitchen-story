package com.kitchen.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kitchen.model.Order;

//Order Repository
@Repository
public interface OrderDAO extends JpaRepository<Order, Integer> {

}
