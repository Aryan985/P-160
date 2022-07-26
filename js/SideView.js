AFRAME.registerComponent("sideview",{
  init:function(){
    this.createplaces()
  },
  tick:function(){
    var pla = document.querySelector("#places-container")
    var {state} = pla.getAttribute("tour")
    if(state=="view" ||state=="change-view"){
this.el.setAttribute("visible",true)
    }else{
      this.el.setAttribute("visible",false)  
    }
  },
  createplaces:function(){
    var sidecontainer = document.querySelector("#sidecontainer")
    var posx = -150
    var posy = 30
    for(var i=1;i<5;i++){
      var pos = {
        x:(posx+=50),
        y:(posy+=2),
        z:-40
      }
      var ele = this.createimages(pos,i)
      sidecontainer.appendChild(ele)
    }
  },
  createimages:function(pos,id){
var el = document.createElement("a-entity")
el.setAttribute("visible",true)
el.setAttribute("id","place-"+id)
el.setAttribute("geometry",{primitive:"circle",radius:2})
el.setAttribute("material",{src:"./assets/helicopter.png"})
el.setAttribute("position",pos)
el.setAttribute("cursor-listener",{})
return el
  }
})