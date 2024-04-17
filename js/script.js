const { createApp } = Vue;

createApp({
    data() {
        // qua ci mettiamo le chiavi dei dati e la logica 
        return {
            greeting: "Benvenuto Vue Js, grazie di esistere",
            image: ("./img/img.jpg"),
        }
    },
    methods: {
        // qua ci mettiamo le funzioni

    }
}).mount("#app");