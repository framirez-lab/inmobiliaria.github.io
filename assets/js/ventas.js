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
  
  const ventaContainer = document.querySelector("#propiedad");
  var ventas = "";
  
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