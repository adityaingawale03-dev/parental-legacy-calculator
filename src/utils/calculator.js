import factors from "../data/factors";

export const calculateLegacy = (dob) => {
  if (!dob) return null;

  const day = new Date(dob).getDate();
  const isOdd = day % 2 !== 0;

  let motherTotal = 0;
  let fatherTotal = 0;

  const results = factors.map((factor) => {
    const range = factor.max - factor.min;

    // Calculate a value within the range based on the day (1–31)
    const highValue = factor.min + ((day - 1) / 30) * range;

    let mother;
    let father;

    if (isOdd) {
      mother = highValue;
      father = factor.total - mother;
    } else {
      father = highValue;
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