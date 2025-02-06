function invertedMountain(n) {

    let pattern = "";
      for(let i = 0; i <= n; i++){
        for(let j = 1; j <= n - i  ; j++){
          pattern+= "*";
        }
        // pattern+= "\n"
      }
      return pattern
    }

invertedMountain(4)
