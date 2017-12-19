new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },

    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        attack() {
            const PLAYER_DAMAGE_MAX = 10, PLAYER_DAMAGE_MIN = 3;

            let damage = 0;

            damage = this.calculateDamage(PLAYER_DAMAGE_MIN, PLAYER_DAMAGE_MAX);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster for ${damage}`,
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },

        specialAttack() {
            const PLAYER_SPECIAL_DAMAGE_MAX = 20, PLAYER_SPECIAL_DAMAGE_MIN = 10;

            let damage = 0;

            damage = this.calculateDamage(PLAYER_SPECIAL_DAMAGE_MIN, PLAYER_SPECIAL_DAMAGE_MAX);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster hard for ${damage}`,
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks()
        },

        monsterAttacks() {
            const MONSTER_DAMAGE_MAX = 12, MONSTER_DAMAGE_MIN = 5;

            damage = this.calculateDamage(MONSTER_DAMAGE_MIN, MONSTER_DAMAGE_MAX);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits Player for ${damage}`,
            });

            this.checkWin();
        },

        heal() {
            const HEALING = 10;

            if (this.playerHealth <= 100 - HEALING) {
                this.playerHealth += HEALING;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: `Player heals for ${HEALING}`,
            });

            this.monsterAttacks();
        },

        giveUp() {
            this.gameIsRunning = false;
        },

        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },

        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                    this.monsterHealth = 0;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                    this.playerHealth = 0;
                }

                return true;
            }

            return false;
        },
    },
});
