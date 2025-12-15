# EnglishFY 📘  
Site de apoio ao aprendizado de inglês

---

## 📌 Visão Geral

O **EnglishFY** é um site de apoio ao aprendizado de inglês que oferece **formas diversificadas de estudo** e auxilia o usuário a **entender por onde começar**, de acordo com seu nível e necessidades.

O projeto tem como foco servir como **material complementar**, não substituindo cursos formais ou professores.

---

## 🎯 Objetivo do Produto

- Ajudar usuários iniciantes ou com pouco conhecimento prévio a se organizarem nos estudos de inglês
- Oferecer conteúdos teóricos diversificados e exercícios
- Sugerir caminhos de estudo a partir de um teste de nível opcional

---

## 👥 Público-alvo

- **Crianças**, com apoio dos pais  
- **Adolescentes** que buscam formas alternativas e organizadas de estudar inglês  

### Contexto do usuário
- Possui pequeno conhecimento prévio
- Já teve contato com inglês escolar ou informal
- Está perdido sobre por onde começar ou o que estudar primeiro

---

## ❗ Problema Identificado

- Não saber por onde iniciar os estudos
- Falta de organização do conteúdo
- Pouco acesso a material estruturado e acessível

---

## 💡 Proposta de Valor

O EnglishFY oferece:
- Diagnóstico de nível por meio de teste opcional
- Recomendações de conteúdo baseadas no resultado
- Organização do aprendizado por matérias
- Conteúdos teóricos variados e exercícios
- Acesso inicial sem necessidade de conta

---

## 📦 Escopo do MVP

### Funcionalidades incluídas
- Teste de nível opcional com resultado explicativo
- Conteúdos organizados por matérias
- Conteúdos teóricos (vídeos, aulas, resumos)
- Exercícios associados aos conteúdos
- Acesso parcial sem login
- Sistema de login simples
- Salvamento de progresso básico
- Identificação de alunos por código

### Fora do escopo (V1)
- Curso completo com trilhas fechadas
- Gamificação avançada
- Correção automática de todos os exercícios
- IA conversacional
- Sistema de pagamento
- Relatórios avançados de desempenho

---

## 📑 Requisitos Funcionais

| ID   | Descrição |
|----|-----------|
| RF01 | Permitir que o usuário realize um teste de nível opcional |
| RF02 | Exibir o resultado do teste com explicação e recomendações |
| RF03 | Permitir acesso aos primeiros módulos sem login |
| RF04 | Organizar conteúdos por matérias (Grammar, Vocabulary, etc.) |
| RF05 | Exibir conteúdos teóricos em diferentes formatos |
| RF06 | Associar exercícios aos conteúdos |
| RF07 | Exibir gabarito apenas para exercícios complexos |
| RF08 | Permitir criação de conta de usuário |
| RF09 | Salvar progresso simples do usuário logado |
| RF10 | Permitir inserção de código do aluno |
| RF11 | Liberar conteúdos exclusivos mediante código válido |

---

## 📑 Requisitos Não Funcionais

| ID   | Descrição |
|----|-----------|
| RNF01 | Interface simples e intuitiva |
| RNF02 | Linguagem acessível para crianças e adolescentes |
| RNF03 | Site responsivo (desktop e mobile) |
| RNF04 | Navegação clara, sem obrigatoriedade de login inicial |
| RNF05 | Tempo de carregamento adequado |

---

## 📏 Regras de Negócio

| ID   | Regra |
|----|------|
| RN01 | O teste de nível é opcional, porém recomendado |
| RN02 | Usuários sem conta podem acessar o teste e os primeiros módulos |
| RN03 | O login é utilizado para salvar progresso e identificar alunos |
| RN04 | O código do aluno é fornecido manualmente pela administradora |
| RN05 | Conteúdos exclusivos são liberados apenas após validação do código |

---

## 🗺️ Arquitetura da Informação

- Home  
- Matérias  
  - Grammar  
  - Vocabulary  
  - Listening  
  - Reading  
- Teste seu nível  
- Alunos (Login / Código)  
- Contato  

---

## 🔄 Fluxos Principais

### Usuário novo
Home → Explora matérias **ou** realiza o teste → Recebe recomendações → Estuda conteúdos iniciais

### Usuário que realiza o teste
Home → Teste de nível → Resultado explicativo → Sugestão de matérias → Acesso aos conteúdos

### Aluno com código
Login → Inserção de código → Liberação de conteúdos exclusivos → Progresso salvo

---

## 🚧 Limites do Produto

O EnglishFY:
- Não é um curso completo
- Não substitui um professor
- Não possui IA na versão inicial
- Evoluirá gradualmente a partir do básico

---

## 📌 Observações Finais

Este documento serve como base para:
- Prototipação no Figma
- Desenvolvimento do sistema
- Evolução futura do produto

O foco inicial é **clareza, simplicidade e organização**, priorizando a experiência do usuário iniciante.
