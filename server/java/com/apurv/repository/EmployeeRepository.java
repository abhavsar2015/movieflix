package com.apurv.repository;

import java.util.List;

//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;

public interface EmployeeRepository {
	public List<Movie> empAll();
	   public Movie getOne(String id);
	   public String addOne(Movie movie) throws Exception;
}
