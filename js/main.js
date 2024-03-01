/*слайдер*/
document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  var slider = new SimpleAdaptiveSlider('.slider', {
  autoplay: true,
  interval: 3000,
  });
  });

/*сортировка в алфавитном порядке*/
function resort(selector) {
	const nodeList = document.querySelectorAll(selector);
  const dict = {};
  const parent = nodeList[0].parentNode;
  nodeList.forEach(node => {
  	const key = node.querySelector('.name-card').innerText;
    dict[key] = node;
    node.parentNode.removeChild(node);
  });
  const keys = Object.keys(dict);
  keys.sort().forEach(k => parent.appendChild(dict[k]));
}

resort('.card-product');


/*модальное окно*/
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,
  

  Image: {
    zoom: false,
    click: false,
    wheel: "slide",
  },
});

/*пагинация слайд снизу*/
var items = $(".card-product .shape");
    var numItems = items.length;
    var perPage = 12;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });

    

