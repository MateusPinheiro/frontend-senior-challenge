package br.com.jm.meutudoapi.model;

import br.com.jm.meutudoapi.enums.AccountType;

import javax.persistence.*;
import java.util.List;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long accountNumber;

    @Enumerated(EnumType.STRING)
    private AccountType accountType = AccountType.CHECKING_ACCOUNT;

    @ManyToOne
    @JoinColumn(name="customer_id", nullable=false)
    private Customer customer;

    private Double balance = 0.0;

    @OneToMany(mappedBy = "account")
    private List<OperationRecord> operationRecords;

    public Account() {

    }

    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public Customer  getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public List<OperationRecord> getOperationRecords() {
        return operationRecords;
    }

    public void setOperationRecords(List<OperationRecord> operationRecords) {
        this.operationRecords = operationRecords;
    }
}
