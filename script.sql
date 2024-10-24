CREATE DATABASE biblioteca_tutoria;
\c biblioteca_tutoria;
CREATE TABLE libros (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100),
  autor VARCHAR(100),
  genero VARCHAR(50),
  precio INT,
  stock INT
);
INSERT INTO libros (titulo, autor, genero, precio, stock) VALUES
('Cien Años de Soledad', 'Gabriel García Márquez', 'Ficción', 30000, 5),
('Don Quijote de la Mancha', 'Miguel de Cervantes', 'Ficción', 25000, 3),
('El Principito', 'Antoine de Saint-Exupéry', 'Ficción', 15000, 8),
('Sapiens', 'Yuval Noah Harari', 'No ficción', 40000, 2),
('El Hombre en Busca de Sentido', 'Viktor Frankl', 'No ficción', 20000, 6);