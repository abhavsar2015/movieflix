package com.apurv.movie;

import java.security.Principal;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.apurv.configuration.CsrfHeaderFilter;
import com.apurv.entity.Average;
import com.apurv.entity.Comment;
import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.entity.Rate;
import com.apurv.services.EmployeeService;
@SpringBootApplication
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
	//----------------
		 @RequestMapping(value = "/employee/addMovie", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
		    public ResponseEntity<Movie> createUser(@RequestBody Movie movie,    UriComponentsBuilder ucBuilder) {
			    empSer.addOne(movie);
			    return new ResponseEntity<Movie>(movie, HttpStatus.OK);
		    }
		 
	 //---------------------Registration input
	 @RequestMapping(value = "/employee/registration", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
	    public ResponseEntity<Login> createLogin(@RequestBody Login login,    UriComponentsBuilder ucBuilder) {
	       empSer.addLogin(login);
		 return new ResponseEntity<Login>(login, HttpStatus.OK);
	    }
	 
	 //------login get
	
	 @RequestMapping(value = "/login", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	 @ResponseBody
	 public ResponseEntity<List<Login>> getLogin(@RequestBody Login login ) {
	        //System.out.println(userName);
	        //String userAgent = request.getHeader("user-agent");
	        System.out.println("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"+login.getUserName());
	        List<Login> login1= empSer.getLogin(login.getUserName());
	        System.out.println(login1);
		    return new ResponseEntity<List<Login>>(login1, HttpStatus.OK);
	    }
	//-------Average
	 @RequestMapping(value = "/getAverage", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	 @ResponseBody
	 public ResponseEntity<List<Average>> getAverage(@RequestBody List<String> titles) {
	        System.out.println("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiAverage"+titles);
	        List<Average> average= empSer.getAverage(titles);
	        System.out.println(average);
		    return new ResponseEntity<List<Average>>(average, HttpStatus.OK);
	    }
	
	 //========update
	 @RequestMapping(value = "/movie/{id}", method = RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	 public ResponseEntity<String> updateMovie(@PathVariable("id") String movieId,@RequestBody Movie movie  ,  UriComponentsBuilder ucBuilder) throws Exception {
	     System.out.println(movieId);
	     String answer= empSer.updateMovie(movieId, movie);
		 return new ResponseEntity<String>(answer, HttpStatus.OK);
	    }
	//========getAllComments
		 @RequestMapping(value = "/getAllComments/{id}", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
		 public ResponseEntity<List<Comment>> getAllComments(@PathVariable("id") String title) throws Exception {
		     System.out.println(title);
		     List<Comment> answer= empSer.getAllComments(title);
			 return new ResponseEntity<List<Comment>>(answer, HttpStatus.OK);
		    }
	//========delete
		 @RequestMapping(value = "/deleteMovie/{id}", method = RequestMethod.DELETE,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
		 public ResponseEntity<String> deleteMovie(@PathVariable("id") String movieId) throws Exception {
		     System.out.println(movieId);
		     String answer= empSer.deleteMovie(movieId);
			 return new ResponseEntity<String>(answer, HttpStatus.OK);
		    }
		
	//========update
		 @RequestMapping(value = "/employee/addRate", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
		 public ResponseEntity<String> rateMovie(@RequestBody Rate rate  ) throws Exception {
		     System.out.println(rate.getTitle());
		     String answer= empSer.addRate(rate);
			 return new ResponseEntity<String>(answer, HttpStatus.OK);
		    }
		//========update
		 @RequestMapping(value = "/employee/addComment", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
		 public ResponseEntity<String> rateMovie(@RequestBody Comment commnet1) throws Exception {
		     //System.out.println(commnet1.getTitle());
			 String answer= empSer.addComment(commnet1);
			 return new ResponseEntity<String>(answer, HttpStatus.OK);
		    }
	
	 //================
	 @Configuration
	  @Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
	  protected static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	      http
	        .httpBasic()
	      .and()
	        .authorizeRequests()
	          .antMatchers("/index.html", "/home.html", "/login.html","/Search.html", "/").permitAll()
	          .anyRequest().authenticated().and()
	          .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class).csrf().csrfTokenRepository(csrfTokenRepository());;
	    }
	    private CsrfTokenRepository csrfTokenRepository() {
	    	  HttpSessionCsrfTokenRepository repository = new HttpSessionCsrfTokenRepository();
	    	  repository.setHeaderName("X-XSRF-TOKEN");
	    	  return repository;
	    	}
	  }
}
