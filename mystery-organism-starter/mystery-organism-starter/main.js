
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number , array )=> {
   return {
     specimenNum : number,
     dna : array,
     mutate :  function() 
     { 
       let n = Math.floor(Math.random() * 15)
       let newBase = "";
       let theMutedeBase = this.dna[n];
               do {
                    newBase = returnRandBase() ; 
                  } while (theMutedeBase === newBase );
       this.dna[n] = newBase ; 

      return this.dna ; 
    },
    comparDNA : function( obj = { prop  , Dna }){ 
      const currentDna = this.dna ; 
      const tocompareDna = obj.Dna; 
      let count = 0 ;
       for (let index = 0; index < currentDna.length; index++) {
         if(currentDna[index] == tocompareDna[index]){
           count++ ;
           }
         }
         let percentage = (count*100)/15 ; 
         
    return count + "   " +  currentDna + tocompareDna ; 
       }
         }
}
const x = pAequorFactory(1,["A","C","G","T","C","C","G","A","A","T","G","T","A","G","C"])
y = x.comparDNA({prop : 2, Dna : ["A","C","G","T","C","C","G","A","A","T","G","T","A","G","C"] });
console.log(y); 











