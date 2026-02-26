let global = 'Global';

function outer() {
  let outerVar = 'Outer';
  
  function inner() {
    let innerVar = 'Inner';
    
    console.log(innerVar);   // Доступ к innerVar
    console.log(outerVar);   // Доступ к outerVar (замыкание)
    console.log(global);     // Доступ к global
  }
  
  return inner;
}

const closure = outer();
closure();
