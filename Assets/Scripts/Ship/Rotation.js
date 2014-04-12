#pragma strict

var velocidadRotacion:float = 10.5;

function Start () {

}

function Update () {
	if(Input.GetButton("Fire1")){
		transform.Rotate(velocidadRotacion*Time.deltaTime*Vector3.forward);
	}
}

