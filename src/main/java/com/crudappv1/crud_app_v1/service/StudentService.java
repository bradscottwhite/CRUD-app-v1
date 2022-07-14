package com.crudappv1.crud_app_v1.service;

import java.util.List;

import com.crudappv1.crud_app_v1.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student get(Integer id);
    public void delete(Integer id);
}
