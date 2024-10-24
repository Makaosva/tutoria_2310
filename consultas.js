import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  user: "postgres",
  password: "mo76492250",
  database: "biblioteca_tutoria",
  allowExitOnIdle: true,
});

export const getLibros = async () => {
  const consulta = "SELECT * FROM libros;";
  const { rows: libros } = await pool.query(consulta);
  return libros;
};

export const getLibrosByID = async ({ id }) => {
  const consulta = "SELECT * FROM libros WHERE id = $1;";
  const values = [id];
  const { rows: libros } = await pool.query(consulta, values);
  return libros;
};

export const getLibrosByFilter = async (extras = "", values = []) => {
  const consulta = `SELECT * FROM libros ${extras};`;

  const { rows: libros } = await pool.query(consulta, values);
  return libros;
};

export const prepararFiltros = (queryString) => {
  let filtros = [];
  let values = [];

  if (queryString == {}) return [(filtros = ""), (values = "")];
  const agregarFiltro = (campo, comparador, valor) => {
    values.push(valor);
    const { length } = filtros;
    filtros.push(`${campo} ${comparador} $${length + 1} `);
  };

  const { precio_max, precio_min, categoria, autor } = queryString;
  if (precio_max) agregarFiltro("precio", "<=", precio_max);
  if (precio_min) agregarFiltro("precio", ">=", precio_min);
  if (categoria) agregarFiltro("categoria", "=", categoria);
  if (autor) agregarFiltro("autor", "=", autor);

  filtros = filtros.join(" AND ");

  filtros = `WHERE ${filtros}`;

  return [filtros, values];
};
