"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3438],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(d,".").concat(h)]||p[h]||c[h]||a;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},666:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={id:"configure_hardware",title:"Configuring hardware_config.h",slug:"/configure_hardware"},d=void 0,s={unversionedId:"configure_hardware",id:"configure_hardware",title:"Configuring hardware_config.h",description:"Configuring your keyboard - Part 1: Hardware Definition",source:"@site/docs/configuring_firmware_1.md",sourceDirName:".",slug:"/configure_hardware",permalink:"/docs/configure_hardware",editUrl:"https://github.com/jpconstantineau/BlueMicro_BLE/tree/documentation-docusaurus/documentation/docs/configuring_firmware_1.md",tags:[],version:"current",frontMatter:{id:"configure_hardware",title:"Configuring hardware_config.h",slug:"/configure_hardware"},sidebar:"someSidebar",previous:{title:"Understand GPIOs",permalink:"/docs/understand_gpios"},next:{title:"Configuring keyboard_config.h",permalink:"/docs/configure_keyboard"}},u=[{value:"Configuring your keyboard - Part 1: Hardware Definition",id:"configuring-your-keyboard---part-1-hardware-definition",children:[{value:"Matrix Definition",id:"matrix-definition",children:[],level:3},{value:"Status LEDs",id:"status-leds",children:[],level:3},{value:"Battery Monitoring",id:"battery-monitoring",children:[],level:3},{value:"External VCC Switching",id:"external-vcc-switching",children:[],level:3},{value:"LiPo Charger Switching",id:"lipo-charger-switching",children:[],level:3},{value:"Backlight PWM LED Definition",id:"backlight-pwm-led-definition",children:[],level:3},{value:"RGB LED Definition",id:"rgb-led-definition",children:[],level:3},{value:"OLED Definition",id:"oled-definition",children:[],level:3},{value:"Rotary Encoder Definition",id:"rotary-encoder-definition",children:[],level:3},{value:"Speaker/Buzzer/Audio Definition",id:"speakerbuzzeraudio-definition",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configuring-your-keyboard---part-1-hardware-definition"},"Configuring your keyboard - Part 1: Hardware Definition"),(0,a.kt)("h3",{id:"matrix-definition"},"Matrix Definition"),(0,a.kt)("p",null,"Most keyboards use a matrix of columns and rows to scan each key.  You will need to refer to the keyboard schematic to identify how many columns and rows your keyboard uses for it's scanning matrix.  The scanning matrix may differ from the keyboard layout.  For example, a 4x12 matrix uses 16 GPIOs and allows for 48 keys to be scanned.  A 8x8 matrix also uses 16 GPIOs but will allow 64 keys to be scanned.  The mapping of each key in the scanning matrix to the keyboard layout is done in the KEYMAP macro definition in keyboard_config.h."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluemicro.jpconstantineau.com/img/keyboardmatrix.png",alt:"keyboard matrix"})),(0,a.kt)("p",null,"In the image above, we see that this keyboard has a matrix of 4 rows, with 7 columns.  The direction of the diodes goes from the columns to the rows.  With this information, we can define the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define MATRIX_ROWS 4\n#define MATRIX_COLS 7\n\n#define DIODE_DIRECTION COL2ROW\n")),(0,a.kt)("p",null,"Next, we need to identify how each row and column are mapped to the microntroller on board of the nRF52 module you use.  Since most DIY keyboards use the Arduino Pro Micro as its controller, we are using such an example."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluemicro.jpconstantineau.com/img/gpiomapping.png",alt:"GPIO Mapping"})),(0,a.kt)("p",null,"With the information from both the keyboard and controller schamatics, we can map each row and column to the GPIO and using the formula shown in the previous section, we can define the configuration needed: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define MATRIX_ROW_PINS {13, 24, 9, 10 }\n#define MATRIX_COL_PINS {26, 29, 2, 45, 3, 28, 43 }\n")),(0,a.kt)("h3",{id:"status-leds"},"Status LEDs"),(0,a.kt)("p",null,"Most controllers will have 1 or 2 LEDs to let the user know of the status of the board.  To configure the firmware to use these LEDs, you need to set at least the PIN definition for the LED.\nBy default, when ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_BLE_LED_PIN")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_KB_LED_PIN")," are defined, both the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTIVE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"POLARITY")," settings will default to 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"    #define  STATUS_BLE_LED_PIN  19  //blue = 0.19\n    #define  BLE_LED_ACTIVE 1\n    #define  BLE_LED_POLARITY 1\n\n    #define  STATUS_KB_LED_PIN 17  //red = 0.17\n    #define  STATUS_KB_LED_ACTIVE 1\n    #define  STATUS_KB_LED_POLARITY 1\n")),(0,a.kt)("p",null,"If you want to keep the definition of the PIN but want to disable the use of the specific status LED, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTIVE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),".  "),(0,a.kt)("p",null,"By default, setting a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," on the GPIO will turn on the LED.  If this logic is reversed, set ",(0,a.kt)("inlineCode",{parentName:"p"},"POLARITY")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"If your board does not have the LED defined but it's status does not change, you need to configure the PIN so that it can be updated to match the state of the keyboard."),(0,a.kt)("p",null,"Note that when going to sleep, the enabled pins will go in a low power mode (INPUT) and will turn off the LEDs."),(0,a.kt)("h3",{id:"battery-monitoring"},"Battery Monitoring"),(0,a.kt)("p",null,"Battery Monitoring is a function that's specific to the controller you use.  Most controllers implement an on-board battery charger and battery monitoring voltage divider and connect this divider to an analog input.  Such a configuration is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://bluemicro.jpconstantineau.com/img/batterymonitoring.png",alt:"Battery Monitoring"})),(0,a.kt)("p",null,"From the schematic, we identify that the connection point of the voltage divider is connected to 0.31. This leads to this definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define BATTERY_TYPE BATT_LIPO\n#define VBAT_PIN  31\n")),(0,a.kt)("p",null,"If a non-rechargeable CR2032 (3V) powers your keyboard and the battery is directly connected to the nRF5 chip through VDD, you don't need to define a ",(0,a.kt)("inlineCode",{parentName:"p"},"VBATT_PIN"),"  but since the nrf52 chip can measure its own supply voltage, it will not use this configuration. All you need to do is to use this definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define BATTERY_TYPE BATT_CR2032\n")),(0,a.kt)("p",null,"If a Lithion Ion (LiPo) rechargeable battery (3.7-4.2V) powers your keyboard and the battery is directly connected to the nRF52840 chip through VDDH, you don't need to define a ",(0,a.kt)("inlineCode",{parentName:"p"},"VBATT_PIN")," since the nrf52 chip can measure its own supply voltage All you need to do is to use this definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define BATTERY_TYPE BATT_VDDH\n")),(0,a.kt)("p",null,"Note that only the nRF52840 has VDDH to provide power at a voltage higher than 3.6V. "),(0,a.kt)("h3",{id:"external-vcc-switching"},"External VCC Switching"),(0,a.kt)("p",null,"Some controllers implement switching of external VCC to ensure low power consumption.  Polarity of switching will depend on the hardware implementation.  Refer to the controller documentation and/or schematic to identify if VCC switching is available, which GPIO it is connected to and polarity of the switch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define VCC_PIN 12\n#define VCC_POLARITY_ON 1\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"VCC_PIN")," is left undefined, VCC switching functionality will not be enabled in the firmware."),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"VCC_POLARITY_ON")," is defined with 1. You only need to define it if polarity is reversed. (replace 1 with 0)"),(0,a.kt)("p",null,"By default, the firmware will turn on external VCC when booting up and will turn off External VCC when going to sleep.  If you want to force external VCC to be off at bootup, you can add this definition to your ",(0,a.kt)("strong",{parentName:"p"},"hardware_config.h")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define VCC_DEFAULT_ON 0\n")),(0,a.kt)("h3",{id:"lipo-charger-switching"},"LiPo Charger Switching"),(0,a.kt)("p",null,"Some controllers implement turning off the LiPo Charger to allow for a more precise battery level measurement.  Switching polarity will depend on the hardware implementation.  Refer to the controller documentation and/or schematic to identify if charger switching is available, which GPIO it is connected to and polarity to enable charging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"     #define CHARGER_PIN  5\n     #define CHARGER_POLARITY_ON 0\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"CHARGER_PIN")," is left undefined, charger switching functionality will not be enabled in the firmware. By default, the firmware will turn on charger when booting up and will not change it at any time."),(0,a.kt)("h3",{id:"backlight-pwm-led-definition"},"Backlight PWM LED Definition"),(0,a.kt)("p",null,"Some keyboards have backlit keys using LEDs controlled by a central mosfet.  The brightness of these LEDs can be modulated using Pulse Width Modulation (PWM). When referring to the keyboard and controller schematics above, we see that GPIO 1.06 is connected to the LED Backlight."),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"http://bluemicro.jpconstantineau.com/img/gpiomapping.png",alt:"GPIO Mapping"})),(0,a.kt)("p",null,"This enables setting up the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"    #define BACKLIGHT_LED_PIN 38\n    #define BACKLIGHT_PWM_ON 1 \n    #define DEFAULT_PWM_VALUE 10000  // Reduce max PWM to 10000 out of 63351 (0x7FFF)\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"BACKLIGHT_LED_PIN")," is left undefined, LED functionality will not be enabled in the firmware.\n",(0,a.kt)("inlineCode",{parentName:"p"},"BACKLIGHT_PWM_ON")," is optional. If ",(0,a.kt)("inlineCode",{parentName:"p"},"BACKLIGHT_LED_PIN")," is defined, but you want to turn off LED functionality, you can do so by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"BACKLIGHT_PWM_ON")," to 0.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"DEFAULT_PWM_VALUE")," is left undefined, the default value will be that of maximum PWM value of 63351 (0x7FFF).  This will turn on LEDs on fully."),(0,a.kt)("p",null,"Turning on the PWM peripheral on the nRF52 chip uses approximately 0.5mA, not including the power used by the LED themselves.  As such, when the PWM value is set to 0, the firmware turns off the PWM peripheral it uses for controlling the brightness of the LEDs. It does the same prior to going to sleep. "),(0,a.kt)("h3",{id:"rgb-led-definition"},"RGB LED Definition"),(0,a.kt)("p",null,"Some keyboards have RGB LEDs.  These LEDs are controlled through a single data line. When referring to the keyboard and controller schematics above, we see that GPIO 0.06 is connected to the RGB WS2812 LEDs."),(0,a.kt)("p",null," ",(0,a.kt)("img",{parentName:"p",src:"http://bluemicro.jpconstantineau.com/img/gpiomapping.png",alt:"GPIO Mapping"})),(0,a.kt)("p",null,"This enables setting up the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"    #define WS2812B_LED_PIN 6\n    #define WS2812B_LED_COUNT 1\n    #define WS2812B_LED_ON 1 \n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"WS2812B_LED_PIN")," is left undefined, LED functionality will not be enabled in the firmware.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"WS2812B_LED_ON")," is set to 0, RGB functionality will not be enabled in the firmware. Note that this will not power down VCC power to the RGB LEDs, impacting power consumption of your keyboard.  External VCC to the RGB LEDs is controlled through the ",(0,a.kt)("strong",{parentName:"p"},"External VCC Switch")," functionality described above."),(0,a.kt)("h3",{id:"oled-definition"},"OLED Definition"),(0,a.kt)("p",null,"OLED displays are implemented using the U8g2 Library and assumes that the display uses I2C as the communication interface.  This interface is defined by the SDA and SCK pins.  For all keyboards designed to work with Arduino Pro Micros, these relate to the D1 and D0 AVR ports. nRF52 chips can relocate this interface to other GPIOs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"    #define I2C_SDA_PIN 15\n    #define I2C_SCK_PIN 17\n    #define DISPLAY_U8G2_CONSTRUCTOR U8G2_SSD1306_128X32_UNIVISION_F_HW_I2C // see https://github.com/olikraus/u8g2/wiki/u8g2setupcpp for reference\n")),(0,a.kt)("p",null,"Since the U8g2 library supports a large number of displays by changing the type (hence changing the constructor method), changing the disply type is as simple as selecting a different constructor.  See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8g2setupcpp"},"the u8g2 setup documentation")," for more information.  The firmware assumes hardware I2C as parameters passed to the constructors."),(0,a.kt)("h3",{id:"rotary-encoder-definition"},"Rotary Encoder Definition"),(0,a.kt)("p",null,"Hardware quadrature decoder only supports a single Rotary encoder per side/half. If you need more than 1 encoder, you can use the software (interrupt driven) quadrature decoder, which supports up to 8 encoders per side."),(0,a.kt)("p",null,"Add these lines to your ",(0,a.kt)("inlineCode",{parentName:"p"},"hardware_config.h")," if you use a single encoder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define ENCODER_A_PIN  26 \n#define ENCODER_B_PIN  30\n#define ENCODER_RESOLUTION 2  \n")),(0,a.kt)("p",null,"If you use multiple encoders, you can expand the above to an array as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define ENCODER_PAD_A  {26, 8, 15, 17, 9 }\n#define ENCODER_PAD_B  {6, 29, 2, 20, 13 }\n#define ENCODER_RESOLUTION 2 \n")),(0,a.kt)("p",null,"From a hardware point of view, the A an B lines of the encoder should be wired directly to the nRF52 GPIO. The C (or common) line should be wired to ground. By default, the configuration uses the hardware QDEC peripheral (Quadrature Decoder) that's part of the nRF52 SoC and uses callbacks to handle rotation.  If you need more than 1 encoder (per side) you will need to use the software implemention."),(0,a.kt)("p",null,"Encoder resolution is used within the encoder callbacks to divide the steps in case you get multiple steps per click. "),(0,a.kt)("h3",{id:"speakerbuzzeraudio-definition"},"Speaker/Buzzer/Audio Definition"),(0,a.kt)("p",null,"Audio functions are based on the Tone functionality of the Adafruit nRF52 Arduino Core.  They send a PWM Signal to the ",(0,a.kt)("inlineCode",{parentName:"p"},"SPEAKER_PIN")," GPIO.  If ",(0,a.kt)("inlineCode",{parentName:"p"},"SPEAKER_PIN")," is not defined, audio functions won't work.   Add this line to your ",(0,a.kt)("inlineCode",{parentName:"p"},"hardware_config.h")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#define SPEAKER_PIN 10\n")),(0,a.kt)("p",null,"With only this definition, you will have basic audio feedback functionality enabled."))}p.isMDXComponent=!0}}]);