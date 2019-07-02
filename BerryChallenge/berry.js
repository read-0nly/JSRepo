//# Create field
//# Set initial parameters
//# Create random berry trees
//# Create random animals
//# Start simulation
class Genes{
  //# Tree Genetics
  //  # ==PARAMETERS==
  
 // 8
  //  # PlantSize
  //  # PlantBerryRate
  //  # PlantMaturity
  //  # PlantAge
  //  # PlantAgeLimit
  //  # PlantFlavor
  //  # PlantSmell
  //  # PlantSociability
  
//2
  //  # SeedAge
  //  # SeedAgeLimit
  
//7
  //  # BerryAge
  //  # BerryAgeLimit
  //  # BerrySeedRate
  //  # BerrySeedChance
  //  # BerryFlavor
  //  # BerrySmell
  //  # BerrySize
  
  //ExpressionAgeCurve
  
  this.geneArray = new Int8Array(18)
  constructor(geneBytes){
    this.geneArray=geneBytes
  }
  
  //generate adam
  //Breed
  //Mutate
    //Add
    //Change
    //Delete
}

class Seed{
  //  # when a seed reaches maturity, if in field, become plant
}

class Berry{
  //  # When berry ages, chance of growth
}

class Plant{  
  //  # When plant eaten, remove plant and drop berries
  //  # When plant dies, remove plant and drop berries
  //  # when plant reaches maturity, create berries with mutated variations using near plants
}

class Eater{
  //  # when animal has energy, breed
  //  # when animal ages, remove
  //  # When berry or seed is eaten, animal drops seeds occasionally
  //  # If bad flavor, drop seeds on tile and lose energy in proportion
  //  # As animal ages, drop rate drops
}

class BerryEater{
  Eater.call(this)
}

class PlantEater{
  Eater.call(this)
}

class AnimalEater{
  //  # when animal is eaten, eater inherits seeds
  Eater.call(this)
}
