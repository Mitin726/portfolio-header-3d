import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title font-minecraft">Proyectos</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>IndiePlay - Catálogo</h3>
          <p>Aplicación web responsiva desarrollada con React y Vite para mostrar videojuegos indie. Implementada con Flexbox, CSS Grid y desplegada en Vercel.</p>
        </div>
        <div className="project-card">
          <h3>Proyecto SinFilas</h3>
          <p>Bot para ayudar a personas a saber si sus medicamentos estan disponibles antes de ir a recogerlos. (prototipo)</p>
        </div>
        <div className="project-card">
          <h3>Bot Finanzas</h3>
          <p>bot personal que registra gastos automáticamente en Google Sheets a partir de mensajes de WhatsApp en lenguaje natural, y que además responde preguntas sobre gastos pasados.</p>
        </div>
      </div>
    </section>
  );
}