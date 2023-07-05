"use strict";
class SuperMath {
  constructor() {}

  check(obj) {
    const { X, Y, znak } = obj;

    if (X === "" || Y === "" || znak === "") {
      alert(
        `Одне або декілька полів не заповнено. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return;
    }

    if (isNaN(parseFloat(X)) || isNaN(parseFloat(Y))) {
      alert(
        `X або Y - не число. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return;
    }

    if (!this.validateOperation(znak)) {
      alert(
        `Ви ввели некоректний знак ${znak}. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return;
    }

    if (znak === "/" && parseFloat(Y) === 0) {
      alert(`На нуль ділити не можна!`);
      return;
    }

    const confirmed = confirm(
      `Хочете зробити математичну дію ${znak} ${X} та ${Y}?`
    );
    if (confirmed) {
      const result = this.calculate({ X, Y, znak });
      alert(`Результат: ${result}`);
    } else {
      this.input();
    }
  }

  validateOperation(znak) {
    const validOperations = ["+", "-", "*", "/", "%"];
    return validOperations.includes(znak);
  }

  calculate({ X, Y, znak }) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    }
  }

  input() {
    let X, Y, znak;

    X = prompt(`Введіть число X:`);
    if (X === null) {
      alert(`Ви скасували дію`);
      return;
    }
    X = +X;

    Y = prompt(`Введіть число Y:`);
    if (Y === null) {
      alert(`Ви скасували дію`);
      return;
    }
    Y = +Y;

    znak = prompt(`Введіть знак (+, -, *, /, %):`);
    if (znak === null) {
      alert(`Ви скасували дію`);
      return;
    }

    this.check({ X, Y, znak });
  }
}

const p = new SuperMath();
const obj = {
  X: 12,
  Y: 3,
  znak: "/",
};
p.check(obj);
