export default function (plop) {
  // Component generator
  plop.setGenerator('component', {
    description: 'Crear un nuevo componente React',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del componente (PascalCase):',
        validate: (input) => {
          if (!input) return 'El nombre del componente es requerido';
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'El nombre del componente debe ser PascalCase';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'Tipo de componente:',
        choices: [
          { name: 'Componente Funcional', value: 'functional' },
          { name: 'Componente de Clase', value: 'class' },
          { name: 'Componente con Interfaz de Props', value: 'with-props' },
          { name: 'Componente Consalud UI (con librerías @consalud)', value: 'consalud-example' }
        ]
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: '¿Incluir archivo de prueba?',
        default: true
      },
      {
        type: 'confirm',
        name: 'withStory',
        message: '¿Incluir historia de Storybook?',
        default: false
      },
      {
        type: 'confirm',
        name: 'withZustand',
        message: '¿Incluir uso de store Zustand?',
        default: false
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/{{type}}.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
          templateFile: 'templates/component/{{type}}.css.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/component/index.hbs'
        }
      ];

      if (data.withTest) {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/component/test.hbs'
        });
      }

      if (data.withStory) {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/component/story.hbs'
        });
      }

      return actions;
    }
  });

  // Page generator
  plop.setGenerator('page', {
    description: 'Crear una nueva página/ruta',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de la página (PascalCase):',
        validate: (input) => {
          if (!input) return 'El nombre de la página es requerido';
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'El nombre de la página debe ser PascalCase';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'route',
        message: 'Ruta (ej: /about, /users/:id):',
        default: (answers) => `/${answers.name.toLowerCase()}`
      },
      {
        type: 'list',
        name: 'type',
        message: 'Tipo de página:',
        choices: [
          { name: 'Página básica', value: 'basic' },
          { name: 'Tabla', value: 'table' },
          { name: 'Formulario', value: 'form' },
          { name: 'Documento', value: 'document' },
          { name: 'Grid de Cards', value: 'grid' }
        ],
        default: 'basic'
      },
      {
        type: 'confirm',
        name: 'withLayout',
        message: '¿Incluir wrapper de layout?',
        default: true
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: '¿Incluir archivo de prueba?',
        default: true
      },
      {
        type: 'confirm',
        name: 'withZustand',
        message: '¿Incluir uso de store Zustand?',
        default: false
      }
    ],
    actions: (data) => {
      const pageTemplate = data.type === 'basic' ? 'page.hbs' : `page-${data.type}.hbs`;
      const cssTemplate = data.type === 'basic' ? 'page.css.hbs' : `page-${data.type}.css.hbs`;
      
      return [
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: `templates/page/${pageTemplate}`
        },
        {
          type: 'add',
          path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.css',
          templateFile: `templates/page/${cssTemplate}`
        },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.ts',
        templateFile: 'templates/page/index.hbs'
      },
      {
        type: 'modify',
        path: 'src/router/index.tsx',
        pattern: /(import Home from)/,
        template: '$1 \'../pages/Home\';\nimport {{pascalCase name}} from \'../pages/{{pascalCase name}}\';'
      },
      {
        type: 'modify',
        path: 'src/router/index.tsx',
        pattern: /(\/\/ Add new routes here)/,
        template: '$1\n  {\n    path: \'{{route}}\',\n    element: <{{pascalCase name}} />\n  },'
      }
      ];
    }
  });

  // Hook generator
  plop.setGenerator('hook', {
    description: 'Crear un nuevo hook personalizado',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre del hook (camelCase, sin prefijo "use"):',
        validate: (input) => {
          if (!input) return 'El nombre del hook es requerido';
          if (!/^[a-z][a-zA-Z0-9]*$/.test(input)) {
            return 'El nombre del hook debe ser camelCase';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'Tipo de hook:',
        choices: [
          { name: 'Hook de Estado', value: 'state' },
          { name: 'Hook de Efecto', value: 'effect' },
          { name: 'Hook de API', value: 'api' },
          { name: 'Hook de Lógica Personalizada', value: 'custom' }
        ]
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: '¿Incluir archivo de prueba?',
        default: true
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/hooks/use{{pascalCase name}}.ts',
          templateFile: 'templates/hook/{{type}}.hbs'
        }
      ];

      if (data.withTest) {
        actions.push({
          type: 'add',
          path: 'src/hooks/use{{pascalCase name}}.test.ts',
          templateFile: 'templates/hook/test.hbs'
        });
      }

      return actions;
    }
  });

  // Utility generator
  plop.setGenerator('util', {
    description: 'Crear una nueva función de utilidad',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de la utilidad (camelCase):',
        validate: (input) => {
          if (!input) return 'El nombre de la utilidad es requerido';
          if (!/^[a-z][a-zA-Z0-9]*$/.test(input)) {
            return 'El nombre de la utilidad debe ser camelCase';
          }
          return true;
        }
      },
      {
        type: 'list',
        name: 'type',
        message: 'Tipo de utilidad:',
        choices: [
          { name: 'Formato de Datos', value: 'format' },
          { name: 'Ayudante de API', value: 'api' },
          { name: 'Validación', value: 'validation' },
          { name: 'Utilidad General', value: 'general' }
        ]
      },
      {
        type: 'confirm',
        name: 'withTest',
        message: '¿Incluir archivo de prueba?',
        default: true
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: 'src/utils/{{camelCase name}}.ts',
          templateFile: 'templates/util/{{type}}.hbs'
        }
      ];

      if (data.withTest) {
        actions.push({
          type: 'add',
          path: 'src/utils/{{camelCase name}}.test.ts',
          templateFile: 'templates/util/test.hbs'
        });
      }

      return actions;
    }
  });

  
}
