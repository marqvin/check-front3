package br.com.dh.vinimarques.Clinica.repositories;

import br.com.dh.vinimarques.Clinica.entities.Dentista;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

@DataJpaTest
public class DentistaRepositoryTests {

    @Autowired
    private DentistaRepository repository;

    private Integer idExistente;
    private Integer idNaoExistente;


    @BeforeEach
    void setup() throws Exception {
        idExistente = 1;
        idNaoExistente = 99;
    }

    @Test
    public void procurarPorIdERetornarUmDentista(){
        Optional<Dentista> resulado = repository.findById(idExistente);
        Assertions.assertTrue(resulado.isPresent());
    }

    @Test
    public void procurarPorIdERetornarUmOptionalVazio(){
        Optional<Dentista> resultado = repository.findById(idNaoExistente);
        Assertions.assertTrue(resultado.isEmpty());
    }
}
