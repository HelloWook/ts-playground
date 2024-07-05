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
// 인식한 제네릭을 기반으로 알게된다.
// ANY와 다르게 타입 세이프가 적용된다.
type SuperPrint2 = {
  <T, M>(arr: T[], b: M): void;
};

const SuperPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};

// 제네릭을 이용하니 타입을 일일히 생성해줄 필요가 없다.
SuperPrint2([1, false, "2"], 3);

// 객체에서 사용법
type player<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};
type NicoPlayer = player<NicoExtra>;

const nioc: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimch",
  },
};
