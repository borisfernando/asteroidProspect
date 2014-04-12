#pragma strict

function OnCollisionEnter(collision: Collision){
	Debug.Log("Enter called");
}

function OnCollisionStay(collision: Collision){
	Debug.Log("Stay ocuring");
}

function OnCollisionExit(collision: Collision){
	Debug.Log("Exit called");
}
