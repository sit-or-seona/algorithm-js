/*
LIKE: 특정 문자열 찾기
ORDER BY: 특정 열을 기준으로 정렬
DESC: 내림차순 (ASC: 오름차순)
*/

SELECT * FROM CAR_RENTAL_COMPANY_CAR WHERE OPTIONS LIKE '%네비게이션%' ORDER BY CAR_ID DESC