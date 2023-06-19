package com.StoreProject.store.controller;

import com.StoreProject.store.modal.Student;
import com.StoreProject.store.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student)
    {
        studentService.saveStudent(student);
        return "New Student is added";
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id,@RequestBody Student student)
    {
        student.setId(id);
        studentService.updateStudent(student);
        return " Student is updated";
    }
}
