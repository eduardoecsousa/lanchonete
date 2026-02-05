# 1. imagem base
FROM node:20-alpine

# 2. diretório de trabalho
WORKDIR /app

# 3. copiar dependências
COPY package*.json ./
RUN npm install

# 4. copiar o resto
COPY . .

# 5. gerar prisma client
RUN npx prisma generate

# 6. build do Next
RUN npm run build

# 7. expor porta
EXPOSE 3000

# 8. start
CMD ["npm", "start"]
