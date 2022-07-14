package com.crudappv1.crud_app_v1.service;

import java.util.List;

import com.crudappv1.crud_app_v1.model.Student;
import com.crudappv1.crud_app_v1.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    
    @Autowired
    private StudentRepo studentRepo;

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student get(Integer id) {
        return studentRepo.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        studentRepo.deleteById(id);
    }
}
