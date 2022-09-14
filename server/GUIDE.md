# Guia de Instalações

### Gerar package.json
```bash
npm init
```

### Instalar Express
```bash
npm install express
```

### Instalar o Typescript como Dependência de Desenvolvimento
```bash
npm install typescript -D
```

### Gerar Arquivo do Typescript
```bash
npx tsc --init
```

### Instalar os @types do Typescript como Dependência de Desenvolvimento
```bash
npm install @types/express -D
```

### Instalar o ts-node-dev como Dependência de Desenvolvimento
```bash
npm install ts-node-dev -D
```

### Instalar o Prisma como Dependência de Desenvolvimento
```bash
npm install prisma -D
```

### Gerar arquivos do Prisma
```bash
npx prisma init --datasource-provider SQLite
```

### Baixar Prisma Client
```bash
npm install @prisma/client
```

### Baixar Cors
```bash
npm install cors
```

### Baixar @types do Cors
```bash
npm install @types/cors -D
```

### Rodar Prisma Studio
```bash
npx prisma studio
```


// HTTP Methods | API RESTful | HTTP Codes

/**
 * GET - Listar Informações
 * POST - Cadastrar Informações
 * PUT - Editar por Completo Informações
 * PATCH - Editar Informação específica
 * DELETE - Excluir Informações
 */

/**
 * TIPOS DE PARÂMETROS
 * Query: localhost:3333/ads?page=2&sort=title
 * Route: localhost:3333/ads/2 | localhost:3333/ads/como-criar-api-em-nodejs
 * Body: Uso de formulários, fica escondido na requisição
 */