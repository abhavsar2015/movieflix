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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.services.EmployeeService;



/**
 * Handles requests for the application home page.
 */
@RestController
public class HomeController {
	
	//private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired
	EmployeeService empSer;
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/employee/", method = RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Movie> listAllUsers() {
		//logger.info("Welcome home! The client locale is {}.", locale);
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
		Movie users = empSer.getOne("06fda72f-6333-4e9c-a7e2-c6c269498e1b");
		System.out.println("hiiiiiiiiiiiiiiiiiiiiii");
       // if(users.isEmpty()){
        //    return new ResponseEntity<Movie>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
       // }
        return new ResponseEntity<Movie>(users, HttpStatus.OK);
		
		
	}
	//----------------
	 @RequestMapping(value = "/employee/", method = RequestMethod.POST,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
	    public ResponseEntity<List<Movie>> createUser(@RequestBody List<Movie> movie,    UriComponentsBuilder ucBuilder) {
	       // System.out.println("Creating User " + movie.getTitle());
	 
	       // if (empSer.isUserExist(user)) {
	        //    System.out.println("A User with name " + user.getUsername() + " already exist");
	        //    return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	      //  }
		 for(Movie mv:movie)
		 {
	        empSer.addOne(mv);
		 }
	        //HttpHeaders headers = new HttpHeaders();
	       // headers.setLocation(ucBuilder.path("/employee/{id}").buildAndExpand(movie.getMovieId()).toUri());
	        return new ResponseEntity<List<Movie>>(movie, HttpStatus.OK);
	    }
}
