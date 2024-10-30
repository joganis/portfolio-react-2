import React from 'react'

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Si deseas trabajar conmigo o tienes alguna pregunta, no dudes en enviarme un mensaje.</p>
      <form action="#" method="POST">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
