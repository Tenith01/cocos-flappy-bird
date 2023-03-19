// TrapSpawner.ts

import { _decorator, Component, Node, Prefab, instantiate, Vec3, randomRange } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('TrapSpawner')
export class TrapSpawner extends Component {
    @property({ type: [Prefab] })
    public trapPrefabs: Prefab[] = [];

    @property
    public spawnInterval: number = 3;

    @property
    public minY: number = -200;

    @property
    public maxY: number = 200;

    private _spawnTimer: number = 0;

    start() {
        this._spawnTimer = this.spawnInterval;
    }

    update(deltaTime: number) {
        this._spawnTimer -= deltaTime;
        if (this._spawnTimer <= 0) {
            this.spawnTrap();
            this._spawnTimer = this.spawnInterval;
        }
    }

    spawnTrap() {
        if (!this.trapPrefabs.length) return;

        const randomPrefabIndex = Math.floor(Math.random() * this.trapPrefabs.length);
        const selectedPrefab = this.trapPrefabs[randomPrefabIndex];

        const trapInstance = instantiate(selectedPrefab);
        this.node.addChild(trapInstance);

        const randomY = randomRange(this.minY, this.maxY);
        trapInstance.setPosition(new Vec3(0, randomY, 0));
    }
}