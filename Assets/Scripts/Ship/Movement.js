/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	
	var jumpSpeed : float = 8.0;
	var gravity : float = 20.0;

	function Update() {
		
	}
	public var speed : Vector3 = Vector3 (0, 200, 0);
	function FixedUpdate () {
		rigidbody.MovePosition(rigidbody.position + speed * Time.deltaTime);
	}