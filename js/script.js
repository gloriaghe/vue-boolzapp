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
        canc:true,
        phrases: [
            "Ok",
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
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane di Catwoman?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di arrestare Pinguino stasera!!!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
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
                        date: '28/03/2020 10:10:40',
                        message: 'Stasera si esce?',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Volentieri... Invitiamo anche gli altri?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Si, basta non venga Iron Man!',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 16:15:23',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Stasera giretto?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, corri troppo!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare Batman...',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao stasera vedi gli altri?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, alle 20.00 nella fortezza di Superman',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Tutto bene durante la battaglia?!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Hey, che si dice?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Niente di che... anche stavolta ci hanno provato con la criptonite',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Hey, tutto bene?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, sono appena tornato dalla missione....',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
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
                  let nuovo = new newMess(this.newMessaggio.trim(), "29 maggio 21.00", "sent");
                  this.contacts[this.activeContact].messages.push(nuovo);
                  this.newMessaggio = "";
                  
                  let fraseACaso = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ]

                  setTimeout(( )=>{

                      let risposta = new newMess(fraseACaso, "29 maggio 21.00", "received");
                      this.contacts[this.activeContact].messages.push(risposta);
                  },1000)
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

        
       
        
    },

});