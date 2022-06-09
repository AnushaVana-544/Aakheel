var akhilAudio=new Audio('AkhilVoice.mp4')
    var ilyasAudio=new Audio('IlyasVoice.ogg')
    var bhanuAudio=new Audio('BhanuVoice.ogg')
    var anushaAudio=new Audio('AnushaVoice.ogg')
    var kavyaAudio=new Audio('KavyaVoice.ogg')
    var sowmyaAudio=new Audio('SowmyaVoice.ogg')
    var sunithaAudio=new Audio('Sunitha.mp4')
    var sandyaAudio=new Audio('SandyaVoice.mp4')
    var tilakAudio=new Audio('TilakVoice.aac')
    var sriAudio=new Audio('SriRamVoice.aac')
    var ramuAudio=new Audio('RamuVoice.ogg')
    function allOff()
    {
        akhilAudio.pause()
        ilyasAudio.pause()
        bhanuAudio.pause()
        anushaAudio.pause()
        kavyaAudio.pause()
        sowmyaAudio.pause()
        sunithaAudio.pause()
        sandyaAudio.pause()
        tilakAudio.pause()
        ramuAudio.pause() 
        sriAudio.pause() 
    }
    function myFunction(name)
    {
        if(name=='Akhil')
        {
            allOff()
            akhilAudio.play()            
        }
        else if(name=='Ilyas')
        {           
            allOff()
            ilyasAudio.play()            
        }
        else if(name=='Bhanu')
        {
            allOff()
            bhanuAudio.play()            
        }
        else if(name=='Anusha')
        {        
            allOff()    
            anushaAudio.play()            
        }
        else if(name=='Kavya')
        {        
            allOff()   
            kavyaAudio.play()            
        }
        else if(name=='Sowmya')
        {    
            allOff()       
            sowmyaAudio.play()            
        }
        else if(name=='Sunitha')
        {   
            allOff()        
            sunithaAudio.play()           
        }
        else if(name=='Sandya')
        {    
            allOff()        
            sandyaAudio.play()           
        }
        else if(name=='Tilak')
        {          
            allOff()
            tilakAudio.play()            
        }
        else if(name=='Ramu')
        {            
            allOff()
            ramuAudio.play()
        }
        else if(name=='Sriram')
        {            
            allOff()
            sriAudio.play()
        }
    }