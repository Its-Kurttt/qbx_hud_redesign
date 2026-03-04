/* ============================================
   qbx_hud - CSS Customization Guide
   ============================================
   
   This file explains how to easily customize
   the HUD appearance. All component styles
   are scoped to their Vue components.

   To customize styles, edit the <style> blocks
   in the components listed below:
   
   📁 src/components/
   ├── PlayerHud.vue       - Health, Armor, Hunger, Thirst, etc.
   ├── VehicleHud.vue      - Speedometer, Fuel, Altitude
   ├── MoneyHud.vue        - Cash & Bank display
   ├── CompassHud.vue      - Compass & Street names
   └── MenuSettings.vue    - Settings menu

   ============================================
   Global Styles
   ============================================ */

/* Main entry point for colors & spacing */
:root {
  /* Colors */
  --primary-bg: rgba(0, 0, 0, 0.3);
  --primary-border: rgba(255, 255, 255, 0.2);
  --primary-text: #ffffff;
  --secondary-text: #aaaaaa;

  /* Status colors */
  --color-health: #3fa554;
  --color-armor: #326dbf;
  --color-hunger: #dd6e14;
  --color-thirst: #1a7cad;
  --color-stress: #ff6b9d;
  --color-oxygen: #00bfff;
  --color-engine: #3fa554;
  --color-danger: #ff0000;

  /* Spacing */
  --gap-sm: 8px;
  --gap-md: 12px;
  --gap-lg: 20px;

  /* Positioning */
  --pos-offset: 40px;
  --pos-offset-sm: 20px;

  /* Transitions */
  --transition-fast: 0.15s ease-out;
  --transition-normal: 0.2s;
}

/* ============================================
   Quick Reference: Customization Examples
   ============================================

   1. CHANGE STATUS BAR HEIGHT:
      In PlayerHud.vue, find .status-bar and change:
      height: 20px; → height: 30px;

   2. CHANGE SPEEDOMETER SIZE:
      In VehicleHud.vue, find .speedometer and change:
      min-width: 140px; → min-width: 180px;

   3. CHANGE MONEY DISPLAY COLORS:
      In MoneyHud.vue, find .money-display.plus and change:
      color: #3FA554; → color: #00ff00;

   4. CHANGE COMPASS RADIUS:
      In CompassHud.vue, find .baseplate and change:
      width: 120px; → width: 150px;
      height: 120px; → height: 150px;

   5. DARK MODE MENU:
      In MenuSettings.vue, find .menu-panel and modify:
      background: rgba(20, 20, 25, 0.95);

   6. POSITIONING HUDS:
      PlayerHud.vue:   .player-hud { bottom: 40px; right: 40px; }
      VehicleHud.vue:  .vehicle-hud { bottom: 40px; left: 40px; }
      MoneyHud.vue:    .money-hud { top: 40px; right: 40px; }
      CompassHud.vue:  .compass-hud { top: 50%; left: 50%; }

   ============================================
   Font Awesome Icons Included
   ============================================
   Used in the HUD:
   - fas fa-microphone    (voice off)
   - fas fa-headset       (voice on radio)
   - fas fa-shield-alt    (seatbelt)

   See: https://fontawesome.com/icons for more

   ============================================
   Development Workflow
   ============================================

   1. Run: npm run dev
      Opens dev server at http://localhost:5173

   2. Test with console messages:
      window.postMessage({
        action: 'hudtick',
        show: true,
        health: 80,
        ... (see component data for full list)
      }, '*')

   3. Make CSS changes in component <style> blocks
      - Changes hot-reload instantly
      - Only that component re-renders
      - No page refresh needed

   4. When ready to deploy:
      npm run build
      Copy dist/ to your FiveM resource

   ============================================
   Responsive Design
   ============================================

   All components include @media (max-width: 768px)
   adjustments for mobile/smaller screens.

   To adjust breakpoint, search components for:
   @media (max-width: 768px)

   Update to your preferred width, e.g.:
   @media (max-width: 1024px)

   ============================================
*/
