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
		
		objetoBullet.transform.rotation.x = (objetoShip.transform.rotation.x);
		objetoBullet.transform.rotation.y = (objetoShip.transform.rotation.y);
		objetoBullet.transform.rotation.z = (objetoShip.transform.rotation.z);
	}
	objetoBullet.transform.rotation.x = (objetoShip.transform.rotation.x);
	objetoBullet.transform.rotation.y = (objetoShip.transform.rotation.y);
	objetoBullet.transform.rotation.z = (objetoShip.transform.rotation.z);
}