// Storage를 설정하면 기존의 웹 API에 메소드를 추가하는 방식으로 정의된다.
interface SStorage {
  [key: string]: string;
}

class LocalStorage<T> {
  private storage: SStorage = {};

  set(key: string, value: T) {
    this.storage[key] = JSON.stringify(value);
  }

  remove(key: string) {
    delete this.storage[key];
  }

  get(key: string): T | null {
    const item = this.storage[key];
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }

  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
