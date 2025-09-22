# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Portfolio di Elisa Carretta

Questo progetto è stato realizzato per l’esame di **Progettazione Multimediale 2**.  
Si tratta di un sito portfolio che raccoglie i miei progetti con una struttura responsive e dinamica.  

## 🔗 Link utili
- 🌍 **Sito online**: [https://portfolio-carretta.netlify.app](https://portfolio-carretta.netlify.app)  
- 📂 **Repository GitHub**: [https://github.com/elisacarretta/portfolio-carretta](https://github.com/elisacarretta/portfolio-carretta)  

## 🛠️ Tecnologie usate
- [Vue 3](https://vuejs.org/) → framework JavaScript  
- [Vue Router](https://router.vuejs.org/) → gestione delle pagine  
- [TailwindCSS](https://tailwindcss.com/) → design responsive e utility-first  
- [Firebase Firestore](https://firebase.google.com/) → database headless per contenuti dinamici  
- [Netlify](https://www.netlify.com/) → hosting e deploy automatico da GitHub  

## 📸 Funzionalità principali
- **Homepage (Hero + Skills)** → presentazione personale con foto e competenze  
- **Portfolio** → gallery di progetti caricati dinamicamente da Firestore  
- **Dettaglio progetto** → slideshow immagini, descrizione, navigazione prev/next  
- **Navbar + Footer** → layout responsive e ottimizzato per mobile  
- **CMS headless con Firestore** → gestione dei dati dei progetti senza hardcoding  

## 📦 Installazione locale
Se vuoi eseguire il progetto in locale:  

```bash
# Clona il repository
git clone https://github.com/elisacarretta/portfolio-carretta.git

# Vai nella cartella del progetto
cd portfolio-carretta

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
