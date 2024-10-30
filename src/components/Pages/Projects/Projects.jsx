import React from 'react'

export const Projects = () => {
  return (
    <section id="projects">
    <h2>Proyectos</h2>
    <div className="project-list">
        <div className="project">
            <h3>Conversor de Monedas</h3>
            <p>El Conversor de Monedas es una aplicación interactiva que permite a los usuarios convertir cantidades de una moneda a otra, utilizando la API de ExchangeRate para obtener las tasas de cambio actualizadas.  </p>
        </div>
        <div className="project">
            <h3> Encriptador de texto</h3>
            <p>Es Una Pagina web interactiva para cifrar y descifrar texto utilizando un conjunto de reglas específicas. La funcionalidad principal de la página se basa en la conversión de caracteres en un mensaje de entrada a un formato codificado y viceversa.</p>
        </div>
        <div className="project">
            <h3>Juego Secreto</h3>
            <p>"Número Secreto" en una página web. Los usuarios deben adivinar un número secreto generado aleatoriamente entre 1 y 100. Al ingresar un número, el juego indica si el número es mayor o menor que el secreto y cuenta los intentos.</p>
        </div>
        <div className="project">
            <h3>Tienda en Linea</h3>
            <p>Esta página web es una tienda en línea que consume datos de productos a través de la API de fakestoreapi.com. Al cargarse, realiza una llamada a la API para obtener una lista de productos disponibles. Cada producto se muestra en una tarjeta que incluye su título, imagen, categoría y precio, junto con un botón para añadirlo al carrito de compras.</p>
        </div>
        <div className="project">
            <h3>PetShop API</h3>
            <p>PetShop API es una aplicación RESTful construida con Spring Boot, que proporciona servicios para gestionar información relacionada con una tienda veterinaria. Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los recursos disponibles, como mascotas, productos veterinarios y servicios.</p>
        </div>
    </div>
</section>
  )
}
