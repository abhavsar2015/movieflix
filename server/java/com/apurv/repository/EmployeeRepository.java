package com.apurv.repository;

import java.util.List;

import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;

public interface EmployeeRepository {
	public List<Movie> empAll();
	   public Movie getOne(String id);
	   public String addOne(Movie movie) throws Exception;
	   public String addLogin(Login login) throws Exception;
	   public List<Login> getLogin(String login) ;
	   public String updateMovie(String movieId,Movie movie) throws Exception; 
}
