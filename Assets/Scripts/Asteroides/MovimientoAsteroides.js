function Update () {
	var i : int = Random.Range(0,1);
	var speed : float = 1.5;
	var rotationSpeed : float = 10.0;
	var rotation : float;
	transform.Translate(Vector3.right * speed);
	
	if (i==0){
		rotation = 1 * rotationSpeed;
		rotation *= Time.deltaTime;
		
		transform.Rotate (0, rotation, 0);
	}
	else{
		rotation = 1 * rotationSpeed;
		rotation *= Time.deltaTime;
		
		// Rotate around our y-axis
		transform.Rotate (0, -rotation, 0);
	}
}