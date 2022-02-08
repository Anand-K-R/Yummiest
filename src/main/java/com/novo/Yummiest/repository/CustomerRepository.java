package com.novo.Yummiest.repository;

import com.novo.Yummiest.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository()
public interface CustomerRepository extends MongoRepository<Customer, String> {

}
