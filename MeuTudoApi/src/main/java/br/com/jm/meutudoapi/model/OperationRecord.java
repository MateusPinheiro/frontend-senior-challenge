package br.com.jm.meutudoapi.model;

import br.com.jm.meutudoapi.DTO.OperationDTO;
import br.com.jm.meutudoapi.enums.OperationType;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class OperationRecord {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long operationId;

    @ManyToOne
    @JoinColumn(name="account_number", nullable=false)
    private Account account;

    @Enumerated(EnumType.STRING)
    private OperationType type;

    private Long destinationAccountId;

    private Double amount;

    private LocalDate effectiveDate = LocalDate.now();

    private boolean reversed = false;

    public OperationRecord() {}

    public OperationRecord(Account account, OperationDTO operation) {
        this.account = account;
        this.destinationAccountId = operation.getDestinationAccountId();
        this.type = operation.getType();
        this.amount = operation.getAmount();
    }

    public Long getOperationId() {
        return operationId;
    }

    public void setOperationId(Long operationId) {
        this.operationId = operationId;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public OperationType getType() {
        return type;
    }

    public void setType(OperationType type) {
        this.type = type;
    }

    public Long getDestinationAccountId() {
        return destinationAccountId;
    }

    public void setDestinationAccountId(Long destinationAccountId) {
        this.destinationAccountId = destinationAccountId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public LocalDate getEffectiveDate() {
        return effectiveDate;
    }

    public void setEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
    }

    public boolean isReversed() {
        return reversed;
    }

    public void setReversed(boolean reversed) {
        this.reversed = reversed;
    }
}
