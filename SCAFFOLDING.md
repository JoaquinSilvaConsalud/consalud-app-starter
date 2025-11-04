# 🚀 Consalud App Starter - Scaffolding Guide

Este starter incluye un sistema completo de scaffolding para acelerar el desarrollo de aplicaciones React en Consalud.

## 📋 Scripts Disponibles

### Generadores Principales

```bash
# Generador interactivo completo
npm run generate

# Generadores específicos
npm run generate:component  # Crear componente
npm run generate:page       # Crear página/ruta
npm run generate:hook       # Crear hook personalizado
npm run generate:util       # Crear utilidad
```

## 🧩 Generador de Componentes

```bash
npm run generate:component
```

**Opciones disponibles:**
- **Tipo de componente:**
  - Functional Component (por defecto)
  - Class Component
  - Component with Props Interface
- **Archivos incluidos:**
  - Test file (opcional)
  - Storybook story (opcional)

**Estructura generada:**
```
src/components/MyComponent/
├── MyComponent.tsx
├── index.ts
├── MyComponent.test.tsx (opcional)
└── MyComponent.stories.tsx (opcional)
```

## 📄 Generador de Páginas

```bash
npm run generate:page
```

**Características:**
- Configuración automática de rutas
- Integración con React Router
- Layout wrapper opcional
- Archivos de test incluidos

**Estructura generada:**
```
src/pages/MyPage/
├── MyPage.tsx
└── index.ts
```

## 🎣 Generador de Hooks

```bash
npm run generate:hook
```

**Tipos de hooks disponibles:**
- **State Hook** - Manejo de estado local
- **Effect Hook** - Lógica de efectos secundarios
- **API Hook** - Integración con APIs
- **Custom Logic Hook** - Lógica personalizada

**Estructura generada:**
```
src/hooks/
├── useMyHook.ts
└── useMyHook.test.ts (opcional)
```

## 🛠️ Generador de Utilidades

```bash
npm run generate:util
```

**Tipos de utilidades:**
- **Data Formatting** - Formateo de datos
- **API Helper** - Ayudantes para APIs
- **Validation** - Funciones de validación
- **General Utility** - Utilidades generales

**Estructura generada:**
```
src/utils/
├── myUtil.ts
└── myUtil.test.ts (opcional)
```

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
│   ├── useMyHook.ts
│   └── useMyHook.test.ts
├── utils/              # Funciones utilitarias
│   ├── myUtil.ts
│   └── myUtil.test.ts
├── contexts/           # Contextos de React
├── stores/             # Estado global (Zustand)
├── api/                # Cliente API
├── types/              # Definiciones TypeScript
├── router/             # Configuración de rutas
└── assets/             # Recursos estáticos
```

## 🔧 Configuración Avanzada

### Personalizar Templates

Los templates están en la carpeta `templates/`. Puedes modificar los archivos `.hbs` para personalizar la generación de código.

### Agregar Nuevos Generadores

Edita `plopfile.js` para agregar nuevos generadores:

```javascript
plop.setGenerator('mi-generador', {
  description: 'Mi generador personalizado',
  prompts: [
    // Prompts aquí
  ],
  actions: [
    // Acciones aquí
  ]
});
```

## 📚 Ejemplos de Uso

### Crear un Componente de Botón
```bash
npm run generate:component
# Nombre: Button
# Tipo: Component with Props Interface
# Incluir test: Sí
```

### Crear una Página de Usuario
```bash
npm run generate:page
# Nombre: UserProfile
# Ruta: /user/:id
# Incluir layout: Sí
```

### Crear un Hook de API
```bash
npm run generate:hook
# Nombre: useUserData
# Tipo: API Hook
# Incluir test: Sí
```

## 🚀 Flujo de Trabajo Recomendado

1. **Crear componentes base:**
   ```bash
   npm run generate:component
   ```

3. **Crear páginas principales:**
   ```bash
   npm run generate:page
   ```

4. **Agregar hooks personalizados:**
   ```bash
   npm run generate:hook
   ```

5. **Crear utilidades:**
   ```bash
   npm run generate:util
   ```

## 🎨 Personalización

### Modificar Estilos
- Edita `tailwind.config.js` para personalizar TailwindCSS
- Modifica `src/index.css` para estilos globales

### Agregar Dependencias
```bash
npm install nueva-dependencia
```

### Configurar ESLint/Prettier
- Edita `.eslintrc.cjs` para reglas de ESLint
- Edita `.prettierrc` para configuración de Prettier

## 📖 Documentación Adicional

- [React Router](https://reactrouter.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Plop.js](https://plopjs.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature
3. Haz commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

MIT
