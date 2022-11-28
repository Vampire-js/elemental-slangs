import { searchTable } from "../utils/SearchTable";

const generateSlang = async (w) => {
  let opts = new Array();
  let str = new String();
  let finalarr = new Array();
  for (let i = 0; i < w.length; i++) {
    opts = [...opts, searchTable(w[i] + w[i + 1])[0]];
  }
  
  for (var i = 0; i < opts.length; i++) {
    finalarr.push(opts[i].data);
    if (opts[i].type == "DS") {
      i++;
    }
  }
  
  str = finalarr.join(' ')
  return str
};

export default generateSlang