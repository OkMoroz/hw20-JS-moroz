"use strict";
class SuperMath {
  constructor() {}

  check(obj) {
    const { x, y, znak } = obj;

    const confirmed = confirm(
      `Хочете зробити математичну дію ${znak} з чисел ${x} та ${y}?`
    );
    if (confirmed) {
      const result = this.calculate({ x, y, znak });
      alert(`Результат: ${result}`);
    } else {
      this.input();
    }
  }

  input() {
    let x, y, znak;

    x = prompt(`Введіть число X: `);
    const xValidation = validateNumber(x);
    if (!xValidation.valid) {
      alert(xValidation.message);
      return;
    }
    x = xValidation.value;

    y = prompt(`Введіть число Y:`);
    const yValidation = validateNumber(y);
    if (!yValidation.valid) {
      alert(yValidation.message);
      return;
    }
    y = yValidation.value;

    znak = prompt(`Введіть знак (+, -, *, /, %): `);
    const znakValidation = validateZnak(znak, y);
    if (!znakValidation.valid) {
      alert(znakValidation.message);
      return;
    }
    znak = znakValidation.value;

    this.check({ x, y, znak });
  }

  calculate({ x, y, znak }) {
    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "/":
        return x / y;
      case "*":
        return x * y;
      case "%":
        return x % y;
    }
  }
}

function validateNumber(input) {
  if (input === null) {
    return {
      message: `Ви скасували дію`,
    };
  }
  if (input.trim() === "") {
    return {
      message: `Поле не заповнено. Спробуйте ще раз.`,
    };
  }
  if (isNaN(+input)) {
    return {
      message: `Введене значення - не число. Спробуйте ще раз.`,
    };
  }
  return {
    valid: true,
    value: +input,
  };
}

function validateZnak(znak, y) {
  if (znak === null) {
    return {
      message: `Ви скасували дію`,
    };
  }
  if (znak.trim() === "") {
    return {
      message: `Поле знак не заповнено. Спробуйте ще раз.`,
    };
  }

  const validOperations = ["+", "-", "*", "/", "%"];
  if (!validOperations.includes(znak)) {
    return {
      message: `Ви ввели некоректний знак ${znak}. Неможливо зробити обчислення. Спробуйте ще раз.`,
    };
  }

  if (znak === "/" && y === 0) {
    return {
      message: `На нуль ділити не можна!`,
    };
  }

  return {
    valid: true,
    value: znak,
  };
}

const p = new SuperMath();
const obj = {
  x: 12,
  y: 3,
  znak: "/",
};
p.check(obj);
