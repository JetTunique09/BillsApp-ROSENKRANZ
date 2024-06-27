package com.example.demo.controller;

import com.example.demo.dao.ReponsePossibleDao;
import com.example.demo.model.ReponsePossible;
import com.example.demo.security.IsAdmin;
import com.example.demo.security.IsUser;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;


public class ReponsePossible {

    @Autowired
    ReponsePossibleDao reponsePossibleDao;

    @IsAdmin
    @PostMapping("/reponse-p")
    public ResponseEntity<ReponsePossible> add(@RequestBody @Valid ResponsePossible responsePossible) {
        responsePossible.setId(null);
        ReponsePossibleDao.save(reponsePossible);
        return new ResponseEntity<>(reponsePossible, HttpStatus.CREATED);
    }

////   @IsUser
//    @GetMapping("/reponse-possible")
//    public List<ReponseUtilisateur> getAllReponsePossible() {
//        return reponsePossible.findAll();
//    }
}
