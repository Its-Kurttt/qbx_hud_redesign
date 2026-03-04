# qbx_hud - Vue 3 + Vite HUD

A complete rewrite of the qbx HUD using **Vue 3** and **Vite** for better maintainability, performance, and customization.

## Quick Start

### Development

```bash
# Install dependencies (if not already done)
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

The dev server will hot-reload any changes you make to components or styles.

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with all compiled files. You can:
1. Copy `dist/` contents directly into your FiveM resource
2. Update `fxmanifest.lua` to point at the new files

## Project Structure

```
html/
├── src/
│   ├── main.js                 # Entry point
│   ├── App.vue                 # Root component
│   └── components/
│       ├── PlayerHud.vue       # Health, Armor, Hunger, Thirst, etc.
│       ├── VehicleHud.vue      # Speedometer, Fuel, Altitude
│       ├── MoneyHud.vue        # Cash & Bank display
│       ├── CompassHud.vue      # Compass & Street names
│       └── MenuSettings.vue    # Settings menu
├── public/
│   ├── styles.css              # Main stylesheet
│   ├── responsive.css          # Mobile styles
│   └── brand-logo.svg
├── dist/                       # Build output (created by npm run build)
├── index.html                  # Entry HTML
├── package.json
├── vite.config.js
└── CUSTOMIZATION.md            # Style customization guide
```

## Testing in Dev Mode

The HUD won't show anything until it receives NUI messages from FiveM (or you simulate them).

To test locally, open the browser **Console (F12)** and paste:

```javascript
// Send test message
window.postMessage({
  action: 'hudtick',
  show: true,
  health: 80,
  armor: 50,
  hunger: 60,
  thirst: 70,
  stress: 20,
  voice: 0,
  talking: false,
  radio: 0,
  nos: 100,
  oxygen: 100,
  cruise: false,
  nitroActive: false,
  harness: false,
  speed: 60,
  armed: false,
  parachute: -1,
  hp: 400,
  engine: 85,
  cinematic: false,
  dev: false,
  playerDead: false,
  dynamicHealth: false,
  dynamicArmor: false,
  dynamicHunger: false,
  dynamicThirst: false,
  dynamicStress: false,
  dynamicOxygen: false,
  dynamicEngine: false,
  dynamicNitro: false,
  isPaused: 0
}, '*');
```

The HUD should appear with the test data.

## Customizing Styles

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions on:
- Changing colors, sizes, and positions
- Customizing individual components
- Adjusting responsive breakpoints

### Quick Examples

**Change Player HUD position:**
Edit `src/components/PlayerHud.vue`:
```vue
<style scoped>
.player-hud {
  bottom: 40px;   /* ← change this */
  right: 40px;    /* ← or this */
}
</style>
```

**Change speedometer width:**
Edit `src/components/VehicleHud.vue`:
```vue
<style scoped>
.speedometer {
  min-width: 140px;  /* ← change to desired width */
}
</style>
```

**Change money display color:**
Edit `src/components/MoneyHud.vue`:
```vue
<style scoped>
.money-display.plus .amount {
  color: #3FA554;  /* ← change to desired color */
}
</style>
```

## Component Reference

### PlayerHud
Displays:
- Health bar
- Armor bar
- Hunger bar
- Thirst bar
- Stress bar
- Oxygen bar
- Engine condition
- Nitro/NOS level
- Voice icon (microphone/headset)

**props received from NUI:**
- `show` - visibility
- `health` - 0-100
- `armor` - 0-100
- `hunger` - 0-100
- `thirst` - 0-100
- `stress` - 0-100
- `oxygen` - 0-100
- `engine` - 0-100
- `nos` - nitro level
- `talking` - boolean
- `radio` - boolean
- Various `dynamic*` flags for conditional display

### VehicleHud
Displays:
- Speed (large display)
- Fuel gauge
- Altitude
- Seatbelt warning

**props received from NUI:**
- `show` - visibility
- `speed` - current speed
- `fuel` - 0-100
- `altitude` - feet above ground

### MoneyHud
Displays:
- Cash balance
- Bank balance
- Animated income/expense

**props received from NUI:**
- `action: 'showconstant'` - show cash and bank always
- `action: 'updatemoney'` - update with +/- animation
- `action: 'show'` - show money temporary

### CompassHud
Displays:
- Compass bearing
- Street names
- Degree indicator

**props received from NUI:**
- `show` - visibility
- `street1` - primary street
- `street2` - secondary street
- `showCompass` - boolean
- `showStreets` - boolean
- `showPointer` - boolean
- `showDegrees` - boolean

### MenuSettings
Settings menu with:
- HUD reset options
- Visibility toggles
- Display preferences
- Compass options
- Vehicle display options

All settings persist to `localStorage`.

## FiveM Integration

In your `client/main.lua`, use `SendNUIMessage()` exactly as before:

```lua
SendNUIMessage({
  action = 'hudtick',
  show = true,
  health = GetEntityHealth(ped),
  armor = GetPedArmour(ped),
  -- ... other properties
})
```

All the existing Lua code works unchanged. Only the HTML/JS frontend changed.

## Troubleshooting

**HUD not showing?**
- Make sure `show: true` is in the message
- Check browser console for errors (F12)
- Verify the component is mounted (check Networks tab in DevTools)

**Styles not updating?**
- Vite should auto-reload; try refreshing the page
- Check that you edited the correct component file
- Make sure you saved the file

**Build failed?**
- Run `npm install` to ensure all dependencies
- Delete `node_modules/` and `.` then run `npm install` again
- Check `vite.config.js` points to correct entry

## Performance

Vue 3 + Vite provides:
- ✅ Fast hot module reload in dev
- ✅ Tiny bundle size (~50KB gzipped)
- ✅ Efficient component re-renders
- ✅ Native ES modules
- ✅ Tree-shaking of unused code

## Support & Questions

For issues or customization help, refer to:
1. [Vue 3 Docs](https://vuejs.org/)
2. [Vite Docs](https://vitejs.dev/)
3. [CUSTOMIZATION.md](./CUSTOMIZATION.md)
