# Bankly Open Api Schemas

O Bankly Open API Schemas é fortemente baseado no [OpenAPI Specification 3*](https://swagger.io/specification) (OAS). Nossas APIs buscam aplicar a melhor interpretação da arquitetura REST.


![validate](https://github.com/acesso-bankly/open-api/actions/workflows/review.yaml/badge.svg)


# Executando o projeto local

```
$ git clone https://github.com/acesso-bankly/open-api.git && cd ./open-api
```

```
$ npm install && npm start
```

## Abrindo um editor

```
$ npm run edit:{api}
```

{apis}:

- oauth
- documents
- holders
- accounts
- cards
- pix
- ted
- boletos
- paybill
- events
- helpers

**⚠️ IMPORTANTE! Não é possível editar duas APIs ao mesmo tempo.**


# Como contribuir

### **Passo 1:** 

Crie uma branch com um dos prefixos: _feature/_ , _enhancement/_ ou _fix/_ 

Ex: 

- feature/adiciona-idempotency-header
- enhancement/descricao-api-version
- fix/descricao-api-version

**⚠️ IMPORTANTE! Branchs que não respeitarem a convenção proposta acima não serão revisadas.**

### **Passo 2:**  

Utilizando o Swagger Editor, é possível ver a renderização do arquivo (Open Api) no momento da alteração. 
Para utilizá-lo, dentro da pasta dos arquivos, abra um prompt de comando e digite: npm run edit:{api}. No browser, a página do editor abrirá no endereço ```http://127.0.0.1:{porta}/?url=/oas/spec``` 

### **Passo 3:**  

Após fazer as atualizações, commit as mudanças e submeta um Pull Request apontando para a branch **develop**.

**🗒️ DICA! Faça commits pequenos e centrados na alteração que está propondo.**

### **Passo 4:**  

Ajude-nos a manter nossa documentação atualizada, caso tenha comentários e sugestões, envie seu Pull Request!


# Ferramentas

## Importando no Postman

### API Specification

### API Collection

# Convenções

## **Tags:**

**Beta:** 

```html
<span class="bkly-ref-small-beta-tag">beta</span>
```

A tag _beta_ define que o endpoint da API está em aprimoramento e poderá sofrer alterações que gerem breaking changes.

---

**Stable:**

```html
<span class="bkly-ref-small-stable-tag">stable</span>
```

A tag _stable_ define que o endpoint da API é estável e não sofrerá alterações que geram breaking changes.

---

**Deprecated:**

```html
<span class="bkly-ref-small-deprecated-tag">deprecated</span>
```

A tag _deprecated_ define que o endpoint da API está obsoleto e foi substituído por outro.

---

**Scope**

```html
<span class="bkly-ref-scope-tag">scope: {{scope}}/span>
```

A tag _scope_ define qual é o scope requerido no token para acessar a API.

---

## Sistema de versão

O Bankly faz forte uso do sistema de versão semântico. No entanto, na API Pública, somente exibimos e requeremos que seja informado o major da API, através do header ```api-version```.

# Referências

[OpenAPI Specification](https://swagger.io/specification)

[REST API Tutorial](https://restfulapi.net)

[Fundamentos para sistemas com arquiteturas REST](https://arquiteturadesoftware.online/capitulos/capitulo-09)

[Versionamento Semântico 2.0.0](https://semver.org/lang/pt-BR)