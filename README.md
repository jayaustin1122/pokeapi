# 📱 PokeAPI React Native App (Clean Architecture)

A **React Native (Expo)** application that consumes the **PokeAPI** and follows **Clean Architecture principles** for scalability, maintainability, and better code organization.

---

## 🚀 Overview

This project is built for **learning and practicing Clean Architecture** in a React Native environment.

It demonstrates how to:

* Separate concerns using layers
* Manage API calls cleanly using Axios
* Structure a scalable mobile application
* Implement navigation and detail screens

---

## 🧠 Architecture

This app follows **Clean Architecture**, dividing the project into clear layers:

```bash
Presentation → Domain → Data → Core
```

### 🔹 Presentation Layer

* UI (Screens, Components)
* Navigation
* Handles user interaction

### 🔹 Domain Layer

* Business logic
* Use cases
* Repository interfaces

### 🔹 Data Layer

* API calls (PokeAPI)
* Repository implementations
* Data mapping

### 🔹 Core Layer

* Shared utilities (Axios, constants)

---

## 🗂️ Project Structure

> ⚠️ This project uses Expo (no `src` folder)

```bash
app/
├── presentation/
│  
│
├── domain/
│   ├── models/
│   │   └── Pokemon.ts
│   ├── repositories/
│   │   └── PokemonRepository.ts
│   └── usecases/
│       ├── GetPokemonList.ts
│       └── GetPokemonDetail.ts
│
├── data/
│   ├── datasources/
│   │   └── PokemonApi.ts
│   ├── repositories/
│   │   └── PokemonRepositoryImpl.ts
│   └── mappers/
│       └── PokemonMapper.ts
│
├── core/
│   ├── network/
│   │   └── axiosInstance.ts
│   └── constants/
│       └── ApiConstants.ts
│
└── App.tsx
```

---

## ✨ Features

* 📋 Pokémon List
* 🔍 Pokémon Details Screen
* 🖼️ Pokémon Images
* 📊 Stats (HP, Attack, Defense, etc.)
* 🔄 Clean Architecture implementation

---

## 📦 Tech Stack

* React Native (Expo)
* TypeScript
* Axios
* React Navigation

---

## 🧪 Future Improvements

* 🔎 Search Pokémon
* ⭐ Favorites feature
* 📡 Offline caching
* 🧪 Unit testing (Jest)
* 🎨 UI/UX improvements

---

## 📸 Screenshots

> *(Not available for now)*

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Created for practicing **Clean Architecture in React Native**.
