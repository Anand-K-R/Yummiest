package com.novo.Yummiest.service;

import com.novo.Yummiest.model.Dish;
import com.novo.Yummiest.model.RestaurantInfo;
import java.util.List;

public interface RestaurantService {

  int addDish(String id, Dish dish);

  int removeDish(String id, Dish dish);

  List<Dish> getAllDishes(String id);

  RestaurantInfo getInformation(String id);

  int updateInfo(String id, RestaurantInfo info);
}
