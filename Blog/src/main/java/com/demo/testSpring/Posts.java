package com.demo.testSpring;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Posts")
public class Posts {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(length = Integer.MAX_VALUE)
	private String imagePath;
	private String link;
	private String headding;
	@Column(length = Integer.MAX_VALUE)
	private String desccription;
	
	
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getHeadding() {
		return headding;
	}
	public void setHeadding(String headding) {
		this.headding = headding;
	}
	public String getDesccription() {
		return desccription;
	}
	public void setDesccription(String desccription) {
		this.desccription = desccription;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

}
