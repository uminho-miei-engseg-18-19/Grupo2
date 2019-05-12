# Aula TP - 06/Mai/2019


# Pergunta 1.1 - *String SQL Injection*

A inserção da *string* `Smith'; select * from user_data;  --` no campo de entrada permite obter todos os dados de todos os utilizadores:

![String SQLi](Pictures/String_SQLi.png)

Por outro lado, o uso da *string* `Smith' OR 1=1 --` também permite obter os dados de todos os utilizadores visto que a condição `1=1` 
se trata de uma tautologia **i.e.** é verdade para qualquer utilizador:

![String SQLi Tautology](Pictures/String_SQLi_T.png)
