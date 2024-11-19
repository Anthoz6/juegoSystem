const controller = {};

controller.listAdmin = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM juego', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.listLog = (req, res) => {
    res.render('login');
};

controller.listReg = (req, res) => {
    res.render('register');
};


controller.listIndex = (req, res) => {
    res.render('index');
};

controller.listGames = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('SELECT * FROM juego', (err, games) => {
            if (err) {
                return res.json(err);
            }
            res.render('games', {
                data: games 
            });
        });
    });
};



controller.listAbout = (req, res) => {
    res.render('about');
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO juego set ?', [data], (err, customer) => {
            res.redirect('/admin');
        });
    });
};

controller.delete = (req, res) => {
    const { juegoId } = req.params;  // Solicitamos la propiedad id

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM juego WHERE juegoId = ?', [juegoId], (err, rows) => {
            res.redirect('/admin');
        });
    });
};

controller.edit = (req, res) => {
    const { juegoId } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM juego WHERE juegoId = ?', [juegoId], (err, customer) => {
            res.render('customer_edit', {
                data: customer[0] // Pedimos el indice del arreglo
            });
        });
    });
};

controller.update = (req, res) => {
    const { juegoId } = req.params;
    const newCustomer = req.body;  // Guardamos los nuevos datos del usuario
    req.getConnection((err, conn) => {
        conn.query('UPDATE juego set ? WHERE juegoId = ?', [newCustomer, juegoId], (err, rows) => { // Actualiza al usuario con los datos ingresados
            res.redirect('/admin');
        });
    });
};

module.exports = controller;