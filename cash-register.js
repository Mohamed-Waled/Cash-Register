const currencyInPennies = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {

  let returnedMoney = Math.round(cash * 100) - Math.round(price * 100);
  let myCash = {};
  let hisCash = {};

  for (let i = 0; i < cid.length; i++) {

    let moneyName = cid[i][0];
    let moneyValue = cid[i][1];
    myCash[moneyName] = Math.round(moneyValue * 100);

  };

  for (let i = currencyInPennies.length - 1; i >= 0; i--) {

    let moneyName = currencyInPennies[i][0];
    let moneyValue = currencyInPennies[i][1];

    if (returnedMoney - moneyValue > 0 && myCash[moneyName], returnedMoney) {

      hisCash[moneyName] = 0;

      while (myCash[moneyName] > 0 && returnedMoney - moneyValue >= 0) {

        myCash[moneyName] -= moneyValue;
        hisCash[moneyName] += moneyValue;
        returnedMoney -= moneyValue;

      }
    }
  }

  if (returnedMoney === 0) {

    let isRegisterEmpty = true;

    Object.keys(myCash).forEach((moneyType) => {

      if (myCash[moneyType] > 0) {

        isRegisterEmpty = false;

      }
    })

    if (isRegisterEmpty === true) {

      return {status: "CLOSED", change: cid};
    } else {

      let arrOfChange = [];

      Object.keys(hisCash).map((moneyType) => {
        if (hisCash[moneyType] > 0) {
          arrOfChange.push([moneyType, hisCash[moneyType] / 100]);
        }
      })

      return { status: "OPEN", change: arrOfChange };

    }
  }

  return { status: "INSUFFICIENT_FUNDS", change: [] };

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));