package br.com.jm.meutudoapi.controller;

import br.com.jm.meutudoapi.DTO.OperationDTO;
import br.com.jm.meutudoapi.model.Customer;
import br.com.jm.meutudoapi.service.AccountService;
import br.com.jm.meutudoapi.service.CustomerService;
import br.com.jm.meutudoapi.service.OperationRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private OperationRecordService operationRecordService;

    @PostMapping
    public ResponseEntity<Boolean> createAccount(@RequestBody Customer customer) {
        return accountService.createAccount(customer) ? ResponseEntity.ok().body(true) : ResponseEntity.internalServerError().body(false);
    }

    @PutMapping("/customer")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
        Customer updatedCustomer = customerService.saveCustomer(customer);
        return Objects.nonNull(updatedCustomer) ? ResponseEntity.ok().body(updatedCustomer) : ResponseEntity.internalServerError().body(null);
    }

    @GetMapping("/checkBalance/{accountNumber}")
    public Double checkBalance(@PathVariable Long accountNumber) {
        return accountService.checkBalance(accountNumber);
    }

    @PostMapping("/makeOperation")
    public ResponseEntity<Boolean> makeOperation(@RequestBody OperationDTO operation) {
        return operationRecordService.makeOperation(operation) ? ResponseEntity.ok().body(true) : ResponseEntity.internalServerError().body(false);
    }

    @GetMapping("/undoTransfer/{operationId}")
    public ResponseEntity<Boolean> undoTransfer(@PathVariable Long operationId) {
        return operationRecordService.undoTransfer(operationId) ? ResponseEntity.ok().body(true) : ResponseEntity.internalServerError().body(false);
    }
}
