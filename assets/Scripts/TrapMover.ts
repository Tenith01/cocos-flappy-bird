// PipeController.ts

import { _decorator, Component, Node, Vec2, RigidBody2D } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('TrapMover')
export class TrapMover extends Component {
    @property
    public minVelocity: number = 100;

    @property
    public maxVelocity: number = 200;

    @property
    public deadAreaX: number = -1000;

    private _velocity: number = 0;
    private _rigidBody: RigidBody2D = null;

    start() {
        this._rigidBody = this.getComponent(RigidBody2D);
        this._velocity = Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity;
        this._rigidBody.linearVelocity = new Vec3(-this._velocity, 0, 0);
    }

    update(deltaTime: number) {
        const position = this.node.getPosition();
        if (position.x <= this.deadAreaX) {
            this.node.destroy();
        }
    }
}