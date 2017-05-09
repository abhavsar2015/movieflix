package com.apurv.repository;

import java.util.List;

import com.apurv.entity.Average;
import com.apurv.entity.Comment;
import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.entity.Rate;

public interface EmployeeRepository {
	public List<Movie> empAll();
	   public Movie getOne(String id);
	   public String addOne(Movie movie) throws Exception;
	   public String addLogin(Login login) throws Exception;
	   public String addRate(Rate rate) throws Exception;
	   public String addComment(Comment comment) throws Exception;
	   public List<Login> getLogin(String login) ;
	   public String updateMovie(String movieId,Movie movie) throws Exception; 
	   public List<Average> getAverage(List<String> titles) ;
	   public String deleteMovie(String id) ;
	   public List<Comment> getAllComments(String title) ;
	   
}
