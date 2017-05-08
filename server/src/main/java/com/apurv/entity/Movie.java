package com.apurv.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Feature;
@Entity
@Table
@NamedQueries({
   @NamedQuery(name="Movie.findAll",query="SELECT e FROM Movie e ORDER BY e.title ASC")})
public class Movie {  
	
	
		@Id
		@GenericGenerator(name="customUUID", strategy="uuid2")
		@GeneratedValue(generator="customUUID")
		private String movieId;
		private String runtime,released,rated,title,year,plot,metaScore,awards,poster;
		private String imdbId;
		private String imdbRating;
		private String imdbVotes;
		private String type;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Actor> actors;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Country> country;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Director> director;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Language> language;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Writer> writer;
		@OneToMany(fetch = FetchType.EAGER,cascade = {CascadeType.ALL})
		@JsonFormat(with = Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
		private List<Genre> genre;
		
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getPoster() {
			return poster;
		}
		public void setPoster(String poster) {
			this.poster = poster;
		}
		public String getImdbVotes() {
			return imdbVotes;
		}
		public void setImdbVotes(String imdbVotes) {
			this.imdbVotes = imdbVotes;
		}
		public String getImdbId() {
			return imdbId;
		}
		public void setImdbId(String imdbId) {
			this.imdbId = imdbId;
		}
		public String getImdbRating() {
			return imdbRating;
		}
		public void setImdbRating(String imdbRating) {
			this.imdbRating = imdbRating;
		}
		
		public List<Actor> getActors() {
			return actors;
		}
		public void setActors(List<Actor> actors) {
			this.actors = actors;
		}
		public List<Actor> getActor() {
			return actors;
		}
		public void setActor(List<Actor> actors) {
			this.actors = actors;
		}
		public List<Country> getCountry() {
			return country;
		}
		public void setCountry(List<Country> country) {
			this.country = country;
		}
		public List<Director> getDirector() {
			return director;
		}
		public void setDirector(List<Director> director) {
			this.director = director;
		}
		public List<Language> getLanguage() {
			return language;
		}
		public void setLanguage(List<Language> language) {
			this.language = language;
		}
		public List<Writer> getWriter() {
			return writer;
		}
		public void setWriter(List<Writer> writer) {
			this.writer = writer;
		}
		public List<Genre> getGenre() {
			return genre;
		}
		public void setGenre(List<Genre> genre) {
			this.genre = genre;
		}
		
		public String getMovieId() {
			return movieId;
		}
		public void setMovieId(String movieId) {
			this.movieId = movieId;
		}
		public String getRunTime() {
			return runtime;
		}
		public void setRunTime(String runTime) {
			this.runtime = runTime;
		}
		public String getReleased() {
			return released;
		}
		public void setReleased(String released) {
			this.released = released;
		}
		public String getRated() {
			return rated;
		}
		public void setRated(String rated) {
			this.rated = rated;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getYear() {
			return year;
		}
		public void setYear(String year) {
			this.year = year;
		}
		public String getPlot() {
			return plot;
		}
		public void setPlot(String plot) {
			this.plot = plot;
		}
		public String getMetaScore() {
			return metaScore;
		}
		public void setMetaScore(String metaScore) {
			this.metaScore = metaScore;
		}
		public String getAwards() {
			return awards;
		}
		public void setAwards(String awards) {
			this.awards = awards;
		}
		public String getRuntime() {
			return runtime;
		}
		public void setRuntime(String runtime) {
			this.runtime = runtime;
		}
	    

}
