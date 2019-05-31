new Vue({

    el: '#allpage',
    data:{
    
      //page:'login',
      page:'homepage',
      login:'Log In Now',
      email:'',
      pass:'',
      teamname:'',
      name:'',
      state:'on',
      hometittle:'No User',
      admin:'admin',
      agente:'agente',
      projectname:'Project Name',
      pageroles:'admin',
      pagebody:'',
      newteam:'',
      totalusers:'no data',
      totalprojects:'totalprojects not loaded',
      totalteams:'totalteams not loaded',
      users:[ {startdate:'',username:'',totalprojects:'',useractive:'',
                userprojects:[{projectname:''}]}],          
      projects:[
            { projectdate:'',projectname:'',projectusers:'',projectactive:'',
            teams:[{teamname:''}]}
            ],   
       teams:[
            { teamdate:'',teamname:'',teamusers:'',teamactive:'',
                users:[{username:''}]}
            ],
    
    },

    mounted() {
    if (localStorage) {
        ls = localStorage;
    }

    },
      
    
    methods: {
    
        saveproject() {

            project = JSON.parse(localStorage.getItem("projects"));
            console.log(project);
            project.projectname.push(this.projectname);    
            localStorage.setItem("projects",JSON.stringify(project));
            


        },

        newassignteam() {

            ls=":"+this.projectname+":"+":"+":"+":";   
            localStorage.setItem("project:"+this.projectname+":"+this.newteam+":",JSON.stringify(ls));
        },
  

        saveteam() {
            
            ls=":"+this.teamname+":"+this.name+":"+":"+":";             
            localStorage.setItem("team:"+this.teamname,JSON.stringify(ls));
         
        },


        saveuser() {
            

            ls=":"+this.name+":"+this.pass+":"+this.email+":"+this.role+":";             
            localStorage.setItem("user:"+this.email,JSON.stringify(ls));
         
        },
    
    
    
      botaologin() {
        var user = localStorage.getItem(this.email);
        console.log(" - "+user);
    
        var arrayOfStrings = user.split(":");
        console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
    
        console.log("Pass: "+arrayOfStrings[2]);
        console.log("This.Pass: "+this.pass);
        console.log("Role;" +arrayOfStrings[4])
    
        if(arrayOfStrings[2] === this.pass){
            console.log("Pass Sucesso")
            this.page='homepage'
            
        }
    
        if(arrayOfStrings[4] === this.admin){
        console.log("ADMIN")
            
        this.login="WrongPassword"+arrayOfStrings[1]
        this.pageroles='admin'
        this.hometittle="Bem Vindo Admin "+arrayOfStrings[1]
    
        }
    
    
    
        if(arrayOfStrings[4] === this.agente){
        console.log("AGENTE")
            
        this.login="Wrong Password "+arrayOfStrings[1]
        this.pageroles=this.agente
        this.hometittle="Bem Vindo Agente "+arrayOfStrings[1]
    
    
        }
    
    
    },
        
        changetoallteams(){
    
            this.pagebody="allteams"
    
        },
    
        changetoallprojects(){
            this.pagebody="allprojects"

            db=ls
            arrayProjects = db.split(":")
            this.projects=arrayProjects[1]
            this.totalprojects=arrayProjects.length

        },
    
        changetoallusers(){
            this.pagebody="allusers"
        },
    
        changetomyteams(){
    
        this.pagebody="myteams"
    
        },
    
        changetomyprojects(){
        this.pagebody="myprojects"
        }
    
    }
    
    
    
});
    


