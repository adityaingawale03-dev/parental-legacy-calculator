import factors from "../data/factors";

export const calculateLegacy = (dob) => {
  if (!dob) return null;

  const day = new Date(dob).getDate();
  const isOdd = day % 2 !== 0;

  let motherTotal = 0;
  let fatherTotal = 0;

  const results = factors.map((factor) => {
    let mother;
    let father;

    if (isOdd) {
      mother = factor.max;
      father = factor.total - mother;
    } else {
      father = factor.max;
      mother = factor.total - father;
    }

    mother = Number(mother.toFixed(3));
    father = Number(father.toFixed(3));

    motherTotal += mother;
    fatherTotal += father;

    return {
      factor: factor.name,
      mother,
      father,
      total: factor.total,
    };
  });

  motherTotal = Number(motherTotal.toFixed(3));
  fatherTotal = Number(fatherTotal.toFixed(3));

  return {
    results,
    motherTotal,
    fatherTotal,
    grandTotal: 100,
    dominantParent:
      motherTotal > fatherTotal ? "Mother" : "Father",
  };
};