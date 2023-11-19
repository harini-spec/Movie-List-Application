package io.MovieListApp.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.MovieListApp.model.MovieData;

@Component
public class RepositoryImpl implements SearchRepository{
	
	@Autowired
	private MovieRepository movieRepository;

	@Override
	public List<MovieData> findByName(String name) {
		
		List<MovieData> movies = movieRepository.findAll();
		List<MovieData> foundMovies = new ArrayList<>();
		for(int i=0;i<movies.size();i++) {
			if(name.toLowerCase().equals(movies.get(i).getName().toLowerCase())) {
				foundMovies.add(movies.get(i));
			}
		}
		return foundMovies;
	}

}
