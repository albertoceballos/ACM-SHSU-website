$(window).bind("resize", function(){
  console.log($(this).width())
  if($(this).width()<600){
    $('#image').removeClass('col-xs-2').addClass('col-xs-3');
    $('#title').removeClass('col-xs-10').addClass('col-xs-9');
    $('#location').removeClass('col-xs-10').addClass('col-xs-9');
    $('#description').removeClass('col-xs-offset-2').addClass('col-xs-offset-3');
  }else{
    $('#image').removeClass('col-xs-3').addClass('col-xs-2');
    $('#title').removeClass('col-xs-9').addClass('col-xs-10');
    $('#location').removeClass('col-xs-9').addClass('col-xs-10');
    $('#description').removeClass('col-xs-offset-3').addClass('col-xs-offset-2');
  }
}).trigger('resize');

$("#social").click(function(){
  append('socialyear','test2','test3','social','location','description');
});

function append(year,month,day,title,location,description){
  var change =$("#template").html();
  var clone = $("#template").html();
  change=change.replace(/{year}/,year);
  change=change.replace(/{month}/,month);
  change=change.replace(/{day}/,day);
  change=change.replace(/{Title}/,title);
  change=change.replace(/{Location}/,location);
  change=change.replace(/{Description}/,description);
  var div = document.createElement("li");
  div.className+= "Events-list-item";
  div.insertAdjacentHTML('beforeend',change);
  var div2 = document.createElement('li');
  div2.className+= "Events-list-item";
  div2.id="template";
  div2.style.display="none";
  div2.insertAdjacentHTML('beforeend',clone);
  $(".Events-list").empty();
  $(".Events-list").append(div);
  $(".Events-list").append(div2);
}

$("#scholastics").click(function(){
  append('schoolyear','test2','test3','scholastics','test5','test6');
});

$("#conferences").click(function(){
  append('confyear','test2','test3','conferences','test5','test6');
});
