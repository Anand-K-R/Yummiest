package com.novo.Yummiest.repository;

import com.novo.Yummiest.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository()
public interface OrderRepository extends MongoRepository<Order, String> {

}
