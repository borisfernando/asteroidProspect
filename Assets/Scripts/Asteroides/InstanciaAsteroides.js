var objetoSpace : GameObject;
var objetoAInstanciar:GameObject; 
var numeroDeInstancias:int = 10; 
var velocidadDeGeneracion:int = 3; 
private var rot:Quaternion = Quaternion.identity; 
private var nInstancias:int; 
private var tiempoDeGeneracion : float; 

function Update () { 

    if((nInstancias <= numeroDeInstancias) && (Time.time > tiempoDeGeneracion)) 
    { 
        nInstancias += 1; 
        tiempoDeGeneracion = Time.time + velocidadDeGeneracion;
        var objeto:GameObject;
        var i:int = Random.Range(0,5);
        if (i == 0){
        	objeto = Instantiate(objetoAInstanciar,new Vector3(-(objetoSpace.transform.position.x+Random.Range(300,1000)),-(objetoSpace.transform.position.y+Random.Range(1200,1600)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
        else if (i == 1){
        	objeto = Instantiate(objetoAInstanciar,new Vector3(-(objetoSpace.transform.position.x+Random.Range(300,1000)),(objetoSpace.transform.position.y+Random.Range(400,900)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
        else if (i == 2){
        	objeto = Instantiate(objetoAInstanciar,new Vector3(-(objetoSpace.transform.position.x+Random.Range(300,1000)),(objetoSpace.transform.position.y+Random.Range(400,900)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
        else if (i == 3){
        	objeto = Instantiate(objetoAInstanciar,new Vector3(-(objetoSpace.transform.position.x+Random.Range(300,1000)),-(objetoSpace.transform.position.y+Random.Range(1200,1600)),(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
        else if (i == 4){
        	objeto = Instantiate(objetoAInstanciar,new Vector3((objetoSpace.transform.position.x+Random.Range(300,1000)),-(objetoSpace.transform.position.y+Random.Range(1200,1600)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
        else{
        	objeto = Instantiate(objetoAInstanciar,new Vector3((objetoSpace.transform.position.x+Random.Range(300,1000)),(objetoSpace.transform.position.y+Random.Range(400,900)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }
		


        /*x -= objetoSpace.position.x+Random.Range(50,1000);
        y -= objetoSpace.position.y+Random.Range(50,1000);
        z -= objetoSpace.position.z+Random.Range(50,1000);
        */
        //objeto = Instantiate(objetoAInstanciar,new Vector3(x,y,z),rot); 
        
        /*if (nInstancias%2==0){ 
        	 objeto = Instantiate(objetoAInstanciar,new Vector3((objetoSpace.transform.position.x+Random.Range(50,400)),(objetoSpace.transform.position.y+Random.Range(50,400)),(objetoSpace.transform.position.z+Random.Range(50,400))),rot); 
        }
        else{ 
        	objeto = Instantiate(objetoAInstanciar,new Vector3(-(objetoSpace.transform.position.x+Random.Range(300,1000)),-(objetoSpace.transform.position.y+Random.Range(400,900)),-(objetoSpace.transform.position.z+Random.Range(500,1200))),rot); 
        }*/
    } 

} 

// gameObject.GetComponent(MeshFilter).mesh = Resources.Load("PATH");