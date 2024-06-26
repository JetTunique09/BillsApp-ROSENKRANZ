package com.example.demo.controller;
`
import com.example.demo.models.Utilisateur;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController

public class UtilisateurController {
    @GetMapping("/utilisateurs");
    public Utilisateur get(){
        Utilisateur utilisateur = new Utilisateur();
        john.setId(4);
        john.setEmail("john@doe");
        john.setPassword("root")
    }
}
