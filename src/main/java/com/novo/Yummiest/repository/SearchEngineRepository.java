package com.novo.Yummiest.repository;

import com.novo.Yummiest.model.SearchEngine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SearchEngineRepository extends MongoRepository<SearchEngine, String> {

}
