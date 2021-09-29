let i = 0;
while(i<3){
  console.log(i); // 0, 1, 2
  i++;
}

i = 4;
do{
  console.log(i); // 4(최초 1회 실행)
  i++;
}while (i<3);

// while 문을 계속 무한으로 돌리는 방법 : while(1){} / while(true) 등.