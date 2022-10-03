function mobile(model,os,manufactureYear,specifications,cost) {
    this.model=model
    this.os=os
    this.manufactureYear=manufactureYear
    this.specifications=specifications
    this.cost=function(){return 18000}

 }
 var realme =new mobile("realme8","android 12",2021,{ram:"8gb",rom:"128gb",colour:"white",browsers:["chrome","edge"]},18000)
 console.log(realme);
 console.log(realme.cost());