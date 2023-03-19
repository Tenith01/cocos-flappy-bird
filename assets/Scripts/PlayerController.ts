// PlayerController.ts

import { _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, RigidBody2D, Vec2, KeyCode, EventKeyboard } from 'cc';

const { ccclass, property } = _decorator;
@ccclass('PlayerController')
export class PlayerController extends Component {
    @property({ type: RigidBody2D })
    public birdRigidBody: RigidBody2D = null;

    @property({ type: Node })
    public bird: Node = null;

    @property
    public jumpForce: number = 250;

    private _isGameActive: boolean = true;

    start() {
        systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onMouseDown(event: EventMouse) {
        if (!this._isGameActive) return;
        this.jump();
    }

    onKeyDown(event: EventKeyboard) {
        if (!this._isGameActive) return;
        if (event.keyCode === KeyCode.SPACE) {
            this.jump();
        }
    }

    jump() {
        if (this.birdRigidBody) {
            this.birdRigidBody.linearVelocity = new Vec2(0, this.jumpForce);
        }
    }

    onCollisionEnter() {
        this._isGameActive = false;
    }

    onDestroy() {
        systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
        systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
}


