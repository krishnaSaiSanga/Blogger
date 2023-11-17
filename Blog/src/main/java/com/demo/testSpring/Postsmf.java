package com.demo.testSpring;

import java.util.Optional;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface Postsmf extends ListCrudRepository<Posts, Integer>{
Optional<Posts> findByHeadding(String headding);
}
