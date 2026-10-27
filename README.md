# 🧮 Projeto Calculadora - Workflow Ágil

Este projeto é uma aplicação de Calculadora Padrão desenvolvida com HTML, CSS e JavaScript. O objetivo principal vai além do código: visa aplicar na prática os princípios de **Lean, Agile, colaboração, responsabilidade compartilhada e eliminação dos silos**, utilizando o Git de forma estratégica.

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo `index.html` em seu navegador. Nenhuma instalação ou servidor complexo é necessário.

## 🌿 Estratégia de Branches (Fluxo de Trabalho)

Para evitar silos e garantir que o código passe por revisão de pares, adotamos um fluxo baseado em **GitHub Flow**. A criação direta de código na branch principal não é permitida.

* **`main`**: Branch principal, sempre funcional e estável. Representa a versão de produção.
* **Branches de Feature**: Todo novo desenvolvimento (ex: `feature/dark-mode`), correção de bug ou configuração deve ser feito em uma branch derivada da `main`.
  * *Padrão de nomenclatura:* `tipo/nome-da-tarefa` (Ex: `feature/dark-mode`, `fix/erro-divisao-zero`, `chore/setup-inicial`).

### Pull Requests (PRs)
A integração de código de uma branch de volta para a `main` deve ser feita **exclusivamente** via Pull Request.
1. Abra o PR com uma descrição clara do que foi feito.
2. É obrigatória a aprovação de pelo menos um colega de equipe (Code Review).
3. O Code Review promove a responsabilidade compartilhada e dissemina o conhecimento.

## 📝 Padronização de Commits

Para manter um histórico limpo, rastreável e reduzir desperdícios buscando informações soltas (Princípio Lean), adotamos o **Conventional Commits**. Todo commit deve seguir o formato:

`tipo: descrição curta e no imperativo`

**Tipos permitidos:**
* `feat:` Uma nova funcionalidade para o usuário (ex: `feat: adiciona botao de troca de tema`).
* `fix:` Correção de um bug (ex: `fix: corrige calculo de decimais`).
* `style:` Formatação, estilos, CSS, sem mudança na lógica (ex: `style: aplica paleta de cores do modo escuro`).
* `chore:` Atualização de tarefas de build, configuração, etc (ex: `chore: inicializa projeto base da calculadora padrao`).
* `docs:` Mudanças na documentação (ex: `docs: atualiza regras de commits no README`).

---
*Construído colaborativamente para reforçar as melhores práticas de Engenharia de Software.*