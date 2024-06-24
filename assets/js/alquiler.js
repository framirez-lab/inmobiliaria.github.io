const alquilerPropiedades = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño:2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baño:3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baño:2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Luxury Villa Espectacular',
        src: './assets/img/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg',
        descripcion: 'Este elegante casa con una picina que te sorprendera',
        ubicacion: 'Los chiguaguas, Asterdam 3095',
        habitaciones: 5,
        baño:3,
        costo: 22200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Sento Domeyko',
        src: './assets/img/SentoDomeiko.jpeg',
        descripcion: 'Este elegante departamento moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Santiago, Domeyko N° 2055',
        habitaciones: 2,
        baño:1,
        costo: 2500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Jofre 135',
        src: './assets/img/Jofre.png',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: 'Santiago, Jofre N° 135',
        habitaciones: 2,
        baño:1,
        costo: 1200,
        smoke: false,
        pets: false
    },
]

const alquilerContainer = document.querySelector("#alquilerPropiedad");
var alquileres = "";
var counter = 0;

for (let alquiler of alquilerPropiedades) {
  alquileres += `<div class="col-md-4 mb-4">
            <div class="card">
              <img src = " ${alquiler.src} "
                    class="card-img-top"
                    alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${alquiler.nombre}
                        </h5>
                        <p class="card-text">
                            ${alquiler.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt" ></i>
                        ${alquiler.ubicacion} </p>
                        <p>
                            <i class="fas fa-bed"></i> ${alquiler.habitaciones} |
                            <i class="fas fa-bath"></i>  ${alquiler.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i>${alquiler.costo}</p>
                        ${
                            alquiler.smoke
                            ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                            : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
                        }
                        ${
                            alquiler.pets
                            ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                            : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                        }
                    </div> 
                    </div>    
                    </div>`;
}

alquilerContainer.innerHTML = alquileres