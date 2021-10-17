using UnityEngine; 
using UnityEngine.SceneManagement;

//Responsible for changing state of game
public class GameManager : MonoBehaviour
{
    bool gameHasEnded = false; 

    //public GameObject completeLevelUI; 

    public void CompleteLevel () 
    {
        SceneManager.LoadScene("WinScene");
        Debug.Log("LEVEL COMPLETE");
    }

    public void EndGame() 
    {
        if (gameHasEnded == false){
            gameHasEnded = true; 
            Debug.Log("GAME OVER");     
            //Restart(); //ONLY run when replay button is pressed, otherwise do something else 
        }
    }

    void Restart() 
    {
        SceneManager.LoadScene(""); //inside the parenthesis, select a specific game 
    }
}
