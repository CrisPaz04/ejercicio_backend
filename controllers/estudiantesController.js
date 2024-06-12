const controller = {};

controller.list = (req, res) => {
  req.getConnection((error, conn) => {
    conn.query("select *from estudiantes", (err, estudiantes) => {
      if (err) {
        res.json(err);
      }
      res.json(estudiantes);
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("insert into estudiantes set?", [data], (err, estudiantes) => {
      res.json(estudiantes);
    });
  });
};

controller.edit = (req, res) => {
  const { idestudiantes } = req.params;

  req.getConnection((err, conn) => {
    conn.query(
      "select *from estudiantes where idestudiantes=?",
      [idestudiantes],
      (err, estudiantes) => {
        res.json(estudiantes[0]);
      }
    );
  });
};

controller.update = (req, res) => {
  const { idestudiantes } = req.params;
  const nuevo_estudiantes = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "update estudiantes set ? where idestudiantes =?",
      [nuevo_estudiantes, idestudiantes],
      (err, rows) => {
        res.json({ message: "Registro Actualizado" });
      }
    );
  });
};

controller.delete = (req, res) => {
  const { idestudiantes } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      'update estudiantes set estado="Inactivo" from estudiantes where idestudiantes =?',
      [idestudiantes],
      (err, rows) => {
        res.json({ message: "Registro Eliminado" });
      }
    );
  });
};

module.exports = controller;
