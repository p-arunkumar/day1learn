function pluralize(noun,number){
  if (number > 1){
    return number + " " + noun + "s";
  }
  else return number + " " + noun
}
