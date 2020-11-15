# Class

## 정의
- **Class** : 
  - 연관있는 데이터를 한 곳에 묶어두는 group을 이야기한다.
  - Template을 생각하자.
- **Object** : Class에 data를 넣어서 만든 instance
- **fields** : class의 변수 
- **methods** : class의 함수
- **DataClass** : fields와 methods가 없고, 오로지 데이터만 있는 경우
- **Encapsulation** : 내부적으로 보여지는 변수와 밖에 보여지는 변수를 만드는 작업
  - private : class 밖에서 접근 불가
  - public : class 밖에서도 접근 가능
  - get, set method를 이용해서 접근 -> 사용자가 실수로, 임의로 바꾸는 것을 사전에 차단
- Object-Oriented : 부모 class와 자식 class를 만들어 상속과 다양성을 만드는 작업

## New Idea

### 1. Static

static이라고 선언하면, object에서 접근하지 못하고, class에서만 접근 가능.

object에 상관없이 class안에서 써야한다면, 접근하지 못하게 static 선언해야한다.

> static 같은 경우는, class안에서만 돌고 돌 때, 쓰면 좋을 것 같다. 아마 자주 애용할 듯...

<code>

    class Article{
        static publisher = 'Dream Coding';
        constructor(articleNumber){
            this.articleNumber = articleNumber;
        }

        static printPublisher(){
            console.log(Article.publisher);
        }
    }

    const article1 = new Article(1);
    const article2 = new Article(2);
    console.log(`article number : ${article1.articleNumber}`); // 1
    console.log(`article number : ${Article.articleNumber}`); // undefined

</code>

### 2. Inheritance

- 부모 클래스에서 자식 클래스로 뻗어나가는 작업
- 부모 클래스에 자식 클래스에 공통적으로 있는 부분을 만들어 상속해야함.
- 장점 :
  - 반복되는 작업을 대폭 줄여준다.
  - 디버깅이나 수정할 때, 한 번만 수정하면 끝!

## Reference

[1. javescript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) 대체적으로 method에 관련된 reference는 여기서 찾아보자!!

[2. Object 관련한 Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) 이건 꼭 한 번 읽어보기
