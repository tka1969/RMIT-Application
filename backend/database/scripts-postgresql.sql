
create table public.Application (
    app_code varchar(100) not null primary key,
    name varchar(100),
    app_group varchar(100),
    app_type varchar(50),
    description varchar(250)
);

comment on column Application.app_code is 'unique code for application.Must be known by all nodes (or by discovery script)';
comment on column Application.name is 'Human readable name';
comment on column Application.app_group is 'Used for multiple modules that make up one application (UI and backend)';
comment on column Application.app_type is 'type or category (java;php;box;os component;database engin)';
comment on column Application.description is '';



create table public.App_service (
    service_code varchar(100) not null primary key,
    app_code varchar(100),
    name varchar(100),
    type varchar(50),
    sub_type varchar(50),
    description varchar(250)
);


comment on column App_service.app_code is 'link to application table';
comment on column App_service.service_code is 'unique code (inside application) for service. Must be known by all nodes and dependent nodes (or by discovery script)';
comment on column App_service.name is 'Human readable name';
comment on column App_service.type is '(HTTP SAML SSH JDBC ODBC)';
comment on column App_service.sub_type is 'REST SOAP do we need it?';
comment on column App_service.description is '';



