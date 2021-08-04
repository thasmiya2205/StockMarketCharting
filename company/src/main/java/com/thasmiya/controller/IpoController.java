package com.thasmiya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thasmiya.entity.Ipo;

import com.thasmiya.service.IpoService;

@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/ipo")
@RestController
public class IpoController {
	
	@Autowired
	private IpoService ipoService;
	
	
	@GetMapping
	public List<Ipo> getAllIpos(){
		return (List<Ipo>)ipoService.getIpoList();
	}
	
	
	@GetMapping("/{id}")
	public Ipo getSpecificCompany(@PathVariable long id){
		return ipoService.getIpobyId(id);
	}
	
	
	
	@DeleteMapping("/{id}")
	public void deactivateIpo(@PathVariable long id) {
		ipoService.deleteIpo(id);
	}
	
	@PostMapping
	public void addNewIpo(@RequestBody Ipo ipo) {
		ipoService.addIpo(ipo);
	}
	
	@PutMapping("/{id}")
	public void editIpo(@RequestBody Ipo ipo,@PathVariable long id) {
		ipoService.updateIpo(ipo, id);
	}
	
	
}
