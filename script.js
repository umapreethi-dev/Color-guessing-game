
            var target_index,target,colors;
            var finished = false;
            var guesses = 0;
            var guess_input;
            var include;
            colors = ["Aqua","blue","black","aquamarine"];
             function do_game(){
            target_index = Math.floor(Math.random()*colors.length);
            target = colors[target_index];
            console.log(target);
            
                
           while(!finished){
                guess_input = prompt("I am thinking of one of these colors" +
                "\n\n" + colors + +"\n\n"+ "What color am I thinking of?");
                include = colors.includes(guess_input);
                console.log(include);
                guesses += 1;
               finished = check_guess();
            }
        }
            function check_guess(){
                if(include === false  ){
                     alert("I don't recognise that color");
                     return false;
                     }
                 if(guess_input > target){
                    alert("Your color is higher than mine");
                    return false;
                }
                else if(guess_input < target){
                    alert("Your color is lower than mine");
                    return false;
                    }
                else 
                {
                    alert("Congratulations!!!  You have taken" + guesses + "guess");
                    document.body.style.background = guess_input;
                    return true;

                }
             }