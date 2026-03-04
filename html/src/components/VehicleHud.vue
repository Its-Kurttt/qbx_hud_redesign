<template>
  <div v-if="show" id="veh-container" class="vehicle-hud">
    <!-- Speedometer -->
    <div class="speedometer">
      <div class="speed-display">
        {{ Math.round(speed) }}
        <span class="unit">mph</span>
      </div>
    </div>

    <!-- Fuel -->
    <div v-if="showFuel" class="vehicle-status fuel">
      <div class="status-bar">
        <div class="status-fill" :style="{ width: fuel + '%', backgroundColor: fuelColor }"></div>
      </div>
      <span class="label">Fuel</span>
    </div>

    <!-- Altitude -->
    <div v-if="showAltitude" class="vehicle-status altitude">
      <span class="value">{{ Math.round(altitude) }}</span>
      <span class="label">ALT</span>
    </div>

    <!-- Seatbelt -->
    <div v-if="showSeatbelt" class="indicator" :class="{ warning: !seatbelt, active: seatbelt }">
      <i class="fas fa-shield-alt"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleHud',
  data() {
    return {
      show: false,
      speed: 0,
      fuel: 100,
      altitude: 0,
      seatbelt: false,
      showFuel: true,
      showAltitude: true,
      showSeatbelt: true,
      fuelColor: '#FFFFFF'
    }
  },
  mounted() {
    this.messageListener = (event) => {
      if (event.data.action === 'car') {
        this.updateVehicleHud(event.data)
      }
    }
    window.addEventListener('message', this.messageListener)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.messageListener)
  },
  methods: {
    updateVehicleHud(data) {
      this.show = data.show
      this.speed = data.speed || 0
      this.altitude = data.altitude || 0
      this.fuel = (data.fuel * 0.71) || 0
      this.seatbelt = data.seatbelt || false
      this.showSeatbelt = data.showSeatbelt || true
      this.showAltitude = data.showAltitude || true

      // Fuel color based on level
      if (this.fuel <= 20) {
        this.fuelColor = '#ff0000'
      } else if (this.fuel <= 30) {
        this.fuelColor = '#dd6e14'
      } else {
        this.fuelColor = '#FFFFFF'
      }

      if (data.isPaused === 1) {
        this.show = false
      }
    }
  }
}
</script>

<style scoped>
.vehicle-hud {
  position: fixed;
  bottom: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: auto;
  z-index: 100;
}

.speedometer {
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 16px 24px;
  min-width: 140px;
  text-align: center;
}

.speed-display {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}

.unit {
  font-size: 12px;
  color: #aaa;
  display: block;
  margin-top: 4px;
}

.vehicle-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  min-width: 140px;
}

.vehicle-status.fuel {
  flex-direction: row;
}

.vehicle-status.fuel .status-bar {
  flex: 1;
  height: 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  overflow: hidden;
}

.vehicle-status.fuel .status-fill {
  height: 100%;
  transition: width 0.15s ease-out;
}

.vehicle-status.altitude {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.altitude .value {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.altitude .label {
  font-size: 10px;
  color: #aaa;
  text-transform: uppercase;
}

.label {
  font-size: 11px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
}

.indicator {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 18px;
  transition: all 0.2s;
}

.indicator.warning {
  background: rgba(255, 0, 0, 0.5);
  color: #ff6b6b;
}

.indicator.active {
  background: rgba(63, 165, 84, 0.5);
  color: #3FA554;
}

@media (max-width: 768px) {
  .vehicle-hud {
    bottom: 20px;
    left: 20px;
  }

  .speedometer {
    min-width: 100px;
    padding: 12px 16px;
  }

  .speed-display {
    font-size: 24px;
  }
}
</style>
