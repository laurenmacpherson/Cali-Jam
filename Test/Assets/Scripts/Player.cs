using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    [SerializeField] private Transform groundCheckTranform;
    [SerializeField] private LayerMask playerMask;
    private bool jumpkeyWasPressed;
    private float horizontalInput;
    private Rigidbody rigidbodyComponent;
    private int superJumpsRemaining;


    // Start is called before the first frame update
    void Start()
    {
        rigidbodyComponent = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            jumpkeyWasPressed = true;
        }

        horizontalInput = Input.GetAxis("Horizontal");
    }

    void FixedUpdate()
    {
        rigidbodyComponent.velocity = new Vector3(horizontalInput, rigidbodyComponent.velocity.y, 0);
        if (Physics.OverlapSphere(groundCheckTranform.position, 0.1f, playerMask).Length == 0)
        {
            return;
        }
        if (jumpkeyWasPressed)
        {
            float jumpPower = 5f;
            if (superJumpsRemaining > 0)
            {
                jumpPower *= 2;
                superJumpsRemaining--;
            }
            rigidbodyComponent.AddForce(Vector3.up * jumpPower, ForceMode.VelocityChange);
            jumpkeyWasPressed = false;
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.layer == 7)
        {
            Destroy(other.gameObject);
            superJumpsRemaining++;
        }
    }
}