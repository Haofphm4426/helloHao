function headerNav(navSearchItem, navSearchItems, lineHeader, appElement) {
    

    lineHeader.style.left = ((navSearchItem.offsetWidth / 2) + navSearchItem.offsetLeft)  + 'px';

    navSearchItems.forEach(function(item) {
        item.onclick = function(e) {
            e.stopPropagation();
            navSearchItem.classList.remove('navbar-with-search-item-active')
            item.classList.add('navbar-with-search-item-active');
            navSearchItem = document.querySelector('.navbar-with-search-item.navbar-with-search-item-active');

            lineHeader.style.left = ((navSearchItem.offsetWidth / 2) + navSearchItem.offsetLeft)  + 'px';

        }
    })
    
}

function headerForm(headerFormItems, headerFormList, appElement, a) {
    var headerInput = document.getElementById('header-form-item-input');
    headerInput.onclick = function(e) {
        e.stopPropagation();
    }

    a = a + 10;
    console.log(a);

    for(var i = 0; i < headerFormItems.length; i++){
        headerFormItems[i].onclick = function(e) {
            e.stopPropagation();
            if(document.querySelector('.header-form-item-info--active')) {
                document.querySelector('.header-form-item-info--active').classList.remove('header-form-item-info--active');
            }
            headerFormList.classList.add('header-form-list-onclick');
            this.querySelector('.header-form-item-info').classList.add('header-form-item-info--active');
        }  
    }
    appElement.onclick = function() {
        headerFormList.classList.remove('header-form-list-onclick'); 
        document.querySelector('.header-form-item-info--active').classList.remove('header-form-item-info--active');

    }
}

function header() {
    var navSearchItem = document.querySelector('.navbar-with-search-item.navbar-with-search-item-active');
    var navSearchItems = document.querySelectorAll('.navbar-with-search-item');
    var lineHeader = document.querySelector('.navbar-with-search .line');

    var headerFormItems = document.querySelectorAll('.header-form-list--active .header-form-item');
    var headerFormList = document.querySelector('.header-form-list.header-form-list--active');
    var appElement = document.getElementById('app');

    var a = 5;

    headerNav(navSearchItem, navSearchItems, lineHeader, appElement);
    headerForm(headerFormItems, headerFormList, appElement, a);
    console.log(a);

}

function start() {
    header();
}









