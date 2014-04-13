#pragma strict
function OnCollisionEnter(collision: Collision){	
	if (collision.gameObject.name == "NasaShip"){
		Physics.IgnoreCollision(collision.collider,collider);
	}
	else if (collision.gameObject.name == "bullet(Clone)"){
		Physics.IgnoreCollision(collision.collider,collider);
	}
	else{
		Destroy(collision.gameObject);
	}
}

function OnCollisionStay(collision: Collision){
	//Debug.Log("Stay ocuring");
}

function OnCollisionExit(collision: Collision){
	//Debug.Log("Exit called");
}
