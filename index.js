/*Contador de vocales
Dando un texto, mostrar cuántas vocales contiene. Si no tiene vocales, no debería imprimirlas.
Ejemplo:
-Entrada: “Hello world!”, Salida: e -> 1, o -> 2
-Entrada: “Te amo madre mía”: a -> 3 , e -> 2, i -> 1, o -> 1*/

function  countVoules(){
    var string = document.getElementById('text').value;
    var Vowels=[0,0,0,0,0]
      //console.log(Vowels);
    for (let index = 0; index < string.length; index++) {
        
        var char = string.charAt(index);

        switch (char) {
            case 'a':
            Vowels[0]=Vowels[0]+1; 
                break;

            case 'A':
            Vowels[0]=Vowels[0]+1;  
                break;

            case 'á':
            Vowels[0]=Vowels[0]+1; 
                break;

            case 'Á':
            Vowels[0]=Vowels[0]+1;  
                break;
        
            case 'e':
            Vowels[1]=Vowels[1]+1; 
                break;
            
            case 'E':
            Vowels[1]=Vowels[1]+1;  
                break;
            
            case 'é':
            Vowels[1]=Vowels[1]+1; 
                break;

            case 'É':
            Vowels[1]=Vowels[1]+1;  
                break;
            
            case 'i':
            Vowels[2]=Vowels[2]+1; 
                break;
            
            case 'I':
            Vowels[2]=Vowels[2]+1;  
                break;

            case 'í':
            Vowels[2]=Vowels[2]+1; 
                break;

            case 'Í':
            Vowels[2]=Vowels[2]+1;  
                break;
                
            case 'o':
            Vowels[3]=Vowels[3]+1; 
                break;

            case 'O':
            Vowels[3]=Vowels[3]+1;  
                break;

            case 'ó':
            Vowels[3]=Vowels[3]+1; 
                break;

            case 'Ó':
            Vowels[3]=Vowels[3]+1;  
                break;

            case 'u':
            Vowels[4]=Vowels[4]+1; 
                break;

            case 'U':
            Vowels[4]=Vowels[4]+1;  
                break;

            case 'ú':
            Vowels[4]=Vowels[4]+1; 
                break;

            case 'Ú':
            Vowels[4]=Vowels[4]+1;  
                break;

            default:
                break;
        }
        
    } 
    var output ='';
    var char= ['a','e','i','o','u'];
    for (let index = 0; index < Vowels.length; index++) {
        if(Vowels[index]>0)output=output+ char[index] +"->"+ Vowels[index]+", ";
    }
    alert("Entrada: "+string+",Salida: "+output.slice(0, -2));
    console.log("Entrada: "+string+",Salida: "+output.slice(0, -2));
}

function clearInput(){
    document.getElementById('text').value='';
}