package br.com.jm.meutudoapi.service;

import br.com.jm.meutudoapi.model.Account;
import br.com.jm.meutudoapi.model.Customer;
import br.com.jm.meutudoapi.repository.AccountRepository;
import br.com.jm.meutudoapi.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private CustomerService customerService;

    Logger logger = Logger.getLogger(Account.class.getName());

    public boolean createAccount(Customer customer) {
        try {
            Customer createdCustomer = customerService.saveCustomer(customer);

            Account account = new Account();
            account.setCustomer(createdCustomer);

            accountRepository.save(account);

            return true;
        } catch (RuntimeException e) {
            logger.log(Level.WARNING, e.getMessage());

            return false;
        }
    }

    public Double checkBalance(Long accountNumber) {
        try {
           Optional<Account> account = accountRepository.findById(accountNumber);
           return account.isPresent() ? account.get().getBalance() : 0.0;
        } catch (RuntimeException e) {
            logger.log(Level.WARNING, e.getMessage());

            return 0.0;
        }
    }
}
