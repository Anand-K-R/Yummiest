package com.novo.Yummiest.repository;

import com.novo.Yummiest.model.Driver;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DriverRepository extends MongoRepository<Driver, String> {

}
