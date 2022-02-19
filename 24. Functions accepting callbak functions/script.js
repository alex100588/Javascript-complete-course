
const oneWord = function (str) {
    return str.replace(str[0], 'Alex ').toLowerCase();
  };
  
  const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };

  const transformer = function(str, fn){
    console.log(`original ${str}`);
    console.log(`transformed ${fn(str)}`);
    console.log(`transformed by ${fn.name}`);
  }

  transformer('Javascript is the best', upperFirstWord)
  transformer('Javascript is the best', oneWord)

  const high5 = function(){
      console.log('✋');
  }

  document.querySelector('body').addEventListener('click', high5)