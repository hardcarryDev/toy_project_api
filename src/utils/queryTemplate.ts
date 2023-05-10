import * as _ from 'lodash';

/**
 * 사용 예시)
 *
 * QUERY_BUILDER.SELECT("user")
 *
 * QUERY_BUILDER.SELECT("user", ['user_name', 'email'])
 *
 * QUERY_BUILDER.INSERT("user", {name: "Sam", tel: 09090909, email: "address@domain.com"})
 *
 */
class QUERY_BUILDER {
  /**
   * 단일 테이블의 select 쿼리문
   *
   * @param tbName 테이블명
   * @param columns 조회할 컬럼
   * @returns 완성된 쿼리문
   */
  static SIMPLE_SELECT(tbName: string, columns: string[] = [], where: { [key: string]: string | number } = {}) {
    let cols = '';
    if (columns.length > 0 && columns[0] != '*') {
      columns.forEach((val, _) => (cols += `${val}, `));
    } else {
      cols = '*';
    }
    let conditions = 'WHERE 1=1 ';
    if (!_.isEmpty(where)) {
      for (const key in where) {
        let value = where[key];
        if (typeof value == 'string') value = `'${value}'`;
        conditions += `AND ${key} = ${value}`;
      }
    }

    const query = `SELECT ${cols} FROM ${tbName} ${conditions}`;
    console.log(`===BUILD QUERY ===\n${query}`);
    return query;
  }

  /**
   *
   * @param tbName 테이블명
   * @param data 추가할 항목
   * @returns 완성된 쿼리문
   */
  static INSERT(tbName: string, data: { [key: string]: string | number }) {
    let tableKeys = '';
    let tableValues = '';
    for (const key in data) {
      tableKeys += `${key},`;
      tableValues += `'${data[key]}',`;
    }
    tableKeys = tableKeys.slice(0, -1);
    tableValues = tableValues.slice(0, -1);
    const part1 = `INSERT INTO ${tbName} (${tableKeys})`;
    const part2 = `VALUES (${tableValues})`;
    const query = `${part1} ${part2}`;
    console.log(`===BUILD QUERY ===\n${query}`);
    return query;
  }
}

export default QUERY_BUILDER;
