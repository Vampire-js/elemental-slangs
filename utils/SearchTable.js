import { table } from "../data/table";

export function searchTable(ele) {
  let results1 = [];
  let results2 = [];
  for (let i = 0; i < 119; i++) {
    if (ele.length >= 2) {
      if (table[i].symbol == ele[0].toUpperCase() + ele[1].toLowerCase()) {
        results1 = [...results1, {data:table[i].symbol , type:"DS"}];
      }
    }
  }
  for (let i = 0; i < 119; i++) {
    if (results1.length == 0) {
      if (table[i].symbol[0] == ele[0].toUpperCase()) {
        results2.push({data:table[i].symbol , type:"SS"});
      }
    } else {
    }
  }

  let results = [...results1, ...results2];

  return results;
}
