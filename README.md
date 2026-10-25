# Portafolio Interactivo 3D | Juan Martín (Mitin)

Este es el repositorio de mi portafolio web usando modelos 3D. Lo he diseñado integrando una experiencia visual inmersiva en el frontend. El principal atractivo es un Header interactivo construido con modelos 3D, animaciones fluidas y geometrías que reaccionan al cursor, todo renderizado en tiempo real.
El proyecto no es el portafolio final personal, es un trabajo realizado para la clase desarrollo web en mi universidad.

## Características Principales

* **Hero 3D Interactivo:** Integración de un modelo 3D animado (formato FBX) para dar vida a la pantalla de bienvenida.
* **Geometría Reactiva:** Partículas flotantes (icosaedros) animadas mediante el ciclo de renderizado (`useFrame`) que levitan, rotan y cambian de escala y color al interactuar con el mouse.
* **Iluminación Personalizada:** Configuración de luces ambientales, direccionales y de punto (PointLights) para resaltar el modelo con mi paleta de colores.
* **Diseño Responsivo:** Layout adaptativo usando Tailwind CSS y Flexbox/Grid para asegurar una experiencia fluida tanto en escritorio (pantalla dividida 50/50) como en dispositivos móviles (apilado vertical).
* **Navegación Fluida:** Barra de navegación superior fija con menú hamburguesa y smooth scrolling hacia las secciones "Sobre Mí", "Proyectos" y "Contacto".
* **Tipografía Híbrida:** Contraste entre fuentes modernas sans-serif para la legibilidad y tipografía estilo 8-bits (`Press Start 2P`) para los encabezados.

## Tecnologías Utilizadas

* **Core:** React, Vite, JavaScript
* **Estilos:** Tailwind CSS, CSS3 modular por componente
* **Renderizado 3D:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)

Made with ❤️ by Mitin726