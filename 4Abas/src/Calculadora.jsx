import React, { useState } from 'react';
import style from './Calculadora.module.css'
import Menu from './components/Menu';

export default function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [num6, setNum6] = useState('');
  const [num7, setNum7] = useState('');
  const [num8, setNum8] = useState('');
  const [num9, setNum9] = useState('');
  const [num10, setNum10] = useState('');
  const [num11, setNum11] = useState('');
  const [num12, setNum12] = useState('');
  const [num13, setNum13] = useState('');
  const [resultadoSoma, setResultadoSoma] = useState('');
  const [resultadoSubtracao, setResultadoSubtracao] = useState('');
  const [resultadoDivisao, setResultadoDivisao] = useState('');
  const [resultadoMultiplicacao, setResultadoMultiplicacao] = useState('');
  const [resultadoMedia, setResultadoMedia] = useState('');

  const calcularSoma = () => {
    const soma = parseFloat(num1) + parseFloat(num2);
    setResultadoSoma(soma);
  };

  const calcularSubtracao = () => {
    const subtracao = parseFloat(num3) - parseFloat(num4);
    setResultadoSubtracao(subtracao);
  };

  const calcularDivisao = () => {
    const divisao = parseFloat(num5) / parseFloat(num6);
    setResultadoDivisao(divisao);
  };

  const calcularMultiplicacao = () => {
    const multiplicacao = parseFloat(num7) * parseFloat(num8);
    setResultadoMultiplicacao(multiplicacao);
  };

  const calcularMedia = () => {
    const media = (parseFloat(num9) + parseFloat(num10) + parseFloat(num11) + parseFloat(num12) + parseFloat(num13)) / 5;
    setResultadoMedia(media);
  };

  return (
    <div className={style.firstDiv}>
      <div>
      <Menu/>
      </div>
      <div className={style.secondDiv}>
        <h1>Calculadora</h1>
        <div className="principal">
          <div className="cards">
            <h2>Soma</h2>
            <div className="columnLabelWithInput">
              <label htmlFor="num1">Numero 01</label>
              <input
                className="inputs-style"
                type="number"
                id="num1"
                placeholder="Insira um número"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num2">Numero 02</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                />
            </div>
            <div>
              <button onClick={calcularSoma}>CALCULAR</button>
            </div>
            <div>
              <p>Resultado: <span>{resultadoSoma}</span></p>
            </div>
          </div>
        </div>

        <div className="principal">
          <div className="cards">
            <h2>Subtração</h2>
            <div className="columnLabelWithInput">
              <label htmlFor="num3">Numero 01</label>
              <input
                className="inputs-style"
                type="number"
                id="num1"
                placeholder="Insira um número"
                value={num3}
                onChange={(e) => setNum3(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num4">Numero 02</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num4}
                onChange={(e) => setNum4(e.target.value)}
                />
            </div>
            <div>
              <button onClick={calcularSubtracao}>CALCULAR</button>
            </div>
            <div>
              <p>Resultado: <span>{resultadoSubtracao}</span></p>
            </div>
          </div>
        </div>

        <div className="principal">
          <div className="cards">
            <h2>Divisão</h2>
            <div className="columnLabelWithInput">
              <label htmlFor="num5">Numero 01</label>
              <input
                className="inputs-style"
                type="number"
                id="num1"
                placeholder="Insira um número"
                value={num5}
                onChange={(e) => setNum5(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num6">Numero 02</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num6}
                onChange={(e) => setNum6(e.target.value)}
                />
            </div>
            <div>
              <button onClick={calcularDivisao}>CALCULAR</button>
            </div>
            <div>
              <p>Resultado: <span>{resultadoDivisao}</span></p>
            </div>
          </div>
        </div>

        <div className="principal">
          <div className="cards">
            <h2>Multiplicação</h2>
            <div className="columnLabelWithInput">
              <label htmlFor="num7">Numero 01</label>
              <input
                className="inputs-style"
                type="number"
                id="num1"
                placeholder="Insira um número"
                value={num7}
                onChange={(e) => setNum7(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num8">Numero 02</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num8}
                onChange={(e) => setNum8(e.target.value)}
              />
            </div>
            <div>
              <button onClick={calcularMultiplicacao}>CALCULAR</button>
            </div>
            <div>
              <p>Resultado: <span>{resultadoMultiplicacao}</span></p>
            </div>
          </div>
        </div>

        <div className="principal">
          <div className="cards">
            <h2>Média</h2>
            <div className="columnLabelWithInput">
              <label htmlFor="num9">Numero 01</label>
              <input
                className="inputs-style"
                type="number"
                id="num1"
                placeholder="Insira um número"
                value={num9}
                onChange={(e) => setNum9(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num10">Numero 02</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num10}
                onChange={(e) => setNum10(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num11">Numero 03</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num11}
                onChange={(e) => setNum11(e.target.value)}
                />
            </div>
            <div className="columnLabelWithInput">
              <label htmlFor="num12">Numero 04</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num12}
                onChange={(e) => setNum12(e.target.value)}
                />
            </div><div className="columnLabelWithInput">
              <label htmlFor="num13">Numero 05</label>
              <input
                className="inputs-style"
                type="number"
                id="num2"
                placeholder="Insira um número"
                value={num13}
                onChange={(e) => setNum13(e.target.value)}
                />
            </div>
            <div>
              <button onClick={calcularMedia}>CALCULAR</button>
            </div>
            <div>
              <p>Resultado: <span>{resultadoMedia}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
