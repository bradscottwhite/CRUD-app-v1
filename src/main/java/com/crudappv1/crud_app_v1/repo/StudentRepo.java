package com.crudappv1.crud_app_v1.repo;

import com.crudappv1.crud_app_v1.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {
    
}
