package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    	testGetAllCountries();
    	getCountryTest();
    	testAddCountry();
    	testUpdateCountry();
    	testDeleteCountry();
    }
    
    private void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        for (Country country : countries) {
            LOGGER.debug("Country: {}", country);
        }
        LOGGER.info("End");
    }
    

    private void getCountryTest() {
        LOGGER.info("Start");
        try {
            Country country = countryService.findCountryByCode("IN");
            LOGGER.debug("Country: {}", country);
            if ("India".equalsIgnoreCase(country.getName())) {
                LOGGER.info("Country name is valid.");
            } else {
                LOGGER.warn("Country name does not match expected value.");
            }
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }
        LOGGER.info("End");
    }
    
    private void testAddCountry() {
        LOGGER.info("Start");
        
        Country newCountry = new Country();
        newCountry.setCode("JP");
        newCountry.setName("Japan");
        
        countryService.addCountry(newCountry);
        
        try {
            Country savedCountry = countryService.findCountryByCode("JP");
            LOGGER.debug("Added Country: {}", savedCountry);
        } catch (CountryNotFoundException e) {
            LOGGER.error("Country not found after adding: " + e.getMessage());
        }

        LOGGER.info("End");
    }
    
    private void testUpdateCountry() {
        LOGGER.info("Start");

        try {
            countryService.updateCountry("JP", "Nippon");

            Country updatedCountry = countryService.findCountryByCode("JP");
            LOGGER.debug("Updated Country: {}", updatedCountry);

        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("End");
    }
    
    private void testDeleteCountry() {
        LOGGER.info("Start");

        try {
            countryService.deleteCountry("JP");
            
            countryService.findCountryByCode("JP");

        } catch (CountryNotFoundException e) {
            LOGGER.warn("Expected: Country not found after deletion: " + e.getMessage());
        }

        LOGGER.info("End");
    }

}
