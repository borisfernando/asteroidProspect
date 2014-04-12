var objetoShip : GameObject;
var objetoBullet : GameObject;
var speed : int = 0.05;

function Update () {
	if (Input.GetButton("Fire3")){
		objetoBullet.transform.Translate(Vector3.up * speed);
	}
	else {
		objetoBullet.transform.position.x = (objetoShip.transform.position.x);
		objetoBullet.transform.position.y = (objetoShip.transform.position.y);
		objetoBullet.transform.position.z = (objetoShip.transform.position.z);
	}
}