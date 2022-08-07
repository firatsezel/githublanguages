const addLanguages = (value, sum) => {
  for (const property in value) {
    if (sum.hasOwnProperty(property)) {
      sum[property] = Number(sum[property]) + Number(value[property]);
    } else {
      const temp = JSON.parse(`{"${property}": "${value[property]}"}`);
      sum = {...sum, ...temp};
    }
  }

  return sum;
};

const transformLanguages = value => {
  let order = [];

  for (const property in value) {
    const temp = JSON.parse(
      `{"name": "${property}", "size": "${value[property]}"}`,
    );
    order.push({...temp});
  }
  return order;
};

const sortLanguages = value => {
  let order = transformLanguages(value);

  order = order?.sort((a, b) => (Number(a.size) > Number(b.size) ? -1 : 1));

  return order;
};

function calculateSize(a, b = 2, k = 1024) {
  with (Math) {
    let d = floor(log(a) / log(k));
    return 0 == a
      ? '0 Bytes'
      : parseFloat((a / pow(k, d)).toFixed(max(0, b))) +
          ' ' +
          ['Bytes', 'KB', 'MB', 'GB'][d];
  }
}

module.exports = {
  addLanguages,
  sortLanguages,
  calculateSize,
};
