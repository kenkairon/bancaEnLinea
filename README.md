EJERCICIO
1.- Lee atentamente el siguiente enunciado:

Te encuentras realizando un DEMO para la utilización de una plataforma bancaría que cumplirá la
misma faceta de un cajero automático, permitiendo girar y depositar dinero y ver el saldo de la
cuenta.
Para poder utilizar esta función, el usuario debe validar su identidad con su identificador y
contraseña. Una vez que se valide la identidad el usuario podrá ver su saldo, realizar giros o
depósitos.

2.- Desarrolla el código necesario para crear la página web considerando los siguientes
requerimientos:

• Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una
clave y un saldo en su cuenta.

• Se debe contar con al menos 3 clientes registrados.

• Cuando se ingrese el identificador y la clave, se revisará si coincide con alguno de los
clientes registrados. Si no coincide, se mostrará un mensaje de error.

Si los datos coinciden, se ingresará a un menú con las opciones disponibles para el cliente.
• Las opciones en el menú serán: Ver saldo, Realizar giro, Realizar depósito y Salir.

• El menú se repite hasta que el usuario seleccione “Salir”.

• Si realiza giros o depósitos, su saldo se modificará.

Si la validación es correcta: tiene que decir Bienvenido a Banca en Línea

El menú se repite hasta que el usuario selecciona “Salir”. Si ingresa una opción distinta a las
indicadas, se envía un mensaje de error y vuelve a mostrar el menú.

Si selecciona la opción “girar”, se debe mostrar el monto actual y el usuario deberá ingresar
el monto deseado a girar. Se debe validar que no gire un valor mayor que el saldo actual.

Luego de realizar el giro, se actualiza el saldo.

Si el usuario selecciona “Realizar depósito”, se muestra el saldo actual (los movimientos en
los saldos son permanentes en la ejecución del programa. Si el usuario hizo un giro
previamente, el saldo actual será el que quedó después del giro) y la opción para registrar
cuando desea depositar.
• El saldo disponible se actualiza constantemente:
