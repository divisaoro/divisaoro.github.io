<template>
  <main>
        <div class="container-fluid" id="divisa">
          <div class="row margin-top align-items-center" id="advanced-store" style="margin-top: 10%">
            <div class="col-md ">
              <h1 class="text-center">DiVisa Oro | beats & prod</h1>
              <p class="text-center">
                  <a class="btn btn-outline-light" href="#beats">Ver Mas</a>
              </p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/divisaoro.png" alt="" width="70%">
            </div>
          </div>
        </div>

        <div class="container-fluid" id="beats">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm d-none d-md-block d-lg-block d-xl-block">
              <div class="d-flex justify-content-center"><img src="/icon/beatmeker.png" alt="" width="70%"></div>
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                 Beat Service 
              </h1>
              <p>
              Creación de beat personalizado a sus requisitos, adaptando la estructura para la finalidad que le des. Estaré en continuo contacto para poder tenerlo en el menor tiempo posible, Cualquier duda déjame saberlo.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/beatmeker.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="mezcla">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm">
              <h1 class="text-center">Mezcla</h1>
              <p>Depurare la producción, logrando cohesión entre los instrumentos, ayudando a transmitir el mensaje que quieres dar. Estaremos en continuo contacto para poder ayudarte en el menor tiempo posible. Cualquier duda déjame saberlo.</p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/mexcla.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="produccion">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm d-none d-md-block d-lg-block d-xl-block">
              <div class="d-flex justify-content-center"><img src="/icon/produccion.png" alt="" width="70%"></div>
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                Produccion 
              </h1>
              <p>
              Le dare foma a tu cacion, haciendola que suene acorde a el mensaje que quieres dar, y que sea competiva, teniendo la calidad adecuada. Estaremos en continuo contacto para poder ayudarte en el menor tiempo posible. Cualquier duda dejame saberlo.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/produccion.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="mezcla-mastering">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm">
              <h1 class="text-center">Mezcla & Mastering</h1>
              <p>
              Depurare la produccion, logrando cohecion entre los instrumentos, ayudando a trasmitir el mensaje que quieres dar, ademas llevare a tu cancion al siguiente nivel, tener esa potencia y hacerse notar. Estaremos en continuo contacto para poder ayudarte en el menor tiempo posible. Cualquier duda dejame saberlo.
              </p>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <img src="/icon/mezclaYMastering.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="mezcla-mastering-produccion">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm d-none d-md-block d-lg-block d-xl-block">
              <div class="d-flex justify-content-center"><img src="/icon/mezclaYMasteringYProduccion.png" alt="" width="70%"></div>
            </div>
            <div class="col-sm">
              <h1 class="text-center">
                Mezcla & Mastering & Producción
              </h1>
              <p>
 Le dará forma a tu canción, haciendo que suene acorde a el mensaje que quieres dar. Será competitiva, teniendo la calidad adecuada, logrando cohesión entre los instrumentos, y la producción. Llevaré la canción al siguiente nivel, le daré potencia para hacerla destacar. Estaremos en continuo contacto para poder ayudarte en el menor tiempo posible. Cualquier duda déjame saberlo.
              </p>
            </div>
            <div class="col-sm d-block d-sm-none d-flex justify-content-center">
              <img src="/icon/mezclaYMasteringYProduccion.png" alt="" width="70%">
            </div>
          </div>
        </div>
        <div class="container-fluid" id="contacto">
          <div class="row margin-top align-items-center" style="margin-top: 10%">
            <div class="col-sm ">
              <h1 class="text-center">
                Contacto
              </h1>
            </div>
          </div>
          <div class="row aling-items-center">
            <div class="col-sm d-flex justify-content-center">
              <Contacto></Contacto>  
            </div>
          </div>
        </div>
        <Footer></Footer>
    </main>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Contacto from '@/components/Contacto.vue';

export default {
  name: "Home",
  components:{ 
    Footer,
    Contacto
  }
};
</script>
