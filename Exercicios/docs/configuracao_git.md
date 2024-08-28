# Guia Básico de Git

Este guia vai te ensinar os passos essenciais para começar a usar o Git, desde a configuração inicial até o envio de alterações para um repositório remoto.

## 1. Configurações do Git

Antes de começar a usar o Git, é importante configurar algumas informações básicas como nome e e-mail. Estas informações são utilizadas para identificar as alterações que você fizer.

```bash
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar e-mail
git config --global user.email "seuemail@example.com"

# Verificar as configurações
git config --list
```

## 2. Criação de um novo repositório

Para criar um novo repositório Git em um diretório:

```bash
# Navegue até o diretório onde você quer criar o repositório
cd /caminho/do/diretorio

# Inicialize um repositório Git
git init
```

## 3. Acessar um repositório salvo no GitHub

Para clonar um repositório existente do GitHub para o seu computador:

```bash
# Clone o repositório para um diretório local
git clone https://github.com/usuario/repositorio.git

# Navegue até o diretório do repositório clonado
cd repositorio
```

## 4. Enviar alterações para um repositório remoto

Depois de fazer alterações nos arquivos do seu repositório, siga os passos abaixo para enviá-las para o GitHub:

```bash
# Verificar o status das alterações
git status

# Adicionar os arquivos modificados ao stage
git add .

# Fazer o commit das alterações com uma mensagem
git commit -m "Descrição das alterações"

# Enviar as alterações para o repositório remoto
git push origin main
```

**Nota:** Substitua `main` pelo nome da branch que você está utilizando, caso não seja a `main`.

## 5. Atualização do repositório local

Para garantir que o repositório local está atualizado com as alterações do repositório remoto:

```bash
# Puxar as últimas alterações do repositório remoto
git pull origin main
```

## 6. Referências

Aqui estão algumas referências úteis para você aprender mais sobre Git:

- [Documentação Oficial do Git](https://git-scm.com/doc)
- [Pro Git Book (em inglês)](https://git-scm.com/book/en/v2)
- [GitHub Docs](https://docs.github.com/)