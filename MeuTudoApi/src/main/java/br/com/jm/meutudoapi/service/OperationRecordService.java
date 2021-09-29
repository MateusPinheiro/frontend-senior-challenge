package br.com.jm.meutudoapi.service;

import br.com.jm.meutudoapi.DTO.OperationDTO;
import br.com.jm.meutudoapi.enums.OperationType;
import br.com.jm.meutudoapi.model.Account;
import br.com.jm.meutudoapi.model.OperationRecord;
import br.com.jm.meutudoapi.repository.AccountRepository;
import br.com.jm.meutudoapi.repository.OperationRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class OperationRecordService {

    @Autowired
    private OperationRecordRepository operationRecordRepository;

    @Autowired
    private AccountRepository accountRepository;

    private Logger logger = Logger.getLogger(OperationRecord.class.getName());

    public boolean makeOperation(OperationDTO operation) {
        return operation.getType().equals(OperationType.DEPOSIT) ?
                makeDeposit(operation) : operation.getType().equals(OperationType.WITHDRAW) ?
                makeWithdraw(operation) : operation.getType().equals(OperationType.TRANSFER) ?
                makeTransfer(operation) : makeScheduledTransfer(operation);
    }

    public boolean undoTransfer(Long transferId) {
        Optional<OperationRecord> record = operationRecordRepository.findById(transferId);

        if (record.isPresent() && record.get().getType().equals(OperationType.TRANSFER) && !record.get().isReversed()) {
            try {
                Optional<Account> destinationAccount = accountRepository.findById(record.get().getDestinationAccountId());

                record.get().getAccount().setBalance(record.get().getAccount().getBalance() + record.get().getAmount());
                accountRepository.save(record.get().getAccount());

                destinationAccount.get().setBalance(destinationAccount.get().getBalance() - record.get().getAmount());
                accountRepository.save(destinationAccount.get());

                OperationRecord recordUndo = new OperationRecord();
                recordUndo.setAccount(record.get().getAccount());
                recordUndo.setAmount(record.get().getAmount());
                recordUndo.setDestinationAccountId(record.get().getDestinationAccountId());
                recordUndo.setType(OperationType.REVERSE_TRANSFER);

                operationRecordRepository.save(recordUndo);

                record.get().setReversed(true);
                operationRecordRepository.save(record.get());

                return true;
            } catch (RuntimeException e) {
                logger.log(Level.WARNING, e.getMessage());
                return false;
            }
        } else return false;
    }

    private boolean makeDeposit(OperationDTO operation) {
        Optional<Account> account = accountRepository.findById(operation.getAccountId());

        if (account.isPresent()) {
            try {
                account.get().setBalance(account.get().getBalance() + operation.getAmount());
                accountRepository.save(account.get());

                OperationRecord record = new OperationRecord(account.get(), operation);
                operationRecordRepository.save(record);

                return true;
            } catch (RuntimeException e) {
                logger.log(Level.WARNING, e.getMessage());
                return false;
            }

        } else return false;
    }

    private boolean makeWithdraw(OperationDTO operation) {
        Optional<Account> account = accountRepository.findById(operation.getAccountId());

        if (account.isPresent() && account.get().getBalance() > 0 && account.get().getBalance() >= operation.getAmount()) {
            try {
                account.get().setBalance(account.get().getBalance() - operation.getAmount());
                accountRepository.save(account.get());

                OperationRecord record = new OperationRecord(account.get(), operation);
                operationRecordRepository.save(record);

                return true;
            } catch (RuntimeException e) {
                logger.log(Level.WARNING, e.getMessage());
                return false;
            }

        } else return false;
    }

    private boolean makeTransfer(OperationDTO operation) {
        Optional<Account> account = accountRepository.findById(operation.getAccountId());
        Optional<Account> destinationAccount = accountRepository.findById(operation.getDestinationAccountId());

        if (account.isPresent() && destinationAccount.isPresent() && account.get().getBalance() > 0 && account.get().getBalance() >= operation.getAmount()) {
            try {
                account.get().setBalance(account.get().getBalance() - operation.getAmount());
                accountRepository.save(account.get());

                destinationAccount.get().setBalance(destinationAccount.get().getBalance() + operation.getAmount());
                accountRepository.save(destinationAccount.get());

                OperationRecord record = new OperationRecord(account.get(), operation);
                operationRecordRepository.save(record);

                return true;
            } catch (RuntimeException e) {
                logger.log(Level.WARNING, e.getMessage());
                return false;
            }

        } else return false;
    }

    private boolean makeScheduledTransfer(OperationDTO operation) {
        Optional<Account> account = accountRepository.findById(operation.getAccountId());
        Optional<Account> destinationAccount = accountRepository.findById(operation.getDestinationAccountId());

        if (account.isPresent() && destinationAccount.isPresent() && account.get().getBalance() > 0 && account.get().getBalance() >= operation.getAmount()) {
            try {
                for (int a = 0; a < operation.getInstallments(); a++) {
                    if (a == 0) {
                        account.get().setBalance(account.get().getBalance() - (operation.getAmount() / operation.getInstallments()));
                        accountRepository.save(account.get());

                        destinationAccount.get().setBalance(destinationAccount.get().getBalance() + (operation.getAmount() / operation.getInstallments()));
                        accountRepository.save(destinationAccount.get());
                    }

                    OperationRecord record = new OperationRecord(account.get(), operation);
                    record.setAmount(record.getAmount() / operation.getInstallments());
                    record.setEffectiveDate(record.getEffectiveDate().plusMonths(a));

                    operationRecordRepository.save(record);
                }

                return true;
            } catch (RuntimeException e) {
                logger.log(Level.WARNING, e.getMessage());
                return false;
            }

        } else return false;
    }
}
