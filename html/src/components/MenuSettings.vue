<template>
  <div id="openmenu" class="menu-settings">
    <div class="menu-panel">
      <div class="menu-header">
        <h2>HUD Settings</h2>
        <button @click="closeMenu" class="close-btn">&times;</button>
      </div>

      <div class="menu-content">
        <!-- Reset Settings -->
        <section class="menu-section">
          <h3>Reset HUD</h3>
          <button @click="resetStorage" class="btn btn-primary">
            Reset Settings
          </button>
          <p class="help-text">Restore settings to default (you will have to relog)</p>

          <button @click="restartHud" class="btn btn-primary">
            Restart HUD
          </button>
          <p class="help-text">Give your HUD a good reset or use /resethud</p>
        </section>

        <!-- Options -->
        <section class="menu-section">
          <h3>Options</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isOutMapChecked" @change="saveToLocalStorage" />
            <span>Show Minimap Only in Vehicle</span>
            <small>Disabling this will always keep your minimap visible</small>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isOutCompassChecked" @change="saveToLocalStorage" />
            <span>Show Compass Only in Vehicle</span>
            <small>Disabling this will always keep your compass visible</small>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isCompassFollowChecked" @change="saveToLocalStorage" />
            <span>Show Compass Follow Cam</span>
            <small>Use your mouse to rotate the compass</small>
          </label>
        </section>

        <!-- Notifications -->
        <section class="menu-section">
          <h3>Notifications</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isMapNotifChecked" @change="saveToLocalStorage" />
            <span>Map Notifications Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isLowFuelChecked" @change="saveToLocalStorage" />
            <span>Low Fuel Alert Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isCinematicNotifChecked" @change="saveToLocalStorage" />
            <span>Cinematic Mode Notifications Enabled</span>
          </label>
        </section>

        <!-- Status Display -->
        <section class="menu-section">
          <h3>Status Display</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicHealthChecked" @change="saveToLocalStorage" />
            <span>Show Health always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicArmorChecked" @change="saveToLocalStorage" />
            <span>Show Armor always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicHungerChecked" @change="saveToLocalStorage" />
            <span>Show Hunger always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicThirstChecked" @change="saveToLocalStorage" />
            <span>Show Thirst always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicStressChecked" @change="saveToLocalStorage" />
            <span>Show Stress always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicOxygenChecked" @change="saveToLocalStorage" />
            <span>Show Oxygen always</span>
          </label>
        </section>

        <!-- Vehicle Options -->
        <section class="menu-section">
          <h3>Vehicle</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isHideMapChecked" @change="saveToLocalStorage" />
            <span>Minimap Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicEngineChecked" @change="saveToLocalStorage" />
            <span>Show Engine always</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDynamicNitroChecked" @change="saveToLocalStorage" />
            <span>Show Nitro always</span>
          </label>
        </section>

        <!-- Compass Options -->
        <section class="menu-section">
          <h3>Compass</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isShowCompassChecked" @change="saveToLocalStorage" />
            <span>Compass Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isShowStreetsChecked" @change="saveToLocalStorage" />
            <span>Show Street Names Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isPointerShowChecked" @change="saveToLocalStorage" />
            <span>Show Compass Pointer Enabled</span>
          </label>

          <label class="checkbox-item">
            <input type="checkbox" v-model="isDegreesShowChecked" @change="saveToLocalStorage" />
            <span>Show Compass Degrees Enabled</span>
          </label>
        </section>

        <!-- Cinematic Mode -->
        <section class="menu-section">
          <h3>Cinematic Mode</h3>
          <label class="checkbox-item">
            <input type="checkbox" v-model="isCinematicModeChecked" @change="saveToLocalStorage" />
            <span>Cinematic Mode Enabled</span>
          </label>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuSettings',
  data() {
    return {
      isOutMapChecked: this.getSetting('isOutMapChecked', true),
      isOutCompassChecked: this.getSetting('isOutCompassChecked', true),
      isCompassFollowChecked: this.getSetting('isCompassFollowChecked', true),
      isMapNotifChecked: this.getSetting('isMapNotifChecked', true),
      isLowFuelChecked: this.getSetting('isLowFuelChecked', true),
      isCinematicNotifChecked: this.getSetting('isCinematicNotifChecked', true),
      isDynamicHealthChecked: this.getSetting('isDynamicHealthChecked', false),
      isDynamicArmorChecked: this.getSetting('isDynamicArmorChecked', false),
      isDynamicHungerChecked: this.getSetting('isDynamicHungerChecked', false),
      isDynamicThirstChecked: this.getSetting('isDynamicThirstChecked', false),
      isDynamicStressChecked: this.getSetting('isDynamicStressChecked', false),
      isDynamicOxygenChecked: this.getSetting('isDynamicOxygenChecked', false),
      isHideMapChecked: this.getSetting('isHideMapChecked', true),
      isDynamicEngineChecked: this.getSetting('isDynamicEngineChecked', false),
      isDynamicNitroChecked: this.getSetting('isDynamicNitroChecked', false),
      isShowCompassChecked: this.getSetting('isShowCompassChecked', true),
      isShowStreetsChecked: this.getSetting('isShowStreetsChecked', true),
      isPointerShowChecked: this.getSetting('isPointerShowChecked', true),
      isDegreesShowChecked: this.getSetting('isDegreesShowChecked', true),
      isCinematicModeChecked: this.getSetting('isCinematicModeChecked', false)
    }
  },
  mounted() {
    this.messageListener = (event) => {
      if (event.data.action === 'open') {
        this.openMenu()
      }
    }
    window.addEventListener('message', this.messageListener)

    // Hide menu on Escape
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu()
      }
    })
  },
  beforeUnmount() {
    window.removeEventListener('message', this.messageListener)
  },
  methods: {
    getSetting(key, defaultValue) {
      const stored = localStorage.getItem(key)
      if (stored === null) return defaultValue
      if (typeof defaultValue === 'boolean') {
        return stored === 'true'
      }
      return stored
    },
    saveToLocalStorage() {
      localStorage.setItem('isOutMapChecked', this.isOutMapChecked)
      localStorage.setItem('isOutCompassChecked', this.isOutCompassChecked)
      localStorage.setItem('isCompassFollowChecked', this.isCompassFollowChecked)
      localStorage.setItem('isMapNotifChecked', this.isMapNotifChecked)
      localStorage.setItem('isLowFuelChecked', this.isLowFuelChecked)
      localStorage.setItem('isCinematicNotifChecked', this.isCinematicNotifChecked)
      localStorage.setItem('isDynamicHealthChecked', this.isDynamicHealthChecked)
      localStorage.setItem('isDynamicArmorChecked', this.isDynamicArmorChecked)
      localStorage.setItem('isDynamicHungerChecked', this.isDynamicHungerChecked)
      localStorage.setItem('isDynamicThirstChecked', this.isDynamicThirstChecked)
      localStorage.setItem('isDynamicStressChecked', this.isDynamicStressChecked)
      localStorage.setItem('isDynamicOxygenChecked', this.isDynamicOxygenChecked)
      localStorage.setItem('isHideMapChecked', this.isHideMapChecked)
      localStorage.setItem('isDynamicEngineChecked', this.isDynamicEngineChecked)
      localStorage.setItem('isDynamicNitroChecked', this.isDynamicNitroChecked)
      localStorage.setItem('isShowCompassChecked', this.isShowCompassChecked)
      localStorage.setItem('isShowStreetsChecked', this.isShowStreetsChecked)
      localStorage.setItem('isPointerShowChecked', this.isPointerShowChecked)
      localStorage.setItem('isDegreesShowChecked', this.isDegreesShowChecked)
      localStorage.setItem('isCinematicModeChecked', this.isCinematicModeChecked)
    },
    openMenu() {
      const menu = document.getElementById('openmenu')
      if (menu) {
        menu.style.display = 'block'
      }
    },
    closeMenu() {
      const menu = document.getElementById('openmenu')
      if (menu) {
        menu.style.display = 'none'
      }
      this.postToServer('closeMenu')
    },
    resetStorage() {
      localStorage.clear()
      window.location.reload()
    },
    restartHud() {
      this.closeMenu()
      this.postToServer('restartHud')
    },
    postToServer(endpoint) {
      // This will work in FiveM; in dev it will fail silently
      try {
        const resourceName = typeof GetParentResourceName !== 'undefined' ? GetParentResourceName() : 'qbx_hud'
        fetch(`https://${resourceName}/${endpoint}`, { method: 'POST' })
      } catch (e) {
        console.log(`Dev mode: ${endpoint} would be called in production`)
      }
    }
  }
}
</script>

