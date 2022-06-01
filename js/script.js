var Boolzapp = new Vue ({
    el: '#containerApp',
    data:{
        lastMessages : "",
        activeContact: 0,
        currentContact : {},
        newMessaggio: "",
        newMess: {},
        cercaAmico: "",
        deleteMess: false,
        deleteChat: false,
        canc: true,
        phrases: [
            "Super!",
            "Chiamo gli altri",
            "Stasera sarà dura",
            "Il mondo è di nuovo salvo!"
        ],
        contacts: [
            {
                name: 'Batman',
                avatar: 'img/Batman.png',
                visible: true,
                messages: [
                    {
                        date: 'Tue, 31 May 2022 9:15:53 GMT',
                        message: 'Hai portato a spasso il cane di Catwoman?',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 9:18:53 GMT',
                        message: 'Ricordati di arrestare Pinguino stasera!!!',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 10:15:53 GMT',
                        message: 'Tutto fatto! Gotham City è al sicuro anche oggi',
                        status: 'received'
                    }
                ],
            },
           
            {
                name: 'Wonder Woman',
                avatar: 'img/Wonderwoman.jpg',
                visible: true,
                messages: [
                    {
                        date: 'Tue, 31 May 2022 9:15:53 GMT',
                        message: 'Stasera si esce?',
                        status: 'received'
                    },
                    {
                        date: 'Tue, 31 May 2022 9:17:53 GMT',
                        message: 'Volentieri... Invitiamo anche gli altri?',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 11:15:53 GMT',
                        message: 'Si, basta non venga Iron Man!',
                        status: 'received'
                    },
                    {
                        date: 'Tue, 31 May 2022 12:15:53 GMT',
                        message: 'Non lo sopporto! XD',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Flash',
                avatar: 'img/Flash.png',
                visible: true,
                messages: [
                    {
                        date: 'Mon, 30 May 2022 9:15:53 GMT',
                        message: 'Stasera giretto?',
                        status: 'received'
                    },
                    {
                        date: 'Mon, 30 May 2022 10:15:53 GMT',
                        message: 'No, corri troppo!',
                        status: 'sent'
                    },
                    {
                        date: 'Mon, 30 May 2022 10:35:53 GMT',
                        message: 'Ahahahaha!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Green Lantern',
                avatar: 'img/Greenlantern.jpg',
                visible: true,
                messages: [
                    {
                        date: 'Sun, 29 May 2022 19:15:53 GMT',
                        message: 'Ricordati di chiamare Batman...',
                        status: 'sent'
                    },
                    {
                        date: 'Sun, 29 May 2022 20:15:53 GMT',
                        message: 'Va bene! Stasera comunque ci si vede alla base.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Hulk',
                avatar: 'img/Hulk.jpg',
                visible: true,
                messages: [
                    {
                        date: 'Tue, 31 May 2022 19:15:53 GMT',
                        message: 'Ciao stasera vedi gli altri?',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 19:35:53 GMT',
                        message: 'Si, alle 20.00 nella fortezza di Superman',
                        status: 'received'
                    },
                    {
                        date: 'Tue, 31 May 2022 19:36:53 GMT',
                        message: 'Perfetto!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Iron Man',
                avatar: 'img/IronMan.jpg',
                visible: true,
                messages: [
                    {
                        date: 'Tue, 31 May 2022 9:15:53 GMT',
                        message: 'Tutto bene durante la battaglia?!',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 10:15:53 GMT',
                        message: 'Certo, non mi batte nessuno!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Superman',
                avatar: 'img/Superman.png',
                visible: true,
                messages: [
                    {
                        date: 'Tue, 31 May 2022 12:15:53 GMT',
                        message: 'Hey, che si dice?',
                        status: 'sent'
                    },
                    {
                        date: 'Tue, 31 May 2022 13:15:53 GMT',
                        message: 'Niente di che... anche stavolta ci hanno provato con la criptonite',
                        status: 'received'
                    },
                    {
                        date: 'Tue, 31 May 2022 13:25:53 GMT',
                        message: 'Va beh dai... Ormai sei abituato!!',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Capitan America',
                avatar: 'img/CapitanAmerica.jpg',
                visible: true,
                messages: [
                    {
                        date: 'Mon, 30 May 2022 8:15:53 GMT',
                        message: 'Hey, tutto bene?',
                        status: 'sent'
                    },
                    {
                        date: 'Mon, 30 May 2022 9:15:53 GMT',
                        message: 'Si, sono appena tornato dalla missione....',
                        status: 'received'
                    },
                    {
                        date: 'Mon, 30 May 2022 9:20:53 GMT',
                        message: 'Ottimo. Riposati!',
                        status: 'sent'
                    }
                ],
            }
        ],
    },
    created(){
        
    },
    methods:{
        //collegare chat aperta
        activeClick(attivaMsg){
            this.activeContact = attivaMsg;
            // this.currentContact = this.contacts[attivaMsg];

        },

         // aggiunta messaggio
         
         messAdd (){
            class newMess {
                constructor (message, date, status){
                    this.date = date;
                    this.message = message;
                    this.status = status;

                }
            };
             if(this.newMessaggio.trim() !== ""){

                //data e ora messaggio
                var now = dayjs();

                //nuovo messaggio
                let nuovo = new newMess(this.newMessaggio.trim(), now, "sent");
                this.contacts[this.activeContact].messages.push(nuovo);
                this.newMessaggio = "";
                  
                //aggiunta frasi random
                let fraseACaso = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ]
                
                //id su HTML 
                let scrive = document.getElementById("staScrivendo");
                // let ultimoAccesso = document.getElementById("accesso");
                scrive.classList.remove("none");

                let onlineAmico = document.getElementById("online");
                // ultimoAccesso.classList.add("none");
                setTimeout(( )=>{

                    scrive.classList.add("none");

                    setTimeout(( )=>{
                        var nowRisposta = dayjs();
                        let risposta = new newMess(fraseACaso, nowRisposta, "received");
                        this.contacts[this.activeContact].messages.push(risposta);
                
                    });
                },2000);


                setTimeout(( )=>{
                    onlineAmico.classList.remove("none");
                },2000);

                setTimeout(( )=>{
                    onlineAmico.classList.add("none");
                },6000)
          
            }
        

        },

        cercaPerLettera () {
            let cErCaAmIcO = this.cercaAmico.toUpperCase();

            this.contacts.filter((element, i, array) =>{
               if(element.name.toUpperCase().includes(cErCaAmIcO) === false){
                   
                //    console.log(element.name.toUpperCase().includes(cErCaAmIcO));
                //    console.log(this.cercaAmico.toUpperCase());
                   
                element.visible = false;
                } else if (cErCaAmIcO === ""){
                    element.visible = true;

                }
           })
        },

        cancella(element){
             this.contacts[this.activeContact].messages.splice(element,1);
             
        },

        deleteMessaggi(element){
            this.contacts[this.activeContact].messages.splice(element);

        },
        deleteChatIntera(contacts){
            this.contacts.splice(this.activeContact,1);

        }
        
    },

});