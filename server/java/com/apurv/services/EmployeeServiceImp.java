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

import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
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
	public Movie getOne(String id) {
		// TODO Auto-generated method stub
		return repository.getOne(id);
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
