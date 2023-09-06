# Étape de développement
FROM node:18-alpine as dev

# Définit l'utilisateur "node" pour les opérations suivantes
USER node

# Définit le répertoire de travail pour les opérations suivantes
WORKDIR /develop

# Expose le port 5000 pour les connexions entrantes (si votre application utilise ce port)
EXPOSE 5000

# Étape de production
FROM node:18-alpine as prod

# Définit à nouveau l'utilisateur "node" pour les opérations suivantes
USER node

# Définit le répertoire de travail pour les opérations suivantes
WORKDIR /prod

# Copie tous les fichiers du contexte de construction dans le répertoire de travail
COPY . .

# Installe les dépendances Node.js à partir du fichier package.json
RUN npm ci