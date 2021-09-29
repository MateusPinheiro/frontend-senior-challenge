package br.com.jm.meutudoapi.service;

import br.com.jm.meutudoapi.model.Account;
import br.com.jm.meutudoapi.model.Customer;
import br.com.jm.meutudoapi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    Logger logger = Logger.getLogger(Customer.class.getName());

    public Customer saveCustomer(Customer customer) {
        try {
            return customerRepository.save(customer);
        } catch (Exception e) {
            logger.log(Level.WARNING, e.getMessage());
            return null;
        }
    }
}
