import React, {useState} from 'react';
import {api} from '../service/services';

enum Foundation {
  ribbon,
  slab,
  columnar,
}

const createFoundation = (index: any): Foundation => {
  switch (index) {
    case '0':
      return Foundation.ribbon;
    case '1':
      return Foundation.slab;
    case '2':
      return Foundation.columnar;
    default:
      throw 'Invalid Foundation';
  }
}

enum WallMaterial {
  brick,
  wood,
  aerocrete,
}

const createWallMaterial = (index: any): WallMaterial => {
  switch (index) {
    case '0':
      return WallMaterial.brick;
    case '1':
      return WallMaterial.wood;
    case '2':
      return WallMaterial.aerocrete;
    default: throw 'Invalid Wall Material';
  }
}

enum RoofType {
  flat,
  pitched,
}

const createRoofType = (index: any): RoofType => {
  switch (index) {
    case '0':
      return RoofType.flat;
    case '1':
      return RoofType.pitched;
    default: throw 'Invalid Roof Type';
  }
}

interface CalcSumResult {
  items: Array<{title: string, sum: number}>,
  sum: number,
}

const calcSum = (
  area: number,
  floor: number,
  foundation: Foundation,
  wallMaterial: WallMaterial,
  roofType: RoofType,
  balcony: boolean,
  terrace: boolean,
  garage: boolean,
): CalcSumResult => {
  const m2Price = 10000;
  const foundationRibbonPrice = 50000;
  const foundationSlabPrice = 75000;
  const foundationColumnarPrice = 12500;
  const WallMaterialBrickPrice = 350000;
  const WallMaterialWoodPrice = 220000;
  const WallMaterialAerocretePrice = 128000;
  const rootTypeFlatPrice = 150000;
  const rootTypePitchedPrice = 268000;
  const balconyPrice = 50000;
  const terracePrice = 190000;
  const garagePrice = 580000;

  let items: Array<{title: string, sum: number}> = [];
  let sum = 0;

  sum += area * m2Price;
  sum *= floor;

  items.push({
    title: `Площадь ${area} м2 * ${floor} этажей`,
    sum: sum,
  })

  switch (foundation) {
    case Foundation.ribbon:
      sum += foundationRibbonPrice;
      items.push({
        title: `Плиточный фундамент`,
        sum: foundationRibbonPrice,
      })
      break;
    case Foundation.slab:
      sum += foundationSlabPrice;
      items.push({
        title: `Ленточный фундамент`,
        sum: foundationSlabPrice,
      })
      break;
    case Foundation.columnar:
      sum += foundationColumnarPrice;
      items.push({
        title: `Столбчатый фундамент`,
        sum: foundationColumnarPrice,
      })
      break;
  }

  switch (wallMaterial) {
    case WallMaterial.brick:
      sum += WallMaterialBrickPrice;
      items.push({
        title: `Материал стен: Кирпич`,
        sum: WallMaterialBrickPrice,
      })
      break;
    case WallMaterial.wood:
      sum += WallMaterialWoodPrice;
      items.push({
        title: `Материал стен: Дерево`,
        sum: WallMaterialWoodPrice,
      })
      break;
    case WallMaterial.aerocrete:
      sum += WallMaterialAerocretePrice;
      items.push({
        title: `Материал стен: Газобетон`,
        sum: WallMaterialAerocretePrice,
      })
      break;
  }

  switch (roofType) {
    case RoofType.flat:
      sum += rootTypeFlatPrice;
      items.push({
        title: `Плоская крыша`,
        sum: rootTypeFlatPrice,
      })
      break;
    case RoofType.pitched:
      sum += rootTypePitchedPrice;
      items.push({
        title: `Скатная крыша`,
        sum: rootTypePitchedPrice,
      })
      break;
  }

  if (balcony) {
    sum += balconyPrice;
    items.push({
      title: `Балкон`,
      sum: balconyPrice,
    })
  }

  if (terrace) {
    sum += terracePrice;
    items.push({
      title: `Терраса`,
      sum: terracePrice,
    })
  }

  if (garage) {
    sum += garagePrice;
    items.push({
      title: `Гараж`,
      sum: garagePrice,
    })
  }

  return {
    items: items,
    sum: sum,
  }
}

