db.createCollection('users');
db.users.insertMany([{ //insertMany agrega varios objetos  en un solo bloque  a diferencia de inserOne
    nombre: 'keyner',
    apellidos: 'Fernandez',
    correo: 'correoKeyner',
    genero: 'M',

},
{
    nombre: 'juan',
    apellidos: 'perez',
    correo: 'correoJuan',
    genero: 'M',
    edad: 21
},
{
    nombre: 'monica',
    apellidos: 'gallardo',
    correo: 'correoMonica',
    genero: 'F',
    edad: 22
},
{
    nombre: 'pepe',
    apellidos: 'giraldo',
    correo: 'correoPepe',
    genero: 'M',
    edad: 23
},
{
    nombre: 'sara',
    apellidos: 'hincapie',
    correo: 'correoSara',
    genero: 'F',
    edad: 24
},{
    nombre: 'jose',
    apellidos: 'rosario',
    correo: 'correoJose',
    genero: 'M',
    edad: 25
},{
    nombre: 'gabriel',
    apellidos: 'Fernandez',
    correo: 'correoGabiel',
    genero: 'F',
    edad: 20
},
{
    nombre: 'Milena',
    apellidos: 'perez',
    correo: 'correoMilena',
    genero: 'F',
    edad: 21
},
{
    nombre: 'Alejandro',
    apellidos: 'gallardo',
    correo: 'correoAlejandro',
    genero: 'M',
    edad: 22
},
{
    nombre: 'ramiro',
    apellidos: 'Torres',
    correo: 'correoRamiro',
    genero: 'M',
    edad: 23
},
{
    nombre: 'jhoana',
    apellidos: 'maya',
    correo: 'correoMaya',
    genero: 'F',
    edad: 24
},{
    nombre: 'anderson',
    apellidos: 'jose',
    correo: 'correoAnderson',
    genero: 'M',
    edad: 25
}]


);

db.users.find();
//select * from users

db.users.find({edad:20}); //select * from users where edad=20
db.users.find({edad: {$ne:20}});//select * from users where edad!=20
db.users.find({edad:{$gt:20}});//select * from users where edad>20
db.users.find({edad:{$lt:20}});//select * from users where edad<20
db.users.find({edad:{$gte:20}});//select * from users where edad>=20
db.users.find({edad:{$lte:20}});//select * from users where edad<=20
db.users.find({edad:{$in:[20,21,22]}});//select * from users where edad=20 or edad=21 or edad=22
db.users.find({edad:{$nin:[20,21,22]}});//select * from users where edad!=20 or edad!=21 or edad!=22

//parar traer usuarios que no tengan alguna clave  
db.users.find({edad:{$exists:false}});

//busque en el csambo nombres cuando  el campo inicie con 
db.users.find({nombre:{$regex:/^key/}});


//crear un intervalo de datos
db.users.find({
    $and:
    [
        {edad:{$gt:21}},//mayor
        {edad:{$lt:24}}//menor que
    ]
});
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////ACTIVIDAD 14/MAR/2024///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

db.createCollection('usuarios');
db.usuarios.insertMany([{ //insertMany agrega varios objetos  en un solo bloque  a diferencia de inserOne
    nombre: 'Keyner',
    apellidos: 'Fernandez',
    correo: 'correoKeyner',
    ciudad: 'Medellin',
    pais:'Colombia',
    salario:3000,           //dolares
    edad:24,                //numeros
    altura:184,             //centimetros
    peso:168                //libras


},
{
    nombre: 'Juan',
    apellidos: 'Perez',
    correo: 'correoJuan',
    ciudad: 'Medellin',
    pais:'Colombia',
    genero: 'M',
    salario:3000,           //dolares
    edad:25,                //numeros
    altura:190,             //centimetros
    peso:170                //libras
},
{
    nombre: 'Monica',
    apellidos: 'Gallardo',
    correo: 'correoMonica',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'F',
    edad: 22,
    salario:1200,           //dolares
    edad:18,                //numeros
    altura:150,             //centimetros
    peso:100                //libras
},
{
    nombre: 'Pepe',
    apellidos: 'Giraldo',
    correo: 'correoPepe',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'M',
    edad: 23,               //numeros
    salario:1000,           //dolares
    altura:184,             //centimetros
    peso:168                //libras
},
{
    nombre: 'Sara',
    apellidos: 'Hincapie',
    correo: 'correoSara',
    ciudad: 'madrid',
    pais:'españa',
    genero: 'F',
    edad: 24,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:60                //libras
},{
    nombre: 'Jose',
    apellidos: 'Rosario',
    correo: 'correoJose',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'M',
    edad: 25,               //numeros
    salario:1000,           //dolares
    altura:184,             //centimetros
    peso:168                //libras
},{
    nombre: 'Gabriel',
    apellidos: 'Fernandez',
    correo: 'correoGabiel',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'F',
    edad: 24,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:60                //libras
},
{
    nombre: 'Milena',
    apellidos: 'Perez',
    correo: 'correoMilena',
    ciudad: 'ciudadMexico',
    pais:'Mexico',
    genero: 'F',
    edad: 48,               //numeros
    salario:5000,           //dolares
    altura:174,             //centimetros
    peso:120                //libras

},
{
    nombre: 'Alejandro',
    apellidos: 'Gallardo',
    correo: 'correoAlejandro',
    ciudad: 'Bello',
    pais:'Colombia',
    genero: 'M',
    edad: 22,               //numeros
    salario:1500,           //dolares
    altura:160,             //centimetros
    peso:160                //libras
},
{
    nombre: 'Ramiro',
    apellidos: 'Torres',
    correo: 'correoRamiro',
    ciudad: 'Londres',
    pais:'inglaterra',
    genero: 'M',
    edad: 16,               //numeros
    salario:1500,           //dolares
    altura:100,             //centimetros
    peso:148                //libras
},
{
    nombre: 'Jhoana',
    apellidos: 'Maya',
    correo: 'correoMaya',
    ciudad: 'Parìs',
    pais:'Francia',
    genero: 'F',
    edad: 17,               //numeros
    salario:5000,           //dolares
    altura:174,             //centimetros
    peso:120                //libras
},{
    nombre: 'Anderson',
    apellidos: 'Jose',
    correo: 'correoAnderson',
    ciudad: 'Nueva Dheli',
    pais:'India',
    genero: 'M',
    edad: 48,               //numeros
    altura:174,             //centimetros
    peso:120                //libras
}]


);

