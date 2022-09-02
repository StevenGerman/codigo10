# Primer dia con Git/Github

Lista de comandos de git.

 * Para ver la version de Git

    ```bash
    git --version
    ```


 * Comando para configurar el correo

    ```bash
    git config --global user.email "email"
    ```
 * Comando para configurar el username
    ```bash
    git config --global user.name "username"
    ```
 * Comando para empezar a usar Git (control de versiones) en nuestra carpeta.
    * Este comando solo se usa una vez.
    ```bash
    git init
    ```
 * Para ver es estado de nuestros cambios.
    ```bash
    git status
    ```
 * Agrega los archivos a la memoria de la PC(stage)
    ```bash
    git add
    ```
 * Crea el registro de los cambios realizados.
    ```bash
    git commit -m "comentario"
    ```
    [x]Git log retorna un `id` con este id vamos 
    a poder ver el detalle de los cambios que se hiciero en ese commit. 
 * Comando para poder ver el historial de commits
 
    ```bash
    git log
    ```
 * Para poder ver el detalle del commit usamos

    ```bash
    git show
    ```