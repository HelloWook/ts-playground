// 배열 사용법
let a: number[] = [1, 2];
let b: string[] = ["li", "1"];
let c: boolean[] = [true, false];

// 객체 사용법 (타입 추론 방식)
const player: {
  name: string;
  // ?을 이용하면 undefined일 수도 있다.
  // 선택적 변수라 의미한다.
  age?: number;
} = {
  name: "nic0",
};

// alias 타입을 이용한 방법
// 재사용성 증대
type Game = String;

type Soccer = {
  game: Game;
  // 수정할려하면 오류가 생성됨
  readonly score?: number;
};

const score: Soccer = {
  game: "바르샤",
  score: 2,
};

// 함수에서 사용 법
// return 타입을 정하는 방법
function playerMaker(name: string): Soccer {
  return {
    game: name,
  };
}

// 화살표 함수 사용법
const playerMaker2 = (game: string): Soccer => ({ game });

// readonly 사용법
// 수정할려하면 오류가 생긴다.
const numbers: readonly number[] = [1, 2, 3];
// 배열 값 지정
const arrays: readonly [number, String] = [1, "wook"];

// 밑처럼 사용가능
let x: null;
let y: undefined;

// any 어떤 타입이든 사용할 수 있다.
// any는 어떤 타입이든 될 수 있고, 이후 어떤 동작이든 할 수 있다.
const q: any[] = ["1", 2];

// 어떤 타입인지 모를 경우
// 어떤 타입이든 될 수 있지만, 그 이후는 어떤 동작도 허용하지 않는다.
let un: unknown;

// 어떤값도 return 하지 않을 때 (비어있음을 의미)
function hello(): void {
  console.log("x");
}
