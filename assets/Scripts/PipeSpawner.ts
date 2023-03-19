import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipeSpawner')
export class PipeSpawner extends Component {
    @property({ type: Prefab })
    pipePrefab: Prefab | null = null;

    @property
    spawnInterval: number = 2; // Time interval between pipe spawns in seconds

    private _timer: number = 0;

    update(deltaTime: number) {
        this._timer += deltaTime;

        if (this._timer >= this.spawnInterval) {
            this.spawnPipe();
            this._timer = 0;
        }
    }

    spawnPipe() {
        if (!this.pipePrefab) {
            console.error('Pipe prefab is not assigned.');
            return;
        }

        // Instantiate the pipe prefab
        const newPipe = instantiate(this.pipePrefab);

        // Set the new pipe's position to the spawner node's position
        newPipe.setPosition(this.node.position);

        // Add the new pipe to the scene
        this.node.parent?.addChild(newPipe);
    }
}