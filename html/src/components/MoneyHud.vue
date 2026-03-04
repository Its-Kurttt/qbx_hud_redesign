<template>
  <div id="money-container" class="money-hud">
    <!-- Cash -->
    <transition name="slide-fade">
      <div v-if="showCash" class="money-display cash" :class="{ plus: plus, minus: minus }">
        <span class="currency">$</span>
        <span class="amount">{{ formatMoney(cash) }}</span>
      </div>
    </transition>

    <!-- Bank -->
    <transition name="slide-fade">
      <div v-if="showBank" class="money-display bank" :class="{ plus: plus, minus: minus }">
        <span class="currency">$</span>
        <span class="amount">{{ formatMoney(bank) }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MoneyHud',
  data() {
    return {
      cash: 0,
      bank: 0,
      showCash: false,
      showBank: false,
      plus: false,
      minus: false
    }
  },
  mounted() {
    this.messageListener = (event) => {
      if (event.data.action === 'showconstant') {
        this.showConstant(event.data)
      } else if (event.data.action === 'updatemoney') {
        this.update(event.data)
      } else if (event.data.action === 'show') {
        this.showAccounts(event.data)
      }
    }
    window.addEventListener('message', this.messageListener)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.messageListener)
  },
  methods: {
    formatMoney(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      }).format(value)
    },
    showConstant(data) {
      this.cash = data.cash || 0
      this.bank = data.bank || 0
      this.showCash = true
      this.showBank = true
    },
    update(data) {
      this.cash = data.cash || 0
      this.bank = data.bank || 0
      this.plus = data.plus || false
      this.minus = data.minus || false

      if (data.type === 'cash') {
        this.showCash = true
        setTimeout(() => (this.showCash = false), 2000)
      } else if (data.type === 'bank') {
        this.showBank = true
        setTimeout(() => (this.showBank = false), 2000)
      }
    },
    showAccounts(data) {
      if (data.type === 'cash' && !this.showCash) {
        this.cash = data.cash || 0
        this.showCash = true
        setTimeout(() => (this.showCash = false), 3500)
      } else if (data.type === 'bank' && !this.showBank) {
        this.bank = data.bank || 0
        this.showBank = true
        setTimeout(() => (this.showBank = false), 3500)
      }
    }
  }
}
</script>

<style scoped>
.money-hud {
  position: fixed;
  top: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
  z-index: 100;
}

.money-display {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  border-left: 3px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  pointer-events: auto;
}

.money-display.cash {
  border-left-color: rgba(63, 165, 84, 0.8);
}

.money-display.bank {
  border-left-color: rgba(50, 109, 191, 0.8);
}

.money-display.plus {
  animation: moneyIncome 0.5s ease-out;
}

.money-display.minus {
  animation: moneyExpense 0.5s ease-out;
}

.currency {
  font-size: 14px;
  color: #aaa;
  font-weight: 600;
}

.amount {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
}

.money-display.plus .amount {
  color: #3FA554;
}

.money-display.minus .amount {
  color: #ff6b6b;
}

@keyframes moneyIncome {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes moneyExpense {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

@media (max-width: 768px) {
  .money-hud {
    top: 20px;
    right: 20px;
  }

  .money-display {
    padding: 8px 16px;
  }

  .amount {
    font-size: 16px;
  }
}
</style>
