import { defineStore } from 'pinia';

export const useBalanceStore = defineStore('balance', {
  state: () => ({
    balances: [
      { name: '김하나', balance: 100000 },
      { name: '김두리', balance: 10000 },
      { name: '김서이', balance: 100 }
    ],
  }),
  getters: {
    getBalanceByName: (state) => (name) => {
      return state.balances.find(balance => balance.name === name);
    }
  },
  actions: {
    increaseBalance(name, amount = 1000) {
      const balanceObj = this.balances.find(balance => balance.name === name);
      if (balanceObj) {
        balanceObj.balance += amount;
      }
    }
  }
});
