import { _decorator, Component, Node, Label, Collider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreCounter')
export class ScoreCounter extends Component {
    @property({ type: Node })
    scoreLabelNode: Node | null = null;

    private _score: number = 0;
    private _labelComponent: Label | null = null;

    start() {
        if (!this.scoreLabelNode) {
            console.error('Score label node is not assigned.');
            return;
        }

        this._labelComponent = this.scoreLabelNode.getComponent(Label);

        if (!this._labelComponent) {
            console.error('Label component is missing on the score label node.');
            return;
        }

        // Initialize the score label
        this._updateScoreLabel();
    }

    onCollisionEnter(otherCollider: Collider2D) {

        this._score++;
        this._updateScoreLabel();
        // Check if the player collided with a pipe
        if (otherCollider.node.name === 'Pipe') {
            this._score++;
            this._updateScoreLabel();
        }
    }

    private _updateScoreLabel() {
        if (this._labelComponent) {
            this._labelComponent.string = `${this._score}`;
        }
    }
}