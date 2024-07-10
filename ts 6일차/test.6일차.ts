// 지정된 값만 사용하게 한다.
type Team = "read" | "yellow" | "blue";
type Health = 1 | 2 | 3;

// 객체의 모양을 정의할 때 사용한다.
interface Players {
  nickname: string;
  team: Team;
  health: Health;
}

// 상속이 가능하다
interface User extends Players {}

const wooks: Players = {
  nickname: "러브",
  team: "yellow",
  health: 1,
};

interface Users {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

// interface를 이용한 상속방식
class Playerss implements Users {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}`;
  }
}
