package com.apurv.movie;

import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import org.springframework.http.ResponseEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.services.EmployeeService;

@RestController
public class HomeController {
	
	@Autowired
	EmployeeService empSer;

	@RequestMapping(value = "/employee/", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Movie> listAllUsers() {
		//logger.info("Welcome home! The client locale is {}.", locale);
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
		Movie users = empSer.getOne("06fda72f-6333-4e9c-a7e2-c6c269498e1b");
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
          return new ResponseEntity<Movie>(users, HttpStatus.OK);
		}
	
	//---
	@RequestMapping(value = "/employee/user", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Movie>> listAllUsers1() {
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
		List<Movie> users = empSer.empAll();
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
        return new ResponseEntity<List<Movie>>(users, HttpStatus.OK);
	}
	
	//----------------
	 @RequestMapping(value = "/employee/", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
	    public ResponseEntity<List<Movie>> createUser(@RequestBody List<Movie> movie,    UriComponentsBuilder ucBuilder) {
		 for(Movie mv:movie)
		 {
	        empSer.addOne(mv);
		 }
	        return new ResponseEntity<List<Movie>>(movie, HttpStatus.OK);
	    }
	 
	 //---------------------Registration input
	 @RequestMapping(value = "/employee/login", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
	    public ResponseEntity<Login> createLogin(@RequestBody Login login,    UriComponentsBuilder ucBuilder) {
	       empSer.addLogin(login);
		 return new ResponseEntity<Login>(login, HttpStatus.OK);
	    }
	 
	 //------login get
	 @RequestMapping(value = "/employee/{userName}", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	    public ResponseEntity<List<Login>> getLogin(@PathVariable("userName") String userName,    UriComponentsBuilder ucBuilder) {
	        System.out.println(userName);
	        List<Login> login= empSer.getLogin(userName);
		    return new ResponseEntity<List<Login>>(login, HttpStatus.OK);
	    }
	 
	 //========update
	 @RequestMapping(value = "/movie/{id}", method = RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	 public ResponseEntity<String> updateMovie(@PathVariable("id") String movieId,@RequestBody Movie movie  ,  UriComponentsBuilder ucBuilder) throws Exception {
	     System.out.println(movieId);
	     String answer= empSer.updateMovie(movieId, movie);
		 return new ResponseEntity<String>(answer, HttpStatus.OK);
	    }
}
