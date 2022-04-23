  let data_sistema = new Date()
       let data_atual = new Date();

       let day1 = new Date(data_sistema);
       let day2 = new Date(data_atual);
       let difference = Math.abs(day2 - day1);

        let days = parseInt(difference / (3600 * 1000 * 24));
        console.log(days);