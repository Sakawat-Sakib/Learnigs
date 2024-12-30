#Source : nana 

#DOCKER : 
* Docker is a platform/software that enables developers to build, package, and run applications in lightweight, portable containers that include all dependencies for consistent performance across environments.
* makes developing and deploying applications much easier
* package application into a container

#Before Docker : 
* Assume you build a app where you installed postgreSQL, Redis, bla bla locally
* Now your team member want to run that app on his laptop
* Problem is he need to install all the dependency locally, even same version so this is a problem.
* Because you may have another app to run locally which need postgreSQL version 2 but your app build on version 3.
* But one laptop can't run on multiple version at the same time.

#With Docker :
* We can even run different version of same service i.e postgreSQL
* before only source code and textual instruction was passed to Operation team so that they can install required dependency on the server. But now developer packaged the dependency with source code and send to operation team.

#Operating System : Has two part 1. OS Kernel (Communicate with hardwate ) 2. OS Applications Layer (where application run i.e chrome)

#Flow : Hardware --> OS Kernel --> OS application layer

#Docker vs VM : 
* Docker virtualize only application layer but use the kernel of the host. For that reason we can't run linux based image in windows as linux image required linux kernel. But Docker Desktop solve the problem as it comes with a pre installed lightweigh linux distro. So now it is possible to run linuxed based image on windows.

* VM has own kernel so it virtualize both layer. It doesn't use host kernel. For that reason we installed any OS in VM regardless of host OS

#Docker Image vs Docker Container : 
A Docker image is a lightweight, immutable blueprint for creating containers, while a Docker container is a running instance of an image that includes the application and its dependencies.


