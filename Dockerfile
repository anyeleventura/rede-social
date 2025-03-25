# Definindo a imagem base do Node.js
FROM node:22

# Criando o diretório no contêiner para armazenar o aplicativo
WORKDIR /back

# Copiando os arquivos package.json e package-lock.json (ou yarn.lock) para o contêiner
COPY package*.json ./

# Instalando as dependências do Node.js dentro do contêiner
RUN npm install

# Copiando o restante dos arquivos do projeto para o contêiner
COPY . .

# Expondo a porta que o aplicativo irá rodar
EXPOSE 5000

# Definindo o comando para rodar o aplicativo
CMD ["npm", "start"]