function titleCase(str) {
  return str.replace(/\w\S*/g, 
    function(str){return str.charAt(0).toUpperCase() +    str.substr(1).toLowerCase();
    });
}

//titleCase("I'm a liTtle tea pot");
//titleCase("sHoRt And Stout");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");