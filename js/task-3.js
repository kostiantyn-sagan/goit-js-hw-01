/*Использование if else
    
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую надо будет записать одно из трех сообщений о результате:
1.const CANCELED_BY_USER = 'Отменено пользователем!'
2.const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
3.const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!

Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword(данные, которые может передать пользователь).Возможны такие варианты:
1.const ADMIN_PASSWORD = 'jqueryismyjam'.При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
2.null.При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
3.Любая строка, кроме ADMIN_PASSWORD.При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.

Используйте if else if else для написания скрипта.*/

const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === null) {
  message = CANCELED_BY_USER;
} else {
  message = ACCESS_DENIED;
}

console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

/*1. Значение переменной 'ADMIN_PASSWORD' должно быть равно 'jqueryismyjam'
2. При значении userPassword = null значение переменной 'message' должно быть равно 'Отменено пользователем!'
3. При значении userPassword = 'jqueryismyjam' значение переменной 'message' должно быть равно 'Добро пожаловать!'
4. При значении userPassword = 'bla' значение переменной 'message' должно быть равно 'Доступ запрещен, неверный пароль!'
5. При значении userPassword = '' значение переменной 'message' должно быть равно 'Доступ запрещен, неверный пароль!'
6. Ожидается использование`if`
7. Ожидается использование`else`*/
