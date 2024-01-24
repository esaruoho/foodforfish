import HitTrigger from "./HitTrigger";
import GameModel, {Scenes, Transitions} from "../GameModel";
import {Vector3} from "math.gl";
import {CURSOR} from "../ui/Cursor";

export default class DoorInsideTrigger extends HitTrigger{

    protected click() {
        let door = GameModel.renderer.modelByLabel["_HitCenterDoor"]
        let world = door.getWorldPos()

        GameModel.characterHandler.walkTo(world,0,this.onCompleteWalk,true)
    }
    protected over() {
        //UI.logEvent("Over", this.objectLabel);



        if(GameModel.isLeftRoom){
            GameModel.gameUI.cursor.show(CURSOR.ARROW_RIGHT)
        }
        else {
            GameModel.gameUI.cursor.show(CURSOR.ARROW_LEFT)
        }
    }

    protected out() {
        //  UI.logEvent("Out", this.objectLabel);
        GameModel.gameUI.cursor.hide()
    }
    onCompleteWalk(){


      if(GameModel.isLeftRoom){

                GameModel.setTransition(Transitions.GO_RIGHT_ROOM)

        }
        else {

                GameModel.setTransition(Transitions.GO_LEFT_ROOM)


        }


       // GameModel.setScene(Scenes.OUTSIDE)
        //let door = GameModel.renderer.modelByLabel["door"]
        //GameModel.characterPos = door.getWorldPos()
    }
}
