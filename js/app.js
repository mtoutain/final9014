"use strict"

var app = {
  pages: [],
  links: [],
  init: function(){
    app.pages = document.querySelectorAll('[data-role="page"]');
    app.links = document.querySelectorAll('[data-role="links"]');
        
    [].forEach.call(app.links, function(item){
      item.addEventListener("click", app.nav);
      console.log(item.href);
    });
  },
  nav: function(ev){
    ev.preventDefault();  //stop the link from doing anything
    console.log("clicked");
    var item = ev.currentTarget;  //the anchor tag
    var href = item.href;  //the href attribute
    var id = href.split("#")[1];  //just the letter to the right of "#"
    
    [].forEach.call(app.pages, function(item){
      if( item.id == id){
        item.className = "active";
      }else{
        item.className = "";
      }
    });
  }
  
}
 app.init();