const Calc = () => {
  const [area, setArea] = useState<number>(1)
  const [floor, setFloor] = useState<number>(1)
  const [foundation, setFoundation] = useState<Foundation>(Foundation.ribbon)
  const [wallMaterial, setWallMaterial] = useState<WallMaterial>(WallMaterial.brick)
  const [roofType, setRoofType] = useState<RoofType>(RoofType.flat)
  const [balcony, setBalcony] = useState<boolean>(false)
  const [terrace, setTerrace] = useState<boolean>(false)
  const [garage, setGarage] = useState<boolean>(false)
  const [result, setResult] = useState<CalcSumResult|null>(null)

  const [email, setEmail] = useState<string>('')
  const sendResultsToEmail = async () => {
    try {
      if (null === result) {
        throw 'Calc Result is null.';
      }

      await api.sendCalcFormResults({...result, email});
      alert('Результаты отправлены');
    } catch (e) {
      alert('Ошибка! Результаты не были отправлены')
    }
  }

  return (
    <>
      <div className="calculator">
        <form className="calculator-form" onSubmit={(e) => {
          e.preventDefault();
          let result = calcSum(
            area,
            floor,
            foundation,
            wallMaterial,
            roofType,
            balcony,
            terrace,
            garage,
          );

          setResult(result);
        } }>

          <div className="form-row">
            <label>Площадь</label>
            <input type="number" min="1" value={area} onChange={(e) => setArea(parseInt(e.target.value))}/>
          </div>

          <div className="form-row">
            <label>Количество этажей</label>
            <input type="number" min="1" value={floor} onChange={(e) => setFloor(parseInt(e.target.value))}/>
          </div>

          <div className="form-row">
            <label>Тип фундамента</label>
            <select value={foundation} onChange={ (e) => setFoundation(createFoundation(e.target.value)) }>
              <option value={Foundation.ribbon}>Ленточный</option>
              <option value={Foundation.slab}>Плиточный</option>
              <option value={Foundation.columnar}>Столбчатый</option>
            </select>
          </div>

          <div className="form-row">
            <label>Материал стен</label>
            <select value={wallMaterial} onChange={ (e) => setWallMaterial(createWallMaterial(e.target.value)) }>
              <option value={WallMaterial.brick}>Кирпич</option>
              <option value={WallMaterial.wood}>Дерево</option>
              <option value={WallMaterial.aerocrete}>Газобетон</option>
            </select>
          </div>

          <div className="form-row">
            <label>Тип крыши</label>
            <select value={roofType} onChange={ (e) => setRoofType(createRoofType(e.target.value)) }>
              <option value={RoofType.flat}>Плоская</option>
              <option value={RoofType.pitched}>Скатная</option>
            </select>
          </div>

          <div className="form-row">
            <label>Дополнительные опции </label>

            <div>
              <input type="checkbox" checked={balcony} onChange={ (e) => setBalcony(e.target.checked) }/> Балкон
            </div>

            <div>
              <input type="checkbox" checked={terrace} onChange={ (e) => setTerrace(e.target.checked) }/> Терраса
            </div>

            <div>
              <input type="checkbox" checked={garage} onChange={ (e) => setGarage(e.target.checked) }/> Гараж
            </div>
          </div>

          <div className="form-row">
            <button>Рассчитать стоимость</button>
          </div>
        </form>

        <div className="calculator-results">
          {(() => {
            if (null !== result) {
              return (
                <>
                  <h2>Результаты</h2>
                  <table>
                    <thead>
                    <tr>
                      <th>Позиция</th>
                      <th>Стоимость, Руб</th>
                    </tr>
                    </thead>

                    <tbody>

                    {(() => {
                      return result.items.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.sum}</td>
                          </tr>
                        )
                      })
                    })()}

                    </tbody>

                    <tfoot>
                    <tr>
                      <th>Итого:</th>
                      <th>{result.sum}</th>
                    </tr>
                    </tfoot>
                  </table>

                  <br/>

                  <form onSubmit={(e) => {
                    e.preventDefault()
                    sendResultsToEmail();
                  }}>
                    <h4>Отправить результаты на Email</h4>
                    <div className="form-row">
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-row">
                      <button className="btn">Отправить</button>
                    </div>
                  </form>
                </>
              );
            }
          })()}
        </div>
      </div>
    </>
  )
}

export default Calc