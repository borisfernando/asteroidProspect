//var textGui : GUIText;

function Start () {
}

function movementX(){
	var speed : float = 7.0;
	var tiempoDeGeneracion = 1.0;
	if (Input.GetButton("Fire2")){
		transform.Translate(Vector3.down * speed);
	}
	if (Input.GetButton("Fire1")){
		transform.Translate(Vector3.up * speed);
	}
	if (Input.GetButton("Jump") && Time.time > tiempoDeGeneracion){
		transform.Translate(Vector3.up*50);
	}
	transform.Translate(Vector3.up*2);
}

function movementY(){
	// A very simplistic car driving on the x-z plane.
	var speed : float = 10.0;
	var rotationSpeed : float = 100.0;
	// Get the horizontal and vertical axis.
	// By default they are mapped to the arrow keys.
	// The value is in the range -1 to 1
	var rotation : float = Input.GetAxis ("Vertical") * rotationSpeed;
	
	// Make it move 10 meters per second instead of 10 meters per frame...
	rotation *= Time.deltaTime;
	// Rotate around our y-axis
	transform.Rotate (rotation, 0,0);
}

function movementZ(){
	// A very simplistic car driving on the x-z plane.
	var speed : float = 10.0;
	var rotationSpeed : float = 100.0;
	// Get the horizontal and vertical axis.
	// By default they are mapped to the arrow keys.
	var rotation : float = Input.GetAxis ("Horizontal") * rotationSpeed;
	
	// Make it move 10 meters per second instead of 10 meters per frame..
	rotation *= Time.deltaTime;
	
	// Rotate around our y-axis
	transform.Rotate (0, 0, rotation);
}

function Update () {
	movementX();
	movementY();
	movementZ();
	//textGui.text = "Vida";
}