<template>
  <div v-if="show" id="ui-container" class="player-hud">
    <!-- Health -->
    <div v-if="showHealth" class="status-item health">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: health + '%', backgroundColor: healthColor }"></div>
      </div>
      <span class="label">Health</span>
    </div>

    <!-- Armor -->
    <div v-if="showArmor" class="status-item armor">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: armor + '%', backgroundColor: armorColor }"></div>
      </div>
      <span class="label">Armor</span>
    </div>

    <!-- Hunger -->
    <div v-if="showHunger" class="status-item hunger">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: hunger + '%', backgroundColor: hungerColor }"></div>
      </div>
      <span class="label">Hunger</span>
    </div>

    <!-- Thirst -->
    <div v-if="showThirst" class="status-item thirst">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: thirst + '%', backgroundColor: thirstColor }"></div>
      </div>
      <span class="label">Thirst</span>
    </div>

    <!-- Stress -->
    <div v-if="showStress" class="status-item stress">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: stress + '%', backgroundColor: '#ff6b9d' }"></div>
      </div>
      <span class="label">Stress</span>
    </div>

    <!-- Oxygen -->
    <div v-if="showOxygen" class="status-item oxygen">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: oxygen + '%', backgroundColor: '#00bfff' }"></div>
      </div>
      <span class="label">Oxygen</span>
    </div>

    <!-- Voice Icon -->
    <div v-if="showVoice" class="voice-icon" :style="{ color: talkingColor }">
      <i :class="voiceIcon"></i>
    </div>

    <!-- Engine -->
    <div v-if="showEngine" class="status-item engine">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: engine + '%', backgroundColor: engineColor }"></div>
      </div>
      <span class="label">Engine</span>
    </div>

    <!-- Nitro -->
    <div v-if="showNos" class="status-item nitro">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: nos + '%', backgroundColor: nosColor }"></div>
      </div>
      <span class="label">Nitro</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerHud',
  data() {
    return {
      show: false,
      health: 100,
      armor: 0,
      hunger: 100,
      thirst: 100,
      stress: 0,
      oxygen: 100,
      engine: 100,
      nos: 0,
      talking: false,
      showHealth: false,
      showArmor: true,
      showHunger: true,
      showThirst: true,
      showStress: true,
      showOxygen: false,
      showEngine: false,
      showNos: true,
      showVoice: true,
      healthColor: '#3FA554',
      armorColor: '#326dbf',
      hungerColor: '#dd6e14',
      thirstColor: '#1a7cad',
      engineColor: '#3FA554',
      nosColor: '#FFFFFF',
      talkingColor: '#FFFFFF',
      voiceIcon: 'fas fa-microphone',
      dynamicHealth: false,
      dynamicArmor: false,
      dynamicHunger: false,
      dynamicThirst: false,
      dynamicStress: false,
      dynamicOxygen: false,
      dynamicEngine: false,
      dynamicNitro: false,
      playerDead: false,
      nitroActive: false,
      radio: 0
    }
  },
  mounted() {
    this.messageListener = (event) => {
      if (event.data.action === 'hudtick') {
        this.updateHud(event.data)
      }
    }
    window.addEventListener('message', this.messageListener)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.messageListener)
  },
  methods: {
    updateHud(data) {
      this.show = data.show
      this.health = data.health || 0
      this.armor = data.armor || 0
      this.hunger = data.hunger || 100
      this.thirst = data.thirst || 100
      this.stress = data.stress || 0
      this.oxygen = data.oxygen || 100
      this.engine = data.engine || 100
      this.nos = data.nos || 0
      this.talking = data.talking || false
      this.playerDead = data.playerDead || false
      this.nitroActive = data.nitroActive || false
      this.radio = data.radio || 0

      this.dynamicHealth = data.dynamicHealth || false
      this.dynamicArmor = data.dynamicArmor || false
      this.dynamicHunger = data.dynamicHunger || false
      this.dynamicThirst = data.dynamicThirst || false
      this.dynamicStress = data.dynamicStress || false
      this.dynamicOxygen = data.dynamicOxygen || false
      this.dynamicEngine = data.dynamicEngine || false
      this.dynamicNitro = data.dynamicNitro || false

      // Health logic
      if (this.dynamicHealth) {
        this.showHealth = this.health < 100
      } else {
        this.showHealth = true
      }

      // Armor logic
      if (this.dynamicArmor) {
        this.showArmor = this.armor > 0
      } else {
        this.showArmor = true
      }

      // Color calculations
      this.healthColor = this.playerDead ? '#ff0000' : '#3FA554'
      this.armorColor = this.armor <= 0 ? '#FF0000' : '#326dbf'
      this.hungerColor = this.hunger >= 100 ? '#dd6e14' : (this.hunger <= 30 ? '#ff0000' : '#dd6e14')
      this.thirstColor = this.thirst >= 100 ? '#1a7cad' : (this.thirst <= 30 ? '#ff0000' : '#1a7cad')
      this.engineColor = this.engine <= 45 ? '#ff0000' : (this.engine <= 75 ? '#dd6e14' : '#3FA554')
      this.nosColor = this.nitroActive ? '#D64763' : '#FFFFFF'

      // Voice icon
      if (this.talking && this.radio) {
        this.talkingColor = '#D64763'
      } else if (this.talking) {
        this.talkingColor = '#FFFF3E'
      } else {
        this.talkingColor = '#FFFFFF'
      }

      this.voiceIcon = (this.radio !== 0 && this.radio !== undefined) ? 'fas fa-headset' : 'fas fa-microphone'

      // Nitro visibility
      if (this.dynamicNitro) {
        this.showNos = this.nos > 0 && this.nos >= 0
      } else {
        this.showNos = this.nos >= 0
      }

      // Engine visibility
      if (this.dynamicEngine) {
        this.showEngine = this.engine < 95 && this.engine >= 0
      } else {
        this.showEngine = this.engine >= 0
      }

      if (data.isPaused === 1) {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.player-hud {
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: auto;
  z-index: 100;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 200px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.status-bar {
  flex: 1;
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.status-fill {
  height: 100%;
  width: 100%;
  transition: width 0.15s ease-out;
}

.label {
  font-size: 12px;
  color: #fff;
  min-width: 50px;
  text-transform: uppercase;
  font-weight: 600;
}

.voice-icon {
  font-size: 24px;
  transition: color 0.2s;
}

@media (max-width: 768px) {
  .player-hud {
    bottom: 20px;
    right: 20px;
  }

  .status-item {
    min-width: 150px;
  }
}
</style>
