package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;
import com.cognizant.orm_learn.service.exception.CountryNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String countryCode) throws CountryNotFoundException {
        Optional<Country> result = countryRepository.findById(countryCode);
        if (!result.isPresent()) {
            throw new CountryNotFoundException("Country not found with code: " + countryCode);
        }
        return result.get();
    }
    
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }
    
    @Transactional
    public void updateCountry(String code, String newName) throws CountryNotFoundException {
        Optional<Country> optionalCountry = countryRepository.findById(code);
        
        if (!optionalCountry.isPresent()) {
            throw new CountryNotFoundException("Country not found with code: " + code);
        }

        Country country = optionalCountry.get();
        country.setName(newName);

        countryRepository.save(country);
    }
    
    @Transactional
    public void deleteCountry(String code) throws CountryNotFoundException {
        if (!countryRepository.existsById(code)) {
            throw new CountryNotFoundException("Country not found with code: " + code);
        }
        countryRepository.deleteById(code);
    }


}
