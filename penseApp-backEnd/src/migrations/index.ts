import { userTableName, productsTableName,  } from './../types';
import connection from "../connection";

connection.raw(`
    CREATE TABLE IF NOT EXISTS ${userTableName} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ${productsTableName} (
        id VARCHAR(255) PRIMARY KEY ,
        name VARCHAR(255) NOT NULL UNIQUE,
        description VARCHAR(3000) DEFAULT '',
        price FLOAT,
        promo_price BOOLEAN DEFAULT false,
        image_url VARCHAR(555) DEFAULT 'https://ecosolys.com.br/wp-content/uploads/2019/11/imagem-nao-disponivel.jpg',
        status_flag VARCHAR(255) DEFAULT '',
        category VARCHAR(255) DEFAULT 'sem categoria',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );

`).then( () => console.log( 
    "MySql table were sucessfully createds!"
)).catch(error => console.log(error.message)
).finally( () => {
    connection.destroy()
})