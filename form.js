
$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){
    

    var formHTML = ''

    formData.forEach(function(field){
      

    if (field.type ==="text"){
      formHTML += `<i class ="fa ${field.icon}" /><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    }else if(field.type ==="textarea"){
      formHTML += `<i class ="fa ${field.icon}" /><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    }else if(field.type ==="email"){
      formHTML +=`<i class ="fa ${field.icon}" /><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    }else if(field.type ==="tel"){
      formHTML +=`<i class ="fa ${field.icon}" /><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`
    }else if(field.type ==="select")
      formHTML +=`<i class ="fa ${field.icon}" /><input type="${field.type}" placeholder="${field.label}" id="${field.id}" />`

    
    })

$("#app").html(formHTML)
$("#app").css("padding-top", "25px")
$("input").css("position", "relative").css("margin-top", "15px").css("margin-bottom", "15px").css("background-color", "transparent").css("border", "2px solid rgba(162,162,162, .45)")
$("#user-first-name").css("margin-top", "0px")
$(".fa").css("position", "absolute").css("padding-left", "55px").css("line-height", "35px")
$("#header").html(`Sign Up For My Web App`)
$("#header").css("background-color", "rgb(66,139,202)").css("color", "white").css("font-size", "24px").css("font-family", "verdana", "helvetica").css("font-weight", "normal").css("margin-top", "25px").css("padding", "25px 0px 0px 25px")
$("#footer").css("background-color", "rgb(201, 222, 240)").css("padding", "25px 0px 0px 25px").css("border-top","0px")
$("#footer").html("<button>Submit Form</button>")
$("button").css("width", "100px").css("background-color", "rgb(66,139,202)").css("color", "white").css("font-size", "10px").css("font-family", "verdana", "helvetica").css("font-weight", "normal").css("height", "35px").css("text-align", "center").css("border", "none")
$("input").css("padding-left", "50px")
$("#user-comment").css("height", "100px")

  })
})