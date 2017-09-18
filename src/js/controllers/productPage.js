import $ from 'jquery';

function productPageController(){

  let vm = this;
  function start(){
  var key = "cgk93ilgko6up2fagzqgzrhe";
  var shopName= "PirulasShop";

  getInfo();

  function getInfo(data, callback){
    $.ajax({
          url: "https://openapi.etsy.com/v2/shops/" + shopName + "/listings/active.js?api_key=" + key + "&includes=MainImage&fields=url,price,title,shop_section_id,description&limit=100",
          dataType: 'jsonp',
          success: function(data){
            var info = data.results;
            console.log(info)
            listInfo(info);
          }
        });
      };

      function listInfo(info){
        for (var i=0; i<info.length; i++){
          $(".contentContainer").append(`
            <div class="productImage"><img src="${info[i].MainImage.url_fullxfull}"/></div>
            <div>${info[i].title} $${info[i].price}</div>
            <div>${info[i].description}</div>`)
          console.log("hello");
        }
      }

    }

  start();

}

export default productPageController;
