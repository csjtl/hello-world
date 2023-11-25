// 颜色吸管 js 文件 copy 自 https://photokit.com/colors/eyedropper/?lang=zh
// Spec: https://wicg.github.io/eyedropper-api/

// Tested in Chrome 95

function showNoSupport() {
  const $message = document.querySelector(".info");
  $message.innerHTML = "😢 Your browser does not support the EyeDropper API.";
}

function btnKeyboardBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_keyboard_back_color = document.querySelector(
    ".btn_keyboard_back_color"
  );
  const $pppppppp = document.querySelector(".btn_keyboard_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_keyboard_back_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color0", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_keyboard_back_color.addEventListener("click", openDropper);
}

function btnTextBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_text_back_color = document.querySelector(".btn_text_back_color");
  const $pppppppp = document.querySelector(".btn_text_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_text_back_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_text_back_color.addEventListener("click", openDropper);
}

function btnBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_back_color = document.querySelector(".btn_back_color");
  const $pppppppp = document.querySelector(".btn_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_back_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_2", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_back_color.addEventListener("click", openDropper);
}

function btnTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_text_color = document.querySelector(".btn_text_color");
  const $pppppppp = document.querySelector(".btn_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_text_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_3", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_text_color.addEventListener("click", openDropper);
}

function btnLabelColor() {
  const eyeDropper = new EyeDropper();
  const $btn_label_color = document.querySelector(".btn_label_color");
  const $pppppppp = document.querySelector(".btn_label_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_label_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_4", hex);
    root.style.setProperty("--color1_8", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_label_color.addEventListener("click", openDropper);
}

function btnHilitedBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_back_color = document.querySelector(
    ".btn_hilited_back_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_back_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_5", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_back_color.addEventListener("click", openDropper);
}

function btnHilitedTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_text_color = document.querySelector(
    ".btn_hilited_text_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_6", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_text_color.addEventListener("click", openDropper);
}

function btnHilitedCandidateBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_candidate_back_color = document.querySelector(
    ".btn_hilited_candidate_back_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_candidate_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_candidate_back_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_7", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_candidate_back_color.addEventListener("click", openDropper);
}

function btnHilitedCandidateTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_candidate_text_color = document.querySelector(
    ".btn_hilited_candidate_text_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_candidate_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_candidate_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_8", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_candidate_text_color.addEventListener("click", openDropper);
}

function btnHilitedCommentTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_comment_text_color = document.querySelector(
    ".btn_hilited_comment_text_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_comment_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_comment_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color1_9", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_comment_text_color.addEventListener("click", openDropper);
}

function btnCandidateSeparatorColor() {
  const eyeDropper = new EyeDropper();
  const $btn_candidate_separator_color = document.querySelector(
    ".btn_candidate_separator_color"
  );
  const $pppppppp = document.querySelector(".btn_candidate_separator_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_candidate_separator_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color2_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_candidate_separator_color.addEventListener("click", openDropper);
}

function btnCandidateTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_candidate_text_color = document.querySelector(
    ".btn_candidate_text_color"
  );
  const $pppppppp = document.querySelector(".btn_candidate_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_candidate_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color2_2", hex);
    root.style.setProperty("--color1_8", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_candidate_text_color.addEventListener("click", openDropper);
}

function btnCommentTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_comment_text_color = document.querySelector(
    ".btn_comment_text_color"
  );
  const $pppppppp = document.querySelector(".btn_comment_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_comment_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color2_3", hex);
    root.style.setProperty("--color1_9", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_comment_text_color.addEventListener("click", openDropper);
}

function btnKeyBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_key_back_color = document.querySelector(".btn_key_back_color");
  const $pppppppp = document.querySelector(".btn_key_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_key_back_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color3_1", hex);
    root.style.setProperty("--color4_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_key_back_color.addEventListener("click", openDropper);
}

function btnKeyTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_key_text_color = document.querySelector(".btn_key_text_color");
  const $pppppppp = document.querySelector(".btn_key_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_key_text_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color3_2", hex);
    root.style.setProperty("--color4_2", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_key_text_color.addEventListener("click", openDropper);
}

function btnKeySymbolColor() {
  const eyeDropper = new EyeDropper();
  const $btn_key_symbol_color = document.querySelector(".btn_key_symbol_color");
  const $pppppppp = document.querySelector(".btn_key_symbol_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_key_symbol_color_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color3_3", hex);
    root.style.setProperty("--color4_3", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_key_symbol_color.addEventListener("click", openDropper);
}

function btnHilitedKeyBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_key_back_color = document.querySelector(
    ".btn_hilited_key_back_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_key_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_key_back_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color4_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_key_back_color.addEventListener("click", openDropper);
}

function btnHilitedKeyTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_key_text_color = document.querySelector(
    ".btn_hilited_key_text_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_key_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_key_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color4_2", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_key_text_color.addEventListener("click", openDropper);
}

function btnHilitedKeySymbolColor() {
  const eyeDropper = new EyeDropper();
  const $btn_hilited_key_symbol_color = document.querySelector(
    ".btn_hilited_key_symbol_color"
  );
  const $pppppppp = document.querySelector(".btn_hilited_key_symbol_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_hilited_key_symbol_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color4_3", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_hilited_key_symbol_color.addEventListener("click", openDropper);
}

function btnPreviewBackColor() {
  const eyeDropper = new EyeDropper();
  const $btn_preview_back_color = document.querySelector(
    ".btn_preview_back_color"
  );
  const $pppppppp = document.querySelector(".btn_preview_back_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_preview_back_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color5_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_preview_back_color.addEventListener("click", openDropper);
}

function btnPreviewTextColor() {
  const eyeDropper = new EyeDropper();
  const $btn_preview_text_color = document.querySelector(
    ".btn_preview_text_color"
  );
  const $pppppppp = document.querySelector(".btn_preview_text_color");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(
    ".btn_preview_text_color_hex_info"
  );

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color5_2", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_preview_text_color.addEventListener("click", openDropper);
}

function btnBenter() {
  const eyeDropper = new EyeDropper();
  const $btn_benter = document.querySelector(".btn_benter");
  const $pppppppp = document.querySelector(".btn_benter");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_benter_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_1", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_benter.addEventListener("click", openDropper);
}

function btnTenter() {
  const eyeDropper = new EyeDropper();
  const $btn_tenter = document.querySelector(".btn_tenter");
  const $pppppppp = document.querySelector(".btn_tenter");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_tenter_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_2", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_tenter.addEventListener("click", openDropper);
}

function btnBgn() {
  const eyeDropper = new EyeDropper();
  const $btn_bgn = document.querySelector(".btn_bgn");
  const $pppppppp = document.querySelector(".btn_bgn");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_bgn_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_3", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_bgn.addEventListener("click", openDropper);
}

function btnTgn() {
  const eyeDropper = new EyeDropper();
  const $btn_tgn = document.querySelector(".btn_tgn");
  const $pppppppp = document.querySelector(".btn_tgn");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_tgn_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_4", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_tgn.addEventListener("click", openDropper);
}

function btnBbs() {
  const eyeDropper = new EyeDropper();
  const $btn_bbs = document.querySelector(".btn_bbs");
  const $pppppppp = document.querySelector(".btn_bbs");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_bbs_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_5", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_bbs.addEventListener("click", openDropper);
}

function btnTbs() {
  const eyeDropper = new EyeDropper();
  const $btn_tbs = document.querySelector(".btn_tbs");
  const $pppppppp = document.querySelector(".btn_tbs");
  var root = document.querySelector(":root");
  const $xxxxxxxxxx = document.querySelector(".btn_tbs_hex_info");

  function showResult(hex = "0xffFFFFFF") {
    console.log(hex);
    //$info.innerText = hex;
    $pppppppp.style.background = hex;
    root.style.setProperty("--color6_6", hex);
    hex = "0xff" + hex.replace("#", "");
    $xxxxxxxxxx.innerText = hex;
  }

  function openDropper() {
    eyeDropper
      .open()
      .then((res) => {
        if (res && res.sRGBHex) {
          showResult(res.sRGBHex);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  $btn_tbs.addEventListener("click", openDropper);
}

function init() {
  if (window.EyeDropper) {
    btnKeyboardBackColor();
    btnTextBackColor();
    btnBackColor();
    btnTextColor();
    btnLabelColor();
    btnHilitedBackColor();
    btnHilitedTextColor();
    btnHilitedCandidateBackColor();
    btnHilitedCandidateTextColor();
    btnHilitedCommentTextColor();
    btnCandidateSeparatorColor();
    btnCandidateTextColor();
    btnCommentTextColor();
    btnKeyBackColor();
    btnKeyTextColor();
    btnKeySymbolColor();
    btnHilitedKeyBackColor();
    btnHilitedKeyTextColor();
    btnHilitedKeySymbolColor();
    btnPreviewBackColor();
    btnPreviewTextColor();
    btnBenter();
    btnTenter();
    btnBgn();
    btnTgn();
    btnBbs();
    btnTbs();
  } else {
    showNoSupport();
  }
}

init();
