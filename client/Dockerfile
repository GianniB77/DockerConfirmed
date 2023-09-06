# Étape de développement
FROM node:18-alpine as dev

# Définit l'utilisateur "node" pour les opérations suivantes
USER node

# Définit le répertoire de travail pour les opérations suivantes
WORKDIR /develop

# Expose le port 5173 pour les connexions entrantes
EXPOSE 5173

# Étape de construction
FROM node:18-alpine as build

# Définit à nouveau l'utilisateur "node" pour les opérations suivantes
USER node

# Définit le répertoire de travail pour les opérations suivantes
WORKDIR /build

# Copie tous les fichiers du contexte de construction dans le répertoire de travail
COPY . .

# Installe les dépendances Node.js à partir du fichier package.json
RUN npm ci

# Exécute la construction du projet
RUN npm run build

# Étape de production
FROM nginx:alpine3.18-slim as prod

# Copie les fichiers générés à partir de l'étape de construction dans le répertoire d'origine de Nginx
COPY --from=build /build/dist /usr/share/nginx/html

# Expose le port 80 pour les connexions entrantes
EXPOSE 80

# Démarre le serveur Nginx en arrière-plan
CMD ["nginx", "-g", "daemon off;"] 