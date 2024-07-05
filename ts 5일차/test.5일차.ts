// 추상 클래스는 다른 클래스가 상속받을 수 있도록 함
// 다만 새로운 인스턴스를 만들순 없다
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    public nickName: string
  ) {}
  abstract getNickName(): void;
  // 메소드
  getFullName() {
    return `${this.firstName}`;
  }
}
class Player extends User {
  getNickName(): void {
    // 첫 이름을 출력함
    // protected는 접근할 수없다
    // protect를  상속시 이용하면 접근이 가능하다
    console.log(this.firstName);
  }
}

const nico = new Player("nico", "las", "니꼬");
console.log(nico.getNickName());
