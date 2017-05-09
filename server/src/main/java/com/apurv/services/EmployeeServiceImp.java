package com.apurv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.apurv.entity.Average;
import com.apurv.entity.Comment;
import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.entity.Rate;
import com.apurv.repository.EmployeeRepository;

@Service("empSer")
public class EmployeeServiceImp implements EmployeeService {
   Movie emp;
   
@Autowired
EmployeeRepository repository;
	@Override
	public List<Movie> empAll() {
       
		return repository.empAll();
	}
	@Override
	public List<Login> getLogin(String id) {
		// TODO Auto-generated method stub
		
	    return repository.getLogin(id); 
		//Login login= em.find(Login.class, userNam
		//return login;
	}
	@Override
	public List<Comment> getAllComments(String title) {
		// TODO Auto-generated method stub
		
	    return repository.getAllComments(title); 
		//Login login= em.find(Login.class, userNam
		//return login;
	}
	@Override
	public String deleteMovie(String movieId) {
		// TODO Auto-generated method stub
		
	    return repository.deleteMovie(movieId); 
		
	}
	
	@Override
	public Movie getOne(String id) {
		// TODO Auto-generated method stub
		return repository.getOne(id);
	}

	@Override
	public List<Average> getAverage(List<String> titles) {
		// TODO Auto-generated method stub
		return repository.getAverage(titles);
	}
	
	@Override
	public String addRate(Rate rate)  
	{
		try {
			return repository.addRate(rate);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	@Override   
	public String addComment(Comment comment) 
	{
		try {
			return repository.addComment(comment);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public String addLogin(final Login login) {
		// TODO Auto-generated method stub
		try {
			return repository.addLogin(login);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public String updateMovie(String movieId,Movie movie) throws Exception
	{
		return repository.updateMovie(movieId,movie);
	}
	@Override
	public String addOne(final Movie movie)  {
		
		try {
		String h=repository.addOne(movie);
			return h;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}
