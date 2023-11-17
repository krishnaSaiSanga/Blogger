package com.demo.testSpring;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {

	@Autowired
	private Usermf umf;
	
	@Autowired
	private Postsmf pmf;
	 private final String picLink="http://localhost:8080/getPic?pid=";
	
	public String setUser(String name,String pas) {
		User u=new User();
		u.setName(name);
		u.setPassword(pas);
		umf.save(u);
		return "user added";
		
	}
	
	public String checkIfUserExist(String name,String password) {
		if(umf.existsByName(name) && umf.findByName(name).get().getPassword().equals(password)) {
			return Integer.toString(umf.findByName(name).get().getId());
		}
		else {
		
		return "invalid";}
	}
	
	public List<?> getAllPosts(){
		return umf.findAll();
	}
	
	public String setPosts(Integer id,String path,String headding,String description) {
		Posts posts=new Posts();
		posts.setImagePath(path);
		posts.setHeadding(headding);
		posts.setDesccription(description);
		pmf.save(posts);
		Optional<Posts> getOptional= pmf.findByHeadding(headding);
		String string=picLink+getOptional.get().getId();
		posts.setLink(string);
		pmf.save(posts);
		List<Posts> list=new ArrayList<>();
		list.add(posts);
		Optional<User> user= umf.findById(id);
		list.addAll(user.get().getPosts());
		user.get().setPosts(list);
		umf.save(user.get());
		return "post added";
		
	}
	
	public User getUserPosts(Integer id){
		Optional<User> user=umf.findById(id);
		return user.get();
	}
	
	public byte[] pic(Integer pid) throws IOException {
		Optional<Posts> posts=pmf.findById(pid);
		return Files.readAllBytes(new File(posts.get().getImagePath()).toPath());
		
	}
	public String deletePic(Integer pid) {
		pmf.deleteById(pid);
		return "success";
	}
	
	public void editPic(String path,String headding,String description,Integer pid) {
		Optional<Posts> post=pmf.findById(pid);
		post.get().setImagePath(path);
		post.get().setHeadding(headding);
		post.get().setDesccription(description);
		pmf.save(post.get());
	}
}
