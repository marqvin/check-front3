package br.com.dh.vinimarques.Clinica.repositories;

import br.com.dh.vinimarques.Clinica.entities.Dentista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Acessa o Banco de Dados diretamente
@Repository
public interface DentistaRepository extends JpaRepository<Dentista, Integer> { // GRUD

}
