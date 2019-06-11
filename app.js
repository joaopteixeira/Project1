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
            showTeamProject: false,
            showTeam: false,
            showProject: false,
            showUser: false,
    },

    mounted() {
    if (localStorage) {
        ls = localStorage;
    }

    },
        
    methods: {
        toggle(type) {
            this[`show${type}`] = !this[`show${type}`]
        },
        initialize() {
            
            var project=[{
                

            projectdate:'',projectname:'',  
            projectusers:[ 
                    {startdate:'',username:'',totalprojects:'',useractive:'',
                    userprojects:[{projectname:''}]}
                        ],projectactive:'',

            teams:[
                    { teamdate:'',
                    teamname:'',
                    teamactive:'',
                        teamusers:[{username:''}]}
                    ]
                }];  

            var team=[
                        { teamdate:'',
                        teamname:'',
                        teamactive:'',
                        teamusers:[{username:''}]}
                        ];  

            var users=[];  


            var allprojects=[];
            var teams=[];
                 
                 
            localStorage.setItem("allprojects",JSON.stringify(allprojects));
            localStorage.setItem("project",JSON.stringify(project));
            localStorage.setItem("team",JSON.stringify(team));
            localStorage.setItem("teams",JSON.stringify(teams));
            localStorage.setItem("users",JSON.stringify(users));
            
            
        },  
    
        saveproject() {
            
            

            project = JSON.parse(localStorage.getItem('project'));
            allprojects = JSON.parse(localStorage.getItem('allprojects'));
            console.log(project);
            project.projectname=this.projectname;
            allprojects.push(project.projectname);
            localStorage.setItem("allprojects",JSON.stringify(allprojects));
            localStorage.setItem("project"+this.projectname,JSON.stringify(project));

            
            
        },

        newassignteam() {

            console.log("testo");
            project = JSON.parse(localStorage.getItem('projectmarte'));
            console.log(project); 
            project.teams.teamname="yellow";
            project.push(team);  
            //projects.push(project);  
            console.log(projects);  
              
            localStorage.setItem("projectmarte",JSON.stringify(project)); 

        },
  

        saveteam() {
            

            teams = JSON.parse(localStorage.getItem('teams'));
            teams.push(this.teamname);
            localStorage.setItem("team"+this.teamname,JSON.stringify(team));
            localStorage.setItem("teams",JSON.stringify(teams));
                    

        },

        assignuser() {

            user.username;

            teams = JSON.parse(localStorage.getItem('teams'));
            team.push(user);
            team.userprojects;
            team.useractive=true;
            totalteam=team.length;

            teams.push(teamname=this.team);


            localStorage.setItem("teams",JSON.stringify(teams));
                    


        },


        saveuser() {
            
            users = JSON.parse(localStorage.getItem('users'));
            localStorage.setItem("users",JSON.stringify(ls));
            ls=":"+this.name+":"+this.pass+":"+this.email+":"+this.agente+":";             
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
console.log(db.getItem(this.pagebody))
            
            if(db.getItem(this.pagebody)) {
                arrayProjects = db.split(":")
                this.projects=arrayProjects[1]
                this.totalprojects=arrayProjects.length
            }
            this.projects=[]
            this.totalprojects=0

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