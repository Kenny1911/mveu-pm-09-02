import React from 'react';
import CalcComponent from './../components/Calc'

const Calc = () => {
    return (
        <>
          <div className="section">
            <div className="container">
              <h1 className="text-center">Калькулятор услуг</h1>

              <CalcComponent/>
            </div>
          </div>
        </>
    );
}

export default Calc