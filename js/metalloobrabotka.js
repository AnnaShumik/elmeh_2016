class Metalloobrabotka {

    render() {
        let htmlCatalog = '';
      
        CATALOG.forEach(({ id, name, slide, img1, img2, img3, img4 }) => {
            htmlCatalog += `
            <li class="card-product col-auto col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-10">
                <div class="shape">
                    <div class="name-card work"> 
                        <a class="display"
                        data-caption= "${name}"
                        data-fancybox="${slide}"
                        href="${img1}">
                            <img class="rounded" src="${img1}"> 
                            <p>${name}</p> 
                        </a>
                            <!--дополнительные фото-->
                            <a class="none"
                            data-caption="${name}"
                            data-fancybox="${slide}"
                            href="${img2}">
                                <img class="rounded" src="${img2}">
                            </a>
                            <a class="none"
                            data-caption="${name}"
                            data-fancybox="${slide}"
                            href="${img3}">
                                <img class="rounded" src="${img3}">
                            </a>
                            <a class="none"
                            data-caption="${name}"
                            data-fancybox="${slide}"
                            href="${img4}">
                                <img class="rounded" src="${img4}">
                            </a>
                    </div>
                </div>
            </li>
            `;
            
        });

        const html = `
            <ul class="row row-cols-auto row-cols-md-auto g-auto justify-content-center">
                ${htmlCatalog}
            </ul>
            <div id="pagination-container"></div>
        `;

        ROOT_METALOOBRABOTKA.innerHTML = html;
    }
   

    };

const productsPage = new Metalloobrabotka();
productsPage.render();


