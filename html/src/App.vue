<template>
  <div id="hud-container">
    <PlayerHud />
    <VehicleHud />
    <MoneyHud />
    <CompassHud />
    <MenuSettings />
  </div>
</template>

<script>
import PlayerHud from './components/PlayerHud.vue'
import VehicleHud from './components/VehicleHud.vue'
import MoneyHud from './components/MoneyHud.vue'
import CompassHud from './components/CompassHud.vue'
import MenuSettings from './components/MenuSettings.vue'

export default {
  name: 'App',
  components: {
    PlayerHud,
    VehicleHud,
    MoneyHud,
    CompassHud,
    MenuSettings
  },
  mounted() {
    window.addEventListener('message', (event) => {
      if (event.data.action === 'open') {
        console.log('Menu opened')
      }
    })
  }
}
</script>

<style scoped>
#hud-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

* {
  box-sizing: border-box;
}
</style>
