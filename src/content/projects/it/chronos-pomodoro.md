---
title: Chronos — Timer Pomodoro
summary: Timer basato sulla tecnica Pomodoro, in React 19 e TypeScript, con cicli automatici, storico delle attività, impostazioni personalizzabili e un countdown preciso anche con la scheda in background.
cover: /projects/chronos/cover.webp
coverAlt: Schermata principale di Chronos nel tema scuro e nel tema chiaro, con il countdown in corso
tags: [React 19, TypeScript, Vite, React Router, Web Worker, SCSS Modules]
role: Progetto personale — sviluppo
year: 2026
demo: https://chronospomodoro.vercel.app
repo: https://github.com/aversvs/chronos-pomodoro
order: 1
---

## L'obiettivo

Volevo un timer Pomodoro fatto secondo le mie preferenze, e allo stesso tempo un modo per consolidare i miei studi di React. Un timer Pomodoro sembra semplice, ma richiede di gestire stato condiviso tra più pagine, un tempo che deve essere preciso, persistenza dei dati e tante piccole interazioni.

## La soluzione

Si scrive il nome di un'attività, si avvia il timer e Chronos guida tra sessioni di focus e pause, scegliendo automaticamente il ciclo successivo.

- **Cicli Pomodoro**: sequenza di 8 passi tra focus, pause brevi e una pausa lunga, con una barra che mostra i passi completati, quello attuale e i prossimi
- **Storico**: tabella ordinabile con durata, data, stato (completata, interrotta, in corso) e tipo di ogni attività
- **Impostazioni**: durata di focus e pause personalizzabile, con validazione e ripristino dei valori predefiniti
- **Persistenza**: attività, cicli e impostazioni restano salvati dopo il ricaricamento della pagina
- **Dettagli**: tema chiaro e scuro, suono a fine ciclo, tempo rimanente nel titolo della scheda, toast e finestre di conferma
- **Responsive e accessibile da tastiera**, con stili di focus visibili

![Pagina dello storico con la tabella ordinabile delle attività](/projects/chronos/history.webp)

## Una scelta tecnica: il timer in un Web Worker

I browser rallentano `setTimeout` e `setInterval` quando la scheda è in background, quindi un contatore che sottrae un secondo alla volta finisce per sbagliare.

In Chronos il countdown non decrementa un contatore. Un Web Worker calcola il tempo rimanente a partire dall'orario di inizio dell'attività a ogni tick e programma il tick successivo esattamente al cambio del secondo. Il tempo mostrato resta corretto anche dopo minuti con la scheda in background.

## Architettura

- Tutto lo stato del timer vive in un unico **reducer** (`useReducer` + Context), con azioni esplicite come `START_TASK`, `INTERRUPT_TASK` e `COMPLETE_TASK`
- La logica dei cicli, l'ordinamento e la formattazione sono **funzioni pure** separate dai componenti
- Lo stato salvato in `localStorage` viene **validato al caricamento**: se è corrotto, l'app riparte dallo stato iniziale invece di rompersi
- **TypeScript in modalità strict** ed ESLint con le regole degli hooks di React
- Routing con React Router e deploy statico su Vercel, aggiornato automaticamente a ogni push

![Pagina delle impostazioni con le durate di focus e pause](/projects/chronos/settings.webp)

## Qualità

Lighthouse: **100/100** in accessibilità, best practice e SEO; performance **99/100 su mobile** e **100/100 su desktop** (misurato a novembre 2026).

## Il mio ruolo

Sviluppo completo: componenti, gestione dello stato, Web Worker, stili, documentazione e deploy.

## Cosa ho imparato

Questo progetto mi ha aiutato a capire meglio come funziona lo stato in React: ogni azione dell'utente cambia lo stato, e lo stato decide cosa appare sullo schermo. Ho anche scoperto che il browser rallenta i timer quando la scheda non è in primo piano, e ho risolto il problema spostando il conteggio in un Web Worker.
