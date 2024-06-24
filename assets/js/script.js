const ventaPropiedades = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    ubicacion: "123 Luxury av, Ricardo Goycochea, CA 45678",
    habitaciones: "4 habitaciones",
    baños: "4 baños",
    costo: "5.000",
    smoke: true,
    pets: false,
    index: true,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    ubicacion: "789 carretera Austral, CA 23456",
    habitaciones: "2 habitaciones",
    baños: "1 baño",
    costo: "1.200",
    smoke: true,
    pets: true,
    index: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    ubicacion: "km 45 Ruta 56 ,Caburga, CA 56789",
    habitaciones: "8 habitaciones",
    baños: "9 baños",
    costo: "4.500",
    smoke: true,
    pets: true,
    index: true,
  },
];

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
]
const ventaContainer = document.querySelector("#ventaPropiedad");
var ventas = "";
var counter = 0;

for (let venta of ventaPropiedades) {
    ventas += `<div class="col-md-4 mb-4">
              <div class="card">
                <img src = " ${venta.src} "
                      class="card-img-top"
                      alt="Imagen del departamento" />
                      <div class="card-body">
                          <h5 class="card-title">
                              ${venta.nombre}
                          </h5>
                          <p class="card-text">
                              ${venta.descripcion}
                          </p>
                          <p>
                              <i class="fas fa-map-marker-alt" ></i>
                          ${venta.ubicacion} </p>
                          <p>
                              <i class="fas fa-bed"></i> ${venta.habitaciones} |
                              <i class="fas fa-bath"></i>  ${venta.baños}
                          </p>
                          <p><i class="fas fa-dollar-sign"></i>${
                            venta.costo
                          }</p>
                          ${
                            venta.smoke
                              ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                              : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar
                  </p>`
                          }
                          ${
                            venta.pets
                              ? ` <p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>`
                              : `<p class="text-danger"><i class="fa-solid fa-ban"></i>No se permiten mascotas </p>`
                          }
                      </div> 
                      </div>    
                      </div>`;
}
ventaContainer.innerHTML = ventas;

const alquilerContainer = document.querySelector("#alquilerPropiedad");
var alquileres = "";

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