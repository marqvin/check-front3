package br.com.dh.vinimarques.Clinica.controllers;

import br.com.dh.vinimarques.Clinica.dtos.DentistaDto;
import br.com.dh.vinimarques.Clinica.entities.Dentista;
import br.com.dh.vinimarques.Clinica.services.DentistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/dentistas") // Rota Padrão
public class DentistaController {

    // Injetar serviços
    @Autowired // tem que carregar também o DentistaService quando for usar o Controller
    DentistaService service;

    @GetMapping // quando chamar o "http://localhost:9000/dentistas"
    public List<DentistaDto> buscarTodosOsDentistas(){
        List<DentistaDto> list = service.buscarTodos();
        return list;

   }
}
