package br.com.jm.meutudoapi.repository;

import br.com.jm.meutudoapi.model.OperationRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationRecordRepository extends JpaRepository<OperationRecord, Long> {
}
