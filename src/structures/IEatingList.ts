export default interface IEatingList {
  /**
   * @format date
   */
  date: string;
  breakfast: IFood;
  lunch: IFood;
  dinner: IFood;
}

interface IFood {
  name: '치킨' | '피자' | '햄버거' | '스테이크' | '샐러드';

  /**
   * @type int
   * @minimum 1
   * @maximum 100
   */
  amount: number;

  unit: 'g' | 'kg' | 'ml' | 'l' | 'cc';

  /**
   * @type int
   * @minimum 1
   * @maximum 100
   */
  quantity: number;

  /**
   * @type int
   * @minimum 1
   * @maximum 500
   */
  calorie: number;
}
