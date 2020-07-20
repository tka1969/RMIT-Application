FROM tomcat:jdk8
LABEL maintainer="tarmo.kalda"

RUN mv /usr/local/tomcat/webapps /usr/local/tomcat/webapps.bak; mv /usr/local/tomcat/webapps.dist /usr/local/tomcat/webapps;

COPY tomcat-users.xml /usr/local/tomcat/conf/
COPY context.xml /usr/local/tomcat/webapps/manager/META-INF/
COPY application.war /usr/local/tomcat/webapps/application.war

COPY rmitapp /usr/local/tomcat/webapps/rmitapp



EXPOSE 8080
CMD ["catalina.sh", "run"]
