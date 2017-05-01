package com.apurv.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceUnit;
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

import com.apurv.entity.Login;
//import com.apurv.entity.Employee;
import com.apurv.entity.Movie;
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
    public String addLogin(final Login login) {
	   EntityManager em1 = getEm();
		//em1.getTransaction().begin();
   	   em1.persist(login);
	   return login.getLoginId();
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
