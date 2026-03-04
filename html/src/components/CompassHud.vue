<template>
  <div id="baseplate-container" v-show="show" class="compass-hud">
    <!-- Streets -->
    <div v-if="showStreets" class="street-container">
      <div class="street2">{{ street2 }}</div>
      <div class="street1">{{ street1 }}</div>
    </div>

    <!-- Compass -->
    <div class="baseplate" v-show="show">
      <div v-if="showPointer" class="pointer">˅</div>
      <div v-if="showDegrees" class="degrees">{{ degrees }}</div>

      <!-- SVG Compass Bezel -->
      <svg class="bezel" viewBox="-90 0 180 5" v-if="showCompass">
        <rect width="3" stroke="black" fill="white" stroke-width="0.5" stroke-opacity="0.6" height="20" x="-90" />
        <rect width="3" stroke="black" fill="white" stroke-width="0.5" stroke-opacity="0.6" height="9" x="-45" />
        <rect width="4.5" stroke="black" fill="white" stroke-width="0.5" stroke-opacity="0.6" height="20" x="0" />
        <rect width="3" stroke="black" fill="white" stroke-width="0.5" stroke-opacity="0.6" height="9" x="45" />
        <rect width="4.5" stroke="black" fill="white" stroke-width="0.5" stroke-opacity="0.6" height="20" x="90" />
      </svg>

      <!-- SVG Compass Bearing -->
      <svg class="bearing" viewBox="-90 0 180 1.5" v-if="showCompass">
        <text x="0" y="1.5" dominant-baseline="middle" text-anchor="middle" fill="yellow">N</text>
        <text x="90" y="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">E</text>
        <text x="180" y="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">S</text>
        <text x="270" y="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">W</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompassHud',
  data() {
    return {
      show: false,
      street1: '',
      street2: '',
      showCompass: true,
      showStreets: true,
      showPointer: true,
      showDegrees: true,
      degrees: 0
    }
  },
  mounted() {
    this.messageListener = (event) => {
      if (event.data.action === 'baseplate') {
        this.updateCompass(event.data)
      } else if (event.data.action === 'update') {
        this.updateDegrees(event.data)
      }
    }
    window.addEventListener('message', this.messageListener)
  },
  beforeUnmount() {
    window.removeEventListener('message', this.messageListener)
  },
  methods: {
    updateCompass(data) {
      this.show = data.show
      this.street1 = data.street1 || ''
      this.street2 = data.street2 || ''
      this.showCompass = data.showCompass !== false
      this.showStreets = data.showStreets !== false
      this.showPointer = data.showPointer !== false
      this.showDegrees = data.showDegrees !== false
    },
    updateDegrees(data) {
      if (data.value !== undefined) {
        this.degrees = data.value
      }
    }
  }
}
</script>

<style scoped>
.compass-hud {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  z-index: 50;
}

.street-container {
  text-align: center;
  margin-bottom: 12px;
  pointer-events: none;
}

.street2 {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.street1 {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  margin-top: 4px;
}

.baseplate {
  position: relative;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.pointer {
  position: absolute;
  top: 0;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
}

.degrees {
  position: absolute;
  bottom: 8px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 8px;
  border-radius: 12px;
}

.bezel {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.bearing {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

@media (max-width: 768px) {
  .baseplate {
    width: 90px;
    height: 90px;
  }

  .pointer {
    font-size: 18px;
  }

  .street1 {
    font-size: 14px;
  }

  .street2 {
    font-size: 12px;
  }
}
</style>
