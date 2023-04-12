# sit323-737--2023-t1-prac4c

to test the code on your system.

```
localhost:3000/api
```

run this on your local browser/postman

# FOR PASSPORT

to get login token
run your postman
using **POST** type ```console
http://localhost:3000/api/login

````
you'll get the token that you can copy to use for authenication.

now if you run **GET** ```console
http://localhost:3000/api/protected
````

you can see the console with show the error of forbidden because we haven't send authentication token before head.

To get your result you get your api go to **head** and give key as autherization and in value type **Bearer** followed by your generated token.

Same as that you can give your values to calculator and repeat the same steps and your calculator will work if your token is accurate.
