import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title font-minecraft">Contacto</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nombre" required className="form-input" />
        <input type="email" placeholder="Correo electrónico" required className="form-input" />
        <textarea placeholder="Mensaje" rows="5" required className="form-textarea"></textarea>
        <button type="submit" className="form-button font-minecraft">Enviar</button>
      </form>
    </section>
  );
}