<style scoped>
.menu-settings {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1000;
  pointer-events: auto;
  align-items: center;
  justify-content: center;
}

.menu-settings[style*="display: block"] {
  display: flex !important;
}

.menu-panel {
  background: rgba(20, 20, 25, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  sticky: 0;
}

.menu-header h2 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.close-btn {
  background: none;
  border: none;
  color: #aaa;
  font-size: 32px;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.menu-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.menu-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-section h3 {
  margin: 0 0 12px 0;
  font-size: 14px;
  text-transform: uppercase;
  color: #aaa;
  font-weight: 600;
  letter-spacing: 1px;
}

.checkbox-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background 0.2s;
}

.checkbox-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.checkbox-item input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 12px;
}

.checkbox-item span {
  color: #fff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.checkbox-item small {
  color: #888;
  font-size: 12px;
  margin-left: 30px;
}

.checkbox-item input[type='checkbox'] {
  vertical-align: top;
}

.btn {
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-primary {
  background: rgba(63, 165, 84, 0.3);
  border-color: rgba(63, 165, 84, 0.5);
}

.btn-primary:hover {
  background: rgba(63, 165, 84, 0.5);
  border-color: rgba(63, 165, 84, 0.7);
}

.help-text {
  margin: 0 0 16px 0;
  font-size: 12px;
  color: #888;
}

@media (max-width: 768px) {
  .menu-panel {
    max-width: 90vw;
  }

  .menu-header {
    padding: 16px;
  }

  .menu-content {
    padding: 16px;
  }
}
</style>
