# 실전

## api 공부할 때

1. 정확하게 코멘트를 읽어보기
2. 파라미터는 어떤 값을 전달해야하는지
3. return 되는 것은 뭔지
4. object를 변형 시키는 api인지 아닌지

## function (number, index?)

```javascript

    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     */

```

1. method의 목적이 무엇인가
2. parameter는 어떤 값을 전달해야하는지 (?와 T 구별하기)
   1. ? : parameter 를 넣어도 되고, 안 넣어도 되고의 의미이다.
   2. T : return을 의미한다.
   3. any : 어떤 object, anything
3. return 되는 것은 뭔지
4. object를 변형 시키는 api인지 아닌지