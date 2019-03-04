new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isGameRunning = !this.isGameRunning;
        },
        attack: function () {
            if(this.playerAttack(3,10)) return;
            this.monsterAttack()

        },
        specialAttack: function () {
            if(this.playerAttack(10,20)) return;
            this.monsterAttack();
        },
        heal: function () { 
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }           
            this.monsterAttack();            
        },
        giveUp: function () {
            this.isGameRunning = !this.isGameRunning;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) +1, min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0){
                this.monsterHealth = 0;
                if(confirm('You won! New Game?')){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                this.playerHealth = 0;
                if(confirm('You lost! New Game?')){
                    this.startGame();
                }else{
                    this.isGameRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttack: function(){
            this.playerHealth -= this.calculateDamage(5,12);
            if(this.checkWin()) return true;
        },
        playerAttack: function(min, max){
            this.monsterHealth -= this.calculateDamage(min,max);
            if(this.checkWin()) return true;
        }
    }

});