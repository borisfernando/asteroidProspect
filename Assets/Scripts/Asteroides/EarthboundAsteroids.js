#pragma strict

// JavaScript

// Require the rocket to be a rigidbody.
// This way we the user can not assign a prefab without rigidbody
var asteroid1 : Rigidbody;
var asteroid2 : Rigidbody;
var asteroid3 : Rigidbody;
var asteroid4 : Rigidbody;
var asteroid5 : Rigidbody;
var asteroid6 : Rigidbody;
var asteroid7 : Rigidbody;
var asteroid8 : Rigidbody;
var asteroid9 : Rigidbody;
var asteroid10 : Rigidbody;
var asteroid11 : Rigidbody;
var asteroid12 : Rigidbody;
var asteroid13 : Rigidbody;
var asteroid14 : Rigidbody;
var asteroid15 : Rigidbody;
var asteroid16 : Rigidbody;
var asteroid17 : Rigidbody;
var asteroid18 : Rigidbody;
var asteroid19 : Rigidbody;
var asteroid20 : Rigidbody;
var asteroid21 : Rigidbody;
var asteroid22 : Rigidbody;
var asteroid23 : Rigidbody;
var asteroid24 : Rigidbody;
var asteroid25 : Rigidbody;
var asteroid26 : Rigidbody;
var asteroid27 : Rigidbody;
var asteroid28 : Rigidbody;
var asteroid29 : Rigidbody;
var asteroid30 : Rigidbody;
var earth : Transform;
var speed : float;
var radius : int;

function Start () {
    InvokeRepeating("CreateAsteroids",0,1);
    
}
function CreateAsteroids(){
	var selection : int = Random.Range(1,30);
	var theta : float = Random.value*(2*Mathf.PI);
	var posX : int = radius * Mathf.Cos(theta);
	var posY : int = Random.Range(-50,50);
	var posZ : int = radius * Mathf.Sin(theta);
	var asteroidInstance : Rigidbody;
	
	if (selection == 1){
		asteroidInstance = Instantiate(asteroid1, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 2){
		asteroidInstance = Instantiate(asteroid2, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 3){
		asteroidInstance = Instantiate(asteroid3, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 4){
		asteroidInstance = Instantiate(asteroid4, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 5){
		asteroidInstance = Instantiate(asteroid5, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 6){
		asteroidInstance = Instantiate(asteroid6, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 7){
		asteroidInstance = Instantiate(asteroid7, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 8){
		asteroidInstance = Instantiate(asteroid8, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 9){
		asteroidInstance = Instantiate(asteroid9, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 10){
		asteroidInstance = Instantiate(asteroid10, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 11){
		asteroidInstance = Instantiate(asteroid11, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 12){
		asteroidInstance = Instantiate(asteroid12, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 13){
		asteroidInstance = Instantiate(asteroid13, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 14){
		asteroidInstance = Instantiate(asteroid14, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 15){
		asteroidInstance = Instantiate(asteroid15, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 16){
		asteroidInstance = Instantiate(asteroid16, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 17){
		asteroidInstance = Instantiate(asteroid17, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 18){
		asteroidInstance = Instantiate(asteroid18, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 19){
		asteroidInstance = Instantiate(asteroid19, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 20){
		asteroidInstance = Instantiate(asteroid20, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 21){
		asteroidInstance = Instantiate(asteroid21, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 22){
		asteroidInstance = Instantiate(asteroid22, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 23){
		asteroidInstance = Instantiate(asteroid23, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 24){
		asteroidInstance = Instantiate(asteroid24, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 25){
		asteroidInstance = Instantiate(asteroid25, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 26){
		asteroidInstance = Instantiate(asteroid26, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 27){
		asteroidInstance = Instantiate(asteroid27, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 28){
		asteroidInstance = Instantiate(asteroid28, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 29){
		asteroidInstance = Instantiate(asteroid29, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	if (selection == 30){
		asteroidInstance = Instantiate(asteroid30, Vector3(posX,posY,posZ), Quaternion.identity);
	}
	
	
	asteroidInstance.transform.LookAt(earth);
	asteroidInstance.AddForce(asteroidInstance.transform.forward * speed,ForceMode.Impulse);
}