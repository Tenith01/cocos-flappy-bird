import { _decorator, Component, Node, Button, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MainMenu')
export class MainMenu extends Component {
    @property({ type: Button })
    playButton: Button | null = null;

    @property({ type: Node })
    mainMenuNode: Node | null = null;

    @property({ type: Node })
    gameplayCanvasNode: Node | null = null;

    start() {
        if (!this.playButton) {
            console.error('Play button is not assigned.');
            return;
        }

        if (!this.mainMenuNode) {
            console.error('Main menu node is not assigned.');
            return;
        }

        if (!this.gameplayCanvasNode) {
            console.error('Gameplay canvas node is not assigned.');
            return;
        }

        this.playButton.node.on('click', this.onPlayButtonClick, this);
    }

    onPlayButtonClick() {
        this.mainMenuNode.active = false;
        this.gameplayCanvasNode.active = true;
    }
}