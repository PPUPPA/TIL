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