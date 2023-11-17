package com.demo.testSpring;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
public class Control {
	
	private final String folder="C:\\Users\\dell\\Desktop\\springImages\\";
	@Autowired
	private Service ser;
	
	@PostMapping("/setUser")
	public String addUser(@RequestParam("uname")String name,@RequestParam("pas")String pas) {
		return ser.setUser(name,pas);
	}
	
	@GetMapping("/checkUser")
	public String checkUser(@RequestParam("uname") String name,@RequestParam("pas") String password) {
		return ser.checkIfUserExist(name,password);
	}
	
	@GetMapping("/getAllPosts")
	public List<?> allPosts(){
		return ser.getAllPosts();
	}
	
	@PostMapping("/setPost")
	public String addPost(@RequestParam("id") Integer id,@RequestParam("file")MultipartFile file,@RequestParam("head") String headding,@RequestParam("desc") String descrip) throws IllegalStateException, IOException {
		String path=folder+file.getOriginalFilename();
		file.transferTo(new File(path));
		return ser.setPosts(id,path,headding,descrip);
		
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteImage(@RequestParam("pid") Integer pid ) {
		return ResponseEntity.status(HttpStatus.OK).body(ser.deletePic(pid));
	}
	
	@PutMapping("/edit")
	public void editImage(@RequestParam("pic") MultipartFile file,@RequestParam("head") String headding,@RequestParam("desc") String description,@RequestParam("pid") Integer pid) throws IllegalStateException, IOException {
		String path=folder+file.getOriginalFilename();
		file.transferTo(new File(path));
		ser.editPic(path,headding,description,pid);
	}
	
	@GetMapping("/getMyPosts")
	public ResponseEntity<?> getPosts(@RequestParam("id") Integer id){
		return ResponseEntity.status(HttpStatus.OK).body(ser.getUserPosts(id));
		
		}
	
	@GetMapping("/getPic")
	public ResponseEntity<?> getPic(@RequestParam("pid") Integer pid) throws IOException{
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.IMAGE_JPEG).body(ser.pic(pid));
	}
	

}
