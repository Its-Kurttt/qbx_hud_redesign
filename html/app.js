const { ref, onBeforeUnmount } = Vue

const app = Vue.createApp({
  data: function() {
		return {
			isOutMapChecked: this.initIsOutMapChecked(),
      isOutCompassChecked: this.initIsOutCompassChecked(),
      isCompassFollowChecked: this.initIsCompassFollowChecked(),
      isMapNotifChecked: this.initIsMapNotifChecked(),
      isLowFuelChecked: this.initIsLowFuelChecked(),
      isCinematicNotifChecked: this.initIsCinematicNotifChecked(),
      isDynamicHealthChecked: this.initIsDynamicHealthChecked(),
      isDynamicArmorChecked: this.initIsDynamicArmorChecked(),
      isDynamicHungerChecked: this.initIsDynamicHungerChecked(),
      isDynamicThirstChecked: this.initIsDynamicThirstChecked(),
      isDynamicStressChecked: this.initIsDynamicStressChecked(),
      isDynamicOxygenChecked: this.initIsDynamicOxygenChecked(),
      isChangeFPSChecked: this.initIsChangeFPSChecked(),
      isToggleMapShapeChecked: this.initIsToggleMapShapeChecked(),
      isHideMapChecked: this.initIsHideMapChecked(),
      isToggleMapBordersChecked: this.initIsToggleMapBordersChecked(),
      isDynamicEngineChecked: this.initIsDynamicEngineChecked(),
      isDynamicNitroChecked: this.initIsDynamicNitroChecked(),
      isChangeCompassFPSChecked: this.initIsChangeCompassFPSChecked(),
      isShowCompassChecked: this.initIsShowCompassChecked(),
      isShowStreetsChecked: this.initIsShowStreetsChecked(),
      isPointerShowChecked: this.initIsPointerShowChecked(),
      isDegreesShowChecked: this.initIsDegreesShowChecked(),
      isCineamticModeChecked: this.initIsCineamticModeChecked(),
		};
	},
  setup () {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 }
    ])
    
    const intervals = [ null, null, null ]

    function startComputing (id) {
      progress.value[ id ].loading = true
      progress.value[ id ].percentage = 0

      intervals[ id ] = setInterval(() => {
        progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
        if (progress.value[ id ].percentage >= 100) {
          clearInterval(intervals[ id ])
          progress.value[ id ].loading = false
        }
      }, 700)
    }

    onBeforeUnmount(() => {
      intervals.forEach(val => {
        clearInterval(val)
      })
    }) 
    return {
      framework: {
        plugins: [
          'LocalStorage',
          'SessionStorage'
        ]
      },
      tab: ref('hud'),
      splitterModel: ref(20),
      selection: ref([]),
      progress,
      startComputing,
    }
  },
  watch: {
    isOutMapChecked: function() {
			localStorage.setItem("isOutMapChecked", this.isOutMapChecked);
		},
    isOutCompassChecked: function() {
			localStorage.setItem("isOutCompassChecked", this.isOutCompassChecked);
		},
    isCompassFollowChecked: function() {
			localStorage.setItem("isCompassFollowChecked", this.isCompassFollowChecked);
		},
    isMapNotifChecked: function() {
			localStorage.setItem("isMapNotifChecked", this.isMapNotifChecked);
		},
    isLowFuelChecked: function() {
			localStorage.setItem("isLowFuelChecked", this.isLowFuelChecked);
		},
    isCinematicNotifChecked: function() {
			localStorage.setItem("isCinematicNotifChecked", this.isCinematicNotifChecked);
		},
    isDynamicHealthChecked: function() {
			localStorage.setItem("isDynamicHealthChecked", this.isDynamicHealthChecked);
		},
    isDynamicArmorChecked: function() {
			localStorage.setItem("isDynamicArmorChecked", this.isDynamicArmorChecked);
		},
    isDynamicHungerChecked: function() {
			localStorage.setItem("isDynamicHungerChecked", this.isDynamicHungerChecked);
		},
    isDynamicThirstChecked: function() {
			localStorage.setItem("isDynamicThirstChecked", this.isDynamicThirstChecked);
		},
    isDynamicStressChecked: function() {
			localStorage.setItem("isDynamicStressChecked", this.isDynamicStressChecked);
		},
    isDynamicOxygenChecked: function() {
			localStorage.setItem("isDynamicOxygenChecked", this.isDynamicOxygenChecked);
		},
    isChangeFPSChecked: function() {
			localStorage.setItem("isChangeFPSChecked", this.isChangeFPSChecked);
		},
    isToggleMapShapeChecked: function() {
			localStorage.setItem("isToggleMapShapeChecked", this.isToggleMapShapeChecked);
		},
    isHideMapChecked: function() {
			localStorage.setItem("isHideMapChecked", this.isHideMapChecked);
		},
    isToggleMapBordersChecked: function() {
			localStorage.setItem("isToggleMapBordersChecked", this.isToggleMapBordersChecked);
		},
    isDynamicEngineChecked: function() {
			localStorage.setItem("isDynamicEngineChecked", this.isDynamicEngineChecked);
		},
    isDynamicNitroChecked: function() {
			localStorage.setItem("isDynamicNitroChecked", this.isDynamicNitroChecked);
		},
    isChangeCompassFPSChecked: function() {
			localStorage.setItem("isChangeCompassFPSChecked", this.isChangeCompassFPSChecked);
		},
    isShowCompassChecked: function() {
			localStorage.setItem("isShowCompassChecked", this.isShowCompassChecked);
		},
    isShowStreetsChecked: function() {
			localStorage.setItem("isShowStreetsChecked", this.isShowStreetsChecked);
		},
    isPointerShowChecked: function() {
			localStorage.setItem("isPointerShowChecked", this.isPointerShowChecked);
		},
    isDegreesShowChecked: function() {
			localStorage.setItem("isDegreesShowChecked", this.isDegreesShowChecked);
		},
    isCineamticModeChecked: function() {
			localStorage.setItem("isCineamticModeChecked", this.isCineamticModeChecked);
		},
	},
  methods: {
    initIsOutMapChecked: function() {
			const stored = localStorage.getItem("isOutMapChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsOutCompassChecked: function() {
			const stored = localStorage.getItem("isOutCompassChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsCompassFollowChecked: function() {
			const stored = localStorage.getItem("isCompassFollowChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsMapNotifChecked: function() {
			const stored = localStorage.getItem("isMapNotifChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsLowFuelChecked: function() {
			const stored = localStorage.getItem("isLowFuelChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsCinematicNotifChecked: function() {
			const stored = localStorage.getItem("isCinematicNotifChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicHealthChecked: function() {
			const stored = localStorage.getItem("isDynamicHealthChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicArmorChecked: function() {
			const stored = localStorage.getItem("isDynamicArmorChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicHungerChecked: function() {
			const stored = localStorage.getItem("isDynamicHungerChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicThirstChecked: function() {
			const stored = localStorage.getItem("isDynamicThirstChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicStressChecked: function() {
			const stored = localStorage.getItem("isDynamicStressChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicOxygenChecked: function() {
			const stored = localStorage.getItem("isDynamicOxygenChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsChangeFPSChecked: function() {
			const stored = localStorage.getItem("isChangeFPSChecked");
			if (stored === null) {
				return 'Optimized';
			} else {
				return stored;
			}
		}, 
    initIsToggleMapShapeChecked: function() {
			const stored = localStorage.getItem("isToggleMapShapeChecked");
			if (stored === null) {
				return 'Circle';
			} else {
				return stored;
			}
		},
    initIsHideMapChecked: function() {
			const stored = localStorage.getItem("isHideMapChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsToggleMapBordersChecked: function() {
			const stored = localStorage.getItem("isToggleMapBordersChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicEngineChecked: function() {
			const stored = localStorage.getItem("isDynamicEngineChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsDynamicNitroChecked: function() {
			const stored = localStorage.getItem("isDynamicNitroChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    initIsChangeCompassFPSChecked: function() {
			const stored = localStorage.getItem("isChangeCompassFPSChecked");
			if (stored === null) {
				return 'Optimized';
			} else {
				return stored;
			}
		}, 
    initIsShowCompassChecked: function() {
			const stored = localStorage.getItem("isShowCompassChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsShowStreetsChecked: function() {
			const stored = localStorage.getItem("isShowStreetsChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsPointerShowChecked: function() {
			const stored = localStorage.getItem("isPointerShowChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsDegreesShowChecked: function() {
			const stored = localStorage.getItem("isDegreesShowChecked");
			if (stored === null) {
				return true;
			} else {
				return stored == 'true';
			}
		},
    initIsCineamticModeChecked: function() {
			const stored = localStorage.getItem("isCineamticModeChecked");
			if (stored === null) {
				return false;
			} else {
				return stored == 'true';
			}
		},
    resetStorage: function(event) {
      targetId = event.currentTarget.id;
      localStorage.clear();
      resetStorage()
    },
    restartHud: function(event) {
      targetId = event.currentTarget.id;
      restartHud()
    },
    showOutMap: function(event) {
      targetId = event.currentTarget.id;
      showOutMap()
    },
    showOutCompass: function(event) {
      targetId = event.currentTarget.id;
      showOutCompass()
    },
    showFollowCompass: function(event) {
      targetId = event.currentTarget.id;
      showFollowCompass()
    },
    showMapNotif: function(event) {
      targetId = event.currentTarget.id;
      showMapNotif()
    },
    showFuelAlert: function(event) {
      targetId = event.currentTarget.id;
      showFuelAlert()
    },
    showCinematicNotif: function(event) {
      targetId = event.currentTarget.id;
      showCinematicNotif()
    },
    dynamicHealth: function(event) {
      targetId = event.currentTarget.id;
      dynamicHealth()
    },
    dynamicArmor: function(event) {
      targetId = event.currentTarget.id;
      dynamicArmor()
    },
    dynamicHunger: function(event) {
      targetId = event.currentTarget.id;
      dynamicHunger()
    },
    dynamicThirst: function(event) {
      targetId = event.currentTarget.id;
      dynamicThirst()
    },
    dynamicStress: function(event) {
      targetId = event.currentTarget.id;
      dynamicStress()
    },
    dynamicOxygen: function(event) {
      targetId = event.currentTarget.id;
      dynamicOxygen()
    },
    changeFPS: function(event) {
      targetId = event.currentTarget.id;
      changeFPS()
    },
    ToggleMapShape: function(event) {
      targetId = event.currentTarget.id;
      ToggleMapShape()
    },
    HideMap: function(event) {
      targetId = event.currentTarget.id;
      HideMap()
    },
    ToggleMapBorders: function(event) {
      targetId = event.currentTarget.id;
      ToggleMapBorders()
    },
    dynamicEngine: function(event) {
      targetId = event.currentTarget.id;
      dynamicEngine()
    },
    dynamicNitro: function(event) {
      targetId = event.currentTarget.id;
      dynamicNitro()
    },
    changeCompassFPS: function(event) {
      targetId = event.currentTarget.id;
      changeCompassFPS()
    },
    showCompassBase: function(event) {
      targetId = event.currentTarget.id;
      showCompassBase()
    },
    showStreetsNames: function(event) {
      targetId = event.currentTarget.id;
      showStreetsNames()
    },
    showPointerIndex: function(event) {
      targetId = event.currentTarget.id;
      showPointerIndex()
    },
    showDegreesNum: function(event) {
      targetId = event.currentTarget.id;
      showDegreesNum()
    },
    cinematicMode: function(event) {
      targetId = event.currentTarget.id;
      cinematicMode()
    },
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
        if (event.data.event === 'isToggleMapShapeChecked' || event.data.event === 'isChangeFPSChecked') {
          eval(`this.${event.data.event} = "${event.data.toggle}"`)
        }
    });
  },
})

app.use(Quasar, { config: {} })
app.mount('#menu')

document.onkeyup = function (data) {
  if (data.key == 'Escape') {
    closeMenu()
  }
};

function closeMenu() {
  $("#openmenu").fadeOut(550);
  $.post(`https://${GetParentResourceName()}/closeMenu`);
}
function restartHud() {
  closeMenu()
  $.post(`https://${GetParentResourceName()}/restartHud`);
}
function resetStorage() {
  closeMenu()
  $.post(`https://${GetParentResourceName()}/resetStorage`);
}
function showOutMap() {
  $.post(`https://${GetParentResourceName()}/showOutMap`);
}
function showOutCompass() {
  $.post(`https://${GetParentResourceName()}/showOutCompass`);
}
function showFollowCompass() {
  $.post(`https://${GetParentResourceName()}/showFollowCompass`);
}
function showMapNotif() {
  $.post(`https://${GetParentResourceName()}/showMapNotif`);
}
function showFuelAlert() {
  $.post(`https://${GetParentResourceName()}/showFuelAlert`);
}
function showCinematicNotif() {
  $.post(`https://${GetParentResourceName()}/showCinematicNotif`);
}
function dynamicHealth() {
  $.post(`https://${GetParentResourceName()}/dynamicHealth`);
}
function dynamicArmor() {
  $.post(`https://${GetParentResourceName()}/dynamicArmor`);
}
function dynamicHunger() {
  $.post(`https://${GetParentResourceName()}/dynamicHunger`);
}
function dynamicThirst() {
  $.post(`https://${GetParentResourceName()}/dynamicThirst`);
}
function dynamicStress() {
  $.post(`https://${GetParentResourceName()}/dynamicStress`);
}
function dynamicOxygen() {
  $.post(`https://${GetParentResourceName()}/dynamicOxygen`);
}
function dynamicEngine() {
  $.post(`https://${GetParentResourceName()}/dynamicEngine`);
}
function dynamicNitro() {
  $.post(`https://${GetParentResourceName()}/dynamicNitro`);
}
function ToggleMapShape() {
  $.post(`https://${GetParentResourceName()}/ToggleMapShape`);
}
function changeFPS() {
  $.post(`https://${GetParentResourceName()}/changeFPS`);
}
function ToggleMapBorders() {
  $.post(`https://${GetParentResourceName()}/ToggleMapBorders`);
}
function HideMap() {
  $.post(`https://${GetParentResourceName()}/HideMap`);
}
function changeCompassFPS() {
  $.post(`https://${GetParentResourceName()}/changeCompassFPS`);
}
function showCompassBase() {
  $.post(`https://${GetParentResourceName()}/showCompassBase`);
}
function showStreetsNames() {
  $.post(`https://${GetParentResourceName()}/showStreetsNames`);
}
function showPointerIndex() {
  $.post(`https://${GetParentResourceName()}/showPointerIndex`);
}
function showDegreesNum() {
  $.post(`https://${GetParentResourceName()}/showDegreesNum`);
}
function cinematicMode() {
  $.post(`https://${GetParentResourceName()}/cinematicMode`);
}

$(document).ready(function () {
  window.addEventListener("message", function (event) {
    switch (event.data.action) {
    case "open":
      Open(event.data);
      break;
    }
  });
});

Open = function (data) {
  $("#openmenu").fadeIn(150);
}
$('.closeMenu').click(() => {
  closeMenu()
});

// MONEY HUD

const moneyHud = Vue.createApp({
  data() {
    return {
      cash: 0,
      bank: 0,
      amount: 0,
      plus: false,
      minus: false,
      showCash: false,
      showBank: false,
      showUpdate: false,
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      switch (event.data.action) {
        case "showconstant":
          this.showConstant(event.data);
          break;
        case "updatemoney":
          this.update(event.data);
          break;
        case "show":
          this.showAccounts(event.data);
          break;
      }
    });
  },
  methods: {
    // CONFIGURE YOUR CURRENCY HERE
    // https://www.w3schools.com/tags/ref_language_codes.asp LANGUAGE CODES
    // https://www.w3schools.com/tags/ref_country_codes.asp COUNTRY CODES
    formatMoney(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    showConstant(data) {
      this.showCash = true;
      this.showBank = true;
      this.cash = data.cash;
      this.bank = data.bank;
    },
    update(data) {
      this.showUpdate = true;
      this.amount = data.amount;
      this.bank = data.bank;
      this.cash = data.cash;
      this.minus = data.minus;
      this.plus = data.plus;
      if (data.type === "cash") {
        if (data.minus) {
          this.showCash = true;
          this.minus = true;
          setTimeout(() => (this.showUpdate = false), 1000);
          setTimeout(() => (this.showCash = false), 2000);
        } else {
          this.showCash = true;
          this.plus = true;
          setTimeout(() => (this.showUpdate = false), 1000);
          setTimeout(() => (this.showCash = false), 2000);
        }
      }
      if (data.type === "bank") {
        if (data.minus) {
          this.showBank = true;
          this.minus = true;
          setTimeout(() => (this.showUpdate = false), 1000);
          setTimeout(() => (this.showBank = false), 2000);
        } else {
          this.showBank = true;
          this.plus = true;
          setTimeout(() => (this.showUpdate = false), 1000);
          setTimeout(() => (this.showBank = false), 2000);
        }
      }
    },
    showAccounts(data) {
      if (data.type === "cash" && !this.showCash) {
        this.showCash = true;
        this.cash = data.cash;
        setTimeout(() => (this.showCash = false), 3500);
      } else if (data.type === "bank" && !this.showBank) {
        this.showBank = true;
        this.bank = data.bank;
        setTimeout(() => (this.showBank = false), 3500);
      }
    },
  },
}).mount("#money-container");

// PLAYER HUD

const playerHud = {
  data() {
    return {
      show: false,
      health: 0,
      armor: 0,
      hunger: 0,
      thirst: 0,
      stress: 0,
      oxygen: 0,
      voice: 0,
      radio: 0,
      dynamicHealth: false,
      dynamicArmor: false,
      dynamicHunger: false,
      dynamicThirst: false,
      dynamicStress: false,
      dynamicOxygen: false,
      talkingColor: "#FFFFFF",
      showHealth: true,
      showArmor: true,
      showHunger: true,
      showThirst: true,
      showStress: true,
      showOxygen: true,
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      if (event.data.action === "hudtick") {
        this.hudTick(event.data);
      }
    });
  },
  methods: {
    hudTick(data) {
      this.show = !!data.show && data.isPaused !== 1;
      this.health = data.playerDead ? 0 : Math.max(0, Math.floor(data.health));
      this.armor = Math.max(0, Math.floor(data.armor));
      this.hunger = Math.max(0, Math.floor(data.hunger));
      this.thirst = Math.max(0, Math.floor(data.thirst));
      this.stress = Math.max(0, Math.floor(data.stress));
      this.oxygen = Math.max(0, Math.floor(data.oxygen));
      this.voice = Number(data.voice || 0).toFixed(1);
      this.radio = data.radio || 0;

      this.dynamicHealth = !!data.dynamicHealth;
      this.dynamicArmor = !!data.dynamicArmor;
      this.dynamicHunger = !!data.dynamicHunger;
      this.dynamicThirst = !!data.dynamicThirst;
      this.dynamicStress = !!data.dynamicStress;
      this.dynamicOxygen = !!data.dynamicOxygen;

      this.showHealth = !this.dynamicHealth || this.health < 100;
      this.showArmor = !this.dynamicArmor || this.armor > 0;
      this.showHunger = !this.dynamicHunger || this.hunger < 100;
      this.showThirst = !this.dynamicThirst || this.thirst < 100;
      this.showStress = !this.dynamicStress || this.stress > 0;
      this.showOxygen = !this.dynamicOxygen || this.oxygen < 100;

      if (data.talking && this.radio) {
        this.talkingColor = "#D64763";
      } else if (data.talking) {
        this.talkingColor = "#FFFF3E";
      } else {
        this.talkingColor = "#FFFFFF";
      }
    },
  },
};
const app2 = Vue.createApp(playerHud);
app2.use(Quasar);
app2.mount("#ui-container");

// VEHICLE HUD

const vehHud = {
  data() {
    return {
      show: false,
      speed: 0,
      fuel: 0,
      engine: 0,
      nitro: 0,
      seatbeltText: "OFF",
      seatbeltColor: "#FF5100",
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      if (event.data.action === "car") {
        this.vehicleHud(event.data);
      }
    });
  },
  methods: {
    vehicleHud(data) {
      this.show = !!data.show && data.isPaused !== 1 && !data.isAircraft;
      this.speed = Math.max(0, Math.floor(data.speed || 0));
      this.fuel = Math.max(0, Math.floor(data.fuel || 0));
      this.engine = Math.max(0, Math.floor(data.engine || 0));
      this.nitro = Math.max(0, Math.floor(data.nitro || 0));
      if (data.seatbelt === true) {
        this.seatbeltText = "ON";
        this.seatbeltColor = "#6CE36C";
      } else {
        this.seatbeltText = "OFF";
        this.seatbeltColor = "#FF5100";
      }
    },
  },
};
const app3 = Vue.createApp(vehHud);
app3.use(Quasar);
app3.mount("#veh-container");

// AIRCRAFT HUD

const aircraftHud = {
  data() {
    return {
      show: false,
      altitude: 0,
      targetAltitude: 0,
      speed: 0,
      fuel: 0,
      engine: 0,
      nitro: 0,
      aircraftType: "AIRCRAFT",
      seatbeltText: "OFF",
      raf: null,
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
    if (this.raf) cancelAnimationFrame(this.raf);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      if (event.data.action === "aircraft") {
        this.aircraftTick(event.data);
      }
    });
    this.animateAltitude();
  },
  methods: {
    aircraftTick(data) {
      this.show = !!data.show && data.isPaused !== 1;
      this.targetAltitude = Math.max(0, Number(data.altitude || 0));
      this.speed = Math.max(0, Math.floor(data.speed || 0));
      this.fuel = Math.max(0, Math.floor(data.fuel || 0));
      this.engine = Math.max(0, Math.floor(data.engine || 0));
      this.nitro = Math.max(0, Math.floor(data.nitro || 0));
      this.aircraftType = data.aircraftType || "AIRCRAFT";
      this.seatbeltText = data.seatbelt ? "ON" : "OFF";
    },
    animateAltitude() {
      const delta = this.targetAltitude - this.altitude;
      if (Math.abs(delta) > 0.1) {
        this.altitude += delta * 0.2;
      } else {
        this.altitude = this.targetAltitude;
      }
      this.raf = requestAnimationFrame(() => this.animateAltitude());
    },
  },
};
const app5 = Vue.createApp(aircraftHud);
app5.use(Quasar);
app5.mount("#aircraft-container");

// COMPASS HUD

const baseplateHud = {
  data() {
    return {
      show: false,
      street1: "",
      street2: "",
      showCompass: true,
      showStreets: true,
      showPointer: true,
      showDegrees: true,
    };
  },
  destroyed() {
    window.removeEventListener("message", this.listener);
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      if (event.data.action == "update") {
        type = event.data.type
        value = event.data.value
          if (value  !== undefined) {
            $('.degrees').html(value);
            bar = document.getElementsByTagName("svg")[0];
            bar.setAttribute("viewBox", ''+ (value - 90) + ' 0 180 5');
            heading = document.getElementsByTagName("svg")[1];
            heading.setAttribute("viewBox", ''+ (value - 90) + ' 0 180 1.5');
          }
        }
      if (event.data.action === "baseplate") {
        this.baseplateHud(event.data);
      }
    });
  },
  methods: {
    baseplateHud(data) {
      this.show = data.show;
      this.street1 = data.street1;
      this.street2 = data.street2;
      this.showCompass = data.showCompass;
      this.showStreets = data.showStreets;
      this.showPointer = data.showPointer;
      this.showDegrees = data.showDegrees;
      if (data.showCompass == true) {
        this.showCompass = true;
      } else {
        this.showCompass = false;
      }
      if (data.showStreets == true) {
        this.showStreets = true;
      } else {
        this.showStreets = false;
      }
      if (data.showPointer == true) {
        this.showPointer = true;
      } else {
        this.showPointer = false;
      }
      if (data.showDegrees == true) {
        this.showDegrees = true;
      } else {
        this.showDegrees = false;
      }
    },
  },
};
const app4 = Vue.createApp(baseplateHud);
app4.use(Quasar);
app4.mount("#baseplate-container");
