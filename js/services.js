class Services {

    render() {
        let htmlWorks = '';
      
        WORKS.forEach(({ id, name, slide, img1, img2, img3, img4 }) => {
            htmlWorks += `
            <li class="card-product col-auto">
                <div class="works-shape-outer octagon">
                    <div class="works-shape-inner octagon">
                        <a class="display" 
                        data-caption="${name}"
                        data-fancybox="${slide}"
                        href="${img1}"> 
                            <img class="rounded" src="${img1}">
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
                            data-fancybox="gallery-works1"
                            href="${img4}"> 
                                <img class="rounded" src="${img4}">
                            </a>
                    </div>
                </div>
                <div class="name-card works">
                    <p>${name}</p>
                </div>
            </li>
            `;
            
        });

        const html = `
            <h1> Последние работы</h1>
                <div class="container-work">
                    <ul class="row row-cols-auto row-cols-md-auto g-auto justify-content-center">
                        ${htmlWorks}
                    </ul>
                </div>
                <div class="onward">
                    <a href="/html/metalloobrabotka.html"> Далее &rArr;</a>
                </div>    
        `;

        ROOT_SERVICES.innerHTML = html;
    }
   

    };

const productsPage = new Services();
productsPage.render();


