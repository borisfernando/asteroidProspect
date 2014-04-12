#pragma strict

function Start () {

}

function Update () {
	var speed : float = 10.0;
	var rotationSpeed : float = 100.0;
	// Get the horizontal and vertical axis.
	// By default they are mapped to the arrow keys.
	var rotation : float;
	
	rotation = 0.05 * rotationSpeed;
	rotation *= Time.deltaTime;
	
	// Rotate around our y-axis
	transform.Rotate (0, rotation, 0);
}