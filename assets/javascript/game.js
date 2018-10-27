$( document ).ready(function(){
    // Generates random number to guess
    var random = Math.floor(Math.random()*120+19)
    
    // Display random number
    $('#scoreToMatch').text(random);
    
    //Generate random number for each crystal
    var num1 = Math.floor(Math.random()*12+1)
    var num2 = Math.floor(Math.random()*12+1)
    var num3 = Math.floor(Math.random()*12+1)
    var num4 = Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal = 0; 
    var wins = 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  // Reset game
  function reset(){
        random = Math.floor(Math.random()*120+19);
        console.log(random)
        $('#scoreToMatch').text(random);
        num1 = Math.floor(Math.random()*12+1);
        num2 = Math.floor(Math.random()*12+1);
        num3 = Math.floor(Math.random()*12+1);
        num4 = Math.floor(Math.random()*12+1);
        playerTotal = 0;
        $('#totalScore').text(playerTotal);
        } 
  // Display wins
  function winner(){
  alert("You did it!!!!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("You didn't do it! Try again");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == random){
            winner();
          }
          else if ( playerTotal > random){
            loser();
          }   
    })  
    $('.orange').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == random){
            winner();
          }
          else if ( playerTotal > random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == random){
            winner();
          }
          else if ( playerTotal > random){
            loser();
          } 
    })  
    $('.purple').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == random){
            winner();
          }
          else if ( playerTotal > random){
            loser();
          }
    });   
  }); 