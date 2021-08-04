package com.thasmiya.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thasmiya.entity.Ipo;

import com.thasmiya.repository.IpoRepository;

@Service
public class IpoService {

	@Autowired
	private IpoRepository ipoRepository;
	
	
	public List<Ipo> getIpoList(){
		return (List<Ipo>)ipoRepository.findAll();
		
	}
	
	public void addIpo(Ipo ipo) {
		ipoRepository.save(ipo);
	}
	
	public Ipo getIpobyId(long id) {
		Optional<Ipo> optionalIpo=ipoRepository.findById(id);
		return optionalIpo.isPresent()?optionalIpo.get():null;
	}
	
	
	
	public void deleteIpo(Long id) {
		ipoRepository.deleteById(id);
	}
	
	public void updateIpo(Ipo ipo,long id) {
		ipoRepository.save(ipo);
	}
}
