function openOfficer(evt,tab,officer){
  var target = document.getElementById(tab);
    var tablinks = document.getElementsByClassName(tab+"_btn");
    var i;
    for(i=0;i<tablinks.length;i++){
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var image = document.getElementById(tab+"_image");
    var name = document.getElementById(tab+"_name");
    var description = document.getElementById(tab+"_description");
    var officer_tag = document.getElementsByClassName("officer_btn");
    var advisor_tag = document.getElementsByClassName("advisor_btn");
    var chairman_tag = document.getElementsByClassName("chairman_btn");
    var advisor_text = document.getElementById("advisor");
    var officer_text = document.getElementById("officer");
    var chairman_text = document.getElementById("chairman");

  switch(officer){
    case 'ACM':
          image.src="image/acm_advisor.jpg";
          name.innerHTML="ACM advisor";
          description.innerHTML ="description";
          officer_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active", "");
          }

          break;
    case 'SHSU':
          image.src="image/faculty_advisor.jpg";
          name.innerHTML="ACM advisor";
          description.innerHTML ="description";
          officer_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active", "");
          }
          break;
    case 'president':
          image.src = "#";
          name.innerHTML = "president";
          description.innerHTML = "this is a test";
          advisor_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'vicepresident':
          image.src="#";
          name.innerHTML = "vicepresident";
          description.innerHTML = "This is another test";
          advisor_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'treasurer':
          image.src="#";
          name.innerHTML = "treasurer";
          description.innerHTML = "This is another test";
          advisor_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'secretary':
          image.src="#";
          name.innerHTML = "secretary";
          description.innerHTML = "This is another test";
          advisor_text.style.display="none";
          chairman_text.style.display="none";
          for(i=0;i<chairman_tag.length;i++){
            chairman_tag[i].className=chairman_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'relations':
          image.src="#";
          name.innerHTML = "relations";
          description.innerHTML = "This is another test";
          officer_text.style.display="none";
          advisor_text.style.display="none";
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'events':
          image.src="#";
          name.innerHTML = "events";
          description.innerHTML = "This is another test";
          officer_text.style.display="none";
          advisor_text.style.display="none";
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'executive':
          image.src="#";
          name.innerHTML = "executive";
          description.innerHTML = "This is another test";
          officer_text.style.display="none";
          advisor_text.style.display="none";
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    case 'budget':
          image.src="#";
          name.innerHTML = "budget";
          description.innerHTML = "This is another test";
          officer_text.style.display="none";
          advisor_text.style.display="none";
          for(i=0;i<officer_tag.length;i++){
            officer_tag[i].className=officer_tag[i].className.replace(" active","");
          }
          for(i=0;i<advisor_tag.length;i++){
            advisor_tag[i].className=advisor_tag[i].className.replace(" active", "");
          }
          break;
    default: return false;
  }
  evt.currentTarget.className+=" active";
  document.getElementById(tab).style.display="block";
}
