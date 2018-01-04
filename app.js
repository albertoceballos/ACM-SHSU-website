/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
    this.App = {
        init : function(){
            Initialize();
        },
        enter : function(){
            $('#splash_screen').hide();
        }
    };
    
    function Initialize(){
        var pendingIncludes= 0;
        
        $.each($("body *"), function(idx, elm){            
            var e = $(elm),
                f = e.data("include"),
                h = e.data("hidden");
               
            if(f && f !== ""){
                pendingIncludes++;
                Include(e,f, function(){
                    pendingIncludes--;
                    if(pendingIncludes === 0){
                        InitializeListeners();
                    }
                });
            }
            
            if(h && h === "true"){
                e.hide();
            }            
        });
        
        
    }
    
    function InitializeListeners(){
        $("#banner_nav_options li").on("click", OnNavigate);
    }
    
    function OnNavigate(e){
        var t = $(e.target);
        
        if(!t.hasClass("nav-active")){
            $("#banner_nav_options li.nav-active").removeClass("nav-active");
            $(".page-active").removeClass("page-active");
            t.addClass("nav-active");
            $("#" + t.data("navPageId")).addClass("page-active");
        }
    }
    
    function Include(e, f, c){
        $.ajax({
            method : "GET",
            url : f,
            success : function(d){
                e.append(d);
            },
            complete : function(){
                if(c) c();
            }
        });
    }
    
    
    
})();
