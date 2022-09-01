package br.com.dh.vinimarques.Clinica.services;

import br.com.dh.vinimarques.Clinica.dtos.DentistaDto;
import br.com.dh.vinimarques.Clinica.entities.Dentista;
import br.com.dh.vinimarques.Clinica.repositories.DentistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

// vai acessar o Repository
@Service
public class DentistaService {

    @Autowired // Carregar junto com a classe atual
    private DentistaRepository repository;
    public List<DentistaDto> buscarTodos(){
        List<Dentista> list = repository.findAll();
        return list.stream().map(x -> new DentistaDto(x)).collect(Collectors.toList());
    }
}
