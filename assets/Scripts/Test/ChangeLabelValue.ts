import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ChangeLabelValue')
export class ChangeLabelValue extends Component {
    @property({ type: Node })
    targetLabelNode: Node | null = null;

    @property
    newValue: string = 'New Value';

    changeValue() {
        if (!this.targetLabelNode) {
            console.error('Target label node is not assigned.');
            return;
        }

        // Get the cc.Label component from the target node
        const labelComponent = this.targetLabelNode.getComponent(Label);

        if (!labelComponent) {
            console.error('cc.Label component is missing on the target node.');
            return;
        }

        // Change the value of the cc.Label component
        labelComponent.string = this.newValue;
    }
}