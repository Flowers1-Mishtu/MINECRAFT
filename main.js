canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player="";
block="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Image){
        player=Image;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player);
    });

}


function block_update(get_image){
    fabric.Image.fromURL(get_image, function(Image){
        block=Image;
        block.scaleToWidth(block_width);
        block.scaleToHeight(block_height);
        block.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block);
    });

}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
console.log(keypressed);
if (e.shiftKey == true && keypressed =="80"){
block_width = block_width + 10;
block_height = block_height + 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
}

if (e.shiftKey == true && keypressed =="77"){
    block_width = block_width - 10;
    block_height = block_height - 10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
    }

    if(keypressed == "38"){
     up();
    }

    if(keypressed == "40"){
        down();
       }

       if(keypressed == "37"){
        left();
       }

       if(keypressed == "39"){
        right();
       }

       if(keypressed == "87"){
        block_update("wall.jpg");
       }

       if(keypressed == "71"){
        block_update("ground.png");
       }

       if(keypressed == "76"){
        block_update("light_green.png");
       }

       if(keypressed == "84"){
        block_update("trunk.jpg");
       }

       if(keypressed == "82"){
        block_update("roof.jpg");
       }

       if(keypressed == "89"){
        block_update("yellow_wall.png");
       }

       if(keypressed == "68"){
        block_update("dark_green.png");
       }

       if(keypressed == "85"){
        block_update("unique.png");
       }

       if(keypressed == "67"){
        block_update("cloud");
       }
}




function up(){
    if (player_y>0)
    {
        player_y= player_y-block_height;
        canvas.remove(player);
        player_update();

    }
}

function down(){
    if (player_y<550)
    {
        player_y= player_y+block_height;
        canvas.remove(player);
        player_update();

    }
}

function left(){
    if (player_x>0)
    {
        player_x= player_x-block_width;
        canvas.remove(player);
        player_update();

    }
}

function right(){
    if (player_x<900)
    {
        player_x= player_x+block_width;
        canvas.remove(player);
        player_update();

    }
}