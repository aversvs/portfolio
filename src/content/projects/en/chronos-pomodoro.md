---
title: Chronos — Pomodoro timer
summary: A Pomodoro Technique timer built with React 19 and TypeScript, with automatic cycles, task history, custom settings and a countdown that stays accurate even in a background tab.
cover: /projects/chronos/cover.webp
coverAlt: Chronos home screen in the dark and light themes, with the countdown running
tags: [React 19, TypeScript, Vite, React Router, Web Worker, SCSS Modules]
role: Personal project — development
year: 2026
demo: https://chronospomodoro.vercel.app
repo: https://github.com/aversvs/chronos-pomodoro
order: 1
---

## The goal

I wanted a Pomodoro timer that works the way I like, and at the same time a way to consolidate my React studies. A Pomodoro timer looks simple, but it means handling state shared across several pages, time that has to be accurate, data persistence and many small interactions.

## The solution

You type a task name, start the timer, and Chronos guides you through focus sessions and breaks, picking the next cycle automatically.

- **Pomodoro cycles**: an 8-step sequence of focus, short breaks and one long break, with a bar showing completed, current and upcoming steps
- **History**: a sortable table with each task's duration, date, status (completed, interrupted, in progress) and type
- **Settings**: custom focus and break durations, with validation and a reset to the defaults
- **Persistence**: tasks, cycles and settings are kept after a page reload
- **Details**: light and dark themes, a sound at the end of each cycle, remaining time in the tab title, toasts and confirmation dialogs
- **Responsive and keyboard accessible**, with visible focus styles

![History page with the sortable task table](/projects/chronos/history.webp)

## A technical choice: the timer in a Web Worker

Browsers slow down `setTimeout` and `setInterval` when a tab is in the background, so a counter that subtracts one second at a time ends up drifting.

In Chronos the countdown does not decrement a counter. A Web Worker computes the remaining time from the task's start time on every tick and schedules the next tick exactly when the second changes. The time shown stays correct even after minutes in a background tab.

## Architecture

- All timer state lives in a single **reducer** (`useReducer` + Context), with explicit actions such as `START_TASK`, `INTERRUPT_TASK` and `COMPLETE_TASK`
- Cycle logic, sorting and formatting are **pure functions** kept apart from the components
- State saved in `localStorage` is **validated on load**: if it is corrupted, the app starts from the initial state instead of breaking
- **TypeScript in strict mode** and ESLint with the React hooks rules
- Routing with React Router and a static deploy on Vercel, updated automatically on every push

![Settings page with focus and break durations](/projects/chronos/settings.webp)

## Quality

Lighthouse: **100/100** for accessibility, best practices and SEO; performance **99/100 on mobile** and **100/100 on desktop** (measured in November 2026).

## My role

Full development: components, state management, Web Worker, styles, documentation and deploy.

## What I learned

This project helped me understand how state works in React: every user action changes the state, and the state decides what appears on screen. I also found out that browsers slow down timers when a tab is not in the foreground, and I solved it by moving the countdown into a Web Worker.
