package com.apurv.services;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	public Movie getOne(String id) {
		// TODO Auto-generated method stub
		return repository.getOne(id);
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
