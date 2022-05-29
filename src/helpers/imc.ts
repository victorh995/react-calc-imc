export type Level = {
  title: string;
  color: string;
  icon: 'donw' | 'up';
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: 'Magreza', color: '#96a3ab', icon: 'donw', imc: [0, 18.5] },
  { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#e2b039', icon: 'donw', imc: [25, 30] },
  { title: 'Obesidade', color: '#c3423f', icon: 'donw', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = imc;
      return levels[i];
    }
  }
  return null;
};
