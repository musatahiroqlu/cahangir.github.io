var computerBrandInput=document.getElementById('computer-brand');
var computerModeldInput=document.getElementById('computer-model');
var computerRamInput=document.getElementById('computer-ram');
var computerImageInput=document.getElementById('computer-image');
var username = localStorage.getItem('logged-in-username');
function onSaveComputer(event){
    event.preventDefault();
    var computerBrand = computerBrandInput.value;
    var computerModel = computerModeldInput.value;
    var computerRam = computerRamInput.value;
    var computerImage = computerImageInput.value;
    var computer={};
    computer.brand=computerBrand;
    computer.model=computerModel;
    computer.ram=computerRam;
    computer.imagePath=computerImage;
    computer.username=username;
    console.log(computer);
    var computersArray=JSON.parse(localStorage.getItem('computers'));
    var id=0;
   for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        if(c.id>id){
            id=c.id;
        }
        
    }
  id++;
  computer.id=id;

  if (updateMode=='true') {
    for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        if(c.id==computerId){
            computersArray[index]=computer;
            computersArray[index].id=computerId;
            break;
        }
        
    }
    localStorage.setItem('computers',JSON.stringify(computersArray));
    event.preventDefault();
    window.location.replace('computers.html')
    alert('The Item has been successfully edited!');
  }else{
    computersArray.push(computer);
    localStorage.setItem('computers',JSON.stringify(computersArray));
    alert('The Item has been successfully saved!');
  }
}
var computerId=parseInt(localStorage.getItem('computerId')); 
var updateMode= localStorage.getItem('updateMode');
if (updateMode=='true') {
    document.getElementById('page-title').innerHTML="Redakte";

    var computer=null;
    var computersArray=JSON.parse(localStorage.getItem('computers'));
    for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        if (c.id==computerId) {
            computer=c;
            break;
        }
    }
 computerBrandInput.value=computer.brand;
 computerModeldInput.value=computer.model;
 computerRamInput.value=computer.ram;
 computerImageInput.value=computer.imagePath;

}else{
    document.getElementById('page-title').innerHTML="Yeni";
}
