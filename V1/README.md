# EnglishFY 📘  
Documentação – Versão 1 (MVP)

---

## 📌 Visão Geral

O **EnglishFY** é um site de apoio ao aprendizado de inglês, voltado para **crianças (com apoio dos pais)** e **adolescentes** que possuem algum contato prévio com o idioma, mas **não sabem por onde começar a estudar**.

O projeto oferece conteúdos organizados por matérias, um teste de nível opcional baseado no padrão Cambridge e exercícios simples para acompanhamento de progresso.

> ⚠️ O EnglishFY não é um curso completo e não substitui um professor.  
> Ele atua como **material complementar**.

---

## 🎯 Objetivo da Versão 1 (MVP)

- Organizar o estudo de inglês por matérias e submatérias  
- Ajudar o usuário a identificar por onde começar  
- Oferecer conteúdos teóricos diversificados + exercícios  
- Disponibilizar um teste de nível simples e explicativo  
- Permitir progresso básico para usuários logados  

---

## 👥 Público-alvo

- **Crianças**, com auxílio dos pais  
- **Adolescentes** iniciantes ou com pouco conhecimento prévio  

### Contexto do usuário
- Já teve contato com inglês escolar ou informal  
- Está perdido sobre o que estudar primeiro  
- Busca uma forma simples e organizada de aprender  

---

## 📦 Escopo da Versão 1

### Incluído no MVP
- Página inicial (Home)
- Listagem de matérias
- Submatérias organizadas por tema
- Página de conteúdo (aula + exercícios)
- Progresso simples (X/Y)
- Teste de nível opcional (Cambridge)
- Página de resultado do teste
- Login simples
- Acesso a conteúdos exclusivos via código
- Página de contato com envio de e-mail

### Fora do escopo (V1)
- IA conversacional
- Gamificação
- Correção automática avançada
- Relatórios detalhados
- Sistema de pagamento
- Chat ou fórum
- Banco de dados para mensagens de contato

---

## 🗺️ Estrutura do Site (Arquitetura da Informação)

- Home  
- Matérias  
  - Vocabulary  
  - Grammar  
  - Listening  
  - Reading  
- Submatérias (ex: Animals, Food, Objects…)  
- Conteúdo (aula + exercícios)  
- Teste de nível  
- Resultado do teste  
- Alunos (login / código)  
- Contato  

---

## 🔄 Estados do Usuário

| Estado | Descrição |
|-----|----------|
| Visitante | Usuário não logado |
| Logado | Usuário com conta |
| Aluno | Usuário logado com código válido |

---

## 📑 Requisitos Funcionais

| ID | Descrição |
|---|----------|
| RF01 | Exibir conteúdos iniciais sem necessidade de login |
| RF02 | Permitir navegação por matérias e submatérias |
| RF03 | Exibir conteúdos teóricos com texto, imagens e vídeos |
| RF04 | Exibir exercícios ao final de cada conteúdo |
| RF05 | Considerar conteúdo concluído ao responder os exercícios |
| RF06 | Exibir progresso simples (concluídos / total) |
| RF07 | Permitir login simples |
| RF08 | Permitir inserção de código de aluno |
| RF09 | Liberar conteúdos exclusivos para alunos |
| RF10 | Permitir realização de teste de nível opcional |
| RF11 | Exibir resultado do teste com explicação |
| RF12 | Sugerir módulos após o teste |
| RF13 | Permitir envio de mensagem pela página de contato |

---

## 📑 Requisitos Não Funcionais

| ID | Descrição |
|---|----------|
| RNF01 | Interface simples e intuitiva |
| RNF02 | Linguagem acessível para crianças e adolescentes |
| RNF03 | Design responsivo |
| RNF04 | Navegação clara, sem login obrigatório |
| RNF05 | Feedback visual de ações (envio, conclusão, progresso) |

---

## 📏 Regras de Negócio

| ID | Regra |
|---|------|
| RN01 | O teste de nível é opcional |
| RN02 | A conclusão do conteúdo ocorre por tentativa |
| RN03 | Vídeos não são obrigatórios para concluir conteúdos |
| RN04 | Progresso só é salvo para usuários logados |
| RN05 | Conteúdos exclusivos só aparecem para alunos |
| RN06 | O menu indica visualmente a página ativa |
| RN07 | O bloco de matéria ativa não é clicável |
| RN08 | O usuário pode refazer conteúdos concluídos |

---

## 🧠 Organização de Conteúdo


### Progresso
- Cada conteúdo concluído soma progresso
- O progresso da matéria é a soma dos conteúdos das submatérias

---

## 🧪 Teste de Nível (Cambridge)

### Funcionamento
- Quiz de múltipla escolha
- Perguntas exibidas sequencialmente
- Conclusão por tentativa
- Envio único ao final

### Resultado
- Exibição do nível estimado (A1, A2, B1…)
- Características motivacionais (feedback positivo)
- Sugestão direta de módulos iniciais

> As características exibidas não representam avaliação psicológica.

---

## 🐱 Mascote (Study Buddy)

- Aparece de forma ilustrativa
- Sem interação funcional na V1
- Pode futuramente evoluir para assistente/IA

---

## ✉️ Página de Contato

### Funcionalidade
- Formulário simples para envio de mensagem
- Campos:
  - E-mail
  - Mensagem
- Envio direto para o e-mail da administradora
- Exibição de confirmação após envio

---

## 🚧 Limitações da Versão 1

- Não há personalização avançada
- Não há acompanhamento detalhado de desempenho
- Não há inteligência artificial
- Não há persistência de mensagens

---

## 📌 Observações Finais

Este documento representa a **especificação completa da versão 1 do EnglishFY**, servindo como base para:

- Prototipação
- Implementação frontend
- Implementação backend
- Evoluções futuras do produto

A prioridade do MVP é **clareza, simplicidade e usabilidade**.