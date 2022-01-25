function getMoney(amountRequested) {

    let bills = {
      5000: Math.floor(amountRequested / 5000),
      1000: Math.floor(
        (amountRequested - Math.floor(amountRequested / 5000) * 5000) / 1000
      ),
      500: Math.floor(
        (amountRequested -
          Math.floor(amountRequested / 5000) * 5000 -
          Math.floor(
            (amountRequested - Math.floor(amountRequested / 5000) * 5000) / 1000
          ) *
          1000) /
        500
      ),
      100: Math.floor(
        (amountRequested -
          Math.floor(amountRequested / 5000) * 5000 -
          Math.floor(
            (amountRequested - Math.floor(amountRequested / 5000) * 5000) / 1000
          ) *
          1000 -
          Math.floor(
            (amountRequested -
              Math.floor(amountRequested / 5000) * 5000 -
              Math.floor(
                (amountRequested - Math.floor(amountRequested / 5000) * 5000) /
                1000
              ) *
              1000) /
            500
          ) *
          500) /
        100
      ),
      50: Math.floor(
        (amountRequested -
          Math.floor(amountRequested / 5000) * 5000 -
          Math.floor(
            (amountRequested - Math.floor(amountRequested / 5000) * 5000) / 1000
          ) *
          1000 -
          Math.floor(
            (amountRequested -
              Math.floor(amountRequested / 5000) * 5000 -
              Math.floor(
                (amountRequested - Math.floor(amountRequested / 5000) * 5000) /
                1000
              ) *
              1000) /
            500
          ) *
          500 -
          Math.floor(
            (amountRequested -
              Math.floor(amountRequested / 5000) * 5000 -
              Math.floor(
                (amountRequested - Math.floor(amountRequested / 5000) * 5000) /
                1000
              ) *
              1000 -
              Math.floor(
                (amountRequested -
                  Math.floor(amountRequested / 5000) * 5000 -
                  Math.floor(
                    (amountRequested -
                      Math.floor(amountRequested / 5000) * 5000) /
                    1000
                  ) *
                  1000) /
                500
              ) *
              500) /
            100
          ) *
          100) /
        50
      ),
    };
    console.log(bills);

}

getMoney(668785);
