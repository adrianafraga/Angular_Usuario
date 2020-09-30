package br.com.its.usuario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.its.usuario.model.Usuario;



public interface UsuarioRepository  extends JpaRepository <Usuario, Long> {
	
	//método personalizado para procurar uma único usuário através do id
	Usuario findById(long id);


}
