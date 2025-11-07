import React from 'react';
import './Home.css';

import { Card } from '../../../../consalud-ui/src/components/Card/Card';
import { Button } from '../../../../consalud-ui/src/components/Button/Button';
import Logo from '../../../../consalud-ui/src/components/Logo/Logo';


const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__header">
                    <Logo type="logo" className="home__logo" />
                    <h1 className="home__title">
                        Consalud App Starter
                    </h1>
                    <p className="home__subtitle">
                        Una aplicación React moderna construida con TypeScript y Consalud UI
                    </p>
                </div>

                <div className="home__grid">
                    <Card className="home__card">
                        <h2 className="home__card-title">Componentes</h2>
                        <p className="home__card-description">
                            Crea componentes UI reutilizables con nuestras herramientas de scaffolding
                        </p>
                        <code className="home__code">
                            npm run generate:component
                        </code>
                        <Button variant="primary" size="small" className="home__button">
                            Generar Componente
                        </Button>
                    </Card>

                    <Card className="home__card">
                        <h2 className="home__card-title">Páginas</h2>
                        <p className="home__card-description">
                            Construye páginas y rutas con configuración automática de routing
                        </p>
                        <code className="home__code">
                            npm run generate:page
                        </code>
                        <Button variant="secondary" size="small" className="home__button">
                            Generar Página
                        </Button>
                    </Card>

                    <Card className="home__card">
                        <h2 className="home__card-title">Hooks</h2>
                        <p className="home__card-description">
                            Crea hooks personalizados para lógica compartida
                        </p>
                        <code className="home__code">
                            npm run generate:hook
                        </code>
                        <Button variant="inverted" size="small" className="home__button">
                            Generar Hook
                        </Button>
                    </Card>
                </div>

                <div className="home__technologies">
                    <h2 className="home__technologies-title">Tecnologías</h2>
                    <div className="home__technologies-grid">
                        <div className="home__tech-item">
                            React
                        </div>
                        <div className="home__tech-item">
                            TypeScript
                        </div>
                        <div className="home__tech-item">
                            Vite
                        </div>
                        <div className="home__tech-item">
                            React Router
                        </div>
                        <div className="home__tech-item">
                            Zustand
                        </div>
                        <div className="home__tech-item">
                            ESLint
                        </div>
                        <div className="home__tech-item">
                            Prettier
                        </div>
                        <div className="home__tech-item">
                            Vitest
                        </div>
                        <div className="home__tech-item">
                            Plop
                        </div>
                        <div className="home__tech-item">
                            Husky
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
