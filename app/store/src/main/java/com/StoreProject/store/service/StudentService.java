package com.StoreProject.store.service;

import com.StoreProject.store.modal.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();

    public  Student updateStudent(Student student);


}
