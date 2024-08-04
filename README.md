<h1 align="center">
    NPM Config Packages
</h1>

## Como usar os pacotes

Primeiro precisamos gerar um token de acesso do github para os pacotes. Esse token deve ser criado individualmente por usuário, e para isso basta seguir o caminho:

Github > Settings > Developer Settings > Personal Access Tokens > Tokens (Classic)

No scopo do token basta setar acesso de leitura de pacotes "read:packages", e gerar o token!

Após gerar o token, precisamos configurar o arquivo `.npmrc` na raiz do projeto com o conteúdo:

```
registry=https://registry.npmjs.org
@inspira-legal:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<ACCESS_TOKEN>
```

> Lembrando que esse arquivo _deve_ estar listado no `.gitignore`.

E ta pronto o sorvetinho! Agora comandos como `yarn add -D @inspira-legal/<pacote>` já devem funcionar :)

Não esquece de configurar o CI! Lá o access token é o `GITHUB_TOKEN`! 😛

Ao usar o [Setup Node](https://github.com/actions/setup-node) checar [docs](https://github.com/actions/setup-node#usage).
