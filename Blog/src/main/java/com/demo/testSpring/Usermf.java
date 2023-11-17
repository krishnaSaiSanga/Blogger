package com.demo.testSpring;

import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Usermf extends ListCrudRepository<User, Integer>{
	boolean existsByName(String Name);
	Optional<User> findByName(String name);

}
