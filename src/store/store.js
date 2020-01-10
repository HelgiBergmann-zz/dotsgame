import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
const URLSettings = "https://starnavi-frontend-test-task.herokuapp.com/game-settings";
const URLWinners = "https://starnavi-frontend-test-task.herokuapp.com/winners";
export const Status = {
    default: 0,
    active: 1,
    player: 2,
    ai: 4,
}
const getDate = () => {
    var d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return d.getHours() + ':' + d.getMinutes() + '; ' + d.getDate() + ' ' + monthNames[d.getMonth()] + ' ' + d.getFullYear();
}

export const store = new Vuex.Store({
    state: {
        gameSetting: null,
        chosenSetting: {
           complexety: "",
           settings: null,
        },
        gameStarted: false,
        gameFields: null,
        gameRandomNums: [],
        gameRandomUnit: null,
        totalScore: 0,
        player: {
            name: null,
            score: null,
            date: null,
        },
        computer: {
            name: "Computer AI",
            score: null,
            date: null
        },
        winner: null,
        winners: null,
    },
    actions: {
        updateGameSettings({commit}) {
          axios.get(URLSettings).then((response) => {
            commit('UPDATE_GAME_SETTINGS', response.data)
          })
        },
        updateGameWinners({commit, getters}) {
            if (getters.getWinner) {
                axios.post(URLWinners, {
                  ...getters.getWinner
                }).then((response) => {
                  commit('UPDATE_GAME_WINNERS', response.data)
                })
            } else {
                axios.get(URLWinners).then((response) => {
                    commit('UPDATE_GAME_WINNERS', response.data)
                  });
            }  
        },
       startGame({commit}, payload) {
            commit('UPDATE_CHOSEN_SETTING', payload)
            commit('GENERATE_GAME_FIELDS');
        },
        fillGameFields({commit, getters, dispatch})  {
            if(!getters.getGameStarted && getters.getWinner) commit('GENERATE_GAME_FIELDS');

            const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            async function asyncForEach(length, callback) {
                for (let index = 0; index < length; index++) {
                  await callback();
                  if (getters.getWinner) {
                    dispatch('updateGameWinners');
                    break;
                  }
                  
                }
            }
            asyncForEach(getters.getFields.length, async() => {
                commit('FILL_GAME_FIELDS'); 
                await wait(getters.getChosenSetting.settings.delay);
                if (getters.getFields[getters.getRandomUnit].status !== Status.player) {
                    await commit('COMPUTER_GET_POINT');
                    commit('CALCULATE_WINNER');
                }
            });
        },
        playerGetPoint({commit}) {
            commit('PLAYER_GET_POINT');
            commit('CALCULATE_WINNER');
        }

    },
    mutations: {
        UPDATE_GAME_SETTINGS(state, payload) {
            state.gameSetting = payload;
        },
        UPDATE_GAME_WINNERS(state, payload) {
            state.winners = payload;
        },
        UPDATE_CHOSEN_SETTING(state, payload) {
            state.chosenSetting = payload;
            state.totalScore = state.chosenSetting.settings.field *  state.chosenSetting.settings.field;
        },
        UPDATE_PLAYER_NAME(state, payload) {
            state.player.name = payload;
        },
        GENERATE_GAME_FIELDS(state) {
            state.gameFields = [];
            const fields =  state.chosenSetting.settings.field *  state.chosenSetting.settings.field;
            for (let i = 0; i < fields; i++)  {
                state.gameFields.push({id: i, status: Status.default})
                state.gameRandomNums.push(i);
            }
        },
        FILL_GAME_FIELDS(state) {
            state.winner = null;
            state.gameStarted = true;
            const randomIndex = Math.floor(Math.random() * state.gameRandomNums.length);
            state.gameRandomUnit = state.gameRandomNums.splice(randomIndex, 1);
            state.gameFields[state.gameRandomUnit].status = Status.active;
        },
        COMPUTER_GET_POINT(state) {
            state.gameFields[state.gameRandomUnit].status = Status.ai;
            state.computer.score++;
        },
        PLAYER_GET_POINT(state) {
            state.gameFields[state.gameRandomUnit].status = Status.player;
            state.player.score++;
        },
        CALCULATE_WINNER(state) {
            const scoreForWin = Math.round(state.totalScore * 50 / 100);
            const setWinner= (name) => {
                state.winner = {};
                state.winner.date = getDate();
                state.winner.winner = name;
                state.player.score = 0;
                state.computer.score = 0;
                state.gameStarted = false;
            }
            if (state.computer.score >= scoreForWin) {
                setWinner(state.computer.name)
            }

            if (state.player.score >= scoreForWin) {
                setWinner(state.player.name)
            }

        }
    },

    getters: {
        getGameSettings: (state) => state.gameSetting,
        getChosenSetting: (state) => state.chosenSetting,
        getGameStarted: (state) => state.gameStarted,
        getFields: (state) => state.gameFields,
        getRandomNums: (state) => state.gameRandomNums,
        getRandomUnit: (state) => state.gameRandomUnit,
        getWinner: (state) => state.winner,
        getWinners: (state) => state.winners
    }

});



