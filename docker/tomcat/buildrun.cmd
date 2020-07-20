
docker kill rmit_tomcat

rem ng build --base-href=/rmitapp/

copy ..\..\backend\target\application-0.0.1-SNAPSHOT.war application.war

if not exist "rmitapp\" (
    mkdir rmitapp
) else (
    del /q rmitapp\*
)
for /D %%p in ("rmitapp\*.*") do rmdir "%%p" /s /q

rem copy ..\..\frontend\dist\* rmitapp
robocopy ..\..\frontend\dist\frontend rmitapp /s /e /njh /njs /np


docker build -t rmit-tomcat-image .
docker run -d --name rmit_tomcat -p 8080:8080 rmit-tomcat-image
