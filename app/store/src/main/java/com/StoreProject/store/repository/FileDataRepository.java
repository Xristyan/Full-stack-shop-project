package com.StoreProject.store.repository;

import com.StoreProject.store.model.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileDataRepository extends JpaRepository<FileData,Integer> {
}