/*
1.Obtener todos los usuarios que sean mayores de 18 años.
2.Obtener todos los usuarios que sean de Londres o de París.
3.Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
4.Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
5.Obtener todos los usuarios que tengan entre 25 y 35 años.
6.Obtener a todos los usuarios que no sean de Estados Unidos.
7.Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
8.Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
9.Obtener a todos los usuarios que no sean de Londres ni de París.
10.Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
11.Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
12.Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
13.Obtener todos los usuarios que no tengan un correo electrónico registrado.
14.Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
15.Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
16.Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
17.Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
18.Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
19.Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
20.Obtener todos los usuarios que sean de India y que no tengan un salario registrado. */



////////SOLUCION /////////

//1.Obtener todos los usuarios que sean mayores de 18 años.
db.usuarios.find({edad:{$gt:18}});//select * from users where edad>18


//2.Obtener todos los usuarios que sean de Londres o de París.
db.usuarios.find({ciudad:{$in:['Londres','Parìs']}});//select * from users where ciudad=20 or ciudad=Parìs

//3.Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.usuarios.find({$and:[{edad:{$gt:30}},{salario:{$gt:2000}}]});


//4.Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.usuarios.find({$and:[{pais:{$regex:/^españa/}},{salario:{$gt:3000}}]});


//5.Obtener todos los usuarios que tengan entre 25 y 35 años.   //en mi base de datos no existen estos usuarios
db.usuarios.find({
    $and:
    [
        {edad:{$gt:25}},//mayor
        {edad:{$lt:30}}//menor que
    ]
});

//6.Obtener a todos los usuarios que no sean de Estados Unidos.
db.usuarios.find({pais: {$ne:'Estados Unidos'}});

//7.Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.usuarios.find({$or:[({$and:[{ciudad:{$regex:/^Londres/}},{salario:{$gt:2500}}]}),({edad:{$gt:30}})]});

//8.Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.usuarios.find({$and:[{pais:{$regex:/^Australia/}},{peso:{$gt:140}}]});

//9.Obtener a todos los usuarios que no sean de Londres ni de París.
db.usuarios.find({ciudad:{$nin:['Londres','paris']}});

//10.Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.usuarios.find({ $or: [ { salario: { $lt: 2000 } }, {edad:{ $gt :40 }} ] });

//11.Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.usuarios.find({$or:[({$and:[{pais:{$regex:/^Canadà/}},{salario:{$gt:4000}}]}),({altura:{$gt:180}})]});


//12.Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.usuarios.find({$and:[{pais:{$regex:/^Italia/}},{edad:{$lt:30}},{edad:{$gt:20}}]});











db.users.find();
//select * from users

db.users.find({edad:20}); //select * from users where edad=20
db.users.find({edad: {$ne:20}});//select * from users where edad!=20
db.users.find({edad:{$gt:20}});//select * from users where edad>20
db.users.find({edad:{$lt:20}});//select * from users where edad<20
db.users.find({edad:{$gte:20}});//select * from users where edad>=20
db.users.find({edad:{$lte:20}});//select * from users where edad<=20
db.users.find({edad:{$in:[20,21,22]}});//select * from users where edad=20 or edad=21 or edad=22
db.users.find({edad:{$nin:[20,21,22]}});//select * from users where edad!=20 or edad!=21 or edad!=22

//parar traer usuarios que no tengan alguna clave  
db.users.find({edad:{$exists:false}});

//busque en el csambo nombres cuando  el campo inicie con 
db.users.find({nombre:{$regex:/^key/}});


//crear un intervalo de datos
db.users.find({
    $and:
    [
        {edad:{$gt:21}},//mayor
        {edad:{$lt:24}}//menor que
    ]
});