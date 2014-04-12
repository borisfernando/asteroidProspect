/// This script moves the character controller forward 
	/// and sideways based on the arrow keys.
	/// It also jumps when pressing space.
	/// Make sure to attach a character controller to the same game object.
	/// It is recommended that you make only one call to Move or SimpleMove per frame.	
	var speed : float = 6.0;
	var jumpSpeed : float = 8.0;
	var gravity : float = 20.0;
	private var moveDirection : Vector3 = Vector3.zero;
	function Update() {
		var controller : CharacterController = GetComponent(CharacterController);
		
			// We are grounded, so recalculate
			// move direction directly from axes
			moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,
			                        Input.GetAxis("Vertical"));
			moveDirection = transform.TransformDirection(moveDirection);
			moveDirection *= speed;
			
				
		// Move the controller
		controller.Move(moveDirection * Time.deltaTime);
	}