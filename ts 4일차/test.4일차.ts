type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: (number | boolean)[]): void;
};

const SuperPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

SuperPrint([1, 2, 3]);
SuperPrint([true, false, true]);
//콜시그니처가 존재하지 않기때문에 당연히  문자열은 동작하지 않음
//SuperPrint(["1, 2, 3"]);

// 제네릭은 concrete type을 알 수 없을때 사용한다
type SuperPrint2 = {
  <T>(arr: T[]): void;
};
