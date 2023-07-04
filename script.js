"use strict";
class SuperMath {
  constructor() {}

  check(obj) {
    const { X, Y, znak } = obj;

    if (!this.validateOperation(X, Y, znak)) {
      return;
    }

    const confirmed = confirm(
      `Хочете зробити математичну дію ${znak} ${X} та ${Y}?`
    );
    if (confirmed) {
      const result = this.calculate(parseFloat(X), parseFloat(Y), znak);
      alert(`Результат: ${result.toFixed(2)}`);
    } else {
      this.input();
    }
  }

  validateOperation(X, Y, znak) {
    if (X === "" || Y === "" || znak === "") {
      alert(
        `Одне або декілька полів не заповнено. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return false;
    }
    if (isNaN(parseFloat(X))) {
      alert(`X - не число. Неможливо зробити обчислення. Спробуйте ще раз.`);
      return false;
    }

    if (isNaN(parseFloat(Y))) {
      alert(`Y - не число. Неможливо зробити обчислення. Спробуйте ще раз.`);
      return false;
    }

    const validOperations = ["+", "-", "*", "/", "%"];
    if (!validOperations.includes(znak)) {
      alert(
        `Ви ввели некоректний знак ${znak}. Неможливо зробити обчислення. Спробуйте ще раз.`
      );
      return false;
    }

    if (znak === "/" && parseFloat(Y) === 0) {
      alert(`На нуль ділити не можна!`);
      return false;
    }

    return true;
  }

  calculate(X, Y, znak) {
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
    const X = prompt(`Введіть число X:`);
    if (X === null) {
      alert("Дію скасовано.");
      return;
    }

    const Y = prompt(`Введіть число Y:`);
    if (Y === null) {
      alert("Дію скасовано.");
      return;
    }

    const znak = prompt(`Введіть знак (+, -, *, /, %):`);
    if (znak === null) {
      alert("Дію скасовано.");
      return;
    }

    this.check({
      X,
      Y,
      znak,
    });
  }
}

const p = new SuperMath();
const obj = {
  X: 12,
  Y: 3,
  znak: "/",
};
p.check(obj);
