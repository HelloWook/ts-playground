type Words = {
  // 객체 키 타입 지정시 위와 같이 사용한다.
  [key: string]: string;
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  // 클래스를 타입처럼 사용이 가능하다
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, def: string) {
    this.words[term] = def;
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert(term: string, def: string) {
    if (this.words[term] === undefined) {
      this.words[term] = def;
    } else {
      this.words[term] = def;
    }
  }
  exists(term: string) {
    return Object.keys(this.words).includes(term);
  }
  showAll() {
    Object.keys(this.words).forEach((term) => {
      console.log(`${term}: ${this.words[term]}`);
    });
  }

  bulkAdd(words: Word[]) {
    words.forEach((word) => {
      this.add(word);
    });
  }

  bulkDelete(terms: string[]) {
    terms.forEach((term) => {
      this.delete(term);
    });
  }
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimch = new Word("kimch", "한국의 음식");
const dict = new Dict();

dict.add(kimch);
dict.def("Kimch");
