        let cpf = "089611192620"
        // Retiramos todos os caracteres especial
        let cpf_analise = cpf.replace(/[\\{}[\],.^?~=+\-_\/*\-+\s.\|]/g, "");

        if (cpf_analise.split("").length < 11) {
            req.flash('message', 'Cpf esta com numero de caracteres menor')
            res.render('./cadastro')
            return
        } else if (cpf_analise.split("").length > 11) {
            req.flash('message', 'Cpf esta com numero de caracteres maior')
            res.render('./cadastro')
        }