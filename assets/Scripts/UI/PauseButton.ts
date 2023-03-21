import { _decorator, Component, Button, director, Widget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PauseButton')
export class PauseButton extends Component {
    @property({ type: Button })
    pauseButton: Button | null = null;

    @property({ type: Widget })
    popupWidget: Widget | null = null;

    @property({ type: Widget })
    gameCanvasWidget: Widget | null = null;

    start() {
        if (!this.pauseButton) {
            console.error('Pause button is not assigned.');
            return;
        }

        if (!this.popupWidget) {
            console.error('Popup widget is not assigned.');
            return;
        }

        if (!this.gameCanvasWidget) {
            console.error('Game canvas widget is not assigned.');
            return;
        }

        this.popupWidget.node.active = false;
        this.pauseButton.node.on('click', this.onPauseButtonClick, this);
    }

    onPauseButtonClick() {
        // director.pause();
        this.popupWidget.node.active = true;
        // this.gameCanvasWidget.node.opacity = 128; // Set opacity to 128 for a blurred effect
    }
}