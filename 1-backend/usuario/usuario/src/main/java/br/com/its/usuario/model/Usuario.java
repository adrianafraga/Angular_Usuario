package br.com.its.usuario.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_USUARIO")
public class Usuario implements Serializable{

	
		//declarando as varáveis
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		
		@Column(nullable = false)
		private String nome;
		
		@Column(nullable = false)
		private String cpf;
		
		@Column(nullable = false)
		private String email;
		
		@Column(nullable = false)
		private String senha;
		
		
	
		
		private Usuario () {}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getCpf() {
			return cpf;
		}

		public void setCpf(String cpf) {
			this.cpf = cpf;
		}

	
		
		

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		@Override
		public String toString() {
			return "Usuario [id=" + id + ", nome=" + nome + ", cpf=" + cpf + ",   email=" + email + ", senha=" + senha
					+ "]";
		}
		

		
		
	}


