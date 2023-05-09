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
  static SIMPLE_SELECT(tbName: string, columns: string[] = []) {
    // throw new Error('아직 덜 만듬');
    let keys = '';
    if (columns.length > 0 && columns[0] != '*') {
      columns.forEach((val, _) => (keys += `${val}, `));
    } else {
      keys = '*';
    }
    const query = `SELECET ${keys} FROM ${tbName}`;
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
    return query;
  }
}

export default QUERY_BUILDER;
