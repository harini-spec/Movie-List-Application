package io.MovieListApp.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import io.MovieListApp.model.MovieData;

@Repository
public interface SearchRepository {
	
	List<MovieData> findByName(String name);

}
