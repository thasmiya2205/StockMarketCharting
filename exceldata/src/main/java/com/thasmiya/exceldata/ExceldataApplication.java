package com.thasmiya.exceldata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableDiscoveryClient
@EnableEurekaClient
@SpringBootApplication
public class ExceldataApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExceldataApplication.class, args);
	}

}
