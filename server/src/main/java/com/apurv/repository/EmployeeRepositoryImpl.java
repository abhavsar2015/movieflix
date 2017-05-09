package com.apurv.repository;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import com.apurv.entity.Average;
import com.apurv.entity.Comment;
import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
import com.apurv.entity.Rate;
import com.apurv.services.EmployeeService;

@Repository
public class EmployeeRepositoryImpl implements EmployeeRepository {
    Movie mov;
    @PersistenceContext(unitName="serv1")
    public EntityManager em;
    private TransactionTemplate transactionTemplate;
   
     
    
        public void setTransactionTemplate(TransactionTemplate transactionTemplate) {
    
            this.transactionTemplate = transactionTemplate;
    
        }

    
    public EntityManager getEm() {
		return em;
	}
	public void setEm(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public List<Movie> empAll() {
		TypedQuery<Movie> tq=em.createNamedQuery("Movie.findAll", Movie.class);
		return tq.getResultList();
	}
	
	@Override
	@Transactional
	public String addRate(Rate rate) {
		EntityManager em1 = getEm();
		//em1.getTransaction().begin();
   	   em1.persist(rate);
	   return rate.getRateId();
	}
	
	
	@Override
	@Transactional
	public String deleteMovie(String movieId) {
		Movie movie = em.find(Movie.class, movieId);
		EntityManager em1 = getEm();
		//em1.getTransaction().begin();
   	    em1.remove(movie);
	   return "true";
	}
	
	@Override
	@Transactional
	public String addComment( Comment comment) {
		EntityManager em1 = getEm();
		//em1.getTransaction().begin();
   	   em1.persist(comment);
	   return comment.getCommentId();
	}
	
    @Override
    @Transactional
    public String addLogin(final Login login) {
	   EntityManager em1 = getEm();
		//em1.getTransaction().begin();
   	   em1.persist(login);
	   return login.getLoginId();
	}
    
    @Override
    @Transactional
    public List<Average> getAverage(List<String> titles) {
	   EntityManager em1 = getEm();
	   String qlString = "SELECT AVG(r.rate) FROM Rate r WHERE r.title = :Title";
	   Query q = em.createQuery(qlString);
	   List<Average> avg=new LinkedList<Average>();
	   for(int i=0;i<titles.size();i++)
	   {
		   Average a1=new Average();
		   q.setParameter("Title", titles.get(i));
		   List<Object> result= q.getResultList();
		   System.out.println("hiiiiiiii"+result.get(0));
		   a1.setTitle(titles.get(i));
		   
		   if(result.equals(null))
		   {
		   a1.setAverage("0.0");
		   }
		   else if(result.get(0)==null)
		   {
			   a1.setAverage("0.0");
		   }
		   else
		   {
			   a1.setAverage(result.get(0).toString());
			   			   
		   }
		   avg.add(a1);
	      // a1.setTitle("");
	       //a1.setAverage("");
	   }
	   
   	   return avg;
	}
    @Override
    @Transactional
    public List<Comment> getAllComments(String title) {
	   EntityManager em1 = getEm();
	   String qlString = "SELECT r.comment,r.userName FROM Comment r WHERE r.title = :Title";
	  // Query q = em.createQuery(qlString);
	   List<Comment> avg=new LinkedList<Comment>();
	  
		  
		  // List<Object> result= q.getResultList();
		   //System.out.println(result);
		   TypedQuery<Object[]> typedQuery = em.createQuery( qlString , Object[].class);
		   typedQuery.setParameter("Title", title);
		   
		   List<Object[]> results = typedQuery.getResultList();
		   System.out.println(results);
		   for (Object[] result : results) {
			   Comment a1=new Comment();
			   a1.setTitle(title);
			   a1.setComment(result[0].toString());
			   a1.setUserName(result[1].toString());
			   avg.add(a1);
			  }
		   
		  
	      // a1.setTitle("");
	       //a1.setAverage("");
	   
	   
   	   return avg;
	}
	@Override
	public Movie getOne(String id) {
		// TODO Auto-generated method stub
		Movie movie= em.find(Movie.class, id);
		return movie;
	}
    
	@Override
	public List<Login> getLogin(String id) {
		// TODO Auto-generated method stub
		CriteriaQuery<Login> c = em.getCriteriaBuilder().createQuery(Login.class); 
	    Root<Login> from = c.from(Login.class); 

	    c.select(from);
	    c.where(em.getCriteriaBuilder().equal(from.get("userName"),id)); // <- this will add the restriction. 

	    //c.orderBy(em.getCriteriaBuilder().asc(from.get("firstname"))); 
	    return em.createQuery(c).getResultList(); 
		//Login login= em.find(Login.class, userName);
		//return login;
	}
	@Override
	@Transactional
	public String updateMovie(String movieId,Movie movie) throws Exception
	{
		Movie existingMov= em.find(Movie.class, movieId);
		existingMov.setAwards(movie.getAwards());
		existingMov.setImdbRating(movie.getImdbRating());
		existingMov.setImdbId(movie.getImdbId());
		existingMov.setImdbVotes(movie.getImdbVotes());
		existingMov.setMetaScore(movie.getMetaScore());
		existingMov.setReleased(movie.getReleased());;
		existingMov.setRuntime(movie.getRuntime());
		em.merge(existingMov);
		return "success";
	}
	@Override
	@Transactional
	public String addOne(final Movie movie) throws Exception {
		/*return (Long) transactionTemplate.execute(new TransactionCallback() {
		    public Object doInTransaction(TransactionStatus status) {
		      em.persist(movie);
		      System.out.println(movie.getMovieId());
		      return movie.getMovieId();      
		    }
		  });
		*/
		EntityManager em1 = getEm();
		//em1.getTransaction().begin();
    	em1.persist(movie);
    	//em1.getTransaction().commit();
    	return movie.getMovieId();
	}
	

}
