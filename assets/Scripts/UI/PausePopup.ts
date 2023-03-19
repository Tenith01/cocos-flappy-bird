import { _decorator, Component, Button, director, Widget, Scene, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PausePopup')
export class PausePopup extends Component {
    @property({ type: Button })
    restartButton: Button | null = null;

    @property({ type: Button })
    mainMenuButton: Button | null = null;

    @property({ type: Button })
    settingsButton: Button | null = null;

    @property({ type: Button })
    resumeButton: Button | null = null;

    @property({ type: Widget })
    gameCanvasWidget: Widget | null = null;

    start() {
        if (!this.restartButton || !this.mainMenuButton || !this.settingsButton || !this.resumeButton) {
            console.error('All buttons are not assigned.');
            return;
        }

        if (!this.gameCanvasWidget) {
            console.error('Game canvas widget is not assigned.');
            return;
        }

        this.restartButton.node.on('click', this.onRestartButtonClick, this);
        this.mainMenuButton.node.on('click', this.onMainMenuButtonClick, this);
        this.settingsButton.node.on('click', this.onSettingsButtonClick, this);
        this.resumeButton.node.on('click', this.onResumeButtonClick, this);
    }

    onRestartButtonClick() {
        director.resume();
        director.loadScene("GameScene"); // Replace "GameScene" with the name of your game scene
    }

    onMainMenuButtonClick() {
        director.resume();
        director.loadScene("MainMenuScene"); // Replace "MainMenuScene" with the name of your main menu scene
    }

    onSettingsButtonClick() {
        // Implement the logic to show the settings menu here
    }

    onResumeButtonClick() {
        director.resume();
        this.node.active = false;
        // this.gameCanvasWidget.node.opacity = 255;
    }
}