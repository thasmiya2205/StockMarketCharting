package com.thasmiya.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thasmiya.entity.Company;
import com.thasmiya.service.CompanyService;

@RestController
@RequestMapping("/company")
@CrossOrigin(origins="http://localhost:4200")
public class CompanyController {

	
	@Autowired
	private CompanyService companyService;
	
	
	@GetMapping
	public List<Company> getAllCompanies(){
		return (List<Company>)companyService.getCompaniesList();
	}
	
	
	@GetMapping("/{cid}")
	public Company getSpecificCompany(@PathVariable long cid){
		return companyService.getCompanybyId(cid);
	}
	
//	@GetMapping("/{cname}")
//	public Company getSpecificCompanyByName(@PathVariable String cname){
//		return companyService.getCompanybyName(cname);
//	}
	
	
	@DeleteMapping("/{cid}")
	public void deactivateCompany(@PathVariable long cid) {
		companyService.deleteCompany(cid);
	}
	
	@PostMapping
	public void addNewCompany(@RequestBody Company company) {
		companyService.addCompany(company);
	}
	
	@PutMapping("/{cid}")
	public void editCompany(@RequestBody Company company,@PathVariable long cid) {
		companyService.updateCompany(company, cid);
	}
	
	
	
}
