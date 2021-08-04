package com.thasmiya.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thasmiya.entity.Company;


@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

Optional<Company> findByName(String companyName);

}
