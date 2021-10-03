process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let square = '';
    for(let i=0;i<b;i++){
      for(let j=0;j<a;j++){
          square += '*';
      }
      square += '\n';
    }
    console.log(square);
}); // O(n^2)

// 최적화! O(n)
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let square = '*'.repeat(a);
    for(let i=0;i<b;i++){
      console.log(square);
    }
});