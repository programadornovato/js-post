let formulario=document.getElementById('formulario');
let res=document.getElementById('res');

formulario.addEventListener('submit',function(e){
    //alert('enviado');
    e.preventDefault();
    let data=new FormData(formulario);
    //console.log(data.get('user'));
    fetch('app.php',{
        method:'POST',
        body:data
    })
    .then(res=>res.json())
    .then(datos=>{
        //console.log(datos);
        if(datos==='error'){

            res.innerHTML='<div class="alert alert-danger" role="alert">Error!</div>';
        }
        else{
            res.innerHTML='<div class="alert alert-success" role="alert">'+datos+'!</div>';
        }
    })

    
});




