#pragma strict
function OnCollisionEnter(collision: Collision){
	audio.Play();
	//yield WaitForSeconds (4);
	if (collision.gameObject.name == "bullet"){
		Physics.IgnoreCollision(collision.collider,collider);
	}
	else if (collision.gameObject.name == "bullet(Clone)"){
		Physics.IgnoreCollision(collision.collider,collider);
	}
	else{
		Destroy(gameObject);
	}
}

function OnCollisionStay(collision: Collision){
	//Debug.Log("Stay ocuring");
}

function OnCollisionExit(collision: Collision){
	//Debug.Log("Exit called");
}
