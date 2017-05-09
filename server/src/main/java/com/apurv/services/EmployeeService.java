package com.apurv.services;

import java.util.List;

import com.apurv.entity.Average;
import com.apurv.entity.Comment;
import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.entity.Rate;

public interface EmployeeService {
   public List<Movie> empAll();
   public Movie getOne(String id);
   public String addOne(final Movie movie);
   public String addLogin(Login login) ;
   public String addRate(Rate rate) ;
   public String addComment(Comment comment) ;
   public List<Login> getLogin(String login) ;
   public String updateMovie(String movieId,Movie movie) throws Exception; 
   public List<Average> getAverage(List<String> titles) ;
   public String deleteMovie(String id) ;
   public List<Comment> getAllComments(String title) ;
}
