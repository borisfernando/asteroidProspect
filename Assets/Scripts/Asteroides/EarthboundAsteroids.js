#pragma strict

// JavaScript

// Require the rocket to be a rigidbody.
// This way we the user can not assign a prefab without rigidbody
var asteroidp : Rigidbody;
var earth : Transform;
var speed : float;

function Start () {
    InvokeRepeating("CreateAsteroids",0,3.0);
    
    
}
function CreateAsteroids(){
	var posX : int = Random.Range(1000,10000);
	var posY : int = Random.Range(1000,10000);
	var posZ : int = Random.Range(1000,10000);
	var asteroidInstance : Rigidbody = Instantiate(asteroidp, Vector3(posX,posY,posZ), Quaternion.identity);
	asteroidInstance.transform.LookAt(earth);
	asteroidInstance.AddForce(asteroidInstance.transform.forward * speed,ForceMode.Impulse);
}