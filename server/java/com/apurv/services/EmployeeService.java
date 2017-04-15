package com.apurv.services;

import java.util.List;

//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;

public interface EmployeeService {
   public List<Movie> empAll();
   public Movie getOne(String id);
   public String addOne(final Movie movie);
   
}
