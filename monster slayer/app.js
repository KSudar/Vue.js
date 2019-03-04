new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isGameRunning = !this.isGameRunning;
            this.turns = [];
        },
        attack: function () {
            if (this.playerAttack(3, 10)) return;
            this.monsterAttack()

        },
        specialAttack: function () {
            if (this.playerAttack(10, 20)) return;
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals 10 HP'
                });
            } else {
                this.playerHealth = 100;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals to FULL'
                });
            }
            this.monsterAttack();
        },
        giveUp: function () {
            this.isGameRunning = !this.isGameRunning;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            if (this.checkWin()) {
                return true;
            } else {
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for ' + damage
                });
            }
        },
        playerAttack: function (min, max) {
            damage = this.calculateDamage(min, max);
            this.monsterHealth -= damage;
            if (this.checkWin()) {
                return true;
            } else {
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster for ' + damage
                });
            }
        }
    }

});