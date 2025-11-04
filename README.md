# 🚀 Consalud App Starter

Un starter moderno de React con TypeScript y herramientas de scaffolding completas para acelerar el desarrollo de aplicaciones en Consalud.

## 🛠️ Tech Stack

- **React 18** con TypeScript
- **TailwindCSS** para estilos
- **React Router** para ruteo
- **Vite** como build tool
- **Plop.js** para scaffolding
- **ESLint + Prettier** para calidad de código
- **Husky + lint-staged** para pre-commit hooks
- **Vitest** para testing

## ⚡ Quick Start

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

## 🎯 Scripts Disponibles

### Desarrollo
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Preview del build

### Calidad de Código
- `npm run lint` - Ejecutar ESLint
- `npm run format` - Formatear con Prettier
- `npm run test` - Ejecutar tests

### 🚀 Scaffolding
- `npm run generate` - Generador interactivo completo
- `npm run generate:component` - Crear componente (incluye opción Consalud UI)
- `npm run generate:page` - Crear página/ruta
- `npm run generate:hook` - Crear hook personalizado
- `npm run generate:util` - Crear utilidad

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── MyComponent/
│       ├── MyComponent.tsx
│       ├── index.ts
│       ├── MyComponent.test.tsx
│       └── MyComponent.stories.tsx
├── pages/              # Páginas de la aplicación
│   └── MyPage/
│       ├── MyPage.tsx
│       └── index.ts
├── hooks/              # Hooks personalizados
├── utils/              # Funciones utilitarias
├── contexts/           # Contextos de React
├── stores/             # Estado global (Zustand)
├── api/                # Cliente API
├── types/              # Definiciones TypeScript
├── router/             # Configuración de rutas
└── assets/             # Recursos estáticos
```

## 🧩 Ejemplos de Scaffolding

### Crear un Componente
```bash
npm run generate:component
# Nombre: Button
# Tipo: Component with Props Interface
# Incluir test: Sí
```

### Crear una Página
```bash
npm run generate:page
# Nombre: UserProfile
# Ruta: /user/:id
# Incluir layout: Sí
```

### Crear un Hook
```bash
npm run generate:hook
# Nombre: useUserData
# Tipo: API Hook
# Incluir test: Sí
```

## 🔧 Configuración

### Personalizar Templates
Los templates están en `templates/`. Modifica los archivos `.hbs` para personalizar la generación.

### Agregar Dependencias
```bash
npm install nueva-dependencia
```

## 📚 Documentación

- [Guía de Scaffolding](./SCAFFOLDING.md) - Documentación completa del sistema de scaffolding
- [React Router](https://reactrouter.com/) - Documentación de ruteo
- [Plop.js](https://plopjs.com/) - Documentación del generador

## 🏢 Consalud

Este starter está diseñado específicamente para el desarrollo de aplicaciones en Consalud, utilizando las librerías internas de la empresa:
- `@consalud/consalud-ui` - Componentes UI de Consalud
- `@consalud/consalud-utils` - Utilidades de Consalud

## 🚀 Flujo de Trabajo

1. **Clonar template**
   ```bash
   git clone <repo-url> mi-proyecto
   cd mi-proyecto
   ```

2. **Crear componentes base**
   ```bash
   npm run generate:component
   ```

4. **Crear páginas**
   ```bash
   npm run generate:page
   ```

5. **Desarrollar y testear**
   ```bash
   npm run dev
   npm run test
   ```

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agregar nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📄 Licencia

MIT
