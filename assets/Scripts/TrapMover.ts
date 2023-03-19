import { _decorator, Component, Node, RigidBody2D, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeMovement')
export class PipeMovement extends Component {
    @property
    velocity: number = -100; // Set the velocity of the pipes (negative for moving left)

    @property
    destroyX: number = -700; // The x-coordinate at which the pipe should be destroyed

    private _rigidBody: RigidBody2D | null = null;

    start() {
        // Get the RigidBody2D component attached to the node
        this._rigidBody = this.getComponent(RigidBody2D);

        if (this._rigidBody) {
            // Set the horizontal velocity of the RigidBody2D component
            this._rigidBody.linearVelocity = new Vec2(this.velocity, 0);
        } else {
            console.error('RigidBody2D component is missing on the pipe node.');
        }
    }

    update() {
        if (this.node.position.x <= this.destroyX) {
            // Destroy the pipe node when it reaches the specified x-coordinate
            this.node.destroy();
        }
    }
}