/*
Copyright 2018-2021 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#include "keymap.h"
#include "RotaryEncoder.h"

// Initialize matrix with nothing...
std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =
    KEYMAP2ARRAY(KEYMAP(
        KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    
        KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    
        KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    
        KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO,    KC_NO    
    ));


void setupKeymap() {


      // Code below makes sure that the encoder gets configured.  
  RotaryEncoder.begin(ENCODER_PAD_A, ENCODER_PAD_B);    // Initialize Encoder
  RotaryEncoder.setCallback(encoder_callback);    // Set callback
  RotaryEncoder.start();    // Start encoder
    

 uint32_t layer0_left[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(
     KC_TAB,   KC_Q,    KC_W,     KC_E,    KC_R,      KC_T,
     KC_LALT,  KC_A,    KC_S,     KC_D,    KC_F,      KC_G, 
     KC_LSFT,  KC_Z,    KC_X,     KC_C,    KC_V,      KC_B, 
     KC_NO,   KC_NO,   KC_NO,  LAYER_1,  KC_LCTRL,  KC_BSPACE
 );


 uint32_t layer0_right[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(
      KC_Y,       KC_U,        KC_I,    KC_O,         KC_P,      KC_DEL, 
      KC_H,       KC_J,        KC_K,    KC_L,    KC_SCOLON,    KC_QUOTE,
      KC_N,       KC_M,    KC_COMMA,   KC_DOT,     KC_SLSH,   KC_RSHIFT,
      KC_ENTER,  KC_SPC,     LAYER_2,    KC_NO,       KC_NO,       KC_NO
 );


 uint32_t layer1_left[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(     
                      KC_GRV,                     KC_1,                   KC_2,                     KC_3,                    KC_4,                     KC_5, 
     MOD(MOD_LSHIFT, KC_GRV),    MOD(MOD_LSHIFT, KC_1),  MOD(MOD_LSHIFT, KC_2),    MOD(MOD_LSHIFT, KC_3),   MOD(MOD_LSHIFT, KC_4),    MOD(MOD_LSHIFT, KC_5), 
                      KC_ESC,                    KC_F1,                  KC_F2,                    KC_F3,                   KC_F4,                    KC_F5,
                       KC_NO,                    KC_NO,                  KC_NO,                  LAYER_1,                KC_LCTRL,                KC_BSPACE
 );

uint32_t layer1_right[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(
                     KC_6,                     KC_7,                   KC_8,                     KC_9,                   KC_0,                      KC_MINUS,                     
    MOD(MOD_LSHIFT, KC_6),    MOD(MOD_LSHIFT, KC_7),  MOD(MOD_LSHIFT, KC_8),    MOD(MOD_LSHIFT, KC_9),   MOD(MOD_LSHIFT, KC_0),    MOD(MOD_LSHIFT, KC_MINUS), 
                    KC_F6,                    KC_F7,                  KC_F8,                    KC_F9,                  KC_F10,                       KC_F11,
                 KC_ENTER,                   KC_SPC,                LAYER_2,                    KC_NO,                   KC_NO,                        KC_NO
 );


 uint32_t layer2_left[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(     
      KC_NO,            KC_7,      KC_8,    KC_9,                   KC_LBRACKET ,                       KC_RBRACKET , 
      KC_NO,            KC_4,      KC_5,    KC_6,   MOD(MOD_LSHIFT, KC_LBRACKET),       MOD(MOD_LSHIFT, KC_LBRACKET), 
    KC_LSFT,            KC_1,      KC_2,    KC_3,                          KC_0,                              KC_DOT, 
      KC_NO,            KC_NO,      KC_NO,  LAYER_1,                     KC_LCTRL,                         KC_BSPACE
 );

uint32_t layer2_right[MATRIX_ROWS][MATRIX_COLS] =
 KEYMAP(
    KC_NO,                     KC_HOME,                   KC_UP,                     KC_END,                  KC_PGUP,                     KC_NO, 
    KC_NO,                     KC_LEFT,                 KC_DOWN,                   KC_RIGHT,                KC_PGDOWN,                     KC_NO, 
    KC_NO,                       KC_NO,                     KC_NO,                    KC_NO,                    KC_NO,                     KC_RSHIFT, 
 KC_ENTER,                      KC_SPC,                   LAYER_2,                    KC_NO,                    KC_NO,                     KC_NO
 );







    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
            #if KEYBOARD_SIDE == SINGLE
                //matrix[row][col].addActivation(_L0, Method::PRESS, layer0_single[row][col]);
            #endif
            #if KEYBOARD_SIDE == LEFT
                matrix[row][col].addActivation(_L0, Method::PRESS, layer0_left[row][col]);
                matrix[row][col].addActivation(_L1, Method::PRESS, layer1_left[row][col]);
                matrix[row][col].addActivation(_L2, Method::PRESS, layer2_left[row][col]);
            #endif
            #if KEYBOARD_SIDE == RIGHT
                matrix[row][col].addActivation(_L0, Method::PRESS, layer0_right[row][col]);
                matrix[row][col].addActivation(_L1, Method::PRESS, layer1_right[row][col]);
                matrix[row][col].addActivation(_L2, Method::PRESS, layer2_right[row][col]);
            #endif
            // if you want to add Tap/Hold or Tap/Doubletap activations, then you add them below.

        }
    }
}


void encoder_callback(int step)
{
  if ( step < 0 )
  {
    KeyScanner::add_to_encoderKeys(KC_AUDIO_VOL_UP);
  }else
  {
    KeyScanner::add_to_encoderKeys(KC_AUDIO_VOL_DOWN);
  }  
}






